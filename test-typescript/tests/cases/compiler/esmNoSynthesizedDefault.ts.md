__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 35,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 24,
          "decorators": [],
          "name": "toString",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 26,
          "end": 34,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 28,
            "end": 34
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 169,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 54,
        "raw": "'mdast-util-to-string'",
        "value": "mdast-util-to-string"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "decorators": [],
            "name": "mdast",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 24,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 24,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 62,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "decorators": [],
        "name": "mdast",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 79,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 63,
          "end": 77,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 63,
            "end": 68,
            "decorators": [],
            "name": "mdast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 77,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 94,
            "decorators": [],
            "name": "mdast2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AwaitExpression",
            "start": 97,
            "end": 133,
            "argument": {
              "type": "ImportExpression",
              "start": 103,
              "end": 133,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 110,
                "end": 132,
                "raw": "'mdast-util-to-string'",
                "value": "mdast-util-to-string"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 153,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 135,
        "end": 152,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 135,
          "end": 150,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 141,
            "decorators": [],
            "name": "mdast2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 150,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 169,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 154,
        "end": 168,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 154,
          "end": 160,
          "decorators": [],
          "name": "mdast2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 161,
          "end": 168,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
