__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 587,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 22,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "MyTupleItem",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 19,
        "end": 21,
        "members": []
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 70,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 35,
        "decorators": [],
        "name": "MyTuple",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 38,
        "end": 69,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 39,
            "end": 50,
            "typeName": {
              "type": "Identifier",
              "start": 39,
              "end": 50,
              "decorators": [],
              "name": "MyTupleItem",
              "optional": false
            }
          },
          {
            "type": "TSRestType",
            "start": 52,
            "end": 68,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 55,
              "end": 68,
              "elementType": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 66,
                  "decorators": [],
                  "name": "MyTupleItem",
                  "optional": false
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 72,
      "end": 139,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 92,
        "decorators": [],
        "name": "GenericFunction",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 114,
        "end": 138,
        "params": [
          {
            "type": "RestElement",
            "start": 115,
            "end": 129,
            "argument": {
              "type": "Identifier",
              "start": 118,
              "end": 126,
              "decorators": [],
              "name": "fromArgs",
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 131,
          "end": 138,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 134,
            "end": 138
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 92,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 110,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 103,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 110,
                "decorators": [],
                "name": "MyTuple",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 141,
      "end": 224,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 185,
            "end": 222,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "decorators": [],
              "name": "from",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 221,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 191,
                "end": 221,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 191,
                    "end": 209,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 206,
                      "end": 209,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 207,
                          "end": 208,
                          "typeName": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 208,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 206,
                      "decorators": [],
                      "name": "GenericFunction",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 212,
                    "end": 221
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 159,
        "decorators": [],
        "name": "GenericClass",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 178,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 177,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 177,
                "decorators": [],
                "name": "MyTuple",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 226,
      "end": 358,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 358,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 312,
            "end": 356,
            "argument": {
              "type": "NewExpression",
              "start": 319,
              "end": 355,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 323,
                "end": 335,
                "decorators": [],
                "name": "GenericClass",
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 335,
                "end": 338,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 336,
                    "end": 337,
                    "typeName": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
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
        "start": 235,
        "end": 246,
        "decorators": [],
        "name": "createClass",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 266,
          "end": 287,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 267,
            "end": 287,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 269,
              "end": 287,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 284,
                "end": 287,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 285,
                    "end": 286,
                    "typeName": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 269,
                "end": 284,
                "decorators": [],
                "name": "GenericFunction",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 288,
        "end": 305,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 290,
          "end": 305,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 302,
            "end": 305,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 303,
                "end": 304,
                "typeName": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 304,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 290,
            "end": 302,
            "decorators": [],
            "name": "GenericClass",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 246,
        "end": 265,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 247,
            "end": 264,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 257,
              "end": 264,
              "typeName": {
                "type": "Identifier",
                "start": 257,
                "end": 264,
                "decorators": [],
                "name": "MyTuple",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 360,
      "end": 421,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 418,
        "end": 421,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 381,
        "decorators": [],
        "name": "consumeClass",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 382,
          "end": 416,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 383,
            "end": 416,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 385,
              "end": 416,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 397,
                "end": 416,
                "params": [
                  {
                    "type": "TSTupleType",
                    "start": 398,
                    "end": 415,
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 399,
                        "end": 405
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 407,
                        "end": 414
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 385,
                "end": 397,
                "decorators": [],
                "name": "GenericClass",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 438,
      "end": 496,
      "expression": {
        "type": "CallExpression",
        "start": 438,
        "end": 495,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 451,
            "end": 494,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 463,
                "end": 493,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 470,
                  "end": 493,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 482,
                      "end": 492,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 485,
                        "decorators": [],
                        "name": "str",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 486,
                        "end": 492,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 470,
                    "end": 481,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 477,
                      "decorators": [],
                      "name": "console",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 478,
                      "end": 481,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 463,
                    "end": 466,
                    "decorators": [],
                    "name": "str",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 451,
              "end": 462,
              "decorators": [],
              "name": "createClass",
              "optional": false
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 438,
          "end": 450,
          "decorators": [],
          "name": "consumeClass",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 586,
      "expression": {
        "type": "CallExpression",
        "start": 513,
        "end": 585,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 526,
            "end": 584,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 538,
                "end": 583,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 560,
                  "end": 583,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 572,
                      "end": 582,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 575,
                        "decorators": [],
                        "name": "str",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 582,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 560,
                    "end": 571,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 560,
                      "end": 567,
                      "decorators": [],
                      "name": "console",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 568,
                      "end": 571,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 539,
                    "end": 542,
                    "decorators": [],
                    "name": "str",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 544,
                    "end": 555,
                    "decorators": [],
                    "name": "_unused_num",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 526,
              "end": 537,
              "decorators": [],
              "name": "createClass",
              "optional": false
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 513,
          "end": 525,
          "decorators": [],
          "name": "consumeClass",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
