anyAsFunctionCall.ts
```json
{
  "type": "Program",
  "start": 109,
  "end": 167,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 119,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 116,
                "end": 119
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 129,
            "end": 132,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 142,
            "end": 152,
            "arguments": [
              {
                "type": "Literal",
                "start": 144,
                "end": 151,
                "raw": "'hello'",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 162,
            "end": 166,
            "arguments": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
