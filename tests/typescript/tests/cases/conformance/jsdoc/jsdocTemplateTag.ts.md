__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "id": null,
              "generator": false,
              "start": 66,
              "end": 73
            },
            "start": 59,
            "end": 73
          }
        ],
        "start": 53,
        "end": 75
      },
      "expression": false,
      "start": 39,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 86,
                  "end": 87
                }
              ],
              "optional": false,
              "start": 84,
              "end": 88
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 84,
            "end": 90
          },
          "definite": false,
          "start": 80,
          "end": 90
        }
      ],
      "declare": false,
      "start": 76,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 169
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 171
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 193
              },
              "id": null,
              "generator": false,
              "start": 186,
              "end": 193
            },
            "start": 179,
            "end": 193
          }
        ],
        "start": 173,
        "end": 195
      },
      "expression": false,
      "start": 159,
      "end": 195
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 201
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 205
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "'hi'",
                  "start": 206,
                  "end": 210
                }
              ],
              "optional": false,
              "start": 204,
              "end": 211
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 204,
            "end": 213
          },
          "definite": false,
          "start": 200,
          "end": 213
        }
      ],
      "declare": false,
      "start": 196,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 363
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 373
            },
            "optional": false,
            "computed": false,
            "start": 356,
            "end": 373
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "animate",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 381
          },
          "optional": false,
          "computed": false,
          "start": 356,
          "end": 381
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "keyframes",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 402
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 404,
            "end": 406
          },
          "expression": false,
          "start": 384,
          "end": 406
        },
        "start": 356,
        "end": 406
      },
      "directive": null,
      "start": 356,
      "end": 407
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 407
}
```
