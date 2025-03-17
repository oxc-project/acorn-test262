__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 81,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 63,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 63,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 39,
                "end": 63,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 40,
                    "end": 54,
                    "argument": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 47,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSNeverKeyword",
                        "start": 49,
                        "end": 54
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 63,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 59,
                    "end": 63
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 71,
      "expression": {
        "type": "CallExpression",
        "start": 65,
        "end": 70,
        "callee": {
          "type": "Identifier",
          "start": 65,
          "end": 68,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
