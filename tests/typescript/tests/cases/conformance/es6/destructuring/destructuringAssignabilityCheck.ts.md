__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 11,
            "end": 13
          },
          "definite": false,
          "start": 6,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 42
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 54
          },
          "definite": false,
          "start": 40,
          "end": 54
        }
      ],
      "declare": false,
      "start": 34,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [],
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 79
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 84,
            "end": 85
          },
          "id": null,
          "generator": false,
          "start": 76,
          "end": 85
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 87,
            "end": 89
          }
        ],
        "optional": false,
        "start": 75,
        "end": 90
      },
      "directive": null,
      "start": 75,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [],
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 115
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 120,
            "end": 121
          },
          "id": null,
          "generator": false,
          "start": 112,
          "end": 121
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 132
          }
        ],
        "optional": false,
        "start": 111,
        "end": 133
      },
      "directive": null,
      "start": 111,
      "end": 134
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 167
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 172,
              "end": 181
            },
            "start": 170,
            "end": 181
          },
          "start": 168,
          "end": 181
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 196,
              "end": 197
            },
            "start": 189,
            "end": 197
          }
        ],
        "start": 183,
        "end": 199
      },
      "expression": false,
      "start": 155,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 212
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 217,
              "end": 219
            },
            "start": 215,
            "end": 219
          },
          "start": 213,
          "end": 219
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 234,
              "end": 235
            },
            "start": 227,
            "end": 235
          }
        ],
        "start": 221,
        "end": 237
      },
      "expression": false,
      "start": 200,
      "end": 237
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 250,
                "end": 259
              },
              "start": 248,
              "end": 259
            },
            "start": 245,
            "end": 259
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 262,
            "end": 263
          },
          "definite": false,
          "start": 245,
          "end": 263
        }
      ],
      "declare": false,
      "start": 239,
      "end": 263
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 275,
                "end": 277
              },
              "start": 273,
              "end": 277
            },
            "start": 271,
            "end": 277
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 280,
            "end": 282
          },
          "definite": false,
          "start": 271,
          "end": 282
        }
      ],
      "declare": false,
      "start": 265,
      "end": 282
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 282
}
```
