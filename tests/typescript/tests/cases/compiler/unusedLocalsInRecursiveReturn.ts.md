__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "recursive",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 107
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 113,
              "end": 119
            },
            "start": 111,
            "end": 119
          },
          "start": 108,
          "end": 119
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "other",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 128,
              "end": 134
            },
            "start": 126,
            "end": 134
          },
          "start": 121,
          "end": 134
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someLocalVar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 160
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 166
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 174
                  },
                  "start": 163,
                  "end": 174
                },
                "definite": false,
                "start": 148,
                "end": 174
              }
            ],
            "declare": false,
            "start": 142,
            "end": 175
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "recursive",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 196
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someLocalVar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 209
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 214
                }
              ],
              "optional": false,
              "start": 187,
              "end": 215
            },
            "start": 180,
            "end": 216
          }
        ],
        "start": 136,
        "end": 218
      },
      "expression": false,
      "start": 89,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 89,
  "end": 218
}
```
