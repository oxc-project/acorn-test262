__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 332,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 44,
        "raw": "\"./exportAny.cjs\"",
        "value": "./exportAny.cjs",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "exportAny",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 46,
      "end": 99,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 77,
        "end": 98,
        "raw": "\"./exportUnknown.cjs\"",
        "value": "./exportUnknown.cjs",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 53,
          "end": 71,
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 71,
            "decorators": [],
            "name": "exportUnknown",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 100,
      "end": 151,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 130,
        "end": 150,
        "raw": "\"./exportSymbol.cjs\"",
        "value": "./exportSymbol.cjs",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 107,
          "end": 124,
          "local": {
            "type": "Identifier",
            "start": 112,
            "end": 124,
            "decorators": [],
            "name": "exportSymbol",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 153,
      "end": 207,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 189,
        "end": 206,
        "raw": "\"./exportAny.cjs\"",
        "value": "./exportAny.cjs",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 165,
          "end": 183,
          "local": {
            "type": "Identifier",
            "start": 170,
            "end": 183,
            "decorators": [],
            "name": "exportAnyType",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 208,
      "end": 270,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 248,
        "end": 269,
        "raw": "\"./exportUnknown.cjs\"",
        "value": "./exportUnknown.cjs",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 220,
          "end": 242,
          "local": {
            "type": "Identifier",
            "start": 225,
            "end": 242,
            "decorators": [],
            "name": "exportUnknownType",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 271,
      "end": 331,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 310,
        "end": 330,
        "raw": "\"./exportSymbol.cjs\"",
        "value": "./exportSymbol.cjs",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 283,
          "end": 304,
          "local": {
            "type": "Identifier",
            "start": 288,
            "end": 304,
            "decorators": [],
            "name": "exportSymbolType",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 21,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSExportAssignment",
      "start": 23,
      "end": 35,
      "expression": {
        "type": "Identifier",
        "start": 32,
        "end": 34,
        "decorators": [],
        "name": "__",
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
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 25,
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 25,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 18,
                "end": 25
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSExportAssignment",
      "start": 27,
      "end": 39,
      "expression": {
        "type": "Identifier",
        "start": 36,
        "end": 38,
        "decorators": [],
        "name": "__",
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
  "end": 38,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 18,
                "end": 24
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSExportAssignment",
      "start": 26,
      "end": 38,
      "expression": {
        "type": "Identifier",
        "start": 35,
        "end": 37,
        "decorators": [],
        "name": "__",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
