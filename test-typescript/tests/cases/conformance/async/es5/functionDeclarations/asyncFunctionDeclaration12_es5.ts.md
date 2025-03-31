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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 28,
              "name": "await",
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
              "start": 46,
              "end": 49,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 45,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 39,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
