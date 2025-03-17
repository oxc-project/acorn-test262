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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 35,
        "raw": "\"@this/package\"",
        "value": "@this/package"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 49,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 48,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 38,
          "end": 46,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 41,
            "end": 46,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 83,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 58,
        "end": 83,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 81,
          "end": 83,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 72,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 74,
          "end": 80,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 76,
            "end": 80
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
