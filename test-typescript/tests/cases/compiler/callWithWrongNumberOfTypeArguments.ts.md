callWithWrongNumberOfTypeArguments.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 22,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 36,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 35,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 25,
          "end": 33,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 57,
      "expression": {
        "type": "CallExpression",
        "start": 37,
        "end": 56,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 38,
          "end": 54,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 39,
              "end": 45
            },
            {
              "type": "TSStringKeyword",
              "start": 47,
              "end": 53
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 86,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 85,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 59,
          "end": 83,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 60,
              "end": 66
            },
            {
              "type": "TSStringKeyword",
              "start": 68,
              "end": 74
            },
            {
              "type": "TSNumberKeyword",
              "start": 76,
              "end": 82
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
