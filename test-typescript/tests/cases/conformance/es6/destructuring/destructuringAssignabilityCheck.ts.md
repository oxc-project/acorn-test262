__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 282,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 6,
            "end": 8,
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 13,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 54,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 40,
            "end": 42,
            "decorators": [],
            "optional": false,
            "properties": [],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 45,
            "end": 54,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 91,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 75,
        "end": 90,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 87,
            "end": 89,
            "properties": []
          }
        ],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 76,
          "end": 85,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 84,
            "end": 85,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "ArrayPattern",
              "start": 77,
              "end": 79,
              "decorators": [],
              "elements": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 134,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 133,
        "arguments": [
          {
            "type": "Identifier",
            "start": 123,
            "end": 132,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 112,
          "end": 121,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 120,
            "end": 121,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 113,
              "end": 115,
              "decorators": [],
              "optional": false,
              "properties": [],
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 155,
      "end": 199,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 183,
        "end": 199,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 189,
            "end": 197,
            "argument": {
              "type": "Literal",
              "start": 196,
              "end": 197,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 168,
          "end": 181,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 170,
            "end": 181,
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 172,
              "end": 181
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 200,
      "end": 237,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 221,
        "end": 237,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 227,
            "end": 235,
            "argument": {
              "type": "Literal",
              "start": 234,
              "end": 235,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 212,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 213,
          "end": 219,
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 219,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 217,
              "end": 219,
              "members": []
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 263,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 245,
            "end": 259,
            "decorators": [],
            "optional": false,
            "properties": [],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 259,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 250,
                "end": 259
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 262,
            "end": 263,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 282,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 271,
            "end": 277,
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 277,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 275,
                "end": 277,
                "members": []
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 280,
            "end": 282,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
