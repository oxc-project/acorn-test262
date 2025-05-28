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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 11,
                "end": 12,
                "value": 2,
                "raw": "2"
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
      "start": 15,
      "end": 46,
      "expression": {
        "type": "CallExpression",
        "start": 15,
        "end": 45,
        "callee": {
          "type": "MemberExpression",
          "start": 15,
          "end": 24,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 17,
            "end": 24,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 25,
            "end": 44,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 44,
              "body": []
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 69,
        "decorators": [],
        "name": "_Core",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 70,
        "end": 149,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 74,
            "end": 147,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 89,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 90,
              "end": 147,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 96,
                  "end": 143,
                  "key": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 103,
                    "decorators": [],
                    "name": "collect",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
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
                          "typeParameters": null,
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 110,
                                    "end": 118,
                                    "decorators": [],
                                    "name": "_element",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 123,
                                  "end": 131,
                                  "decorators": [],
                                  "name": "_element",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    }
                  ],
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 185,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 184,
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
            "object": {
              "type": "TSTypeAssertion",
              "start": 163,
              "end": 173,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 164,
                "end": 167
              },
              "expression": {
                "type": "Identifier",
                "start": 168,
                "end": 173,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "property": {
              "type": "Identifier",
              "start": 175,
              "end": 184,
              "decorators": [],
              "name": "prototype",
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
      "start": 186,
      "end": 420,
      "expression": {
        "type": "AssignmentExpression",
        "start": 186,
        "end": 419,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 186,
          "end": 197,
          "object": {
            "type": "Identifier",
            "start": 186,
            "end": 189,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 190,
            "end": 197,
            "decorators": [],
            "name": "collect",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 200,
          "end": 419,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          "body": {
            "type": "BlockStatement",
            "start": 214,
            "end": 419,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 220,
                "end": 233,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 224,
                    "end": 232,
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
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ForStatement",
                "start": 238,
                "end": 401,
                "init": {
                  "type": "VariableDeclaration",
                  "start": 243,
                  "end": 252,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 247,
                      "end": 252,
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
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 254,
                  "end": 269,
                  "left": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 255,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "MemberExpression",
                    "start": 258,
                    "end": 269,
                    "object": {
                      "type": "ThisExpression",
                      "start": 258,
                      "end": 262
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 269,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "update": {
                  "type": "UpdateExpression",
                  "start": 271,
                  "end": 274,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 276,
                  "end": 401,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 286,
                      "end": 308,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 290,
                          "end": 307,
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
                            "callee": {
                              "type": "Identifier",
                              "start": 296,
                              "end": 298,
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 299,
                                "end": 306,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 299,
                                  "end": 303
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 304,
                                  "end": 305,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": true
                              }
                            ],
                            "optional": false
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ForStatement",
                      "start": 317,
                      "end": 395,
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 322,
                        "end": 331,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 326,
                            "end": 331,
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
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 333,
                        "end": 347,
                        "left": {
                          "type": "Identifier",
                          "start": 333,
                          "end": 334,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "<",
                        "right": {
                          "type": "MemberExpression",
                          "start": 337,
                          "end": 347,
                          "object": {
                            "type": "Identifier",
                            "start": 337,
                            "end": 340,
                            "decorators": [],
                            "name": "tmp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 341,
                            "end": 347,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 349,
                        "end": 352,
                        "operator": "++",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 352,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 354,
                        "end": 395,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 368,
                            "end": 385,
                            "expression": {
                              "type": "CallExpression",
                              "start": 368,
                              "end": 384,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 368,
                                "end": 376,
                                "object": {
                                  "type": "Identifier",
                                  "start": 368,
                                  "end": 371,
                                  "decorators": [],
                                  "name": "res",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 372,
                                  "end": 376,
                                  "decorators": [],
                                  "name": "push",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 377,
                                  "end": 383,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 377,
                                    "end": 380,
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 381,
                                    "end": 382,
                                    "decorators": [],
                                    "name": "j",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": true
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
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
