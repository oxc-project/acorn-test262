__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 43,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 43,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 43,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 30,
                    "end": 43,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 32,
                        "end": 41,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 33,
                          "end": 41,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 35,
                            "end": 41
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 55,
      "expression": {
        "type": "ChainExpression",
        "start": 45,
        "end": 54,
        "expression": {
          "type": "MemberExpression",
          "start": 45,
          "end": 54,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 45,
            "end": 47,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 50,
            "end": 53,
            "raw": "\"b\"",
            "value": "b"
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 107,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 107,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 75,
                "end": 107,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 75,
                    "end": 84
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 87,
                    "end": 107,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 89,
                        "end": 105,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 90,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 90,
                          "end": 105,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 92,
                            "end": 105,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 94,
                                "end": 103,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 94,
                                  "end": 95,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 95,
                                  "end": 103,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 97,
                                    "end": 103
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 121,
      "expression": {
        "type": "ChainExpression",
        "start": 109,
        "end": 120,
        "expression": {
          "type": "MemberExpression",
          "start": 109,
          "end": 120,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 109,
            "end": 118,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 109,
              "end": 111,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "start": 114,
              "end": 117,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 133,
      "expression": {
        "type": "ChainExpression",
        "start": 122,
        "end": 132,
        "expression": {
          "type": "MemberExpression",
          "start": 122,
          "end": 132,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 122,
            "end": 127,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 122,
              "end": 124,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 128,
            "end": 131,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 185,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 153,
                "end": 185,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 155,
                    "end": 183,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 158,
                        "end": 183,
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 158,
                            "end": 167
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 170,
                            "end": 183,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 172,
                                "end": 181,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 172,
                                  "end": 173,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 173,
                                  "end": 181,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 175,
                                    "end": 181
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 198,
      "expression": {
        "type": "ChainExpression",
        "start": 187,
        "end": 197,
        "expression": {
          "type": "MemberExpression",
          "start": 187,
          "end": 197,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 187,
            "end": 194,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 189,
              "decorators": [],
              "name": "o3",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 190,
              "end": 193,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 211,
      "expression": {
        "type": "ChainExpression",
        "start": 199,
        "end": 210,
        "expression": {
          "type": "MemberExpression",
          "start": 199,
          "end": 210,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 199,
            "end": 203,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 199,
              "end": 201,
              "decorators": [],
              "name": "o3",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 206,
            "end": 209,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
