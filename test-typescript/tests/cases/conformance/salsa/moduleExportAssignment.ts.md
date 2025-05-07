__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 245,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 53,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 53,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "EE",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "decorators": [],
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 69,
            "end": 94,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 69,
              "end": 83,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 69,
                "end": 75,
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 83,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "NewExpression",
              "start": 86,
              "end": 94,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 90,
                "end": 92,
                "decorators": [],
                "name": "EE",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 111,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 111,
        "arguments": [
          {
            "type": "Literal",
            "start": 106,
            "end": 110,
            "raw": "'hi'",
            "value": "hi",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 96,
          "end": 105,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 105,
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 171,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 171,
        "arguments": [
          {
            "type": "Literal",
            "start": 166,
            "end": 170,
            "raw": "'hi'",
            "value": "hi",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 148,
          "end": 165,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 148,
            "end": 162,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 148,
              "end": 154,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 155,
              "end": 162,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 163,
            "end": 165,
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 197,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 197,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 185,
          "end": 193,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 185,
            "end": 191,
            "decorators": [],
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 196,
          "end": 197,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 218,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 218,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 198,
          "end": 214,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 198,
            "end": 212,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 198,
              "end": 204,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 205,
              "end": 212,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 217,
          "end": 218,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 227,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 219,
        "end": 227,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 219,
          "end": 225,
          "decorators": [],
          "name": "npmlog",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 226,
          "end": 227,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 244,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 228,
        "end": 244,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 228,
          "end": 242,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 228,
            "end": 234,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 235,
            "end": 242,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "decorators": [],
          "name": "x",
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
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 32,
            "arguments": [
              {
                "type": "Literal",
                "start": 21,
                "end": 31,
                "raw": "'./npmlog'",
                "value": "./npmlog",
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
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 41,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 33,
        "end": 41,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 33,
          "end": 39,
          "decorators": [],
          "name": "npmlog",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 51,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 42,
        "end": 51,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 48,
          "decorators": [],
          "name": "npmlog",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 49,
          "end": 51,
          "decorators": [],
          "name": "on",
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
