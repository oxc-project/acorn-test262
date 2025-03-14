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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 160,
                  "decorators": [],
                  "name": "someLocalVar",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 163,
                  "end": 174,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 166,
                    "decorators": [],
                    "name": "arg",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 174,
                    "decorators": [],
                    "name": "other",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 216,
            "argument": {
              "type": "CallExpression",
              "start": 187,
              "end": 215,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 209,
                  "decorators": [],
                  "name": "someLocalVar",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 211,
                  "end": 214,
                  "decorators": [],
                  "name": "arg",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 187,
                "end": 196,
                "decorators": [],
                "name": "recursive",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 107,
        "decorators": [],
        "name": "recursive",
        "optional": false
      },
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
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
