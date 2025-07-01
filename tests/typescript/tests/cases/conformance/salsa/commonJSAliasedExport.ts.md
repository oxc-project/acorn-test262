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
            "name": "donkey",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ast",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 19
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "ast",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 28
            },
            "id": null,
            "generator": false,
            "start": 15,
            "end": 28
          },
          "definite": false,
          "start": 6,
          "end": 28
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
        "name": "funky",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 45
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "declaration",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 57
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
              "value": false,
              "raw": "false",
              "start": 72,
              "end": 77
            },
            "start": 65,
            "end": 78
          }
        ],
        "start": 59,
        "end": 80
      },
      "expression": false,
      "start": 31,
      "end": 80
    },
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 87
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 95
          },
          "optional": false,
          "computed": false,
          "start": 81,
          "end": 95
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "donkey",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 104
        },
        "start": 81,
        "end": 104
      },
      "directive": null,
      "start": 81,
      "end": 105
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
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 112
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 120
            },
            "optional": false,
            "computed": false,
            "start": 106,
            "end": 120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "funky",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 126
          },
          "optional": false,
          "computed": false,
          "start": 106,
          "end": 126
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "funky",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 134
        },
        "start": 106,
        "end": 134
      },
      "directive": null,
      "start": 106,
      "end": 135
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 136
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funky",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 13
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funky",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 13
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 8,
                "end": 13
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 15
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./commonJSAliasedExport",
                "raw": "'./commonJSAliasedExport'",
                "start": 26,
                "end": 51
              }
            ],
            "optional": false,
            "start": 18,
            "end": 52
          },
          "definite": false,
          "start": 6,
          "end": 52
        }
      ],
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "diddy",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 86
          },
          "init": null,
          "definite": false,
          "start": 81,
          "end": 86
        }
      ],
      "declare": false,
      "start": 77,
      "end": 86
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "diddy",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 96
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "funky",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 104
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 105,
                "end": 106
              }
            ],
            "optional": false,
            "start": 99,
            "end": 107
          },
          "definite": false,
          "start": 91,
          "end": 107
        }
      ],
      "declare": false,
      "start": 87,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
