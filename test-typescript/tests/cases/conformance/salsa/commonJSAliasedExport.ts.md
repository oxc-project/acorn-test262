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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "definite": false,
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
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "ast",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 80,
      "async": false,
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
              "raw": "false",
              "value": false,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 45,
        "decorators": [],
        "name": "funky",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 81,
          "end": 95,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 95,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 135,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 106,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 106,
          "end": 126,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 106,
            "end": 120,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 112,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 113,
              "end": 120,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 126,
            "decorators": [],
            "name": "funky",
            "optional": false,
            "typeAnnotation": null
          }
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
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 52,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 15,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 13,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "funky",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "funky",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 18,
            "end": 52,
            "arguments": [
              {
                "type": "Literal",
                "start": 26,
                "end": 51,
                "raw": "'./commonJSAliasedExport'",
                "value": "./commonJSAliasedExport",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
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
      "type": "VariableDeclaration",
      "start": 77,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 86,
            "decorators": [],
            "name": "diddy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 107,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 105,
                "end": 106,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 99,
              "end": 104,
              "decorators": [],
              "name": "funky",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
