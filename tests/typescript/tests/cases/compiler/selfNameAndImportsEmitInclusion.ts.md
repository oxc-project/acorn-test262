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
              "name": "indirect1",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 25,
              "end": 26
            },
            "definite": false,
            "start": 13,
            "end": 26
          }
        ],
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 28
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
              "name": "indirect2",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 25,
              "end": 26
            },
            "definite": false,
            "start": 13,
            "end": 26
          }
        ],
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 28
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
            "name": "indirect1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#indirect1",
        "raw": "\"#indirect1\"",
        "start": 26,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect2",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect2",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 58
          },
          "importKind": "value",
          "start": 49,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg/indirect2.js",
        "raw": "\"pkg/indirect2.js\"",
        "start": 66,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 40,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 93
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 97
          },
          "optional": false,
          "computed": false,
          "start": 86,
          "end": 97
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect1",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 107
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect2",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 118
          }
        ],
        "optional": false,
        "start": 86,
        "end": 119
      },
      "directive": null,
      "start": 86,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
