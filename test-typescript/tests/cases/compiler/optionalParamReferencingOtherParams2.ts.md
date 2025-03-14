optionalParamReferencingOtherParams2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 76,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 76,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 49,
            "end": 60,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 53,
                "end": 59,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 57,
                  "end": 59,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 65,
            "end": 74,
            "argument": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "y",
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
        "start": 20,
        "end": 27,
        "decorators": [],
        "name": "strange",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 28,
          "end": 33,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 35,
          "end": 40,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
