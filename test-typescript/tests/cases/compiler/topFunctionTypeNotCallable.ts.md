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
          "definite": false,
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
                "params": [
                  {
                    "type": "RestElement",
                    "start": 40,
                    "end": 54,
                    "argument": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 47,
                      "decorators": [],
                      "name": "args",
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
                    }
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 71,
      "expression": {
        "type": "CallExpression",
        "start": 65,
        "end": 70,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 65,
          "end": 68,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
