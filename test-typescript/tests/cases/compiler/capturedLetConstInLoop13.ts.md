__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 354,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 354,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 77,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 77,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 42,
                    "end": 71,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 42,
                      "end": 70,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 56,
                          "end": 59,
                          "raw": "\"a\"",
                          "value": "a",
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "Literal",
                          "start": 61,
                          "end": 64,
                          "raw": "\"b\"",
                          "value": "b",
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "Literal",
                          "start": 66,
                          "end": 69,
                          "raw": "\"c\"",
                          "value": "c",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 42,
                        "end": 55,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 42,
                          "end": 46
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 55,
                          "decorators": [],
                          "name": "register",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 275,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 99,
              "decorators": [],
              "name": "register",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 275,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 275,
                "body": [
                  {
                    "type": "ForOfStatement",
                    "start": 136,
                    "end": 269,
                    "await": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 160,
                      "end": 269,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 175,
                          "end": 259,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 175,
                            "end": 258,
                            "arguments": [
                              {
                                "type": "ObjectExpression",
                                "start": 184,
                                "end": 257,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 202,
                                    "end": 242,
                                    "computed": true,
                                    "key": {
                                      "type": "BinaryExpression",
                                      "start": 203,
                                      "end": 214,
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 203,
                                        "end": 207,
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 210,
                                        "end": 214,
                                        "raw": "\".a\"",
                                        "value": ".a",
                                        "regex": null,
                                        "bigint": null
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 217,
                                      "end": 242,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 223,
                                        "end": 242,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 225,
                                            "end": 240,
                                            "directive": null,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 225,
                                              "end": 239,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "start": 234,
                                                  "end": 238,
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              ],
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 225,
                                                "end": 233,
                                                "computed": false,
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 225,
                                                  "end": 229
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 230,
                                                  "end": 233,
                                                  "decorators": [],
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              },
                                              "optional": false,
                                              "typeArguments": null
                                            }
                                          }
                                        ]
                                      },
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": [],
                                      "returnType": null,
                                      "typeParameters": null
                                    }
                                  }
                                ]
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 175,
                              "end": 183,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 175,
                                "end": 179
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 180,
                                "end": 183,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 141,
                      "end": 149,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 145,
                          "end": 149,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 149,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 158,
                      "decorators": [],
                      "name": "names",
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
                  "type": "RestElement",
                  "start": 100,
                  "end": 118,
                  "argument": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 108,
                    "decorators": [],
                    "name": "names",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 110,
                      "end": 118,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 110,
                        "end": 116
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 119,
                "end": 125,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 121,
                  "end": 125
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 281,
            "end": 310,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 310,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 307,
                "end": 310,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 293,
                  "end": 299,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 294,
                    "end": 299,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 296,
                      "end": 299
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 300,
                "end": 306,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 302,
                  "end": 306
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 316,
            "end": 351,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 327,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 327,
              "end": 351,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 351,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 328,
                  "end": 340,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 332,
                    "end": 340,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 334,
                      "end": 340
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 341,
                "end": 347,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 343,
                  "end": 347
                }
              },
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
        "end": 10,
        "decorators": [],
        "name": "Main",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 367,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 356,
        "end": 366,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 360,
          "end": 364,
          "decorators": [],
          "name": "Main",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
