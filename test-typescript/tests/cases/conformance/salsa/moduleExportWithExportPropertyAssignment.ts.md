__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 36,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 20,
                "end": 36,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 22,
                    "end": 34,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 29,
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
                      "start": 29,
                      "end": 34,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 31,
                        "end": 34
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
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 82,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 62,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 75,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 75,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 69,
              "end": 75
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 81,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 78,
          "end": 81
        }
      },
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
  "start": 41,
  "end": 135,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 73,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 73,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 55,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 47,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 48,
            "end": 55,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 58,
          "end": 73,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 70,
            "end": 73,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 134,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 99,
          "end": 115,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 99,
            "end": 113,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 99,
              "end": 105,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 118,
          "end": 134,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 131,
            "end": 134,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "a",
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
  "start": 41,
  "end": 116,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 52,
            "end": 69,
            "arguments": [
              {
                "type": "Literal",
                "start": 60,
                "end": 68,
                "raw": "'./mod1'",
                "value": "./mod1",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 52,
              "end": 59,
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
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 76,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 76,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 74,
          "decorators": [],
          "name": "mod1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 85,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 85,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 83,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
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
  "sourceType": "module",
  "hashbang": null
}
```
