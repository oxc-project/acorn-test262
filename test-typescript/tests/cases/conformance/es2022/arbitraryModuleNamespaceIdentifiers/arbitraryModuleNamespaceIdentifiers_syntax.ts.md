__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 22,
              "raw": "123",
              "value": 123
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 33,
          "end": 49,
          "exported": {
            "type": "Literal",
            "start": 40,
            "end": 49,
            "raw": "\"valid 1\"",
            "value": "valid 1"
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 53,
      "end": 103,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 86,
        "end": 102,
        "raw": "\"./values-valid\"",
        "value": "./values-valid"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 62,
          "end": 78,
          "imported": {
            "type": "Literal",
            "start": 62,
            "end": 71,
            "raw": "\"valid 1\"",
            "value": "valid 1"
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 160,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 143,
        "end": 159,
        "raw": "\"./values-valid\"",
        "value": "./values-valid"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 113,
          "end": 135,
          "exported": {
            "type": "Literal",
            "start": 126,
            "end": 135,
            "raw": "\"valid 2\"",
            "value": "valid 2"
          },
          "exportKind": "value",
          "local": {
            "type": "Literal",
            "start": 113,
            "end": 122,
            "raw": "\"valid 1\"",
            "value": "valid 1"
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 211,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 194,
        "end": 210,
        "raw": "\"./values-valid\"",
        "value": "./values-valid"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 170,
          "end": 186,
          "exported": {
            "type": "Literal",
            "start": 177,
            "end": 186,
            "raw": "\"valid 3\"",
            "value": "valid 3"
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 170,
            "end": 173,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 212,
      "end": 256,
      "attributes": [],
      "exported": {
        "type": "Literal",
        "start": 224,
        "end": 233,
        "raw": "\"valid 4\"",
        "value": "valid 4"
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 239,
        "end": 255,
        "raw": "\"./values-valid\"",
        "value": "./values-valid"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
A string literal cannot be used as a local exported binding without `from`.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 22,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 18,
          "end": 21,
          "literal": {
            "type": "Literal",
            "start": 18,
            "end": 21,
            "raw": "123",
            "value": 123
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 56,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 37,
          "end": 53,
          "exported": {
            "type": "Literal",
            "start": 44,
            "end": 53,
            "raw": "\"valid 1\"",
            "value": "valid 1"
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 57,
      "end": 116,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 95,
        "end": 115,
        "raw": "\"./type-decls-valid\"",
        "value": "./type-decls-valid"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 71,
          "end": 87,
          "imported": {
            "type": "Literal",
            "start": 71,
            "end": 80,
            "raw": "\"valid 1\"",
            "value": "valid 1"
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 84,
            "end": 87,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 117,
      "end": 182,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 161,
        "end": 181,
        "raw": "\"./type-decls-valid\"",
        "value": "./type-decls-valid"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 131,
          "end": 153,
          "exported": {
            "type": "Literal",
            "start": 144,
            "end": 153,
            "raw": "\"valid 2\"",
            "value": "valid 2"
          },
          "exportKind": "value",
          "local": {
            "type": "Literal",
            "start": 131,
            "end": 140,
            "raw": "\"valid 1\"",
            "value": "valid 1"
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 183,
      "end": 242,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 221,
        "end": 241,
        "raw": "\"./type-decls-valid\"",
        "value": "./type-decls-valid"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 197,
          "end": 213,
          "exported": {
            "type": "Literal",
            "start": 204,
            "end": 213,
            "raw": "\"valid 3\"",
            "value": "valid 3"
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 197,
            "end": 200,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 243,
      "end": 296,
      "attributes": [],
      "exported": {
        "type": "Literal",
        "start": 260,
        "end": 269,
        "raw": "\"valid 4\"",
        "value": "valid 4"
      },
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 275,
        "end": 295,
        "raw": "\"./type-decls-valid\"",
        "value": "./type-decls-valid"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
A string literal cannot be used as a local exported binding without `from`.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 22,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 18,
          "end": 21,
          "literal": {
            "type": "Literal",
            "start": 18,
            "end": 21,
            "raw": "123",
            "value": 123
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 56,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 32,
          "end": 53,
          "exported": {
            "type": "Literal",
            "start": 44,
            "end": 53,
            "raw": "\"valid 1\"",
            "value": "valid 1"
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 57,
      "end": 117,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 95,
        "end": 116,
        "raw": "\"./type-clause-valid\"",
        "value": "./type-clause-valid"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 66,
          "end": 87,
          "imported": {
            "type": "Literal",
            "start": 71,
            "end": 80,
            "raw": "\"valid 1\"",
            "value": "valid 1"
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 84,
            "end": 87,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 118,
      "end": 184,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 162,
        "end": 183,
        "raw": "\"./type-clause-valid\"",
        "value": "./type-clause-valid"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 127,
          "end": 154,
          "exported": {
            "type": "Literal",
            "start": 145,
            "end": 154,
            "raw": "\"valid 2\"",
            "value": "valid 2"
          },
          "exportKind": "type",
          "local": {
            "type": "Literal",
            "start": 132,
            "end": 141,
            "raw": "\"valid 1\"",
            "value": "valid 1"
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 185,
      "end": 245,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 223,
        "end": 244,
        "raw": "\"./type-clause-valid\"",
        "value": "./type-clause-valid"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 194,
          "end": 215,
          "exported": {
            "type": "Literal",
            "start": 206,
            "end": 215,
            "raw": "\"valid 3\"",
            "value": "valid 3"
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 199,
            "end": 202,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
A string literal cannot be used as a local exported binding without `from`.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
