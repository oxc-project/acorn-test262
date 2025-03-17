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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "MyTupleItem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 19,
        "end": 21,
        "members": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 35,
        "name": "MyTuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "name": "MyTupleItem",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
                  "name": "MyTupleItem",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 72,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 92,
        "name": "GenericFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 103,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 110,
                "name": "MyTuple",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 114,
        "end": 138,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 115,
            "end": 129,
            "argument": {
              "type": "Identifier",
              "start": 118,
              "end": 126,
              "name": "fromArgs",
              "typeAnnotation": null,
              "decorators": [],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "value": null
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
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 141,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 159,
        "name": "GenericClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 185,
            "end": 222,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "name": "from",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 206,
                      "name": "GenericFunction",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 178,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 177,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 177,
                "name": "MyTuple",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 226,
      "end": 358,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 246,
        "name": "createClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 266,
          "end": 287,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 267,
            "end": 287,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 269,
              "end": 287,
              "typeName": {
                "type": "Identifier",
                "start": 269,
                "end": 284,
                "name": "GenericFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "Identifier",
                "start": 323,
                "end": 335,
                "name": "GenericClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 246,
        "end": 265,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 247,
            "end": 264,
            "name": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 257,
              "end": 264,
              "typeName": {
                "type": "Identifier",
                "start": 257,
                "end": 264,
                "name": "MyTuple",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 288,
        "end": 305,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 290,
          "end": 305,
          "typeName": {
            "type": "Identifier",
            "start": 290,
            "end": 302,
            "name": "GenericClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 360,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 381,
        "name": "consumeClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 382,
          "end": 416,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 383,
            "end": 416,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 385,
              "end": 416,
              "typeName": {
                "type": "Identifier",
                "start": 385,
                "end": 397,
                "name": "GenericClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 418,
        "end": 421,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 438,
      "end": 496,
      "expression": {
        "type": "CallExpression",
        "start": 438,
        "end": 495,
        "callee": {
          "type": "Identifier",
          "start": 438,
          "end": 450,
          "name": "consumeClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 451,
            "end": 494,
            "callee": {
              "type": "Identifier",
              "start": 451,
              "end": 462,
              "name": "createClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 463,
                "end": 493,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 463,
                    "end": 466,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 470,
                  "end": 493,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 470,
                    "end": 481,
                    "object": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 477,
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 478,
                      "end": 481,
                      "name": "log",
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
                      "start": 482,
                      "end": 492,
                      "object": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 485,
                        "name": "str",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 486,
                        "end": 492,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 586,
      "expression": {
        "type": "CallExpression",
        "start": 513,
        "end": 585,
        "callee": {
          "type": "Identifier",
          "start": 513,
          "end": 525,
          "name": "consumeClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 526,
            "end": 584,
            "callee": {
              "type": "Identifier",
              "start": 526,
              "end": 537,
              "name": "createClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 538,
                "end": 583,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 539,
                    "end": 542,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 544,
                    "end": 555,
                    "name": "_unused_num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 560,
                  "end": 583,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 560,
                    "end": 571,
                    "object": {
                      "type": "Identifier",
                      "start": 560,
                      "end": 567,
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 568,
                      "end": 571,
                      "name": "log",
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
                      "start": 572,
                      "end": 582,
                      "object": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 575,
                        "name": "str",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 582,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
