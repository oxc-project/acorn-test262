__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 50,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 23,
            "end": 48,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 48,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 44,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
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
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
