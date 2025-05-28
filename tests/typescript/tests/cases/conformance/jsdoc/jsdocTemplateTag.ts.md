__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 407,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "f",
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
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 75,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 59,
            "end": 73,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 66,
              "end": 73,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 90,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 84,
            "end": 90,
            "callee": {
              "type": "CallExpression",
              "start": 84,
              "end": 88,
              "callee": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 86,
                  "end": 87,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 169,
        "decorators": [],
        "name": "g",
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
          "start": 170,
          "end": 171,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 173,
        "end": 195,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 179,
            "end": 193,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 186,
              "end": 193,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 213,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 204,
            "end": 213,
            "callee": {
              "type": "CallExpression",
              "start": 204,
              "end": 211,
              "callee": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 206,
                  "end": 210,
                  "value": "hi",
                  "raw": "'hi'"
                }
              ],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 407,
      "expression": {
        "type": "AssignmentExpression",
        "start": 356,
        "end": 406,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 356,
          "end": 381,
          "object": {
            "type": "MemberExpression",
            "start": 356,
            "end": 373,
            "object": {
              "type": "Identifier",
              "start": 356,
              "end": 363,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 364,
              "end": 373,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 374,
            "end": 381,
            "decorators": [],
            "name": "animate",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 384,
          "end": 406,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 393,
              "end": 402,
              "decorators": [],
              "name": "keyframes",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 404,
            "end": 406,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
