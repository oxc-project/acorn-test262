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
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 24,
          "name": "toString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 26,
          "end": 34,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 28,
            "end": 34
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 170,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "name": "mdast",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 24,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 54,
        "value": "mdast-util-to-string",
        "raw": "'mdast-util-to-string'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 62,
      "expression": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "name": "mdast",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 80,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 79,
        "callee": {
          "type": "MemberExpression",
          "start": 63,
          "end": 77,
          "object": {
            "type": "Identifier",
            "start": 63,
            "end": 68,
            "name": "mdast",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 77,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 94,
            "name": "mdast2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 97,
            "end": 133,
            "argument": {
              "type": "ImportExpression",
              "start": 103,
              "end": 133,
              "source": {
                "type": "Literal",
                "start": 110,
                "end": 132,
                "value": "mdast-util-to-string",
                "raw": "'mdast-util-to-string'"
              },
              "options": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 153,
      "expression": {
        "type": "CallExpression",
        "start": 135,
        "end": 152,
        "callee": {
          "type": "MemberExpression",
          "start": 135,
          "end": 150,
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 141,
            "name": "mdast2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 150,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 169,
      "expression": {
        "type": "MemberExpression",
        "start": 154,
        "end": 168,
        "object": {
          "type": "Identifier",
          "start": 154,
          "end": 160,
          "name": "mdast2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 161,
          "end": 168,
          "name": "default",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
