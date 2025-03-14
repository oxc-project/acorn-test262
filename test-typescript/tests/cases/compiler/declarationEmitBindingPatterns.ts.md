declarationEmitBindingPatterns.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 31,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 28,
              "end": 31,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 11,
                "end": 23,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 12,
                    "end": 22,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12,
                      "end": 13,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 15,
                      "end": 22,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 15,
                        "end": 16,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 19,
                        "end": 22,
                        "raw": "'y'",
                        "value": "y"
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
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
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 88,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 88,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 51,
          "end": 57,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 51,
            "end": 53,
            "decorators": [],
            "optional": false,
            "properties": []
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 59,
          "end": 65,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 59,
            "end": 61,
            "decorators": [],
            "elements": [],
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 67,
          "end": 83,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 67,
            "end": 79,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 69,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 72,
                  "end": 78,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 72,
                    "end": 74,
                    "decorators": [],
                    "optional": false,
                    "properties": []
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              }
            ]
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
