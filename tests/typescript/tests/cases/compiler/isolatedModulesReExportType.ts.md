__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 23,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 16,
          "end": 22
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
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
          "start": 15,
          "end": 17,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 13,
        "end": 14,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 17,
        "end": 23
      },
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 25,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 23,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 16,
          "end": 22
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "value": "./bar",
        "raw": "\"./bar\""
      },
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 70,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "baz",
        "raw": "\"baz\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 51,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 36,
                "end": 37,
                "local": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exported": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 45,
              "end": 50,
              "value": "foo",
              "raw": "\"foo\""
            },
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 14,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 38,
        "value": "./exportValue",
        "raw": "\"./exportValue\""
      },
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 751,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 86,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 65,
          "end": 66,
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 85,
        "value": "./exportT",
        "raw": "\"./exportT\""
      },
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 133,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 94,
        "end": 133,
        "id": {
          "type": "Identifier",
          "start": 101,
          "end": 103,
          "decorators": [],
          "name": "T2",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 106,
          "end": 132,
          "expression": {
            "type": "Literal",
            "start": 114,
            "end": 131,
            "value": "./exportEqualsT",
            "raw": "\"./exportEqualsT\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 159,
      "end": 193,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 168,
          "end": 169,
          "local": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 177,
        "end": 192,
        "value": "./exportValue",
        "raw": "\"./exportValue\""
      },
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 254,
      "end": 286,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 261,
          "end": 268,
          "local": {
            "type": "Identifier",
            "start": 266,
            "end": 268,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 274,
        "end": 285,
        "value": "./exportT",
        "raw": "\"./exportT\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 287,
      "end": 301,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 296,
          "end": 298,
          "local": {
            "type": "Identifier",
            "start": 296,
            "end": 298,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 296,
            "end": 298,
            "decorators": [],
            "name": "NS",
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
      "start": 364,
      "end": 383,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 371,
        "end": 383,
        "id": {
          "type": "Identifier",
          "start": 376,
          "end": 378,
          "decorators": [],
          "name": "T3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 381,
          "end": 382,
          "typeName": {
            "type": "Identifier",
            "start": 381,
            "end": 382,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 453,
      "end": 483,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 462,
          "end": 463,
          "imported": {
            "type": "Identifier",
            "start": 462,
            "end": 463,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 462,
            "end": 463,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 471,
        "end": 482,
        "value": "./exportT",
        "raw": "\"./exportT\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 484,
      "end": 503,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 493,
          "end": 500,
          "local": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 498,
            "end": 500,
            "decorators": [],
            "name": "T4",
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
      "type": "ImportDeclaration",
      "start": 570,
      "end": 611,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 584,
          "end": 591,
          "imported": {
            "type": "Identifier",
            "start": 584,
            "end": 585,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 589,
            "end": 591,
            "decorators": [],
            "name": "TT",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 599,
        "end": 610,
        "value": "./exportT",
        "raw": "\"./exportT\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 612,
      "end": 626,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 621,
          "end": 623,
          "local": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "decorators": [],
            "name": "TT",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "decorators": [],
            "name": "TT",
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
      "type": "ImportDeclaration",
      "start": 684,
      "end": 736,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 693,
          "end": 700,
          "imported": {
            "type": "Identifier",
            "start": 693,
            "end": 694,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 698,
            "end": 700,
            "decorators": [],
            "name": "CC",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 708,
        "end": 735,
        "value": "./reExportValueAsTypeOnly",
        "raw": "\"./reExportValueAsTypeOnly\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 737,
      "end": 751,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 746,
          "end": 748,
          "local": {
            "type": "Identifier",
            "start": 746,
            "end": 748,
            "decorators": [],
            "name": "CC",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 746,
            "end": 748,
            "decorators": [],
            "name": "CC",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
