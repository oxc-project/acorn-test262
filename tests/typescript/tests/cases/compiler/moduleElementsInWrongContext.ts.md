__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 542,
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
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
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
                  "exportKind": "type",
                  "attributes": []
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          "specifiers": [],
          "source": null,
          "exportKind": "value",
          "attributes": []
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
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 165,
          "end": 171,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 169,
              "end": 170,
              "id": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null,
              "definite": false
            }
          ],
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 191,
            "end": 194,
            "body": []
          },
          "expression": false
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "exported": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "exportKind": "value"
            }
          ],
          "source": null,
          "exportKind": "value",
          "attributes": []
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
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              },
              "exported": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
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
          "exportKind": "value",
          "attributes": []
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
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 333,
              "end": 336,
              "body": []
            },
            "abstract": false,
            "declare": false
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
              "decorators": [],
              "name": "bee",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 363,
              "end": 366,
              "body": []
            },
            "expression": false
          },
          "specifiers": [],
          "source": null,
          "exportKind": "value",
          "attributes": []
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
            "optional": false,
            "typeAnnotation": null
          },
          "moduleReference": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
          "phase": null,
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
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
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
          "phase": null,
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
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              },
              "local": {
                "type": "Identifier",
                "start": 497,
                "end": 500,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
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
          "phase": null,
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
          "phase": null,
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
