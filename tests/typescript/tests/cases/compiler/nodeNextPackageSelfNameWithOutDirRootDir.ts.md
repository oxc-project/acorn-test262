__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
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
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 41,
            "end": 46,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
        "body": {
          "type": "BlockStatement",
          "start": 81,
          "end": 83,
          "body": []
        },
        "expression": false
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
