__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handler1",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 23
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 32,
            "end": 36
          },
          "start": 29,
          "end": 36
        },
        "start": 26,
        "end": 36
      },
      "declare": false,
      "start": 10,
      "end": 37
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 52
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler2",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 74
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 83,
                  "end": 87
                },
                "start": 80,
                "end": 87
              },
              "start": 77,
              "end": 87
            },
            "declare": false,
            "start": 61,
            "end": 88
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 96
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 93,
              "end": 98
            },
            "directive": null,
            "start": 93,
            "end": 99
          }
        ],
        "start": 55,
        "end": 101
      },
      "expression": false,
      "start": 40,
      "end": 101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 112
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 10,
  "end": 112
}
```
