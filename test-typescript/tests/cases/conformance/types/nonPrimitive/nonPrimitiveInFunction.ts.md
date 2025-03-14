nonPrimitiveInFunction.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 365,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 33,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "decorators": [],
        "name": "takeObject",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 29,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 29,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 23,
              "end": 29
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 84,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 84,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 72,
            "end": 82,
            "argument": {
              "type": "ObjectExpression",
              "start": 79,
              "end": 81,
              "properties": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 55,
        "decorators": [],
        "name": "returnObject",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 65,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 59,
          "end": 65
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 110,
            "decorators": [],
            "name": "nonPrimitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 104,
                "end": 110
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 134,
            "decorators": [],
            "name": "primitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 134,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 127,
                "end": 134
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 162,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 161,
        "arguments": [
          {
            "type": "Identifier",
            "start": 148,
            "end": 160,
            "decorators": [],
            "name": "nonPrimitive",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 147,
          "decorators": [],
          "name": "takeObject",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 163,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 163,
          "end": 175,
          "decorators": [],
          "name": "nonPrimitive",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 178,
          "end": 192,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 178,
            "end": 190,
            "decorators": [],
            "name": "returnObject",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 195,
      "end": 217,
      "expression": {
        "type": "CallExpression",
        "start": 195,
        "end": 216,
        "arguments": [
          {
            "type": "Identifier",
            "start": 206,
            "end": 215,
            "decorators": [],
            "name": "primitive",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 195,
          "end": 205,
          "decorators": [],
          "name": "takeObject",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 261,
      "expression": {
        "type": "AssignmentExpression",
        "start": 234,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 234,
          "end": 243,
          "decorators": [],
          "name": "primitive",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 246,
          "end": 260,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 246,
            "end": 258,
            "decorators": [],
            "name": "returnObject",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 279,
      "end": 364,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 310,
        "end": 364,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 316,
            "end": 330,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 320,
                "end": 329,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 323,
                  "decorators": [],
                  "name": "ret",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 326,
                  "end": 329,
                  "raw": "123",
                  "value": 123
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 335,
            "end": 346,
            "argument": {
              "type": "Identifier",
              "start": 342,
              "end": 345,
              "decorators": [],
              "name": "ret",
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
        "start": 288,
        "end": 299,
        "decorators": [],
        "name": "returnError",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 301,
        "end": 309,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 303,
          "end": 309
        }
      }
    }
  ],
  "sourceType": "script"
}
```
