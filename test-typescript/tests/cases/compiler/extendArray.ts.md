__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 420,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 13,
            "elements": [
              {
                "type": "Literal",
                "start": 9,
                "end": 10,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 11,
                "end": 12,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 46,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 15,
        "end": 45,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 25,
            "end": 44,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 44,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 15,
          "end": 24,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 17,
            "end": 24,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 149,
      "body": {
        "type": "TSModuleBlock",
        "start": 70,
        "end": 149,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 74,
            "end": 147,
            "body": {
              "type": "TSInterfaceBody",
              "start": 90,
              "end": 147,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 96,
                  "end": 143,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 103,
                    "decorators": [],
                    "name": "collect",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 104,
                      "end": 133,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 106,
                        "end": 133,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 107,
                          "end": 133,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 108,
                              "end": 118,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 109,
                                "end": 118,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 110,
                                  "end": 118,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 110,
                                    "end": 118,
                                    "decorators": [],
                                    "name": "_element",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 120,
                            "end": 133,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 123,
                              "end": 133,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 123,
                                "end": 131,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 123,
                                  "end": 131,
                                  "decorators": [],
                                  "name": "_element",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 137,
                      "end": 142,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 137,
                        "end": 140
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 89,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 69,
        "decorators": [],
        "name": "_Core",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 159,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 162,
            "end": 184,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 163,
              "end": 173,
              "expression": {
                "type": "Identifier",
                "start": 168,
                "end": 173,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 164,
                "end": 167
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 175,
              "end": 184,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 186,
      "end": 420,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 186,
        "end": 419,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 186,
          "end": 197,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 186,
            "end": 189,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 190,
            "end": 197,
            "decorators": [],
            "name": "collect",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 200,
          "end": 419,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 214,
            "end": 419,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 220,
                "end": 233,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 224,
                    "end": 232,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 227,
                      "decorators": [],
                      "name": "res",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "start": 230,
                      "end": 232,
                      "elements": []
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              {
                "type": "ForStatement",
                "start": 238,
                "end": 401,
                "body": {
                  "type": "BlockStatement",
                  "start": 276,
                  "end": 401,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 286,
                      "end": 308,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 290,
                          "end": 307,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 293,
                            "decorators": [],
                            "name": "tmp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 296,
                            "end": 307,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 299,
                                "end": 306,
                                "computed": true,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 299,
                                  "end": 303
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 304,
                                  "end": 305,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 296,
                              "end": 298,
                              "decorators": [],
                              "name": "fn",
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
                      "type": "ForStatement",
                      "start": 317,
                      "end": 395,
                      "body": {
                        "type": "BlockStatement",
                        "start": 354,
                        "end": 395,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 368,
                            "end": 385,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 368,
                              "end": 384,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 377,
                                  "end": 383,
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 377,
                                    "end": 380,
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 381,
                                    "end": 382,
                                    "decorators": [],
                                    "name": "j",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 368,
                                "end": 376,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 368,
                                  "end": 371,
                                  "decorators": [],
                                  "name": "res",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 372,
                                  "end": 376,
                                  "decorators": [],
                                  "name": "push",
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
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 322,
                        "end": 331,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 326,
                            "end": 331,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 326,
                              "end": 327,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 330,
                              "end": 331,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 333,
                        "end": 347,
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "start": 333,
                          "end": 334,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 337,
                          "end": 347,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 337,
                            "end": 340,
                            "decorators": [],
                            "name": "tmp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 341,
                            "end": 347,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 349,
                        "end": 352,
                        "argument": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 352,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "++",
                        "prefix": true
                      }
                    }
                  ]
                },
                "init": {
                  "type": "VariableDeclaration",
                  "start": 243,
                  "end": 252,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 247,
                      "end": 252,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 248,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 251,
                        "end": 252,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 254,
                  "end": 269,
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 255,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 258,
                    "end": 269,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 258,
                      "end": 262
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 269,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "update": {
                  "type": "UpdateExpression",
                  "start": 271,
                  "end": 274,
                  "argument": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": true
                }
              },
              {
                "type": "ReturnStatement",
                "start": 406,
                "end": 417,
                "argument": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 416,
                  "decorators": [],
                  "name": "res",
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
              "start": 210,
              "end": 212,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
