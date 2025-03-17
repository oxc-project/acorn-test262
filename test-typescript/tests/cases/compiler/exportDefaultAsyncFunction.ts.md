__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 51,
          "end": 53,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
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
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        }
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
