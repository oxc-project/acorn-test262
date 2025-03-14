webworkerIterable.ts
```json
{
  "type": "Program",
  "start": 33,
  "end": 165,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 50,
      "expression": {
        "type": "CallExpression",
        "start": 33,
        "end": 50,
        "arguments": [
          {
            "type": "Literal",
            "start": 47,
            "end": 49,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 33,
          "end": 46,
          "decorators": [],
          "name": "importScripts",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 104,
            "end": 118,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 116,
              "decorators": [],
              "name": "FormData",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 119,
      "end": 164,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 164,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 148,
            "end": 162,
            "expression": {
              "type": "MemberExpression",
              "start": 148,
              "end": 162,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 148,
                "end": 155,
                "decorators": [],
                "name": "element",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 162,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 124,
        "end": 137,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 130,
            "end": 137,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 130,
              "end": 137,
              "decorators": [],
              "name": "element",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "decorators": [],
        "name": "f",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
