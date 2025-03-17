__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 49,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 46,
              "end": 49,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 28,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 45,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 39,
                  "end": 45,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 40,
                      "end": 44
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 39,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
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
