__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 44,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 37,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 37,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 43,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 40,
          "end": 43
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 69,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 69,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 66,
                "end": 69
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 107,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 91,
                "end": 107,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 93,
                    "end": 105,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 100,
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 102,
                        "end": 105
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
  "start": 35,
  "end": 118,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 35,
        "end": 63,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 35,
          "end": 42,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 45,
          "end": 63,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 45,
            "end": 59,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 45,
              "end": 51,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 52,
              "end": 59,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 86,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 86,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 64,
          "end": 73,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 71,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 76,
          "end": 86,
          "async": false,
          "body": {
            "type": "BinaryExpression",
            "start": 81,
            "end": 86,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 85,
              "end": 86,
              "raw": "1",
              "value": 1
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 118,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 118,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 106,
            "end": 116,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 106,
              "end": 116,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 106,
                "end": 112,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 106,
                  "end": 110
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 115,
                "end": 116,
                "raw": "1",
                "value": 1
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
        "start": 96,
        "end": 97,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
  "start": 35,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 45,
            "end": 64,
            "arguments": [
              {
                "type": "Literal",
                "start": 53,
                "end": 63,
                "raw": "\"./semver\"",
                "value": "./semver"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 45,
              "end": 52,
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
      "start": 65,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 75,
            "end": 81,
            "arguments": [
              {
                "type": "Literal",
                "start": 79,
                "end": 80,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 75,
              "end": 78,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "f",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 90,
            "end": 95,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
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
