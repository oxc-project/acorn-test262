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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "name": "as",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "name": "as",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 19,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "name": "something",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "name": "something",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 30,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 35,
          "end": 38,
          "imported": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 46,
        "end": 60,
        "value": "./exports.js",
        "raw": "\"./exports.js\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 67,
      "expression": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "name": "type",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 71,
      "expression": {
        "type": "Identifier",
        "start": 68,
        "end": 70,
        "name": "as",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 119,
      "expression": {
        "type": "Identifier",
        "start": 109,
        "end": 118,
        "name": "something",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 161,
      "expression": {
        "type": "Identifier",
        "start": 157,
        "end": 160,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 203,
      "expression": {
        "type": "Identifier",
        "start": 199,
        "end": 202,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 14,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "name": "as",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 27,
            "end": 28,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 45,
            "name": "something",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 48,
            "end": 49,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 67,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 60,
          "end": 64,
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 87,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 77,
          "end": 84,
          "local": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "name": "as",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "name": "as",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 114,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 97,
          "end": 111,
          "local": {
            "type": "Identifier",
            "start": 102,
            "end": 111,
            "name": "something",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 102,
            "end": 111,
            "name": "something",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 115,
      "end": 143,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 124,
          "end": 140,
          "local": {
            "type": "Identifier",
            "start": 129,
            "end": 133,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 137,
            "end": 140,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 144,
      "end": 170,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 153,
          "end": 167,
          "local": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "name": "as",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 164,
            "end": 167,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 214,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 185,
          "end": 211,
          "local": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
            "name": "something",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 203,
            "end": 211,
            "name": "whatever",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
