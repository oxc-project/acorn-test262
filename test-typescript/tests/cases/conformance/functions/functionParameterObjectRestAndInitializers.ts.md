functionParameterObjectRestAndInitializers.ts
```json
{
  "type": "Program",
  "start": 57,
  "end": 169,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 103,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 92,
            "end": 101,
            "argument": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "b",
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
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 68,
          "end": 77,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 69,
              "end": 70,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            {
              "type": "RestElement",
              "start": 72,
              "end": 76,
              "argument": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        {
          "type": "AssignmentPattern",
          "start": 79,
          "end": 84,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 151,
        "end": 168,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 157,
            "end": 166,
            "argument": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "b",
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
        "start": 114,
        "end": 115,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 116,
          "end": 125,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 117,
              "end": 118,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            {
              "type": "RestElement",
              "start": 120,
              "end": 124,
              "argument": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        {
          "type": "AssignmentPattern",
          "start": 127,
          "end": 149,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ArrowFunctionExpression",
            "start": 131,
            "end": 149,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 147,
              "end": 149,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 132,
                "end": 135,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 133,
                    "end": 134,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "AssignmentPattern",
                "start": 137,
                "end": 142,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            ]
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
