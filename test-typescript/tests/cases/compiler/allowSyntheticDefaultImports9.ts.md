__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 22,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
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
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 46,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 31,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "name": "bar",
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
        "returnType": null
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
  "end": 59,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 23,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 36,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 48,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 47,
        "callee": {
          "type": "MemberExpression",
          "start": 38,
          "end": 45,
          "object": {
            "type": "Identifier",
            "start": 38,
            "end": 41,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "name": "bar",
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
      "start": 49,
      "end": 59,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 58,
        "callee": {
          "type": "MemberExpression",
          "start": 49,
          "end": 56,
          "object": {
            "type": "Identifier",
            "start": 49,
            "end": 52,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "name": "foo",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
