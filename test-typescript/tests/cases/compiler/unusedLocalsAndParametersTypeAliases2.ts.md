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
        "name": "handler1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "handler2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 112,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
