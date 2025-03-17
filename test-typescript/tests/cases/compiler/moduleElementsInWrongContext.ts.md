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
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "body": {
            "type": "TSModuleBlock",
            "start": 15,
            "end": 18,
            "body": []
          },
          "kind": "module",
          "declare": false,
          "global": false
        },
        {
          "type": "ExportNamedDeclaration",
          "start": 23,
          "end": 80,
          "declaration": {
            "type": "TSModuleDeclaration",
            "start": 30,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 42,
              "end": 80,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 52,
                  "end": 74,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 59,
                    "end": 74,
                    "id": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "name": "I",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 71,
                      "end": 74,
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
          "start": 86,
          "end": 103,
          "id": {
            "type": "TSQualifiedName",
            "start": 96,
            "end": 99,
            "left": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "body": {
            "type": "TSModuleBlock",
            "start": 100,
            "end": 103,
            "body": []
          },
          "kind": "namespace",
          "declare": false,
          "global": false
        },
        {
          "type": "TSModuleDeclaration",
          "start": 109,
          "end": 142,
          "id": {
            "type": "Literal",
            "start": 124,
            "end": 133,
            "value": "ambient",
            "raw": "\"ambient\""
          },
          "body": {
            "type": "TSModuleBlock",
            "start": 134,
            "end": 142,
            "body": []
          },
          "kind": "module",
          "declare": true,
          "global": false
        },
        {
          "type": "TSExportAssignment",
          "start": 148,
          "end": 159,
          "expression": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
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
              "id": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
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
          "start": 176,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
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
            "start": 191,
            "end": 194,
            "body": []
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        },
        {
          "type": "ExportAllDeclaration",
          "start": 199,
          "end": 223,
          "exported": null,
          "source": {
            "type": "Literal",
            "start": 213,
            "end": 222,
            "value": "ambient",
            "raw": "\"ambient\""
          },
          "attributes": [],
          "exportKind": "value"
        },
        {
          "type": "ExportNamedDeclaration",
          "start": 228,
          "end": 243,
          "declaration": null,
          "specifiers": [
            {
              "type": "ExportSpecifier",
              "start": 237,
              "end": 240,
              "local": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "exported": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
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
          "start": 248,
          "end": 283,
          "declaration": null,
          "specifiers": [
            {
              "type": "ExportSpecifier",
              "start": 257,
              "end": 265,
              "local": {
                "type": "Identifier",
                "start": 257,
                "end": 260,
                "name": "baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "exported": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
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
            "start": 273,
            "end": 282,
            "value": "ambient",
            "raw": "\"ambient\""
          },
          "attributes": [],
          "exportKind": "value"
        },
        {
          "type": "ExportDefaultDeclaration",
          "start": 288,
          "end": 305,
          "declaration": {
            "type": "Identifier",
            "start": 303,
            "end": 304,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
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
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 333,
              "end": 336,
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
          "start": 341,
          "end": 366,
          "declaration": {
            "type": "FunctionDeclaration",
            "start": 348,
            "end": 366,
            "id": {
              "type": "Identifier",
              "start": 357,
              "end": 360,
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
              "start": 363,
              "end": 366,
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
          "start": 371,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 379,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "moduleReference": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "TSImportEqualsDeclaration",
          "start": 389,
          "end": 416,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 398,
            "name": "I2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "moduleReference": {
            "type": "TSExternalModuleReference",
            "start": 401,
            "end": 415,
            "expression": {
              "type": "Literal",
              "start": 409,
              "end": 414,
              "value": "foo",
              "raw": "\"foo\""
            }
          },
          "importKind": "value"
        },
        {
          "type": "ImportDeclaration",
          "start": 421,
          "end": 452,
          "specifiers": [
            {
              "type": "ImportNamespaceSpecifier",
              "start": 428,
              "end": 436,
              "local": {
                "type": "Identifier",
                "start": 433,
                "end": 436,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "source": {
            "type": "Literal",
            "start": 442,
            "end": 451,
            "value": "ambient",
            "raw": "\"ambient\""
          },
          "attributes": [],
          "importKind": "value"
        },
        {
          "type": "ImportDeclaration",
          "start": 457,
          "end": 483,
          "specifiers": [
            {
              "type": "ImportDefaultSpecifier",
              "start": 464,
              "end": 467,
              "local": {
                "type": "Identifier",
                "start": 464,
                "end": 467,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "source": {
            "type": "Literal",
            "start": 473,
            "end": 482,
            "value": "ambient",
            "raw": "\"ambient\""
          },
          "attributes": [],
          "importKind": "value"
        },
        {
          "type": "ImportDeclaration",
          "start": 488,
          "end": 518,
          "specifiers": [
            {
              "type": "ImportSpecifier",
              "start": 497,
              "end": 500,
              "imported": {
                "type": "Identifier",
                "start": 497,
                "end": 500,
                "name": "baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "local": {
                "type": "Identifier",
                "start": 497,
                "end": 500,
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
            "start": 508,
            "end": 517,
            "value": "ambient",
            "raw": "\"ambient\""
          },
          "attributes": [],
          "importKind": "value"
        },
        {
          "type": "ImportDeclaration",
          "start": 523,
          "end": 540,
          "specifiers": [],
          "source": {
            "type": "Literal",
            "start": 530,
            "end": 539,
            "value": "ambient",
            "raw": "\"ambient\""
          },
          "attributes": [],
          "importKind": "value"
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
