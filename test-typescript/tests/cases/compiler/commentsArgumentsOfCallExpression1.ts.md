commentsArgumentsOfCallExpression1.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 216,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 32,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 32,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 47,
      "expression": {
        "type": "CallExpression",
        "start": 33,
        "end": 46,
        "arguments": [
          {
            "type": "Literal",
            "start": 44,
            "end": 45,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 33,
          "end": 36,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 75,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 59,
            "end": 74,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 71,
              "end": 74,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 108,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 107,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 97,
            "end": 106,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 103,
              "end": 106,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 151,
      "expression": {
        "type": "CallExpression",
        "start": 109,
        "end": 150,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 140,
            "end": 149,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 146,
              "end": 149,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 109,
          "end": 112,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 178,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 177,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 167,
            "end": 176,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 173,
              "end": 176,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 152,
          "end": 155,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 216,
      "expression": {
        "type": "CallExpression",
        "start": 179,
        "end": 215,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 205,
            "end": 214,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 211,
              "end": 214,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 179,
          "end": 182,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
