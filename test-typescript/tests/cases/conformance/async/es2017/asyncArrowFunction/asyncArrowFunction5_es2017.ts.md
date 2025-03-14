asyncArrowFunction5_es2017.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 45,
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
            "end": 45,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 45,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 22,
                "decorators": [],
                "name": "await",
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 25,
                "end": 38,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 32,
                  "end": 38,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 33,
                      "end": 37
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 32,
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
  "sourceType": "script"
}
```
