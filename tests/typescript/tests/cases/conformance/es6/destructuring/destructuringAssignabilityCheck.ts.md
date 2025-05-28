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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 55,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 54,
          "id": {
            "type": "ObjectPattern",
            "start": 40,
            "end": 42,
            "decorators": [],
            "properties": [],
            "optional": false,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 91,
      "expression": {
        "type": "CallExpression",
        "start": 75,
        "end": 90,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 76,
          "end": 85,
          "expression": true,
          "async": false,
          "typeParameters": null,
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
          "body": {
            "type": "Literal",
            "start": 84,
            "end": 85,
            "value": 0,
            "raw": "0"
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 87,
            "end": 89,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 134,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 133,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 112,
          "end": 121,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 113,
              "end": 115,
              "decorators": [],
              "properties": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 120,
            "end": 121,
            "value": 0,
            "raw": "0"
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 155,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
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
          "type": "ObjectPattern",
          "start": 168,
          "end": 181,
          "decorators": [],
          "properties": [],
          "optional": false,
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
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 200,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 212,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 263,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 263,
          "id": {
            "type": "ObjectPattern",
            "start": 245,
            "end": 259,
            "decorators": [],
            "properties": [],
            "optional": false,
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
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 282,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 282,
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
