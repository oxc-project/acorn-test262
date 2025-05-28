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
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "as",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "something",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
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
  "end": 223,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 29,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 28,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 50,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 49,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 102,
            "end": 111,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 137,
            "end": 140,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 164,
            "end": 167,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 203,
            "end": 211,
            "decorators": [],
            "name": "whatever",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
