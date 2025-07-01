__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 21
          },
          "start": 7,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportAny.cjs",
        "raw": "\"./exportAny.cjs\"",
        "start": 27,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 45
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportUnknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 71
          },
          "start": 53,
          "end": 71
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportUnknown.cjs",
        "raw": "\"./exportUnknown.cjs\"",
        "start": 77,
        "end": 98
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 46,
      "end": 99
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportSymbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 124
          },
          "start": 107,
          "end": 124
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportSymbol.cjs",
        "raw": "\"./exportSymbol.cjs\"",
        "start": 130,
        "end": 150
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 100,
      "end": 151
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportAnyType",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 183
          },
          "start": 165,
          "end": 183
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportAny.cjs",
        "raw": "\"./exportAny.cjs\"",
        "start": 189,
        "end": 206
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 153,
      "end": 207
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportUnknownType",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 242
          },
          "start": 220,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportUnknown.cjs",
        "raw": "\"./exportUnknown.cjs\"",
        "start": 248,
        "end": 269
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 208,
      "end": 270
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportSymbolType",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 304
          },
          "start": 283,
          "end": 304
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportSymbol.cjs",
        "raw": "\"./exportSymbol.cjs\"",
        "start": 310,
        "end": 330
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 271,
      "end": 331
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 332
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              },
              "start": 16,
              "end": 21
            },
            "start": 14,
            "end": 21
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 21
        }
      ],
      "declare": true,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "__",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 34
      },
      "start": 23,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 18,
                "end": 25
              },
              "start": 16,
              "end": 25
            },
            "start": 14,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "__",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 38
      },
      "start": 27,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "start": 14,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "__",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 37
      },
      "start": 26,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
