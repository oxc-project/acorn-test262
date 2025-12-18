__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 28,
    "end": 37,
    "range": [
      28,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 59,
    "end": 68,
    "range": [
      59,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 92,
    "end": 101,
    "range": [
      92,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 127,
    "end": 136,
    "range": [
      127,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 154,
    "end": 161,
    "range": [
      154,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 169,
    "end": 178,
    "range": [
      169,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 237,
    "end": 245,
    "range": [
      237,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 246,
    "end": 249,
    "range": [
      246,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 273,
    "end": 277,
    "range": [
      273,
      277
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 278,
    "end": 287,
    "range": [
      278,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 297,
    "end": 303,
    "range": [
      297,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 306,
    "end": 309,
    "range": [
      306,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 321,
    "end": 327,
    "range": [
      321,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 330,
    "end": 333,
    "range": [
      330,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 341,
    "end": 345,
    "range": [
      341,
      345
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 346,
    "end": 355,
    "range": [
      346,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 365,
    "end": 371,
    "range": [
      365,
      371
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 372,
    "end": 379,
    "range": [
      372,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 391,
    "end": 397,
    "range": [
      391,
      397
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 398,
    "end": 405,
    "range": [
      398,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 406,
    "end": 411,
    "range": [
      406,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 426,
    "end": 432,
    "range": [
      426,
      432
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 433,
    "end": 441,
    "range": [
      433,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "bee",
    "start": 442,
    "end": 445,
    "range": [
      442,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 460,
    "end": 466,
    "range": [
      460,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 482,
    "end": 488,
    "range": [
      482,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 489,
    "end": 491,
    "range": [
      489,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 494,
    "end": 501,
    "range": [
      494,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 502,
    "end": 507,
    "range": [
      502,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 518,
    "end": 524,
    "range": [
      518,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 527,
    "end": 529,
    "range": [
      527,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 530,
    "end": 533,
    "range": [
      530,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 534,
    "end": 538,
    "range": [
      534,
      538
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 539,
    "end": 548,
    "range": [
      539,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 558,
    "end": 564,
    "range": [
      558,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 565,
    "end": 568,
    "range": [
      565,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 569,
    "end": 573,
    "range": [
      569,
      573
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 574,
    "end": 583,
    "range": [
      574,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 593,
    "end": 599,
    "range": [
      593,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 602,
    "end": 605,
    "range": [
      602,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 608,
    "end": 612,
    "range": [
      608,
      612
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 613,
    "end": 622,
    "range": [
      613,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 632,
    "end": 638,
    "range": [
      632,
      638
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 639,
    "end": 648,
    "range": [
      639,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  }
]
```
