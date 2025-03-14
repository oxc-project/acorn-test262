__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 543,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 542,
      "body": [
        {
          "type": "TSModuleDeclaration",
          "start": 6,
          "end": 18,
          "body": {
            "type": "TSModuleBlock",
            "start": 15,
            "end": 18,
            "body": []
          },
          "declare": false,
          "global": false,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "kind": "module"
        },
        {
          "type": "ExportNamedDeclaration",
          "start": 23,
          "end": 80,
          "attributes": [],
          "declaration": {
            "type": "TSModuleDeclaration",
            "start": 30,
            "end": 80,
            "body": {
              "type": "TSModuleBlock",
              "start": 42,
              "end": 80,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 52,
                  "end": 74,
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 59,
                    "end": 74,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 71,
                      "end": 74,
                      "body": []
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
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
              "start": 40,
              "end": 41,
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
          "start": 86,
          "end": 103,
          "body": {
            "type": "TSModuleBlock",
            "start": 100,
            "end": 103,
            "body": []
          },
          "declare": false,
          "global": false,
          "id": {
            "type": "TSQualifiedName",
            "start": 96,
            "end": 99,
            "left": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "Q",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "kind": "namespace"
        },
        {
          "type": "TSModuleDeclaration",
          "start": 109,
          "end": 142,
          "kind": "module",
          "body": {
            "type": "TSModuleBlock",
            "start": 134,
            "end": 142,
            "body": []
          },
          "declare": true,
          "global": false,
          "id": {
            "type": "Literal",
            "start": 124,
            "end": 133,
            "raw": "\"ambient\"",
            "value": "ambient"
          }
        },
        {
          "type": "TSExportAssignment",
          "start": 148,
          "end": 159,
          "expression": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "decorators": [],
            "name": "M",
            "optional": false
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 165,
          "end": 171,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 169,
              "end": 170,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
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
          "start": 176,
          "end": 194,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 191,
            "end": 194,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "params": []
        },
        {
          "type": "ExportAllDeclaration",
          "start": 199,
          "end": 223,
          "attributes": [],
          "exported": null,
          "exportKind": "value",
          "source": {
            "type": "Literal",
            "start": 213,
            "end": 222,
            "raw": "\"ambient\"",
            "value": "ambient"
          }
        },
        {
          "type": "ExportNamedDeclaration",
          "start": 228,
          "end": 243,
          "attributes": [],
          "declaration": null,
          "exportKind": "value",
          "source": null,
          "specifiers": [
            {
              "type": "ExportSpecifier",
              "start": 237,
              "end": 240,
              "exported": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "exportKind": "value",
              "local": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          ]
        },
        {
          "type": "ExportNamedDeclaration",
          "start": 248,
          "end": 283,
          "attributes": [],
          "declaration": null,
          "exportKind": "value",
          "source": {
            "type": "Literal",
            "start": 273,
            "end": 282,
            "raw": "\"ambient\"",
            "value": "ambient"
          },
          "specifiers": [
            {
              "type": "ExportSpecifier",
              "start": 257,
              "end": 265,
              "exported": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "exportKind": "value",
              "local": {
                "type": "Identifier",
                "start": 257,
                "end": 260,
                "decorators": [],
                "name": "baz",
                "optional": false
              }
            }
          ]
        },
        {
          "type": "ExportDefaultDeclaration",
          "start": 288,
          "end": 305,
          "declaration": {
            "type": "Identifier",
            "start": 303,
            "end": 304,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportDefaultDeclaration",
          "start": 310,
          "end": 336,
          "declaration": {
            "type": "ClassDeclaration",
            "start": 325,
            "end": 336,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 333,
              "end": 336,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
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
          "start": 341,
          "end": 366,
          "attributes": [],
          "declaration": {
            "type": "FunctionDeclaration",
            "start": 348,
            "end": 366,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 363,
              "end": 366,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 357,
              "end": 360,
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
          "start": 371,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 379,
            "decorators": [],
            "name": "I",
            "optional": false
          },
          "importKind": "value",
          "moduleReference": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "M",
            "optional": false
          }
        },
        {
          "type": "TSImportEqualsDeclaration",
          "start": 389,
          "end": 416,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 398,
            "decorators": [],
            "name": "I2",
            "optional": false
          },
          "importKind": "value",
          "moduleReference": {
            "type": "TSExternalModuleReference",
            "start": 401,
            "end": 415,
            "expression": {
              "type": "Literal",
              "start": 409,
              "end": 414,
              "raw": "\"foo\"",
              "value": "foo"
            }
          }
        },
        {
          "type": "ImportDeclaration",
          "start": 421,
          "end": 452,
          "attributes": [],
          "importKind": "value",
          "source": {
            "type": "Literal",
            "start": 442,
            "end": 451,
            "raw": "\"ambient\"",
            "value": "ambient"
          },
          "specifiers": [
            {
              "type": "ImportNamespaceSpecifier",
              "start": 428,
              "end": 436,
              "local": {
                "type": "Identifier",
                "start": 433,
                "end": 436,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          ]
        },
        {
          "type": "ImportDeclaration",
          "start": 457,
          "end": 483,
          "attributes": [],
          "importKind": "value",
          "source": {
            "type": "Literal",
            "start": 473,
            "end": 482,
            "raw": "\"ambient\"",
            "value": "ambient"
          },
          "specifiers": [
            {
              "type": "ImportDefaultSpecifier",
              "start": 464,
              "end": 467,
              "local": {
                "type": "Identifier",
                "start": 464,
                "end": 467,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          ]
        },
        {
          "type": "ImportDeclaration",
          "start": 488,
          "end": 518,
          "attributes": [],
          "importKind": "value",
          "source": {
            "type": "Literal",
            "start": 508,
            "end": 517,
            "raw": "\"ambient\"",
            "value": "ambient"
          },
          "specifiers": [
            {
              "type": "ImportSpecifier",
              "start": 497,
              "end": 500,
              "imported": {
                "type": "Identifier",
                "start": 497,
                "end": 500,
                "decorators": [],
                "name": "baz",
                "optional": false
              },
              "importKind": "value",
              "local": {
                "type": "Identifier",
                "start": 497,
                "end": 500,
                "decorators": [],
                "name": "baz",
                "optional": false
              }
            }
          ]
        },
        {
          "type": "ImportDeclaration",
          "start": 523,
          "end": 540,
          "attributes": [],
          "importKind": "value",
          "source": {
            "type": "Literal",
            "start": 530,
            "end": 539,
            "raw": "\"ambient\"",
            "value": "ambient"
          },
          "specifiers": []
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
