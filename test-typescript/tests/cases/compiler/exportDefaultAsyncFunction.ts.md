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
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 51,
          "end": 53,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 35,
          "end": 50,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 37,
            "end": 50,
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
            },
            "typeName": {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "decorators": [],
              "name": "Promise",
              "optional": false
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
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
