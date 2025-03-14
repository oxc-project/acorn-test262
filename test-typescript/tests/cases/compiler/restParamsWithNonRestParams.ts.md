restParamsWithNonRestParams.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 29,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 29,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 13,
          "end": 26,
          "argument": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 26,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 18,
              "end": 26,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 36,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 35,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 83,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 83,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 56,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 57,
          "end": 65,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 65,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 59,
              "end": 65
            }
          }
        },
        {
          "type": "RestElement",
          "start": 67,
          "end": 80,
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 80,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 72,
              "end": 80,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 72,
                "end": 78
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 91,
      "expression": {
        "type": "CallExpression",
        "start": 84,
        "end": 90,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 84,
          "end": 88,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 155,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 153,
        "end": 155,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 127,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 128,
          "end": 137,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 137,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 131,
              "end": 137
            }
          }
        },
        {
          "type": "RestElement",
          "start": 139,
          "end": 152,
          "argument": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 152,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 144,
              "end": 152,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 163,
      "expression": {
        "type": "CallExpression",
        "start": 156,
        "end": 162,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 156,
          "end": 160,
          "decorators": [],
          "name": "foo3",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
