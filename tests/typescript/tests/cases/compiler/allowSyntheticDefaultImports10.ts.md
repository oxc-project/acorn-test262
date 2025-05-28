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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": null,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 26,
          "value": "./b",
          "raw": "\"./b\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 47,
      "expression": {
        "type": "CallExpression",
        "start": 29,
        "end": 46,
        "callee": {
          "type": "MemberExpression",
          "start": 29,
          "end": 44,
          "object": {
            "type": "MemberExpression",
            "start": 29,
            "end": 40,
            "object": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "bar",
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
      "type": "ExpressionStatement",
      "start": 48,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 73,
        "callee": {
          "type": "MemberExpression",
          "start": 48,
          "end": 71,
          "object": {
            "type": "MemberExpression",
            "start": 48,
            "end": 67,
            "object": {
              "type": "MemberExpression",
              "start": 48,
              "end": 59,
              "object": {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 52,
                "end": 59,
                "decorators": [],
                "name": "default",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 60,
              "end": 67,
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "decorators": [],
            "name": "foo",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
