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
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "raw": "\"#dep\"",
        "value": "#dep"
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
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 40,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 29,
        "end": 39,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 29,
          "end": 37,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 29,
            "end": 31,
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 37,
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
      "start": 42,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 49,
        "end": 74,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 72,
          "end": 74,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 63,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        },
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
