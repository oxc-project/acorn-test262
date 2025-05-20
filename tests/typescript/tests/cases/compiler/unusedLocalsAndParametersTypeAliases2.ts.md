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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 23,
        "decorators": [],
        "name": "handler1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 26,
        "end": 36,
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
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 101,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 61,
            "end": 88,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 74,
              "decorators": [],
              "name": "handler2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 77,
              "end": 87,
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
              },
              "typeParameters": null
            },
            "typeParameters": null
          },
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 99,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 93,
              "end": 98,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 93,
                "end": 96,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 112,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
