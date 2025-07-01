__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "ThisExpression",
                          "start": 37,
                          "end": 41
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 42,
                          "end": 44
                        },
                        "start": 37,
                        "end": 44
                      },
                      "typeArguments": null,
                      "start": 30,
                      "end": 44
                    },
                    "start": 28,
                    "end": 44
                  },
                  "start": 27,
                  "end": 44
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 47,
                  "end": 48
                },
                "definite": false,
                "start": 27,
                "end": 48
              }
            ],
            "declare": false,
            "start": 23,
            "end": 48
          }
        ],
        "start": 17,
        "end": 50
      },
      "expression": false,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
