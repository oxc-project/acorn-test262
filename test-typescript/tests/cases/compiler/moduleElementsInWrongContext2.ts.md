__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 560,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "blah",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 559,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 23,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 32,
              "end": 35,
              "body": []
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 97,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 47,
              "end": 97,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 59,
                "end": 97,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 69,
                    "end": 91,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 76,
                      "end": 91,
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 88,
                        "end": 91,
                        "body": []
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 103,
            "end": 120,
            "id": {
              "type": "TSQualifiedName",
              "start": 113,
              "end": 116,
              "left": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "name": "Q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 117,
              "end": 120,
              "body": []
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 126,
            "end": 159,
            "id": {
              "type": "Literal",
              "start": 141,
              "end": 150,
              "value": "ambient",
              "raw": "\"ambient\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 151,
              "end": 159,
              "body": []
            },
            "kind": "module",
            "declare": true,
            "global": false
          },
          {
            "type": "TSExportAssignment",
            "start": 165,
            "end": 176,
            "expression": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 182,
            "end": 188,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 186,
                "end": 187,
                "id": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 193,
            "end": 211,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 205,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 208,
              "end": 211,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExportAllDeclaration",
            "start": 216,
            "end": 240,
            "exported": null,
            "source": {
              "type": "Literal",
              "start": 230,
              "end": 239,
              "value": "ambient",
              "raw": "\"ambient\""
            },
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 245,
            "end": 260,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 254,
                "end": 257,
                "local": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 257,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 257,
                  "name": "foo",
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 265,
            "end": 300,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 274,
                "end": 282,
                "local": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 277,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 290,
              "end": 299,
              "value": "ambient",
              "raw": "\"ambient\""
            },
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 305,
            "end": 322,
            "declaration": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "exportKind": "value"
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 327,
            "end": 353,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 342,
              "end": 353,
              "id": {
                "type": "Identifier",
                "start": 348,
                "end": 349,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 350,
                "end": 353,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 358,
            "end": 383,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 365,
              "end": 383,
              "id": {
                "type": "Identifier",
                "start": 374,
                "end": 377,
                "name": "bee",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 380,
                "end": 383,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 388,
            "end": 401,
            "id": {
              "type": "Identifier",
              "start": 395,
              "end": 396,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 406,
            "end": 433,
            "id": {
              "type": "Identifier",
              "start": 413,
              "end": 415,
              "name": "I2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 418,
              "end": 432,
              "expression": {
                "type": "Literal",
                "start": 426,
                "end": 431,
                "value": "foo",
                "raw": "\"foo\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ImportDeclaration",
            "start": 438,
            "end": 469,
            "specifiers": [
              {
                "type": "ImportNamespaceSpecifier",
                "start": 445,
                "end": 453,
                "local": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 453,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "source": {
              "type": "Literal",
              "start": 459,
              "end": 468,
              "value": "ambient",
              "raw": "\"ambient\""
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "ImportDeclaration",
            "start": 474,
            "end": 500,
            "specifiers": [
              {
                "type": "ImportDefaultSpecifier",
                "start": 481,
                "end": 484,
                "local": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 484,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "source": {
              "type": "Literal",
              "start": 490,
              "end": 499,
              "value": "ambient",
              "raw": "\"ambient\""
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "ImportDeclaration",
            "start": 505,
            "end": 535,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 514,
                "end": 517,
                "imported": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 517,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "local": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 517,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 525,
              "end": 534,
              "value": "ambient",
              "raw": "\"ambient\""
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "ImportDeclaration",
            "start": 540,
            "end": 557,
            "specifiers": [],
            "source": {
              "type": "Literal",
              "start": 547,
              "end": 556,
              "value": "ambient",
              "raw": "\"ambient\""
            },
            "attributes": [],
            "importKind": "value"
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
