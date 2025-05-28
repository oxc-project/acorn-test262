__ESTREE_TEST__:PASS:
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 45,
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 22,
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 32,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 45,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
