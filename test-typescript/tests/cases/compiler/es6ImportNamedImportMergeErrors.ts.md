es6ImportNamedImportMergeErrors_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 36,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 35,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 54,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 53,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 62,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 66,
            "end": 72,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 68,
              "decorators": [],
              "name": "z1",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
es6ImportNamedImportMergeErrors_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 540,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 56,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 55,
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "value": "./es6ImportNamedImportMergeErrors_0"
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
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 72,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 72,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 94,
      "end": 156,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 118,
        "end": 155,
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "value": "./es6ImportNamedImportMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 103,
          "end": 110,
          "imported": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "decorators": [],
            "name": "x1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 157,
      "end": 173,
      "body": {
        "type": "TSInterfaceBody",
        "start": 170,
        "end": 173,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 169,
        "decorators": [],
        "name": "x1",
        "optional": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 195,
      "end": 251,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 213,
        "end": 250,
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "value": "./es6ImportNamedImportMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 204,
          "end": 205,
          "imported": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 276,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 279,
            "end": 281,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 284,
      "end": 347,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 309,
        "end": 346,
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "value": "./es6ImportNamedImportMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 293,
          "end": 301,
          "imported": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "decorators": [],
            "name": "x44",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 367,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 374,
            "decorators": [],
            "name": "x44",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 377,
            "end": 379,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 382,
      "end": 438,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 400,
        "end": 437,
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "value": "./es6ImportNamedImportMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 391,
          "end": 392,
          "imported": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 458,
      "end": 520,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 482,
        "end": 519,
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "value": "./es6ImportNamedImportMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 467,
          "end": 474,
          "imported": {
            "type": "Identifier",
            "start": 467,
            "end": 469,
            "decorators": [],
            "name": "z1",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 473,
            "end": 474,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
