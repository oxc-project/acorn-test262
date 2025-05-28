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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
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
                "object": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 29,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 40,
                "end": 42,
                "properties": []
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 43,
      "end": 93,
      "test": {
        "type": "UnaryExpression",
        "start": 47,
        "end": 54,
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "start": 48,
          "end": 54,
          "operator": "!",
          "argument": {
            "type": "Literal",
            "start": 49,
            "end": 54,
            "value": false,
            "raw": "false"
          },
          "prefix": true
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 56,
        "end": 93,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 62,
            "end": 91,
            "expression": {
              "type": "AssignmentExpression",
              "start": 62,
              "end": 91,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 62,
                "end": 73,
                "object": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 66,
                  "decorators": [],
                  "name": "util",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "decorators": [],
                  "name": "existy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "FunctionExpression",
                "start": 76,
                "end": 91,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 88,
                  "end": 91,
                  "body": []
                },
                "expression": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
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
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 21,
                "end": 28,
                "value": "./mod",
                "raw": "'./mod'"
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
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "n",
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
        "start": 43,
        "end": 74,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 60,
            "expression": {
              "type": "MemberExpression",
              "start": 49,
              "end": 60,
              "object": {
                "type": "Identifier",
                "start": 49,
                "end": 53,
                "decorators": [],
                "name": "util",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "decorators": [],
                "name": "existy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 86,
      "expression": {
        "type": "MemberExpression",
        "start": 75,
        "end": 86,
        "object": {
          "type": "Identifier",
          "start": 75,
          "end": 79,
          "decorators": [],
          "name": "util",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 80,
          "end": 86,
          "decorators": [],
          "name": "existy",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
