__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
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
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "decorators": [],
            "name": "donkey",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 15,
            "end": 28,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 16,
                "end": 19,
                "decorators": [],
                "name": "ast",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "ast",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 45,
        "decorators": [],
        "name": "funky",
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
          "start": 46,
          "end": 57,
          "decorators": [],
          "name": "declaration",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 80,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 65,
            "end": 78,
            "argument": {
              "type": "Literal",
              "start": 72,
              "end": 77,
              "value": false,
              "raw": "false"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 81,
          "end": 95,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 95,
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
          "start": 98,
          "end": 104,
          "decorators": [],
          "name": "donkey",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 106,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 106,
          "end": 126,
          "object": {
            "type": "MemberExpression",
            "start": 106,
            "end": 120,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 112,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 113,
              "end": 120,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 126,
            "decorators": [],
            "name": "funky",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 129,
          "end": 134,
          "decorators": [],
          "name": "funky",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
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
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 53,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 52,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 15,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 13,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "funky",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "funky",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 18,
            "end": 52,
            "callee": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 26,
                "end": 51,
                "value": "./commonJSAliasedExport",
                "raw": "'./commonJSAliasedExport'"
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
      "start": 77,
      "end": 86,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 86,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 86,
            "decorators": [],
            "name": "diddy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 107,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 96,
            "decorators": [],
            "name": "diddy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 99,
            "end": 107,
            "callee": {
              "type": "Identifier",
              "start": 99,
              "end": 104,
              "decorators": [],
              "name": "funky",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 105,
                "end": 106,
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
