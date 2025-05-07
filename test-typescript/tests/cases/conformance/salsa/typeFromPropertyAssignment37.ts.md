__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "util",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 13,
            "end": 42,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "AssignmentExpression",
              "start": 23,
              "end": 42,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 23,
                "end": 37,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 29,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ObjectExpression",
                "start": 40,
                "end": 42,
                "properties": []
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 43,
      "end": 93,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 56,
        "end": 93,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 62,
            "end": 91,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 62,
              "end": 91,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 62,
                "end": 73,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 66,
                  "decorators": [],
                  "name": "util",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "decorators": [],
                  "name": "existy",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "FunctionExpression",
                "start": 76,
                "end": 91,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 88,
                  "end": 91,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 47,
        "end": 54,
        "argument": {
          "type": "UnaryExpression",
          "start": 48,
          "end": 54,
          "argument": {
            "type": "Literal",
            "start": 49,
            "end": 54,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          },
          "operator": "!",
          "prefix": true
        },
        "operator": "!",
        "prefix": true
      }
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
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "util",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 29,
            "arguments": [
              {
                "type": "Literal",
                "start": 21,
                "end": 28,
                "raw": "'./mod'",
                "value": "./mod",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 74,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 74,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 60,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 49,
              "end": 60,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 49,
                "end": 53,
                "decorators": [],
                "name": "util",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "decorators": [],
                "name": "existy",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "n",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 86,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 75,
        "end": 86,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 75,
          "end": 79,
          "decorators": [],
          "name": "util",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 80,
          "end": 86,
          "decorators": [],
          "name": "existy",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
