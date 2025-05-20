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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 22,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 31,
        "end": 46,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 26,
          "raw": "\"./b\"",
          "value": "./b"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 47,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 29,
        "end": 46,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 29,
          "end": 44,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 29,
            "end": 40,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 74,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 73,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 48,
          "end": 71,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 48,
            "end": 67,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 48,
              "end": 59,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 52,
                "end": 59,
                "decorators": [],
                "name": "default",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 60,
              "end": 67,
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
