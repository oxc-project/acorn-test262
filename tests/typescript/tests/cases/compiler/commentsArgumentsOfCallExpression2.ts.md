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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 60,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 75,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 74,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 118,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 117,
        "callee": {
          "type": "Identifier",
          "start": 76,
          "end": 79,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 87,
            "end": 88,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "BinaryExpression",
            "start": 97,
            "end": 102,
            "left": {
              "type": "Literal",
              "start": 97,
              "end": 98,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "value": 2,
              "raw": "2"
            }
          },
          {
            "type": "BinaryExpression",
            "start": 111,
            "end": 116,
            "left": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 119,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 119,
        "end": 184,
        "callee": {
          "type": "Identifier",
          "start": 119,
          "end": 122,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 130,
            "end": 145,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 142,
              "end": 145,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 153,
            "end": 162,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 159,
              "end": 162,
              "body": []
            },
            "id": null,
            "generator": false
          },
          {
            "type": "BinaryExpression",
            "start": 171,
            "end": 183,
            "left": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 186,
      "end": 246,
      "expression": {
        "type": "CallExpression",
        "start": 186,
        "end": 245,
        "callee": {
          "type": "Identifier",
          "start": 186,
          "end": 189,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 197,
            "end": 212,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 209,
              "end": 212,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 220,
            "end": 229,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 226,
              "end": 229,
              "body": []
            },
            "id": null,
            "generator": false
          },
          {
            "type": "BinaryExpression",
            "start": 238,
            "end": 243,
            "left": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 332,
      "expression": {
        "type": "CallExpression",
        "start": 247,
        "end": 331,
        "callee": {
          "type": "Identifier",
          "start": 247,
          "end": 250,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 263,
            "end": 278,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 275,
              "end": 278,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 290,
            "end": 299,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 296,
              "end": 299,
              "body": []
            },
            "id": null,
            "generator": false
          },
          {
            "type": "Literal",
            "start": 323,
            "end": 330,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
