evolvingArrayResolvedAssert.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 10,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 12,
      "end": 69,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 69,
        "body": [
          {
            "type": "IfStatement",
            "start": 35,
            "end": 67,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 60,
              "end": 67,
              "body": []
            },
            "test": {
              "type": "CallExpression",
              "start": 39,
              "end": 58,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 39,
                "end": 55,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 55,
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 17,
        "end": 22,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
