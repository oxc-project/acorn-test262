__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 112,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 10,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 23,
        "decorators": [],
        "name": "handler1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 26,
        "end": 36,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 29,
          "end": 36,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 32,
            "end": 36
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
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
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 101,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 61,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 74,
              "decorators": [],
              "name": "handler2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 77,
              "end": 87,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 87,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 83,
                  "end": 87
                }
              }
            },
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 99,
            "expression": {
              "type": "CallExpression",
              "start": 93,
              "end": 98,
              "callee": {
                "type": "Identifier",
                "start": 93,
                "end": 96,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 112,
      "declaration": null,
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
