__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 89,
  "end": 218,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 89,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 107,
        "decorators": [],
        "name": "recursive",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 108,
          "end": 119,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 119,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 113,
              "end": 119
            }
          }
        },
        {
          "type": "Identifier",
          "start": 121,
          "end": 134,
          "decorators": [],
          "name": "other",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 134,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 128,
              "end": 134
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 136,
        "end": 218,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 142,
            "end": 175,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 174,
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 160,
                  "decorators": [],
                  "name": "someLocalVar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 163,
                  "end": 174,
                  "left": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 166,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 174,
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 216,
            "argument": {
              "type": "CallExpression",
              "start": 187,
              "end": 215,
              "callee": {
                "type": "Identifier",
                "start": 187,
                "end": 196,
                "decorators": [],
                "name": "recursive",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 209,
                  "decorators": [],
                  "name": "someLocalVar",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 211,
                  "end": 214,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
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
