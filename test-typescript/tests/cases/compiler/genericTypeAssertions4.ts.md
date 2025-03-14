genericTypeAssertions4.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 36,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 34,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 34,
              "async": false,
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
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 83,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 81,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 81,
              "async": false,
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
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 128,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 128,
              "async": false,
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
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "A",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 140,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 150,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 449,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
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
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
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
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
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
                "decorators": [],
                "name": "y",
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
                  "decorators": [],
                  "name": "a",
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
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
                "decorators": [],
                "name": "y",
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
                  "decorators": [],
                  "name": "b",
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
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
                "decorators": [],
                "name": "y",
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
                  "decorators": [],
                  "name": "c",
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
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
        "start": 172,
        "end": 176,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 190,
          "end": 194,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 176,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 177,
            "end": 188,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 187,
              "end": 188,
              "typeName": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
