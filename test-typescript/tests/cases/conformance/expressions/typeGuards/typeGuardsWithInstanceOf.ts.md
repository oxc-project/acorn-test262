__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 874,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
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
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 46,
          "definite": true,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 46,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 46,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 48,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 63,
          "definite": true,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 63,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 63,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 66,
      "end": 153,
      "alternate": {
        "type": "IfStatement",
        "start": 130,
        "end": 153,
        "alternate": null,
        "consequent": {
          "type": "BlockStatement",
          "start": 150,
          "end": 153,
          "body": []
        },
        "test": {
          "type": "UnaryExpression",
          "start": 134,
          "end": 148,
          "argument": {
            "type": "MemberExpression",
            "start": 135,
            "end": 148,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 135,
              "end": 141,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 142,
              "end": 148,
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "operator": "!",
          "prefix": true
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 99,
        "end": 124,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 122,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 105,
              "end": 121,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 105,
                "end": 111,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 114,
                "end": 121,
                "decorators": [],
                "name": "result2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 70,
        "end": 97,
        "argument": {
          "type": "BinaryExpression",
          "start": 72,
          "end": 96,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 72,
            "end": 78,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 90,
            "end": 96,
            "decorators": [],
            "name": "RegExp",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 177,
      "end": 254,
      "body": {
        "type": "TSInterfaceBody",
        "start": 197,
        "end": 254,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 203,
            "end": 252,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 212,
              "decorators": [],
              "name": "onChanges",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 213,
                "end": 245,
                "decorators": [],
                "name": "changes",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 220,
                  "end": 245,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 245,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 228,
                      "end": 245,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 229,
                          "end": 235
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 237,
                          "end": 244
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 228,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 252,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 248,
                "end": 252
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
        "start": 187,
        "end": 196,
        "decorators": [],
        "name": "OnChanges",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 255,
      "end": 326,
      "body": {
        "type": "TSInterfaceBody",
        "start": 275,
        "end": 326,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 281,
            "end": 324,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 289,
              "decorators": [],
              "name": "validate",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 323,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 293,
                "end": 323,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 293,
                    "end": 297
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 300,
                    "end": 323,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 306,
                      "end": 323,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 307,
                          "end": 313
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 315,
                          "end": 322
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 306,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
        "start": 265,
        "end": 274,
        "decorators": [],
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 328,
      "end": 380,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 336,
        "end": 380,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 342,
            "end": 378,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 350,
              "decorators": [],
              "name": "validate",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 378,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 353,
                "end": 378,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 363,
                    "end": 372,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 370,
                      "end": 372,
                      "properties": []
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
        "start": 334,
        "end": 335,
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
      "type": "FunctionDeclaration",
      "start": 382,
      "end": 873,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 397,
        "end": 873,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 403,
            "end": 455,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 407,
                "end": 454,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 440,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 408,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 410,
                      "end": 440,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 410,
                          "end": 419,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 410,
                            "end": 419,
                            "decorators": [],
                            "name": "Validator",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 422,
                          "end": 440,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 429,
                            "end": 440,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 430,
                                "end": 439,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 430,
                                  "end": 439,
                                  "decorators": [],
                                  "name": "OnChanges",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 422,
                            "end": 429,
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 443,
                  "end": 454,
                  "expression": {
                    "type": "Literal",
                    "start": 443,
                    "end": 447,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 451,
                    "end": 454
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 460,
            "end": 535,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 480,
              "end": 535,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 490,
                  "end": 491,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 491,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 464,
              "end": 478,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 477,
                "end": 478,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 540,
            "end": 541,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "IfStatement",
            "start": 822,
            "end": 871,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 839,
              "end": 871,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 849,
                  "end": 865,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 849,
                    "end": 864,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 861,
                        "end": 863,
                        "properties": []
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 849,
                      "end": 860,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 849,
                        "end": 850,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 851,
                        "end": 860,
                        "decorators": [],
                        "name": "onChanges",
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
            "test": {
              "type": "MemberExpression",
              "start": 826,
              "end": 837,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 826,
                "end": 827,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 828,
                "end": 837,
                "decorators": [],
                "name": "onChanges",
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
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 394,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
