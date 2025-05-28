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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 354,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 77,
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
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 77,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "register",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                      "optional": false
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
            "start": 83,
            "end": 275,
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
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 275,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 100,
                  "end": 118,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 108,
                    "decorators": [],
                    "name": "names",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 145,
                          "end": 149,
                          "id": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 149,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 158,
                      "decorators": [],
                      "name": "names",
                      "optional": false,
                      "typeAnnotation": null
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
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
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
                                    "kind": "init",
                                    "key": {
                                      "type": "BinaryExpression",
                                      "start": 203,
                                      "end": 214,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 203,
                                        "end": 207,
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false,
                                        "typeAnnotation": null
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
                                      "expression": false,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
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
                                                  "decorators": [],
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
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
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      },
                                      "id": null,
                                      "generator": false
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": true,
                                    "optional": false
                                  }
                                ]
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 281,
            "end": 310,
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
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 310,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 307,
                "end": 310,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 316,
            "end": 351,
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
            "value": {
              "type": "FunctionExpression",
              "start": 327,
              "end": 351,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 351,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
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
          "decorators": [],
          "name": "Main",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
