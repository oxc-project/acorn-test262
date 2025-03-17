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
        "name": "recursive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 108,
          "end": 119,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 119,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 113,
              "end": 119
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 121,
          "end": 134,
          "name": "other",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 134,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 128,
              "end": 134
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 136,
        "end": 218,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 142,
            "end": 175,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 174,
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 160,
                  "name": "someLocalVar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 163,
                  "end": 174,
                  "left": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 166,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 174,
                    "name": "other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
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
                "name": "recursive",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 209,
                  "name": "someLocalVar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 211,
                  "end": 214,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
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
