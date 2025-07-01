__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 47
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNeverKeyword",
                        "start": 49,
                        "end": 54
                      },
                      "start": 47,
                      "end": 54
                    },
                    "value": null,
                    "start": 40,
                    "end": 54
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 59,
                    "end": 63
                  },
                  "start": 56,
                  "end": 63
                },
                "start": 39,
                "end": 63
              },
              "start": 37,
              "end": 63
            },
            "start": 34,
            "end": 63
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 63
        }
      ],
      "declare": true,
      "start": 22,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 68
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 65,
        "end": 70
      },
      "directive": null,
      "start": 65,
      "end": 71
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 80
}
```
