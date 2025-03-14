__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 40,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 37,
              "end": 40,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 33,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 27,
                  "end": 33,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 28,
                      "end": 32
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 27,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
