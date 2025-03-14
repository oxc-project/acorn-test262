restElementAssignable.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 432,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 170,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 6,
          "end": 30,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 12,
              "end": 29,
              "definite": false,
              "id": {
                "type": "ObjectPattern",
                "start": 12,
                "end": 24,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "RestElement",
                    "start": 14,
                    "end": 22,
                    "argument": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 22,
                      "decorators": [],
                      "name": "props",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "init": {
                "type": "ObjectExpression",
                "start": 27,
                "end": 29,
                "properties": []
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 54,
          "end": 97,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 60,
              "end": 96,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 60,
                "end": 88,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 88,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 64,
                    "end": 88,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 66,
                        "end": 86,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 67,
                            "end": 76,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 68,
                              "end": 76,
                              "typeAnnotation": {
                                "type": "TSSymbolKeyword",
                                "start": 70,
                                "end": 76
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 77,
                          "end": 86,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 79,
                            "end": 86
                          }
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 91,
                "end": 96,
                "decorators": [],
                "name": "props",
                "optional": false
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 128,
          "end": 168,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 134,
              "end": 167,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 134,
                "end": 162,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 136,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 138,
                    "end": 162,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 140,
                        "end": 160,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 141,
                            "end": 150,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 142,
                              "end": 150,
                              "typeAnnotation": {
                                "type": "TSSymbolKeyword",
                                "start": 144,
                                "end": 150
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 151,
                          "end": 160,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 153,
                            "end": 160
                          }
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "ObjectExpression",
                "start": 165,
                "end": 167,
                "properties": []
              }
            }
          ],
          "declare": false,
          "kind": "const"
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 172,
      "end": 431,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 178,
          "end": 228,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 184,
              "end": 227,
              "definite": false,
              "id": {
                "type": "ObjectPattern",
                "start": 184,
                "end": 196,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "RestElement",
                    "start": 186,
                    "end": 194,
                    "argument": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 194,
                      "decorators": [],
                      "name": "props",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "init": {
                "type": "ObjectExpression",
                "start": 199,
                "end": 227,
                "properties": [
                  {
                    "type": "Property",
                    "start": 201,
                    "end": 205,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 202,
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
                      "start": 204,
                      "end": 205,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 207,
                    "end": 215,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
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
                      "start": 210,
                      "end": 215,
                      "raw": "false",
                      "value": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 217,
                    "end": 225,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 218,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 220,
                      "end": 225,
                      "raw": "\"str\"",
                      "value": "str"
                    }
                  }
                ]
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 252,
          "end": 313,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 258,
              "end": 312,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 258,
                "end": 304,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 260,
                  "end": 304,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 262,
                    "end": 304,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 264,
                        "end": 302,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 265,
                            "end": 274,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 266,
                              "end": 274,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 268,
                                "end": 274
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 275,
                          "end": 302,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 277,
                            "end": 302,
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 277,
                                "end": 283
                              },
                              {
                                "type": "TSBooleanKeyword",
                                "start": 286,
                                "end": 293
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 296,
                                "end": 302
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 307,
                "end": 312,
                "decorators": [],
                "name": "props",
                "optional": false
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 344,
          "end": 428,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 350,
              "end": 427,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 350,
                "end": 396,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 352,
                  "end": 396,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 354,
                    "end": 396,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 356,
                        "end": 394,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 357,
                            "end": 366,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 358,
                              "end": 366,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 360,
                                "end": 366
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 367,
                          "end": 394,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 369,
                            "end": 394,
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 369,
                                "end": 375
                              },
                              {
                                "type": "TSBooleanKeyword",
                                "start": 378,
                                "end": 385
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 388,
                                "end": 394
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "ObjectExpression",
                "start": 399,
                "end": 427,
                "properties": [
                  {
                    "type": "Property",
                    "start": 401,
                    "end": 405,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 402,
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
                      "start": 404,
                      "end": 405,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 407,
                    "end": 415,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 407,
                      "end": 408,
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
                      "start": 410,
                      "end": 415,
                      "raw": "false",
                      "value": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 417,
                    "end": 425,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 418,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 420,
                      "end": 425,
                      "raw": "\"str\"",
                      "value": "str"
                    }
                  }
                ]
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "EmptyStatement",
          "start": 428,
          "end": 429
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
