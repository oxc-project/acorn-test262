__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 421,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 421,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 64,
        "end": 421,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 77,
          "decorators": [],
          "name": "main",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 78,
            "end": 101,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 101,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 81,
                "end": 101,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 81,
                    "end": 89,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 81,
                      "end": 87
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 92,
                    "end": 101
                  }
                ]
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 103,
          "end": 421,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 107,
              "end": 146,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 113,
                  "end": 145,
                  "id": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 117,
                    "end": 145,
                    "test": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "ObjectExpression",
                      "start": 121,
                      "end": 126,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 123,
                          "end": 124,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 124,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 124,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "alternate": {
                      "type": "ObjectExpression",
                      "start": 129,
                      "end": 145,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 131,
                          "end": 143,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 132,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "start": 134,
                            "end": 143,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 135,
                                "end": 142,
                                "value": "there",
                                "raw": "\"there\""
                              }
                            ]
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 150,
              "end": 199,
              "expression": {
                "type": "ConditionalExpression",
                "start": 150,
                "end": 198,
                "test": {
                  "type": "MemberExpression",
                  "start": 150,
                  "end": 153,
                  "object": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 163,
                  "end": 177,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 163,
                    "end": 175,
                    "object": {
                      "type": "MemberExpression",
                      "start": 163,
                      "end": 166,
                      "object": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 175,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "alternate": {
                  "type": "CallExpression",
                  "start": 184,
                  "end": 198,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 184,
                    "end": 196,
                    "object": {
                      "type": "MemberExpression",
                      "start": 184,
                      "end": 187,
                      "object": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 185,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 187,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 196,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              },
              "directive": null
            },
            {
              "type": "VariableDeclaration",
              "start": 203,
              "end": 300,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 209,
                  "end": 299,
                  "id": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 295,
                    "decorators": [],
                    "name": "zWorkAround",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 295,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 226,
                        "end": 295,
                        "types": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 228,
                            "end": 258,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 230,
                                "end": 242,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 230,
                                  "end": 231,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 231,
                                  "end": 241,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 233,
                                    "end": 241,
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 233,
                                      "end": 239
                                    }
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 243,
                                "end": 256,
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 243,
                                  "end": 244,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 245,
                                  "end": 256,
                                  "typeAnnotation": {
                                    "type": "TSUndefinedKeyword",
                                    "start": 247,
                                    "end": 256
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 265,
                            "end": 295,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 267,
                                "end": 279,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 267,
                                  "end": 268,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 268,
                                  "end": 278,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 270,
                                    "end": 278,
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 270,
                                      "end": 276
                                    }
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 280,
                                "end": 293,
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 280,
                                  "end": 281,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 282,
                                  "end": 293,
                                  "typeAnnotation": {
                                    "type": "TSUndefinedKeyword",
                                    "start": 284,
                                    "end": 293
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 304,
              "end": 372,
              "expression": {
                "type": "ConditionalExpression",
                "start": 304,
                "end": 371,
                "test": {
                  "type": "MemberExpression",
                  "start": 304,
                  "end": 317,
                  "object": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 315,
                    "decorators": [],
                    "name": "zWorkAround",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 317,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 320,
                  "end": 344,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 320,
                    "end": 342,
                    "object": {
                      "type": "MemberExpression",
                      "start": 320,
                      "end": 333,
                      "object": {
                        "type": "Identifier",
                        "start": 320,
                        "end": 331,
                        "decorators": [],
                        "name": "zWorkAround",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 333,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 342,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "alternate": {
                  "type": "CallExpression",
                  "start": 347,
                  "end": 371,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 347,
                    "end": 369,
                    "object": {
                      "type": "MemberExpression",
                      "start": 347,
                      "end": 360,
                      "object": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 358,
                        "decorators": [],
                        "name": "zWorkAround",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 360,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 369,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 376,
              "end": 419,
              "expression": {
                "type": "ConditionalExpression",
                "start": 376,
                "end": 418,
                "test": {
                  "type": "BinaryExpression",
                  "start": 376,
                  "end": 384,
                  "left": {
                    "type": "Literal",
                    "start": 376,
                    "end": 379,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 384,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 387,
                  "end": 401,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 387,
                    "end": 399,
                    "object": {
                      "type": "MemberExpression",
                      "start": 387,
                      "end": 390,
                      "object": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 388,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 390,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 399,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "alternate": {
                  "type": "CallExpression",
                  "start": 404,
                  "end": 418,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 404,
                    "end": 416,
                    "object": {
                      "type": "MemberExpression",
                      "start": 404,
                      "end": 407,
                      "object": {
                        "type": "Identifier",
                        "start": 404,
                        "end": 405,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 407,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 416,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
