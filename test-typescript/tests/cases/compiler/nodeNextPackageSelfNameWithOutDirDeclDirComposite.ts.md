__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "name": "me",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 35,
        "value": "@this/package",
        "raw": "\"@this/package\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 49,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 48,
        "callee": {
          "type": "MemberExpression",
          "start": 38,
          "end": 46,
          "object": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "name": "me",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 41,
            "end": 46,
            "name": "thing",
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
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 83,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 58,
        "end": 83,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 72,
          "name": "thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 81,
          "end": 83,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 74,
          "end": 80,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 76,
            "end": 80
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
