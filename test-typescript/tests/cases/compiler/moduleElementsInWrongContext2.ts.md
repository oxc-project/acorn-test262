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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 559,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 23,
            "end": 35,
            "body": {
              "type": "TSModuleBlock",
              "start": 32,
              "end": 35,
              "body": []
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 97,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 47,
              "end": 97,
              "body": {
                "type": "TSModuleBlock",
                "start": 59,
                "end": 97,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 69,
                    "end": 91,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 76,
                      "end": 91,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 88,
                        "end": 91,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "kind": "namespace"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 103,
            "end": 120,
            "body": {
              "type": "TSModuleBlock",
              "start": 117,
              "end": 120,
              "body": []
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "TSQualifiedName",
              "start": 113,
              "end": 116,
              "left": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "Q",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "kind": "namespace"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 126,
            "end": 159,
            "kind": "module",
            "body": {
              "type": "TSModuleBlock",
              "start": 151,
              "end": 159,
              "body": []
            },
            "declare": true,
            "global": false,
            "id": {
              "type": "Literal",
              "start": 141,
              "end": 150,
              "raw": "\"ambient\"",
              "value": "ambient"
            }
          },
          {
            "type": "TSExportAssignment",
            "start": 165,
            "end": 176,
            "expression": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "M",
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 193,
            "end": 211,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 208,
              "end": 211,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 205,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ExportAllDeclaration",
            "start": 216,
            "end": 240,
            "attributes": [],
            "exported": null,
            "exportKind": "value",
            "source": {
              "type": "Literal",
              "start": 230,
              "end": 239,
              "raw": "\"ambient\"",
              "value": "ambient"
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 245,
            "end": 260,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 254,
                "end": 257,
                "exported": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 257,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 257,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 265,
            "end": 300,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": {
              "type": "Literal",
              "start": 290,
              "end": 299,
              "raw": "\"ambient\"",
              "value": "ambient"
            },
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 274,
                "end": 282,
                "exported": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 277,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 305,
            "end": 322,
            "declaration": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "decorators": [],
              "name": "v",
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
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 350,
                "end": 353,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 348,
                "end": 349,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 358,
            "end": 383,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 365,
              "end": 383,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 380,
                "end": 383,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 374,
                "end": 377,
                "decorators": [],
                "name": "bee",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 388,
            "end": 401,
            "id": {
              "type": "Identifier",
              "start": 395,
              "end": 396,
              "decorators": [],
              "name": "I",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "decorators": [],
              "name": "M",
              "optional": false
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 406,
            "end": 433,
            "id": {
              "type": "Identifier",
              "start": 413,
              "end": 415,
              "decorators": [],
              "name": "I2",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 418,
              "end": 432,
              "expression": {
                "type": "Literal",
                "start": 426,
                "end": 431,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          },
          {
            "type": "ImportDeclaration",
            "start": 438,
            "end": 469,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 459,
              "end": 468,
              "raw": "\"ambient\"",
              "value": "ambient"
            },
            "specifiers": [
              {
                "type": "ImportNamespaceSpecifier",
                "start": 445,
                "end": 453,
                "local": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 453,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ImportDeclaration",
            "start": 474,
            "end": 500,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 490,
              "end": 499,
              "raw": "\"ambient\"",
              "value": "ambient"
            },
            "specifiers": [
              {
                "type": "ImportDefaultSpecifier",
                "start": 481,
                "end": 484,
                "local": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 484,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ImportDeclaration",
            "start": 505,
            "end": 535,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 525,
              "end": 534,
              "raw": "\"ambient\"",
              "value": "ambient"
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 514,
                "end": 517,
                "imported": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 517,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 517,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ImportDeclaration",
            "start": 540,
            "end": 557,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 547,
              "end": 556,
              "raw": "\"ambient\"",
              "value": "ambient"
            },
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "blah",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
