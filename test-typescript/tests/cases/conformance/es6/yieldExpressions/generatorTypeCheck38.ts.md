__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "yield",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 66,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 31,
            "end": 39,
            "expression": {
              "type": "YieldExpression",
              "start": 31,
              "end": 38,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 37,
                "end": 38,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 64,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 63,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 63,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 51,
                      "end": 63,
                      "exprName": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 63,
                        "name": "yield",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
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
