/exportT.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 23,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "T",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 16,
          "end": 22
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/exportValue.ts
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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/exportEqualsT.ts
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
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 13,
        "end": 14,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 17,
        "end": 23
      }
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/node_modules/foo/bar.d.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 23,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "T",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 16,
          "end": 22
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/node_modules/foo/index.d.ts
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "raw": "\"./bar\"",
        "value": "./bar"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "T",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
/node_modules/baz/index.d.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 51,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": {
              "type": "Literal",
              "start": 45,
              "end": 50,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 36,
                "end": 37,
                "exported": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"baz\"",
        "value": "baz"
      }
    }
  ],
  "sourceType": "module"
}
```
/reExportValueAsTypeOnly.ts
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
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 38,
        "raw": "\"./exportValue\"",
        "value": "./exportValue"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 14,
          "end": 15,
          "exported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
/user.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 752,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 86,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 85,
        "raw": "\"./exportT\"",
        "value": "./exportT"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 65,
          "end": 66,
          "exported": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "T",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 133,
      "attributes": [],
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
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 106,
          "end": 132,
          "expression": {
            "type": "Literal",
            "start": 114,
            "end": 131,
            "raw": "\"./exportEqualsT\"",
            "value": "./exportEqualsT"
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 159,
      "end": 193,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 177,
        "end": 192,
        "raw": "\"./exportValue\"",
        "value": "./exportValue"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 168,
          "end": 169,
          "exported": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 254,
      "end": 286,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 274,
        "end": 285,
        "raw": "\"./exportT\"",
        "value": "./exportT"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 287,
      "end": 301,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 296,
          "end": 298,
          "exported": {
            "type": "Identifier",
            "start": 296,
            "end": 298,
            "decorators": [],
            "name": "NS",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 296,
            "end": 298,
            "decorators": [],
            "name": "NS",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 364,
      "end": 383,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 371,
        "end": 383,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 376,
          "end": 378,
          "decorators": [],
          "name": "T3",
          "optional": false
        },
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
            "optional": false
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 453,
      "end": 483,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 471,
        "end": 482,
        "raw": "\"./exportT\"",
        "value": "./exportT"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 462,
            "end": 463,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 484,
      "end": 503,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 493,
          "end": 500,
          "exported": {
            "type": "Identifier",
            "start": 498,
            "end": 500,
            "decorators": [],
            "name": "T4",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 570,
      "end": 611,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 599,
        "end": 610,
        "raw": "\"./exportT\"",
        "value": "./exportT"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 589,
            "end": 591,
            "decorators": [],
            "name": "TT",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 612,
      "end": 626,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 621,
          "end": 623,
          "exported": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "decorators": [],
            "name": "TT",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "decorators": [],
            "name": "TT",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 684,
      "end": 736,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 708,
        "end": 735,
        "raw": "\"./reExportValueAsTypeOnly\"",
        "value": "./reExportValueAsTypeOnly"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 698,
            "end": 700,
            "decorators": [],
            "name": "CC",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 737,
      "end": 751,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 746,
          "end": 748,
          "exported": {
            "type": "Identifier",
            "start": 746,
            "end": 748,
            "decorators": [],
            "name": "CC",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 746,
            "end": 748,
            "decorators": [],
            "name": "CC",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
