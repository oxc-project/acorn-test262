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
              "start": 30,
              "end": 31
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 32,
              "end": 35
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 23,
            "end": 35
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
                "start": 57,
                "end": 58
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
                        "start": 86,
                        "end": 87
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 88,
                        "end": 91
                      },
                      "declare": false,
                      "start": 76,
                      "end": 91
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 69,
                    "end": 91
                  }
                ],
                "start": 59,
                "end": 97
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 47,
              "end": 97
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 40,
            "end": 97
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
                "start": 113,
                "end": 114
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 116
              },
              "start": 113,
              "end": 116
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 117,
              "end": 120
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 103,
            "end": 120
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 141,
              "end": 150
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 151,
              "end": 159
            },
            "kind": "module",
            "declare": true,
            "global": false,
            "start": 126,
            "end": 159
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "start": 165,
            "end": 176
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
                  "start": 186,
                  "end": 187
                },
                "init": null,
                "definite": false,
                "start": 186,
                "end": 187
              }
            ],
            "declare": false,
            "start": 182,
            "end": 188
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 205
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
              "start": 208,
              "end": 211
            },
            "expression": false,
            "start": 193,
            "end": 211
          },
          {
            "type": "ExportAllDeclaration",
            "exported": null,
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 230,
              "end": 239
            },
            "attributes": [],
            "exportKind": "value",
            "start": 216,
            "end": 240
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
                  "start": 254,
                  "end": 257
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 257
                },
                "exportKind": "value",
                "start": 254,
                "end": 257
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 245,
            "end": 260
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
                  "start": 274,
                  "end": 277
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "exportKind": "value",
                "start": 274,
                "end": 282
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 290,
              "end": 299
            },
            "exportKind": "value",
            "attributes": [],
            "start": 265,
            "end": 300
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "exportKind": "value",
            "start": 305,
            "end": 322
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
                "start": 348,
                "end": 349
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 350,
                "end": 353
              },
              "abstract": false,
              "declare": false,
              "start": 342,
              "end": 353
            },
            "exportKind": "value",
            "start": 327,
            "end": 353
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
                "start": 374,
                "end": 377
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
                "start": 380,
                "end": 383
              },
              "expression": false,
              "start": 365,
              "end": 383
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 358,
            "end": 383
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 396
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 400
            },
            "importKind": "value",
            "start": 388,
            "end": 401
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 415
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 426,
                "end": 431
              },
              "start": 418,
              "end": 432
            },
            "importKind": "value",
            "start": 406,
            "end": 433
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
                  "start": 450,
                  "end": 453
                },
                "start": 445,
                "end": 453
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 459,
              "end": 468
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 438,
            "end": 469
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
                  "start": 481,
                  "end": 484
                },
                "start": 481,
                "end": 484
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 490,
              "end": 499
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 474,
            "end": 500
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
                  "start": 514,
                  "end": 517
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 517
                },
                "importKind": "value",
                "start": 514,
                "end": 517
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 525,
              "end": 534
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 505,
            "end": 535
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 547,
              "end": 556
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 540,
            "end": 557
          }
        ],
        "start": 17,
        "end": 559
      },
      "expression": false,
      "start": 0,
      "end": 559
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 559
}
```
