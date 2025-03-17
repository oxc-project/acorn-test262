__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 61,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 46,
        "end": 60,
        "raw": "\"./exports.js\"",
        "value": "./exports.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 19,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 30,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 35,
          "end": 38,
          "imported": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 67,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 71,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 68,
        "end": 70,
        "decorators": [],
        "name": "as",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 109,
        "end": 118,
        "decorators": [],
        "name": "something",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 161,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 157,
        "end": 160,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 203,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 199,
        "end": 202,
        "decorators": [],
        "name": "bar",
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
  "end": 224,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 14,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 27,
            "end": 28,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 45,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 48,
            "end": 49,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 67,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 60,
          "end": 64,
          "exported": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 87,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 77,
          "end": 84,
          "exported": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 114,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 97,
          "end": 111,
          "exported": {
            "type": "Identifier",
            "start": 102,
            "end": 111,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 102,
            "end": 111,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 115,
      "end": 143,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 124,
          "end": 140,
          "exported": {
            "type": "Identifier",
            "start": 137,
            "end": 140,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 129,
            "end": 133,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 144,
      "end": 170,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 153,
          "end": 167,
          "exported": {
            "type": "Identifier",
            "start": 164,
            "end": 167,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 214,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 185,
          "end": 211,
          "exported": {
            "type": "Identifier",
            "start": 203,
            "end": 211,
            "decorators": [],
            "name": "whatever",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
            "decorators": [],
            "name": "something",
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
