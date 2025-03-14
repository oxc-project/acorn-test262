derivedTypeAccessesHiddenBaseCallViaSuperPropertyAccess.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 414,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 84,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 84,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 82,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
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
              "start": 20,
              "end": 82,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 82,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 76,
                    "argument": {
                      "type": "Literal",
                      "start": 71,
                      "end": 75,
                      "raw": "null",
                      "value": null
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
                  "start": 21,
                  "end": 37,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 24,
                      "end": 37,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 26,
                          "end": 35,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 26,
                            "end": 27,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 27,
                            "end": 35,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 29,
                              "end": 35
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 40,
                  "end": 53,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 42,
                      "end": 51,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 43,
                        "end": 51,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 45,
                          "end": 51
                        }
                      }
                    }
                  ]
                }
              }
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
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 414,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 414,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 206,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 122,
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
              "start": 122,
              "end": 206,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 206,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 188,
                    "end": 200,
                    "argument": {
                      "type": "Literal",
                      "start": 195,
                      "end": 199,
                      "raw": "null",
                      "value": null
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
                  "start": 123,
                  "end": 150,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 126,
                      "end": 150,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 128,
                          "end": 138,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 129,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 129,
                            "end": 137,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 131,
                              "end": 137
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 139,
                          "end": 148,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 140,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 140,
                            "end": 148,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 142,
                              "end": 148
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 177,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 153,
                  "end": 177,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 155,
                      "end": 165,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 156,
                        "end": 164,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 158,
                          "end": 164
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 166,
                      "end": 175,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 167,
                        "end": 175,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 169,
                          "end": 175
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 212,
            "end": 412,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 215,
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
              "start": 215,
              "end": 412,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 412,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 228,
                    "end": 256,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 232,
                        "end": 255,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 233,
                          "decorators": [],
                          "name": "r",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 236,
                          "end": 255,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 246,
                              "end": 254,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 248,
                                  "end": 252,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 248,
                                    "end": 249,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 251,
                                    "end": 252,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 236,
                            "end": 245,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 236,
                              "end": 241
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 242,
                              "end": 245,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 282,
                    "end": 317,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 286,
                        "end": 316,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 288,
                          "decorators": [],
                          "name": "r2",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 291,
                          "end": 316,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 301,
                              "end": 315,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 303,
                                  "end": 307,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 303,
                                    "end": 304,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 306,
                                    "end": 307,
                                    "raw": "1",
                                    "value": 1
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 309,
                                  "end": 313,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 309,
                                    "end": 310,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 312,
                                    "end": 313,
                                    "raw": "2",
                                    "value": 2
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 291,
                            "end": 300,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 291,
                              "end": 296
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 297,
                              "end": 300,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 343,
                    "end": 377,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 347,
                        "end": 376,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 349,
                          "decorators": [],
                          "name": "r3",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 352,
                          "end": 376,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 361,
                              "end": 375,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 363,
                                  "end": 367,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 363,
                                    "end": 364,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 366,
                                    "end": 367,
                                    "raw": "1",
                                    "value": 1
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 369,
                                  "end": 373,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 369,
                                    "end": 370,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 372,
                                    "end": 373,
                                    "raw": "2",
                                    "value": 2
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 352,
                            "end": 360,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 352,
                              "end": 356
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 357,
                              "end": 360,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 92,
        "end": 99,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
