__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
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
      "start": 26,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 49,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
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
  "start": 37,
  "end": 272,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 37,
        "end": 63,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 37,
          "end": 51,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 54,
          "end": 63,
          "decorators": [],
          "name": "minimatch",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 64,
          "end": 75,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 73,
            "decorators": [],
            "name": "minimatch",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 105,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 80,
          "end": 96,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 80,
            "end": 89,
            "decorators": [],
            "name": "minimatch",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 96,
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 99,
          "end": 105,
          "decorators": [],
          "name": "filter",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 150,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 124,
        "end": 150,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 130,
            "end": 148,
            "argument": {
              "type": "CallExpression",
              "start": 137,
              "end": 148,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 137,
                "end": 146,
                "decorators": [],
                "name": "minimatch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 121,
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 151,
      "end": 175,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 172,
        "end": 175,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 169,
        "decorators": [],
        "name": "minimatch",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 222,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 176,
          "end": 186,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 178,
            "end": 186,
            "decorators": [],
            "name": "defaults",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 189,
          "end": 222,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 204,
            "end": 222,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 210,
                "end": 220,
                "argument": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 220,
                  "decorators": [],
                  "name": "def",
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
              "start": 199,
              "end": 202,
              "decorators": [],
              "name": "def",
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
      "type": "ExpressionStatement",
      "start": 223,
      "end": 254,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 223,
        "end": 254,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 223,
          "end": 236,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 223,
            "end": 234,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 225,
              "end": 234,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 239,
          "end": 254,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 251,
            "end": 254,
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
      "type": "FunctionDeclaration",
      "start": 255,
      "end": 271,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 268,
        "end": 271,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 265,
        "decorators": [],
        "name": "M",
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
  "start": 37,
  "end": 129,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "mini",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 48,
            "end": 70,
            "arguments": [
              {
                "type": "Literal",
                "start": 56,
                "end": 69,
                "raw": "'./minimatch'",
                "value": "./minimatch"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 48,
              "end": 55,
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
      "start": 71,
      "end": 88,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 88,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 71,
          "end": 86,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 71,
            "end": 77,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "decorators": [],
              "name": "mini",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 78,
            "end": 86,
            "decorators": [],
            "name": "defaults",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 97,
            "end": 109,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 101,
              "end": 107,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 101,
                "end": 105,
                "decorators": [],
                "name": "mini",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 115,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 115,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 110,
          "end": 113,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "m",
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
      "start": 116,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 129,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 127,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 120,
            "decorators": [],
            "name": "mini",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "decorators": [],
            "name": "filter",
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
