__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7,
      "end": 24,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 23,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 23,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 14,
                "end": 23,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 17,
                  "end": 23,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 20,
                    "end": 23
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 56,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 25,
        "end": 55,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 26,
          "end": 29
        },
        "expression": {
          "type": "AssignmentExpression",
          "start": 47,
          "end": 54,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "CallExpression",
            "start": 51,
            "end": 54,
            "callee": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
