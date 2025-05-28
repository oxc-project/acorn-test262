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
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 44,
        "value": "./exportAny.cjs",
        "raw": "\"./exportAny.cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 46,
      "end": 99,
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
      ],
      "source": {
        "type": "Literal",
        "start": 77,
        "end": 98,
        "value": "./exportUnknown.cjs",
        "raw": "\"./exportUnknown.cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 100,
      "end": 151,
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
      ],
      "source": {
        "type": "Literal",
        "start": 130,
        "end": 150,
        "value": "./exportSymbol.cjs",
        "raw": "\"./exportSymbol.cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 153,
      "end": 207,
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
      ],
      "source": {
        "type": "Literal",
        "start": 189,
        "end": 206,
        "value": "./exportAny.cjs",
        "raw": "\"./exportAny.cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 208,
      "end": 270,
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
      ],
      "source": {
        "type": "Literal",
        "start": 248,
        "end": 269,
        "value": "./exportUnknown.cjs",
        "raw": "\"./exportUnknown.cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 271,
      "end": 331,
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
      ],
      "source": {
        "type": "Literal",
        "start": 310,
        "end": 330,
        "value": "./exportSymbol.cjs",
        "raw": "\"./exportSymbol.cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 21,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 25,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 24,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
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
