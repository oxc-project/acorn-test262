anyAsConstructor.ts
```json
{
  "type": "Program",
  "start": 109,
  "end": 255,
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
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 136,
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
            "type": "NewExpression",
            "start": 129,
            "end": 136,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 146,
            "end": 160,
            "arguments": [
              {
                "type": "Literal",
                "start": 152,
                "end": 159,
                "raw": "'hello'",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 170,
            "end": 178,
            "arguments": [
              {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 229,
            "end": 242,
            "arguments": [
              {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 234,
              "end": 239,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 235,
                  "end": 238
                }
              ]
            }
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
