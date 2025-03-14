useSharedArrayBuffer6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "foge",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 11,
            "end": 38,
            "arguments": [
              {
                "type": "Literal",
                "start": 33,
                "end": 37,
                "raw": "1024",
                "value": 1024
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 15,
              "end": 32,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 52,
      "expression": {
        "type": "MemberExpression",
        "start": 40,
        "end": 51,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 40,
          "end": 44,
          "decorators": [],
          "name": "foge",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 45,
          "end": 51,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "decorators": [],
            "name": "length",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 83,
            "end": 107,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 100,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 101,
              "end": 107,
              "decorators": [],
              "name": "length",
              "optional": false
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
