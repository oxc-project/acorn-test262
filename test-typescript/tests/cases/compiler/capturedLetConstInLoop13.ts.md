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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Main",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 354,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 77,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 77,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 77,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 42,
                    "end": 71,
                    "expression": {
                      "type": "CallExpression",
                      "start": 42,
                      "end": 70,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 42,
                        "end": 55,
                        "object": {
                          "type": "ThisExpression",
                          "start": 42,
                          "end": 46
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 55,
                          "name": "register",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 56,
                          "end": 59,
                          "value": "a",
                          "raw": "\"a\""
                        },
                        {
                          "type": "Literal",
                          "start": 61,
                          "end": 64,
                          "value": "b",
                          "raw": "\"b\""
                        },
                        {
                          "type": "Literal",
                          "start": 66,
                          "end": 69,
                          "value": "c",
                          "raw": "\"c\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
            "start": 83,
            "end": 275,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 99,
              "name": "register",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 275,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 100,
                  "end": 118,
                  "argument": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 108,
                    "name": "names",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 141,
                      "end": 149,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 145,
                          "end": 149,
                          "id": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 149,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 158,
                      "name": "names",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 160,
                      "end": 269,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 175,
                          "end": 259,
                          "expression": {
                            "type": "CallExpression",
                            "start": 175,
                            "end": 258,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 175,
                              "end": 183,
                              "object": {
                                "type": "ThisExpression",
                                "start": 175,
                                "end": 179
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 180,
                                "end": 183,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
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
                                    "method": false,
                                    "shorthand": false,
                                    "computed": true,
                                    "key": {
                                      "type": "BinaryExpression",
                                      "start": 203,
                                      "end": 214,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 203,
                                        "end": 207,
                                        "name": "name",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "start": 210,
                                        "end": 214,
                                        "value": ".a",
                                        "raw": "\".a\""
                                      }
                                    },
                                    "value": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 217,
                                      "end": 242,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 223,
                                        "end": 242,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 225,
                                            "end": 240,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 225,
                                              "end": 239,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 225,
                                                "end": 233,
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 225,
                                                  "end": 229
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 230,
                                                  "end": 233,
                                                  "name": "foo",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "computed": false,
                                                "optional": false
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "start": 234,
                                                  "end": 238,
                                                  "name": "name",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                }
                                              ],
                                              "optional": false,
                                              "typeArguments": null
                                            },
                                            "directive": null
                                          }
                                        ]
                                      },
                                      "typeParameters": null,
                                      "returnType": null
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 119,
                "end": 125,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 121,
                  "end": 125
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 281,
            "end": 310,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 310,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 293,
                  "end": 299,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 294,
                    "end": 299,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 296,
                      "end": 299
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 307,
                "end": 310,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 300,
                "end": 306,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 302,
                  "end": 306
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 316,
            "end": 351,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 327,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 327,
              "end": 351,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 328,
                  "end": 340,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 332,
                    "end": 340,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 334,
                      "end": 340
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 351,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 341,
                "end": 347,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 343,
                  "end": 347
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
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
      "type": "ExpressionStatement",
      "start": 356,
      "end": 367,
      "expression": {
        "type": "NewExpression",
        "start": 356,
        "end": 366,
        "callee": {
          "type": "Identifier",
          "start": 360,
          "end": 364,
          "name": "Main",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
