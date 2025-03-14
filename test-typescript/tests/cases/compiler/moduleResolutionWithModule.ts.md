node_modules/pkg/entrypoint.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 38,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 29,
          "decorators": [],
          "name": "thing",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 31,
          "end": 37,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 33,
            "end": 37
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "p",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 36,
      "expression": {
        "type": "CallExpression",
        "start": 26,
        "end": 35,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 26,
          "end": 33,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "decorators": [],
            "name": "thing",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
