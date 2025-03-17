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
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 49,
              "name": "global",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 75,
            "name": "result",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": true
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 92,
            "name": "result2",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": true
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 95,
      "end": 182,
      "test": {
        "type": "UnaryExpression",
        "start": 99,
        "end": 126,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "BinaryExpression",
          "start": 101,
          "end": 125,
          "left": {
            "type": "Identifier",
            "start": 101,
            "end": 107,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 119,
            "end": 125,
            "name": "RegExp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
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
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 143,
                "end": 150,
                "name": "result2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "IfStatement",
        "start": 159,
        "end": 182,
        "test": {
          "type": "UnaryExpression",
          "start": 163,
          "end": 177,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 164,
            "end": 177,
            "object": {
              "type": "Identifier",
              "start": 164,
              "end": 170,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 171,
              "end": 177,
              "name": "global",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 179,
          "end": 182,
          "body": []
        },
        "alternate": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 206,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 225,
        "name": "OnChanges",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 226,
        "end": 283,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 232,
            "end": 281,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 241,
              "name": "onChanges",
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
                "start": 242,
                "end": 274,
                "name": "changes",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 249,
                  "end": 274,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 251,
                    "end": 274,
                    "typeName": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 257,
                      "name": "Record",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 284,
      "end": 355,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 303,
        "name": "Validator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 304,
        "end": 355,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 310,
            "end": 353,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 318,
              "name": "validate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 335,
                      "name": "Record",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 357,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 364,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 365,
        "end": 409,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 407,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 379,
              "name": "validate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 379,
              "end": 407,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 411,
      "end": 902,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 423,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 469,
                  "name": "v",
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
                            "name": "Validator",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 451,
                          "end": 469,
                          "typeName": {
                            "type": "Identifier",
                            "start": 451,
                            "end": 458,
                            "name": "Partial",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                  "name": "OnChanges",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 472,
                  "end": 483,
                  "expression": {
                    "type": "Literal",
                    "start": 472,
                    "end": 476,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 480,
                    "end": 483
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 489,
            "end": 564,
            "test": {
              "type": "BinaryExpression",
              "start": 493,
              "end": 507,
              "left": {
                "type": "Identifier",
                "start": 493,
                "end": 494,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 506,
                "end": 507,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
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
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 569,
            "end": 570,
            "expression": {
              "type": "Identifier",
              "start": 569,
              "end": 570,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 851,
            "end": 900,
            "test": {
              "type": "MemberExpression",
              "start": 855,
              "end": 866,
              "object": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 857,
                "end": 866,
                "name": "onChanges",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 878,
                      "end": 889,
                      "object": {
                        "type": "Identifier",
                        "start": 878,
                        "end": 879,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 880,
                        "end": 889,
                        "name": "onChanges",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 890,
                        "end": 892,
                        "properties": []
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
