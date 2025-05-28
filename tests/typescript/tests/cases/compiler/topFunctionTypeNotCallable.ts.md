__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 64,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 63,
            "decorators": [],
            "name": "foo",
            "optional": false,
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
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 47,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
