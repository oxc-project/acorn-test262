__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "Test1",
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
        "start": 17,
        "end": 50,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 23,
            "end": 48,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 48,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 44,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 30,
                      "end": 44,
                      "exprName": {
                        "type": "TSQualifiedName",
                        "start": 37,
                        "end": 44,
                        "left": {
                          "type": "ThisExpression",
                          "start": 37,
                          "end": 41
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 44,
                          "name": "no",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 47,
                  "end": 48,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
