__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
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
        "end": 26,
        "value": "#dep",
        "raw": "\"#dep\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 40,
      "expression": {
        "type": "CallExpression",
        "start": 29,
        "end": 39,
        "callee": {
          "type": "MemberExpression",
          "start": 29,
          "end": 37,
          "object": {
            "type": "Identifier",
            "start": 29,
            "end": 31,
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 37,
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
      "start": 42,
      "end": 74,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 49,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 63,
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
          "start": 65,
          "end": 71,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 67,
            "end": 71
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 72,
          "end": 74,
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
