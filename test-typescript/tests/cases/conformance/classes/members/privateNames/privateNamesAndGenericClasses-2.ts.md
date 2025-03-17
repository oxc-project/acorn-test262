__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 538,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 244,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 21,
              "name": "foo"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 71,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 30,
              "end": 34,
              "name": "bar"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 71,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 76,
            "end": 145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 87,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 88,
                  "end": 92,
                  "name": "t",
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
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 150,
            "end": 193,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 193,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 162,
                  "name": "t",
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
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 185,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 198,
            "end": 242,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 205,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 205,
              "end": 242,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 254,
            "end": 262,
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 260,
                "end": 261,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 272,
            "end": 286,
            "callee": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 278,
                "end": 285,
                "value": "hello",
                "raw": "\"hello\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 291,
            "end": 294,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 360,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 352,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 352,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 346,
                "end": 352
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 355,
            "end": 360,
            "object": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 357,
              "end": 360,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 387,
          "end": 391,
          "name": "foo"
        },
        "computed": false,
        "optional": false
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 440,
          "end": 441,
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 491,
          "end": 492,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
