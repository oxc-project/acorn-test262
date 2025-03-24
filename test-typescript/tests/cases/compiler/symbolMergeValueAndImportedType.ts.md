__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "value": "./other",
        "raw": "\"./other\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 41,
            "value": 42,
            "raw": "42"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 68,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 67,
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 54,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 50,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 54,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 55,
            "end": 66,
            "left": {
              "type": "Literal",
              "start": 55,
              "end": 62,
              "value": "X is ",
              "raw": "'X is '"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
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
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 19,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 16,
          "end": 18,
          "members": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
