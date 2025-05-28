__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 53,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 53,
        "id": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 35,
          "end": 50,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 37,
            "end": 50,
            "typeName": {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 44,
              "end": 50,
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "start": 45,
                  "end": 49
                }
              ]
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 51,
          "end": 53,
          "body": []
        },
        "expression": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 60,
      "expression": {
        "type": "CallExpression",
        "start": 54,
        "end": 59,
        "callee": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
