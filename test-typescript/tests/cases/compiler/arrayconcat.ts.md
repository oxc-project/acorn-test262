__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 588,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 179,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 179,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 39,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 59,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "decorators": [],
              "name": "flag",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 58,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 79,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 69,
              "decorators": [],
              "name": "short",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 84,
            "end": 99,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 89,
              "decorators": [],
              "name": "usage",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 130,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "set",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 129,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 110,
                "end": 129,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 111,
                    "end": 120,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 112,
                      "end": 120,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 114,
                        "end": 120
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 122,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 125,
                    "end": 129
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 149,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 177,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 166,
              "decorators": [],
              "name": "experimental",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 176,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 169,
                "end": 176
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "IOptions",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 588,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 194,
        "end": 588,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 197,
            "end": 224,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 211,
              "decorators": [],
              "name": "options",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 223,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 213,
                "end": 223,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 213,
                  "end": 221,
                  "typeName": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 221,
                    "decorators": [],
                    "name": "IOptions",
                    "optional": false
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 586,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 235,
              "end": 586,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 238,
                "end": 586,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 242,
                    "end": 583,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 242,
                      "end": 582,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 254,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 242,
                          "end": 246
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 254,
                          "decorators": [],
                          "name": "options",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 257,
                        "end": 582,
                        "arguments": [
                          {
                            "type": "FunctionExpression",
                            "start": 275,
                            "end": 581,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 290,
                              "end": 581,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 304,
                                  "end": 337,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 308,
                                      "end": 336,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 308,
                                        "end": 313,
                                        "decorators": [],
                                        "name": "aName",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "start": 316,
                                        "end": 336,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 316,
                                          "end": 334,
                                          "computed": false,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 316,
                                            "end": 322,
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 316,
                                              "end": 317,
                                              "decorators": [],
                                              "name": "a",
                                              "optional": false
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 318,
                                              "end": 322,
                                              "decorators": [],
                                              "name": "name",
                                              "optional": false
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 323,
                                            "end": 334,
                                            "decorators": [],
                                            "name": "toLowerCase",
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
                                  "start": 350,
                                  "end": 383,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 354,
                                      "end": 382,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 354,
                                        "end": 359,
                                        "decorators": [],
                                        "name": "bName",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "start": 362,
                                        "end": 382,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 362,
                                          "end": 380,
                                          "computed": false,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 362,
                                            "end": 368,
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 362,
                                              "end": 363,
                                              "decorators": [],
                                              "name": "b",
                                              "optional": false
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 364,
                                              "end": 368,
                                              "decorators": [],
                                              "name": "name",
                                              "optional": false
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 369,
                                            "end": 380,
                                            "decorators": [],
                                            "name": "toLowerCase",
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
                                  "type": "IfStatement",
                                  "start": 397,
                                  "end": 571,
                                  "alternate": {
                                    "type": "IfStatement",
                                    "start": 463,
                                    "end": 571,
                                    "alternate": {
                                      "type": "BlockStatement",
                                      "start": 530,
                                      "end": 571,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 548,
                                          "end": 557,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 555,
                                            "end": 556,
                                            "raw": "0",
                                            "value": 0
                                          }
                                        }
                                      ]
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 482,
                                      "end": 524,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 500,
                                          "end": 510,
                                          "argument": {
                                            "type": "UnaryExpression",
                                            "start": 507,
                                            "end": 509,
                                            "argument": {
                                              "type": "Literal",
                                              "start": 508,
                                              "end": 509,
                                              "raw": "1",
                                              "value": 1
                                            },
                                            "operator": "-",
                                            "prefix": true
                                          }
                                        }
                                      ]
                                    },
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 467,
                                      "end": 480,
                                      "operator": "<",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 467,
                                        "end": 472,
                                        "decorators": [],
                                        "name": "aName",
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 475,
                                        "end": 480,
                                        "decorators": [],
                                        "name": "bName",
                                        "optional": false
                                      }
                                    }
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "start": 416,
                                    "end": 457,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 434,
                                        "end": 443,
                                        "argument": {
                                          "type": "Literal",
                                          "start": 441,
                                          "end": 442,
                                          "raw": "1",
                                          "value": 1
                                        }
                                      }
                                    ]
                                  },
                                  "test": {
                                    "type": "BinaryExpression",
                                    "start": 401,
                                    "end": 414,
                                    "operator": ">",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 401,
                                      "end": 406,
                                      "decorators": [],
                                      "name": "aName",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 409,
                                      "end": 414,
                                      "decorators": [],
                                      "name": "bName",
                                      "optional": false
                                    }
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
                                "start": 284,
                                "end": 285,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 287,
                                "end": 288,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              }
                            ]
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 257,
                          "end": 274,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 257,
                            "end": 269,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 257,
                              "end": 261
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 262,
                              "end": 269,
                              "decorators": [],
                              "name": "options",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 274,
                            "decorators": [],
                            "name": "sort",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
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
        "start": 187,
        "end": 193,
        "decorators": [],
        "name": "parser",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
