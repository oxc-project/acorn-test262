__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 537,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 244,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 244,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 25,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 21,
              "name": "foo"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 71,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 30,
              "end": 34,
              "name": "bar"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 71,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 38,
                  "end": 39,
                  "typeName": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 48,
                    "end": 65,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 55,
                      "end": 64,
                      "object": {
                        "type": "ThisExpression",
                        "start": 55,
                        "end": 59
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 60,
                        "end": 64,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 76,
            "end": 145,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 87,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 145,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 88,
                  "end": 92,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 91,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 145,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 116,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 115,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 111,
                        "object": {
                          "type": "ThisExpression",
                          "start": 102,
                          "end": 106
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 107,
                          "end": 111,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 123,
                    "end": 139,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 123,
                      "end": 138,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 127,
                        "end": 138,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 136,
                          "object": {
                            "type": "ThisExpression",
                            "start": 127,
                            "end": 131
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 132,
                            "end": 136,
                            "name": "bar"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 150,
            "end": 193,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 193,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 162,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 159,
                    "end": 162,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 161,
                      "end": 162,
                      "typeName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 164,
                "end": 193,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 172,
                    "end": 186,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 172,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 172,
                        "end": 181,
                        "object": {
                          "type": "ThisExpression",
                          "start": 172,
                          "end": 176
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 177,
                          "end": 181,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 185,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 198,
            "end": 242,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 205,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 205,
              "end": 242,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 207,
                "end": 210,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 209,
                  "end": 210,
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 211,
                "end": 242,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 219,
                    "end": 236,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 226,
                      "end": 235,
                      "object": {
                        "type": "ThisExpression",
                        "start": 226,
                        "end": 230
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 231,
                        "end": 235,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 263,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 254,
            "end": 262,
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 260,
                "end": 261,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 287,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 272,
            "end": 286,
            "callee": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 278,
                "end": 285,
                "value": "hello",
                "raw": "\"hello\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 298,
      "expression": {
        "type": "AssignmentExpression",
        "start": 289,
        "end": 298,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 289,
          "end": 294,
          "object": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 291,
            "end": 294,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 297,
          "end": 298,
          "value": 5,
          "raw": "5"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 337,
      "end": 360,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 360,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 352,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 352,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 346,
                "end": 352
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 355,
            "end": 360,
            "object": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 357,
              "end": 360,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 385,
      "end": 392,
      "expression": {
        "type": "MemberExpression",
        "start": 385,
        "end": 391,
        "object": {
          "type": "Identifier",
          "start": 385,
          "end": 386,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 387,
          "end": 391,
          "name": "foo"
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 436,
      "end": 442,
      "expression": {
        "type": "AssignmentExpression",
        "start": 436,
        "end": 441,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 436,
          "end": 437,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 440,
          "end": 441,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 487,
      "end": 493,
      "expression": {
        "type": "AssignmentExpression",
        "start": 487,
        "end": 492,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 487,
          "end": 488,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 491,
          "end": 492,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
