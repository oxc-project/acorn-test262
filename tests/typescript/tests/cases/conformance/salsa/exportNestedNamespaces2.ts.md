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
      "expression": {
        "type": "AssignmentExpression",
        "start": 34,
        "end": 57,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 34,
          "end": 52,
          "object": {
            "type": "Identifier",
            "start": 34,
            "end": 41,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 52,
            "decorators": [],
            "name": "formatters",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 55,
          "end": 57,
          "properties": []
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
  "end": 79,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 26,
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
          "callee": {
            "type": "Identifier",
            "start": 10,
            "end": 17,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 18,
              "end": 25,
              "value": "./mod",
              "raw": "'./mod'"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 27,
          "end": 47,
          "object": {
            "type": "MemberExpression",
            "start": 27,
            "end": 45,
            "object": {
              "type": "Identifier",
              "start": 27,
              "end": 34,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 35,
              "end": 45,
              "decorators": [],
              "name": "formatters",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 50,
          "end": 79,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          "expression": false
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
  "end": 80,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 26,
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
          "callee": {
            "type": "Identifier",
            "start": 10,
            "end": 17,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 18,
              "end": 25,
              "value": "./mod",
              "raw": "'./mod'"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 27,
          "end": 47,
          "object": {
            "type": "MemberExpression",
            "start": 27,
            "end": 45,
            "object": {
              "type": "Identifier",
              "start": 27,
              "end": 34,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 35,
              "end": 45,
              "decorators": [],
              "name": "formatters",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 50,
          "end": 79,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          "expression": false
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
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
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
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "./mod",
        "raw": "'./mod'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 50,
      "expression": {
        "type": "MemberExpression",
        "start": 32,
        "end": 50,
        "object": {
          "type": "MemberExpression",
          "start": 32,
          "end": 48,
          "object": {
            "type": "Identifier",
            "start": 32,
            "end": 37,
            "decorators": [],
            "name": "debug",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 38,
            "end": 48,
            "decorators": [],
            "name": "formatters",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 82,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 82,
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
            "callee": {
              "type": "MemberExpression",
              "start": 61,
              "end": 79,
              "object": {
                "type": "MemberExpression",
                "start": 61,
                "end": 77,
                "object": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 66,
                  "decorators": [],
                  "name": "debug",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 77,
                  "decorators": [],
                  "name": "formatters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "o",
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
                "start": 80,
                "end": 81,
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
