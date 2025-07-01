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
            "type": "Identifier",
            "decorators": [],
            "name": "util",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 20
            },
            "right": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 29
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 37
                },
                "optional": false,
                "computed": false,
                "start": 23,
                "end": 37
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 40,
                "end": 42
              },
              "start": 23,
              "end": 42
            },
            "start": 13,
            "end": 42
          },
          "definite": false,
          "start": 6,
          "end": 42
        }
      ],
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 49,
            "end": 54
          },
          "prefix": true,
          "start": 48,
          "end": 54
        },
        "prefix": true,
        "start": 47,
        "end": 54
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "util",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 66
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "existy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 73
                },
                "optional": false,
                "computed": false,
                "start": 62,
                "end": 73
              },
              "right": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 88,
                  "end": 91
                },
                "expression": false,
                "start": 76,
                "end": 91
              },
              "start": 62,
              "end": 91
            },
            "directive": null,
            "start": 62,
            "end": 91
          }
        ],
        "start": 56,
        "end": 93
      },
      "alternate": null,
      "start": 43,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 94
}
```
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
            "type": "Identifier",
            "decorators": [],
            "name": "util",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 20
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 21,
                "end": 28
              }
            ],
            "optional": false,
            "start": 13,
            "end": 29
          },
          "definite": false,
          "start": 6,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 40
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "util",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 53
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "existy",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 60
              },
              "optional": false,
              "computed": false,
              "start": 49,
              "end": 60
            },
            "directive": null,
            "start": 49,
            "end": 60
          }
        ],
        "start": 43,
        "end": 74
      },
      "expression": false,
      "start": 30,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "util",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 79
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "existy",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 86
        },
        "optional": false,
        "computed": false,
        "start": 75,
        "end": 86
      },
      "directive": null,
      "start": 75,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 98
}
```
