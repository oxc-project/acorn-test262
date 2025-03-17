__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 412,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 11,
            "end": 21,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 14,
                "end": 20
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 176,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 37,
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
              "start": 37,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 176,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 50,
                    "end": 107,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 50,
                      "end": 106,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 50,
                        "end": 56,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 50,
                          "end": 54
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 59,
                        "end": 106,
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 60,
                          "end": 103,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 66,
                            "end": 103,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 71,
                                "end": 81,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 75,
                                    "end": 80,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 75,
                                      "end": 76,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 79,
                                      "end": 80,
                                      "raw": "1",
                                      "value": 1
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 85,
                                "end": 99,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 92,
                                  "end": 98,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 92,
                                    "end": 96
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 97,
                                    "end": 98,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
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
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 170,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 110,
                      "end": 169,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 110,
                        "end": 116,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 110,
                          "end": 114
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 119,
                        "end": 169,
                        "arguments": [],
                        "callee": {
                          "type": "FunctionExpression",
                          "start": 119,
                          "end": 167,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 130,
                            "end": 167,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 135,
                                "end": 145,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 139,
                                    "end": 144,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 139,
                                      "end": 140,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 143,
                                      "end": 144,
                                      "raw": "1",
                                      "value": 1
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 149,
                                "end": 163,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 156,
                                  "end": 162,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 156,
                                    "end": 160
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 161,
                                    "end": 162,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
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
                        },
                        "optional": false,
                        "typeArguments": null
                      }
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
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 181,
      "end": 265,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 208,
        "decorators": [],
        "name": "setTimeout",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 209,
          "end": 224,
          "decorators": [],
          "name": "expression",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 224,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 221,
              "end": 224
            }
          }
        },
        {
          "type": "Identifier",
          "start": 226,
          "end": 239,
          "decorators": [],
          "name": "msec",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 239,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 233,
              "end": 239
            }
          }
        },
        {
          "type": "Identifier",
          "start": 241,
          "end": 255,
          "decorators": [],
          "name": "language",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 250,
            "end": 255,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 252,
              "end": 255
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 256,
        "end": 264,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 258,
          "end": 264
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 410,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 279,
            "decorators": [],
            "name": "messenger",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 282,
            "end": 410,
            "properties": [
              {
                "type": "Property",
                "start": 288,
                "end": 310,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 295,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 297,
                  "end": 310,
                  "raw": "\"Hello World\"",
                  "value": "Hello World"
                }
              },
              {
                "type": "Property",
                "start": 316,
                "end": 408,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 321,
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 323,
                  "end": 408,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 335,
                    "end": 408,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 345,
                        "end": 402,
                        "argument": {
                          "type": "CallExpression",
                          "start": 352,
                          "end": 401,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 363,
                              "end": 394,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 369,
                                "end": 394,
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "start": 371,
                                    "end": 392,
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 375,
                                        "end": 391,
                                        "definite": false,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 375,
                                          "end": 376,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "start": 379,
                                          "end": 391,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 379,
                                            "end": 383
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 384,
                                            "end": 391,
                                            "decorators": [],
                                            "name": "message",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
                                    ],
                                    "declare": false,
                                    "kind": "var"
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            },
                            {
                              "type": "Literal",
                              "start": 396,
                              "end": 400,
                              "raw": "3000",
                              "value": 3000
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 362,
                            "decorators": [],
                            "name": "setTimeout",
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
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
