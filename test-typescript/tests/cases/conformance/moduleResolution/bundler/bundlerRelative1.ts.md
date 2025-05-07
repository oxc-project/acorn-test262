__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 23,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
      "type": "ExportDefaultDeclaration",
      "start": 25,
      "end": 42,
      "declaration": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
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
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 23,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
      "start": 25,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "_",
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
  "end": 321,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "raw": "\"./dir\"",
        "value": "./dir",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 27,
      "end": 56,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 55,
        "raw": "\"./dir/index\"",
        "value": "./dir/index",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 57,
      "end": 89,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 72,
        "end": 88,
        "raw": "\"./dir/index.js\"",
        "value": "./dir/index.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 90,
      "end": 122,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 105,
        "end": 121,
        "raw": "\"./dir/index.ts\"",
        "value": "./dir/index.ts",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 124,
      "end": 155,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 142,
        "end": 154,
        "raw": "\"./redirect\"",
        "value": "./redirect",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 133,
          "end": 134,
          "imported": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 156,
      "end": 190,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 171,
        "end": 189,
        "raw": "\"./redirect/index\"",
        "value": "./redirect/index",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 192,
      "end": 220,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 206,
        "end": 219,
        "raw": "\"./types/esm\"",
        "value": "./types/esm",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 199,
          "end": 200,
          "local": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 221,
      "end": 256,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 242,
        "end": 255,
        "raw": "\"./types/esm\"",
        "value": "./types/esm",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 228,
          "end": 236,
          "local": {
            "type": "Identifier",
            "start": 233,
            "end": 236,
            "decorators": [],
            "name": "esm",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 257,
      "end": 285,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 271,
        "end": 284,
        "raw": "\"./types/cjs\"",
        "value": "./types/cjs",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 264,
          "end": 265,
          "local": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 286,
      "end": 321,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 307,
        "end": 320,
        "raw": "\"./types/cjs\"",
        "value": "./types/cjs",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 293,
          "end": 301,
          "local": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "decorators": [],
            "name": "cjs",
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
