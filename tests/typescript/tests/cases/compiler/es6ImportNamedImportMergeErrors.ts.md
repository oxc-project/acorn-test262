__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 15,
              "end": 17
            },
            "definite": false,
            "start": 11,
            "end": 17
          }
        ],
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "definite": false,
            "start": 30,
            "end": 35
          }
        ],
        "declare": false,
        "start": 26,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "definite": false,
            "start": 48,
            "end": 53
          }
        ],
        "declare": false,
        "start": 44,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z1",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 68
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "definite": false,
            "start": 66,
            "end": 72
          }
        ],
        "declare": false,
        "start": 62,
        "end": 73
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 18,
        "end": 55
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 69,
        "end": 72
      },
      "declare": false,
      "start": 57,
      "end": 72
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 110
          },
          "importKind": "value",
          "start": 103,
          "end": 110
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 118,
        "end": 155
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 94,
      "end": 156
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "x1",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 169
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 170,
        "end": 173
      },
      "declare": false,
      "start": 157,
      "end": 173
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "importKind": "value",
          "start": 204,
          "end": 205
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 213,
        "end": 250
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 195,
      "end": 251
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 276
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 279,
            "end": 281
          },
          "definite": false,
          "start": 275,
          "end": 281
        }
      ],
      "declare": false,
      "start": 271,
      "end": 282
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 294
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x44",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 301
          },
          "importKind": "value",
          "start": 293,
          "end": 301
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 309,
        "end": 346
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 284,
      "end": 347
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x44",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 374
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 377,
            "end": 379
          },
          "definite": false,
          "start": 371,
          "end": 379
        }
      ],
      "declare": false,
      "start": 367,
      "end": 380
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "importKind": "value",
          "start": 391,
          "end": 392
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 400,
        "end": 437
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 382,
      "end": 438
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 469
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 474
          },
          "importKind": "value",
          "start": 467,
          "end": 474
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 482,
        "end": 519
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 458,
      "end": 520
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 539
}
```
