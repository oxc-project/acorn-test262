__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 332,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 60,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 60,
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 26,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 26,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            }
          }
        },
        {
          "type": "Identifier",
          "start": 35,
          "end": 41,
          "decorators": [],
          "name": "y",
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
        },
        {
          "type": "Identifier",
          "start": 48,
          "end": 55,
          "decorators": [],
          "name": "w",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 55,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 52,
              "end": 55
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 74,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 74,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 71,
                "end": 74
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
      "start": 76,
      "end": 118,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 117,
        "arguments": [
          {
            "type": "Literal",
            "start": 87,
            "end": 88,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "BinaryExpression",
            "start": 97,
            "end": 102,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 97,
              "end": 98,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 111,
            "end": 116,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 76,
          "end": 79,
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
      "start": 119,
      "end": 185,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 119,
        "end": 184,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 130,
            "end": 145,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 142,
              "end": 145,
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
            "start": 153,
            "end": 162,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 159,
              "end": 162,
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
            "start": 171,
            "end": 183,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 119,
          "end": 122,
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
      "start": 186,
      "end": 246,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 186,
        "end": 245,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 197,
            "end": 212,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 209,
              "end": 212,
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
            "start": 220,
            "end": 229,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 226,
              "end": 229,
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
            "start": 238,
            "end": 243,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 186,
          "end": 189,
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
      "start": 247,
      "end": 332,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 247,
        "end": 331,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 263,
            "end": 278,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 275,
              "end": 278,
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
            "start": 290,
            "end": 299,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 296,
              "end": 299,
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
            "start": 323,
            "end": 330,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 247,
          "end": 250,
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
