__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 449,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 36,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 34,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 34,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 22,
                    "end": 32,
                    "argument": {
                      "type": "Literal",
                      "start": 29,
                      "end": 31,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 81,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 81,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 81,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 70,
                    "end": 79,
                    "argument": {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 128,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 128,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 128,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 117,
                    "end": 126,
                    "argument": {
                      "type": "Literal",
                      "start": 124,
                      "end": 125,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 140,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 150,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 150,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 449,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 176,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 190,
          "end": 194,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 194,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 193,
              "end": 194,
              "typeName": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 449,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 202,
            "end": 212,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 206,
                "end": 211,
                "id": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 217,
            "end": 223,
            "expression": {
              "type": "AssignmentExpression",
              "start": 217,
              "end": 222,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 260,
            "end": 266,
            "expression": {
              "type": "AssignmentExpression",
              "start": 260,
              "end": 265,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 303,
            "end": 309,
            "expression": {
              "type": "AssignmentExpression",
              "start": 303,
              "end": 308,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 346,
            "end": 355,
            "expression": {
              "type": "AssignmentExpression",
              "start": 346,
              "end": 354,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 346,
                "end": 347,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "TSTypeAssertion",
                "start": 350,
                "end": 354,
                "expression": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 354,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 351,
                  "end": 352,
                  "typeName": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 352,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 360,
            "end": 369,
            "expression": {
              "type": "AssignmentExpression",
              "start": 360,
              "end": 368,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 360,
                "end": 361,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "TSTypeAssertion",
                "start": 364,
                "end": 368,
                "expression": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 365,
                  "end": 366,
                  "typeName": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 366,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 406,
            "end": 415,
            "expression": {
              "type": "AssignmentExpression",
              "start": 406,
              "end": 414,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 406,
                "end": 407,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "TSTypeAssertion",
                "start": 410,
                "end": 414,
                "expression": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 411,
                  "end": 412,
                  "typeName": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 412,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 176,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 177,
            "end": 188,
            "name": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 187,
              "end": 188,
              "typeName": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
