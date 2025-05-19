__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 57,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 57,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 34,
        "end": 57,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 34,
          "end": 52,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 34,
            "end": 41,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 52,
            "decorators": [],
            "name": "formatters",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 55,
          "end": 57,
          "properties": []
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
  "end": 79,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 26,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 26,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 0,
          "end": 7,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 10,
          "end": 26,
          "arguments": [
            {
              "type": "Literal",
              "start": 18,
              "end": 25,
              "raw": "'./mod'",
              "value": "./mod"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 10,
            "end": 17,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 27,
          "end": 47,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 27,
            "end": 45,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 27,
              "end": 34,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 35,
              "end": 45,
              "decorators": [],
              "name": "formatters",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 50,
          "end": 79,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 63,
            "end": 79,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 69,
                "end": 77,
                "argument": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
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
  "end": 80,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 26,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 26,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 0,
          "end": 7,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 10,
          "end": 26,
          "arguments": [
            {
              "type": "Literal",
              "start": 18,
              "end": 25,
              "raw": "'./mod'",
              "value": "./mod"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 10,
            "end": 17,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 27,
          "end": 47,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 27,
            "end": 45,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 27,
              "end": 34,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 35,
              "end": 45,
              "decorators": [],
              "name": "formatters",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 50,
          "end": 79,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 63,
            "end": 79,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 69,
                "end": 77,
                "argument": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
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
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "raw": "'./mod'",
        "value": "./mod"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "debug",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 50,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 32,
        "end": 50,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 32,
          "end": 48,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 32,
            "end": 37,
            "decorators": [],
            "name": "debug",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 38,
            "end": 48,
            "decorators": [],
            "name": "formatters",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 61,
            "end": 82,
            "arguments": [
              {
                "type": "Literal",
                "start": 80,
                "end": 81,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 61,
              "end": 79,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 61,
                "end": 77,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 66,
                  "decorators": [],
                  "name": "debug",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 77,
                  "decorators": [],
                  "name": "formatters",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
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
