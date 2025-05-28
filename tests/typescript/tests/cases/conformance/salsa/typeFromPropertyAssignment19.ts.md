__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 50,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 49,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 114,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 65,
      "expression": {
        "type": "AssignmentExpression",
        "start": 37,
        "end": 65,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 37,
          "end": 44,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 47,
          "end": 65,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 47,
            "end": 61,
            "object": {
              "type": "Identifier",
              "start": 47,
              "end": 53,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 61,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "right": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 82,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 82,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 66,
          "end": 69,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 72,
          "end": 82,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "start": 77,
            "end": 82,
            "left": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "value": 1,
              "raw": "1"
            }
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 114,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 102,
            "end": 112,
            "expression": {
              "type": "AssignmentExpression",
              "start": 102,
              "end": 112,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 102,
                "end": 108,
                "object": {
                  "type": "ThisExpression",
                  "start": 102,
                  "end": 106
                },
                "property": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 111,
                "end": 112,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 66,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 47,
            "end": 66,
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 55,
                "end": 65,
                "value": "./semver",
                "raw": "\"./semver\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 83,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 77,
            "end": 83,
            "callee": {
              "type": "MemberExpression",
              "start": 77,
              "end": 80,
              "object": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 81,
                "end": 82,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
