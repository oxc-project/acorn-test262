__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 904,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 60,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 60,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 58,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 49,
              "decorators": [],
              "name": "global",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 75,
          "definite": true,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 75,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 75,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 92,
          "definite": true,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 92,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 95,
      "end": 182,
      "alternate": {
        "type": "IfStatement",
        "start": 159,
        "end": 182,
        "alternate": null,
        "consequent": {
          "type": "BlockStatement",
          "start": 179,
          "end": 182,
          "body": []
        },
        "test": {
          "type": "UnaryExpression",
          "start": 163,
          "end": 177,
          "argument": {
            "type": "MemberExpression",
            "start": 164,
            "end": 177,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 164,
              "end": 170,
              "decorators": [],
              "name": "result",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 171,
              "end": 177,
              "decorators": [],
              "name": "global",
              "optional": false
            }
          },
          "operator": "!",
          "prefix": true
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 128,
        "end": 153,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 134,
            "end": 151,
            "expression": {
              "type": "AssignmentExpression",
              "start": 134,
              "end": 150,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 134,
                "end": 140,
                "decorators": [],
                "name": "result",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 143,
                "end": 150,
                "decorators": [],
                "name": "result2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 99,
        "end": 126,
        "argument": {
          "type": "BinaryExpression",
          "start": 101,
          "end": 125,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 101,
            "end": 107,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 119,
            "end": 125,
            "decorators": [],
            "name": "RegExp",
            "optional": false
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 206,
      "end": 283,
      "body": {
        "type": "TSInterfaceBody",
        "start": 226,
        "end": 283,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 232,
            "end": 281,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 241,
              "decorators": [],
              "name": "onChanges",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 242,
                "end": 274,
                "decorators": [],
                "name": "changes",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 249,
                  "end": 274,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 251,
                    "end": 274,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 257,
                      "end": 274,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 258,
                          "end": 264
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 266,
                          "end": 273
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 257,
                      "decorators": [],
                      "name": "Record",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 275,
              "end": 281,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 277,
                "end": 281
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 225,
        "decorators": [],
        "name": "OnChanges",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 284,
      "end": 355,
      "body": {
        "type": "TSInterfaceBody",
        "start": 304,
        "end": 355,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 310,
            "end": 353,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 318,
              "decorators": [],
              "name": "validate",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 352,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 322,
                "end": 352,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 322,
                    "end": 326
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 329,
                    "end": 352,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 335,
                      "end": 352,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 336,
                          "end": 342
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 344,
                          "end": 351
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 335,
                      "decorators": [],
                      "name": "Record",
                      "optional": false
                    }
                  }
                ]
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 303,
        "decorators": [],
        "name": "Validator",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 357,
      "end": 409,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 365,
        "end": 409,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 407,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 379,
              "decorators": [],
              "name": "validate",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 379,
              "end": 407,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 382,
                "end": 407,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 392,
                    "end": 401,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 399,
                      "end": 401,
                      "properties": []
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
        "start": 363,
        "end": 364,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 411,
      "end": 902,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 426,
        "end": 902,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 432,
            "end": 484,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 436,
                "end": 483,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 469,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 469,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 439,
                      "end": 469,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 439,
                          "end": 448,
                          "typeName": {
                            "type": "Identifier",
                            "start": 439,
                            "end": 448,
                            "decorators": [],
                            "name": "Validator",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 451,
                          "end": 469,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 458,
                            "end": 469,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 459,
                                "end": 468,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 459,
                                  "end": 468,
                                  "decorators": [],
                                  "name": "OnChanges",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 451,
                            "end": 458,
                            "decorators": [],
                            "name": "Partial",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 472,
                  "end": 483,
                  "expression": {
                    "type": "Literal",
                    "start": 472,
                    "end": 476,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 480,
                    "end": 483
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 489,
            "end": 564,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 509,
              "end": 564,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 519,
                  "end": 520,
                  "expression": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 520,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 493,
              "end": 507,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 493,
                "end": 494,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 506,
                "end": 507,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 569,
            "end": 570,
            "expression": {
              "type": "Identifier",
              "start": 569,
              "end": 570,
              "decorators": [],
              "name": "v",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 851,
            "end": 900,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 868,
              "end": 900,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 878,
                  "end": 894,
                  "expression": {
                    "type": "CallExpression",
                    "start": 878,
                    "end": 893,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 890,
                        "end": 892,
                        "properties": []
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 878,
                      "end": 889,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 878,
                        "end": 879,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 880,
                        "end": 889,
                        "decorators": [],
                        "name": "onChanges",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 855,
              "end": 866,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 857,
                "end": 866,
                "decorators": [],
                "name": "onChanges",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 423,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
