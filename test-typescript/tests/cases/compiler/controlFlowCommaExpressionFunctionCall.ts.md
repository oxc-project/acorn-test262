controlFlowCommaExpressionFunctionCall.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 16,
            "decorators": [],
            "name": "otherValue",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 19,
            "end": 29,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 25,
              "end": 29,
              "raw": "true",
              "value": true
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 60,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 60,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 45,
                "end": 60,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 45,
                    "end": 51
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 54,
                    "end": 60
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 63,
            "end": 74,
            "expression": {
              "type": "Literal",
              "start": 63,
              "end": 67,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 176,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 176,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 126,
            "end": 138,
            "argument": {
              "type": "Literal",
              "start": 133,
              "end": 137,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 94,
        "decorators": [],
        "name": "isNumber",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 95,
          "end": 103,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 103,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 100,
              "end": 103
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 104,
        "end": 119,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 106,
          "end": 119,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 106,
            "end": 109,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 119,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 113,
              "end": 119
            }
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 198,
      "end": 301,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 235,
        "end": 301,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 241,
            "end": 257,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 247,
                "end": 256,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 256,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 202,
        "end": 233,
        "arguments": [
          {
            "type": "SequenceExpression",
            "start": 212,
            "end": 231,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 212,
                "end": 224,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 222,
                  "decorators": [],
                  "name": "otherValue",
                  "optional": false
                },
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 226,
                "end": 231,
                "decorators": [],
                "name": "value",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 202,
          "end": 210,
          "decorators": [],
          "name": "isNumber",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
