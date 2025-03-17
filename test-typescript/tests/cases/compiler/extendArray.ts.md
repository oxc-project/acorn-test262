__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 421,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 17,
            "end": 24,
            "name": "forEach",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 25,
            "end": 44,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 44,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "_Core",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "collect",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "name": "fn",
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
                              "name": "e",
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
                                    "name": "_element",
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
                                  "name": "_element",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 159,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 162,
            "end": 184,
            "object": {
              "type": "TSTypeAssertion",
              "start": 163,
              "end": 173,
              "expression": {
                "type": "Identifier",
                "start": 168,
                "end": 173,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 164,
                "end": 167
              }
            },
            "property": {
              "type": "Identifier",
              "start": 175,
              "end": 184,
              "name": "prototype",
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
      "kind": "var",
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
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 190,
            "end": 197,
            "name": "collect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 200,
          "end": 419,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 210,
              "end": 212,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
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
                    "id": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 227,
                      "name": "res",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "kind": "var",
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 247,
                      "end": 252,
                      "id": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 248,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "var",
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
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
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
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 290,
                          "end": 307,
                          "id": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 293,
                            "name": "tmp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 296,
                            "end": 307,
                            "callee": {
                              "type": "Identifier",
                              "start": 296,
                              "end": 298,
                              "name": "fn",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                  "name": "i",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": true,
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
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
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 326,
                            "end": 331,
                            "id": {
                              "type": "Identifier",
                              "start": 326,
                              "end": 327,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "kind": "var",
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
                          "name": "j",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "tmp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 341,
                            "end": 347,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
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
                          "name": "j",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                  "name": "res",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 372,
                                  "end": 376,
                                  "name": "push",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 377,
                                  "end": 383,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 377,
                                    "end": 380,
                                    "name": "tmp",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 381,
                                    "end": 382,
                                    "name": "j",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": true,
                                  "optional": false
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
                  "name": "res",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
