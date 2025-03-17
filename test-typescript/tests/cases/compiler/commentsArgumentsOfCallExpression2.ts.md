__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 333,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 61,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 61,
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
        "optional": false,
        "typeAnnotation": null
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
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 42,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 42,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 39,
              "end": 42
            }
          }
        },
        {
          "type": "Identifier",
          "start": 49,
          "end": 56,
          "decorators": [],
          "name": "w",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 56,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 53,
              "end": 56
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 75,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 75,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 72,
                "end": 75
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
      "start": 77,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 118,
        "arguments": [
          {
            "type": "Literal",
            "start": 88,
            "end": 89,
            "raw": "1",
            "value": 1
          },
          {
            "type": "BinaryExpression",
            "start": 98,
            "end": 103,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 98,
              "end": 99,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "Literal",
              "start": 102,
              "end": 103,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "BinaryExpression",
            "start": 112,
            "end": 117,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 185,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 131,
            "end": 146,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 143,
              "end": 146,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 154,
            "end": 163,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 160,
              "end": 163,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "BinaryExpression",
            "start": 172,
            "end": 184,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 123,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 247,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 187,
        "end": 246,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 198,
            "end": 213,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 210,
              "end": 213,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 221,
            "end": 230,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 227,
              "end": 230,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "BinaryExpression",
            "start": 239,
            "end": 244,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 187,
          "end": 190,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 333,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 248,
        "end": 332,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 264,
            "end": 279,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 276,
              "end": 279,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 291,
            "end": 300,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 297,
              "end": 300,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "Literal",
            "start": 324,
            "end": 331,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
