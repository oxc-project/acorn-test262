__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "toString",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 24
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 28,
            "end": 34
          },
          "start": 26,
          "end": 34
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mdast",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 12
          },
          "start": 7,
          "end": 12
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 24
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 24
          },
          "importKind": "value",
          "start": 16,
          "end": 24
        }
      ],
      "source": {
        "type": "Literal",
        "value": "mdast-util-to-string",
        "raw": "'mdast-util-to-string'",
        "start": 32,
        "end": 54
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mdast",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 61
      },
      "directive": null,
      "start": 56,
      "end": 62
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
            "name": "mdast",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 68
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 77
          },
          "optional": false,
          "computed": false,
          "start": 63,
          "end": 77
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 63,
        "end": 79
      },
      "directive": null,
      "start": 63,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mdast2",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 94
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "mdast-util-to-string",
                "raw": "'mdast-util-to-string'",
                "start": 110,
                "end": 132
              },
              "options": null,
              "phase": null,
              "start": 103,
              "end": 133
            },
            "start": 97,
            "end": 133
          },
          "definite": false,
          "start": 88,
          "end": 133
        }
      ],
      "declare": false,
      "start": 82,
      "end": 134
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
            "name": "mdast2",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 141
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 150
          },
          "optional": false,
          "computed": false,
          "start": 135,
          "end": 150
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 135,
        "end": 152
      },
      "directive": null,
      "start": 135,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mdast2",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 160
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 168
        },
        "optional": false,
        "computed": false,
        "start": 154,
        "end": 168
      },
      "directive": null,
      "start": 154,
      "end": 169
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
