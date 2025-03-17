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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 42,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 42,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 39,
              "end": 42
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 49,
          "end": 56,
          "name": "w",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 56,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 53,
              "end": 56
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 61,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 75,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 75,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 72,
                "end": 75
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 119,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 118,
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 88,
            "end": 89,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "BinaryExpression",
            "start": 98,
            "end": 103,
            "left": {
              "type": "Literal",
              "start": 98,
              "end": 99,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 102,
              "end": 103,
              "value": 2,
              "raw": "2"
            }
          },
          {
            "type": "BinaryExpression",
            "start": 112,
            "end": 117,
            "left": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 186,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 185,
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 123,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 131,
            "end": 146,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 143,
              "end": 146,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 154,
            "end": 163,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 160,
              "end": 163,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "BinaryExpression",
            "start": 172,
            "end": 184,
            "left": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 247,
      "expression": {
        "type": "CallExpression",
        "start": 187,
        "end": 246,
        "callee": {
          "type": "Identifier",
          "start": 187,
          "end": 190,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 198,
            "end": 213,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 210,
              "end": 213,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 221,
            "end": 230,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 227,
              "end": 230,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "BinaryExpression",
            "start": 239,
            "end": 244,
            "left": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 333,
      "expression": {
        "type": "CallExpression",
        "start": 248,
        "end": 332,
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 264,
            "end": 279,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 276,
              "end": 279,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 291,
            "end": 300,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 297,
              "end": 300,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 324,
            "end": 331,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
