inOperatorWithFunction.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "fn",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 9,
            "end": 48,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 33,
              "end": 48,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 35,
                  "end": 46,
                  "argument": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 45,
                    "decorators": [],
                    "name": "val",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 31,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 24,
                    "end": 31
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 73,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 52,
            "end": 72,
            "operator": "in",
            "left": {
              "type": "Literal",
              "start": 52,
              "end": 55,
              "raw": "\"a\"",
              "value": "a"
            },
            "right": {
              "type": "ObjectExpression",
              "start": 59,
              "end": 72,
              "properties": [
                {
                  "type": "Property",
                  "start": 61,
                  "end": 70,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 61,
                    "end": 64,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 66,
                    "end": 70,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 49,
          "end": 51,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
