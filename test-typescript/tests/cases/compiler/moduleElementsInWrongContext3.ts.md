__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 651,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 651,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 651,
        "body": [
          {
            "type": "BlockStatement",
            "start": 15,
            "end": 649,
            "body": [
              {
                "type": "TSModuleDeclaration",
                "start": 25,
                "end": 37,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 34,
                  "end": 37,
                  "body": []
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                },
                "kind": "module"
              },
              {
                "type": "ExportNamedDeclaration",
                "start": 46,
                "end": 111,
                "attributes": [],
                "declaration": {
                  "type": "TSModuleDeclaration",
                  "start": 53,
                  "end": 111,
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 65,
                    "end": 111,
                    "body": [
                      {
                        "type": "ExportNamedDeclaration",
                        "start": 79,
                        "end": 101,
                        "attributes": [],
                        "declaration": {
                          "type": "TSInterfaceDeclaration",
                          "start": 86,
                          "end": 101,
                          "body": {
                            "type": "TSInterfaceBody",
                            "start": 98,
                            "end": 101,
                            "body": []
                          },
                          "declare": false,
                          "extends": [],
                          "id": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 97,
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
                    "start": 63,
                    "end": 64,
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
                "start": 121,
                "end": 138,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 135,
                  "end": 138,
                  "body": []
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "TSQualifiedName",
                  "start": 131,
                  "end": 134,
                  "left": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "Q",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "kind": "namespace"
              },
              {
                "type": "TSModuleDeclaration",
                "start": 148,
                "end": 185,
                "kind": "module",
                "body": {
                  "type": "TSModuleBlock",
                  "start": 173,
                  "end": 185,
                  "body": []
                },
                "declare": true,
                "global": false,
                "id": {
                  "type": "Literal",
                  "start": 163,
                  "end": 172,
                  "raw": "\"ambient\"",
                  "value": "ambient"
                }
              },
              {
                "type": "TSExportAssignment",
                "start": 195,
                "end": 206,
                "expression": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                }
              },
              {
                "type": "VariableDeclaration",
                "start": 216,
                "end": 222,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 220,
                    "end": 221,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 221,
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
                "start": 231,
                "end": 249,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 246,
                  "end": 249,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 243,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "params": []
              },
              {
                "type": "ExportAllDeclaration",
                "start": 258,
                "end": 282,
                "attributes": [],
                "exported": null,
                "exportKind": "value",
                "source": {
                  "type": "Literal",
                  "start": 272,
                  "end": 281,
                  "raw": "\"ambient\"",
                  "value": "ambient"
                }
              },
              {
                "type": "ExportNamedDeclaration",
                "start": 291,
                "end": 306,
                "attributes": [],
                "declaration": null,
                "exportKind": "value",
                "source": null,
                "specifiers": [
                  {
                    "type": "ExportSpecifier",
                    "start": 300,
                    "end": 303,
                    "exported": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 303,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "exportKind": "value",
                    "local": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 303,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "ExportNamedDeclaration",
                "start": 315,
                "end": 350,
                "attributes": [],
                "declaration": null,
                "exportKind": "value",
                "source": {
                  "type": "Literal",
                  "start": 340,
                  "end": 349,
                  "raw": "\"ambient\"",
                  "value": "ambient"
                },
                "specifiers": [
                  {
                    "type": "ExportSpecifier",
                    "start": 324,
                    "end": 332,
                    "exported": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 332,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "exportKind": "value",
                    "local": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 327,
                      "decorators": [],
                      "name": "baz",
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "ExportDefaultDeclaration",
                "start": 359,
                "end": 376,
                "declaration": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 375,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "exportKind": "value"
              },
              {
                "type": "ExportDefaultDeclaration",
                "start": 385,
                "end": 411,
                "declaration": {
                  "type": "ClassDeclaration",
                  "start": 400,
                  "end": 411,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 408,
                    "end": 411,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
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
                "start": 420,
                "end": 445,
                "attributes": [],
                "declaration": {
                  "type": "FunctionDeclaration",
                  "start": 427,
                  "end": 445,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 442,
                    "end": 445,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 439,
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
                "start": 454,
                "end": 467,
                "id": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 462,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                },
                "importKind": "value",
                "moduleReference": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 466,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                }
              },
              {
                "type": "TSImportEqualsDeclaration",
                "start": 476,
                "end": 503,
                "id": {
                  "type": "Identifier",
                  "start": 483,
                  "end": 485,
                  "decorators": [],
                  "name": "I2",
                  "optional": false
                },
                "importKind": "value",
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "start": 488,
                  "end": 502,
                  "expression": {
                    "type": "Literal",
                    "start": 496,
                    "end": 501,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                }
              },
              {
                "type": "ImportDeclaration",
                "start": 512,
                "end": 543,
                "attributes": [],
                "importKind": "value",
                "source": {
                  "type": "Literal",
                  "start": 533,
                  "end": 542,
                  "raw": "\"ambient\"",
                  "value": "ambient"
                },
                "specifiers": [
                  {
                    "type": "ImportNamespaceSpecifier",
                    "start": 519,
                    "end": 527,
                    "local": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 527,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "ImportDeclaration",
                "start": 552,
                "end": 578,
                "attributes": [],
                "importKind": "value",
                "source": {
                  "type": "Literal",
                  "start": 568,
                  "end": 577,
                  "raw": "\"ambient\"",
                  "value": "ambient"
                },
                "specifiers": [
                  {
                    "type": "ImportDefaultSpecifier",
                    "start": 559,
                    "end": 562,
                    "local": {
                      "type": "Identifier",
                      "start": 559,
                      "end": 562,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "ImportDeclaration",
                "start": 587,
                "end": 617,
                "attributes": [],
                "importKind": "value",
                "source": {
                  "type": "Literal",
                  "start": 607,
                  "end": 616,
                  "raw": "\"ambient\"",
                  "value": "ambient"
                },
                "specifiers": [
                  {
                    "type": "ImportSpecifier",
                    "start": 596,
                    "end": 599,
                    "imported": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 599,
                      "decorators": [],
                      "name": "baz",
                      "optional": false
                    },
                    "importKind": "value",
                    "local": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 599,
                      "decorators": [],
                      "name": "baz",
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "ImportDeclaration",
                "start": 626,
                "end": 643,
                "attributes": [],
                "importKind": "value",
                "source": {
                  "type": "Literal",
                  "start": 633,
                  "end": 642,
                  "raw": "\"ambient\"",
                  "value": "ambient"
                },
                "specifiers": []
              }
            ]
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "P",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
