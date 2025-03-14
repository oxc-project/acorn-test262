asyncUnParenthesizedArrowFunction_es5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 58,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 34,
        "decorators": [],
        "name": "someOtherFunction",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 41,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 41,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 42,
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 44,
          "end": 57,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 51,
            "end": 57,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 52,
                "end": 56
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 69,
            "end": 106,
            "async": true,
            "body": {
              "type": "AwaitExpression",
              "start": 80,
              "end": 106,
              "argument": {
                "type": "CallExpression",
                "start": 86,
                "end": 106,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 103,
                  "decorators": [],
                  "name": "someOtherFunction",
                  "optional": false
                },
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "i",
                "optional": false
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
      "start": 107,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 115,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 118,
            "end": 157,
            "async": true,
            "body": {
              "type": "AwaitExpression",
              "start": 131,
              "end": 157,
              "argument": {
                "type": "CallExpression",
                "start": 137,
                "end": 157,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 155,
                    "end": 156,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 154,
                  "decorators": [],
                  "name": "someOtherFunction",
                  "optional": false
                },
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "i",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
