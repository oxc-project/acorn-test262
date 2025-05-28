__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "value": "./types",
        "raw": "'./types'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 60,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 35,
          "end": 45,
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 60,
        "value": "./types",
        "raw": "'./types'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 75,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 75,
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 72,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 68,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 150,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 150,
        "callee": {
          "type": "MemberExpression",
          "start": 130,
          "end": 141,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 137,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 142,
            "end": 149,
            "object": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
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
  "end": 30,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 29,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 29,
        "value": "./values",
        "raw": "'./values'"
      },
      "attributes": [],
      "exportKind": "type"
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
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 19,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 19,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
