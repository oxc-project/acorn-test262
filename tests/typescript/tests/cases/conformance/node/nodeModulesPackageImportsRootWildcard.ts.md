__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 19,
              "end": 24
            },
            "definite": false,
            "start": 13,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 19,
              "end": 24
            },
            "definite": false,
            "start": 13,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 19,
              "end": 24
            },
            "definite": false,
            "start": 13,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "importKind": "value",
          "start": 28,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#/foo.js",
        "raw": "\"#/foo.js\"",
        "start": 39,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "importKind": "value",
          "start": 60,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#/features/bar.js",
        "raw": "\"#/features/bar.js\"",
        "start": 71,
        "end": 90
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 91
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 104
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 104
          },
          "importKind": "value",
          "start": 101,
          "end": 104
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#/nested/deep/baz.js",
        "raw": "\"#/nested/deep/baz.js\"",
        "start": 112,
        "end": 134
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 92,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 139
      },
      "directive": null,
      "start": 136,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 144
      },
      "directive": null,
      "start": 141,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 149
      },
      "directive": null,
      "start": 146,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 150
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "importKind": "value",
          "start": 28,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#/foo.js",
        "raw": "\"#/foo.js\"",
        "start": 39,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "importKind": "value",
          "start": 60,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#/features/bar.js",
        "raw": "\"#/features/bar.js\"",
        "start": 71,
        "end": 90
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 91
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 104
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 104
          },
          "importKind": "value",
          "start": 101,
          "end": 104
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#/nested/deep/baz.js",
        "raw": "\"#/nested/deep/baz.js\"",
        "start": 112,
        "end": 134
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 92,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 139
      },
      "directive": null,
      "start": 136,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 144
      },
      "directive": null,
      "start": 141,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 149
      },
      "directive": null,
      "start": 146,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 150
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "importKind": "value",
          "start": 28,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#/foo.js",
        "raw": "\"#/foo.js\"",
        "start": 39,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "importKind": "value",
          "start": 60,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#/features/bar.js",
        "raw": "\"#/features/bar.js\"",
        "start": 71,
        "end": 90
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 91
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 104
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 104
          },
          "importKind": "value",
          "start": 101,
          "end": 104
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#/nested/deep/baz.js",
        "raw": "\"#/nested/deep/baz.js\"",
        "start": 112,
        "end": 134
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 92,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 139
      },
      "directive": null,
      "start": 136,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 144
      },
      "directive": null,
      "start": 141,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 149
      },
      "directive": null,
      "start": 146,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 150
}
```
