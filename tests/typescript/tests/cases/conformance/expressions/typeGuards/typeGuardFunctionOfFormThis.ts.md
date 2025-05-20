__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2456,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 198,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 198,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 23,
            "end": 102,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 31,
              "decorators": [],
              "name": "isLeader",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 102,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 102,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 63,
                    "end": 96,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 70,
                      "end": 95,
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "start": 70,
                        "end": 74
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 95,
                        "decorators": [],
                        "name": "LeadGuard",
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
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 35,
                  "end": 52,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 35,
                    "end": 39
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 43,
                      "end": 52,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 52,
                        "decorators": [],
                        "name": "LeadGuard",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 196,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 117,
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 196,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 196,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 190,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 160,
                      "end": 189,
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "start": 160,
                        "end": 164
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 189,
                        "decorators": [],
                        "name": "FollowerGuard",
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
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 119,
                "end": 142,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 121,
                  "end": 142,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 121,
                    "end": 125
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 129,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 142,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 142,
                        "decorators": [],
                        "name": "FollowerGuard",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 200,
      "end": 259,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 235,
        "end": 259,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 241,
            "end": 256,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 245,
              "decorators": [],
              "name": "lead",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 245,
              "end": 256,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 254,
                "end": 256,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 247,
                "end": 253,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 249,
                  "end": 253
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 215,
        "decorators": [],
        "name": "LeadGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 234,
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 261,
      "end": 326,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 300,
        "end": 326,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 306,
            "end": 323,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 312,
              "decorators": [],
              "name": "follow",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 312,
              "end": 323,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 323,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 314,
                "end": 320,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 316,
                  "end": 320
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 280,
        "decorators": [],
        "name": "FollowerGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 289,
        "end": 299,
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 367,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 345,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 335,
                "end": 345,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 345,
                  "decorators": [],
                  "name": "RoyalGuard",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 348,
            "end": 367,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 352,
              "end": 365,
              "decorators": [],
              "name": "FollowerGuard",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 369,
      "end": 449,
      "alternate": {
        "type": "IfStatement",
        "start": 410,
        "end": 449,
        "alternate": null,
        "consequent": {
          "type": "BlockStatement",
          "start": 430,
          "end": 449,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 436,
              "end": 447,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 436,
                "end": 446,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 436,
                  "end": 444,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 444,
                    "decorators": [],
                    "name": "follow",
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
          "type": "CallExpression",
          "start": 414,
          "end": 428,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 414,
            "end": 426,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 416,
              "end": 426,
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 387,
        "end": 404,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 393,
            "end": 402,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 393,
              "end": 401,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 393,
                "end": 399,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 394,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 399,
                  "decorators": [],
                  "name": "lead",
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
        "type": "CallExpression",
        "start": 373,
        "end": 385,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 373,
          "end": 383,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 373,
            "end": 374,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 375,
            "end": 383,
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 451,
      "end": 497,
      "body": {
        "type": "TSInterfaceBody",
        "start": 495,
        "end": 497,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 484,
          "end": 494,
          "expression": {
            "type": "Identifier",
            "start": 484,
            "end": 494,
            "decorators": [],
            "name": "RoyalGuard",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 475,
        "decorators": [],
        "name": "GuardInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 499,
      "end": 521,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 520,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 520,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 520,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 506,
                "end": 520,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 520,
                  "decorators": [],
                  "name": "GuardInterface",
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
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 522,
      "end": 602,
      "alternate": {
        "type": "IfStatement",
        "start": 563,
        "end": 602,
        "alternate": null,
        "consequent": {
          "type": "BlockStatement",
          "start": 583,
          "end": 602,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 589,
              "end": 600,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 589,
                "end": 599,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 589,
                  "end": 597,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 590,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 597,
                    "decorators": [],
                    "name": "follow",
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
          "type": "CallExpression",
          "start": 567,
          "end": 581,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 567,
            "end": 579,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 567,
              "end": 568,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 569,
              "end": 579,
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 540,
        "end": 557,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 546,
            "end": 555,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 546,
              "end": 554,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 546,
                "end": 552,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 547,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 552,
                  "decorators": [],
                  "name": "lead",
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
        "type": "CallExpression",
        "start": 526,
        "end": 538,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 526,
          "end": 536,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 526,
            "end": 527,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 528,
            "end": 536,
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 826,
      "end": 844,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 830,
          "end": 843,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 830,
            "end": 837,
            "decorators": [],
            "name": "holder2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 840,
            "end": 843,
            "properties": [
              {
                "type": "Property",
                "start": 841,
                "end": 842,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 842,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 842,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 846,
      "end": 914,
      "alternate": {
        "type": "BlockStatement",
        "start": 896,
        "end": 914,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 902,
            "end": 912,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 902,
              "end": 911,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 902,
                "end": 909,
                "decorators": [],
                "name": "holder2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 910,
                "end": 911,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 872,
        "end": 890,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 878,
            "end": 888,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 878,
              "end": 887,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 878,
                "end": 885,
                "decorators": [],
                "name": "holder2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 886,
                "end": 887,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 850,
        "end": 870,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 850,
          "end": 868,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 850,
            "end": 859,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 850,
              "end": 857,
              "decorators": [],
              "name": "holder2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 858,
              "end": 859,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 860,
            "end": 868,
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 916,
      "end": 1118,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 933,
        "end": 1118,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 939,
            "end": 1025,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 939,
              "end": 946,
              "decorators": [],
              "name": "isElite",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 949,
              "end": 1025,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 975,
                "end": 1025,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 985,
                    "end": 1019,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 992,
                      "end": 1018,
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "start": 992,
                        "end": 996
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1008,
                        "end": 1018,
                        "decorators": [],
                        "name": "ArrowElite",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 951,
                "end": 971,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 953,
                  "end": 971,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 953,
                    "end": 957
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 961,
                    "end": 971,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 961,
                      "end": 971,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 961,
                        "end": 971,
                        "decorators": [],
                        "name": "ArrowElite",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1030,
            "end": 1116,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1030,
              "end": 1037,
              "decorators": [],
              "name": "isMedic",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 1040,
              "end": 1116,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1066,
                "end": 1116,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1076,
                    "end": 1110,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1083,
                      "end": 1109,
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "start": 1083,
                        "end": 1087
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1109,
                        "decorators": [],
                        "name": "ArrowMedic",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1042,
                "end": 1062,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1044,
                  "end": 1062,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 1044,
                    "end": 1048
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1052,
                    "end": 1062,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1052,
                      "end": 1062,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1052,
                        "end": 1062,
                        "decorators": [],
                        "name": "ArrowMedic",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 932,
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1120,
      "end": 1181,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1156,
        "end": 1181,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1162,
            "end": 1179,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1162,
              "end": 1168,
              "decorators": [],
              "name": "defend",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1168,
              "end": 1179,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1177,
                "end": 1179,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1170,
                "end": 1176,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1172,
                  "end": 1176
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1126,
        "end": 1136,
        "decorators": [],
        "name": "ArrowElite",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1145,
        "end": 1155,
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1183,
      "end": 1242,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1219,
        "end": 1242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1225,
            "end": 1240,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1225,
              "end": 1229,
              "decorators": [],
              "name": "heal",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1229,
              "end": 1240,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1238,
                "end": 1240,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1231,
                "end": 1237,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1233,
                  "end": 1237
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1199,
        "decorators": [],
        "name": "ArrowMedic",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1208,
        "end": 1218,
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1244,
      "end": 1273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1248,
          "end": 1272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1248,
            "end": 1253,
            "decorators": [],
            "name": "guard",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1256,
            "end": 1272,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1260,
              "end": 1270,
              "decorators": [],
              "name": "ArrowGuard",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 1274,
      "end": 1366,
      "alternate": {
        "type": "IfStatement",
        "start": 1324,
        "end": 1366,
        "alternate": null,
        "consequent": {
          "type": "BlockStatement",
          "start": 1345,
          "end": 1366,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 1351,
              "end": 1364,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 1351,
                "end": 1363,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1351,
                  "end": 1361,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1351,
                    "end": 1356,
                    "decorators": [],
                    "name": "guard",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1361,
                    "decorators": [],
                    "name": "heal",
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
          "type": "CallExpression",
          "start": 1328,
          "end": 1343,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1328,
            "end": 1341,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1328,
              "end": 1333,
              "decorators": [],
              "name": "guard",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1334,
              "end": 1341,
              "decorators": [],
              "name": "isMedic",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1295,
        "end": 1318,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1301,
            "end": 1316,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1301,
              "end": 1315,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1301,
                "end": 1313,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1306,
                  "decorators": [],
                  "name": "guard",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1307,
                  "end": 1313,
                  "decorators": [],
                  "name": "defend",
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
        "type": "CallExpression",
        "start": 1278,
        "end": 1293,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 1278,
          "end": 1291,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1278,
            "end": 1283,
            "decorators": [],
            "name": "guard",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1284,
            "end": 1291,
            "decorators": [],
            "name": "isElite",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1368,
      "end": 1412,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1387,
        "end": 1412,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1393,
            "end": 1410,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1393,
              "end": 1400,
              "decorators": [],
              "name": "spoiled",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1400,
              "end": 1409,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1402,
                "end": 1409
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1378,
        "end": 1386,
        "decorators": [],
        "name": "Supplies",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1414,
      "end": 1457,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1433,
        "end": 1457,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1439,
            "end": 1455,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1439,
              "end": 1445,
              "decorators": [],
              "name": "broken",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1445,
              "end": 1454,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1447,
                "end": 1454
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1424,
        "end": 1432,
        "decorators": [],
        "name": "Sundries",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1459,
      "end": 1604,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1478,
        "end": 1604,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1484,
            "end": 1496,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1484,
              "end": 1492,
              "decorators": [],
              "name": "contents",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1492,
              "end": 1495,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1494,
                "end": 1495,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1494,
                  "end": 1495,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1501,
            "end": 1516,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1501,
              "end": 1507,
              "decorators": [],
              "name": "volume",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1507,
              "end": 1515,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1509,
                "end": 1515
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1521,
            "end": 1559,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1521,
              "end": 1531,
              "decorators": [],
              "name": "isSupplies",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1533,
              "end": 1558,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 1535,
                "end": 1558,
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 1535,
                  "end": 1539
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1543,
                  "end": 1558,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1543,
                    "end": 1558,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1548,
                      "end": 1558,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1549,
                          "end": 1557,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1549,
                            "end": 1557,
                            "decorators": [],
                            "name": "Supplies",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1543,
                      "end": 1548,
                      "decorators": [],
                      "name": "Crate",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1564,
            "end": 1602,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1564,
              "end": 1574,
              "decorators": [],
              "name": "isSundries",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1576,
              "end": 1601,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 1578,
                "end": 1601,
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 1578,
                  "end": 1582
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1586,
                  "end": 1601,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1586,
                    "end": 1601,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1591,
                      "end": 1601,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1592,
                          "end": 1600,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1592,
                            "end": 1600,
                            "decorators": [],
                            "name": "Sundries",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1586,
                      "end": 1591,
                      "decorators": [],
                      "name": "Crate",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
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
        "start": 1469,
        "end": 1474,
        "decorators": [],
        "name": "Crate",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1474,
        "end": 1477,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1475,
            "end": 1476,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1475,
              "end": 1476,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1606,
      "end": 1627,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1610,
          "end": 1626,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1610,
            "end": 1626,
            "decorators": [],
            "name": "crate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1615,
              "end": 1626,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1617,
                "end": 1626,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1622,
                  "end": 1626,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1623,
                      "end": 1625,
                      "members": []
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1617,
                  "end": 1622,
                  "decorators": [],
                  "name": "Crate",
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
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 1629,
      "end": 1758,
      "alternate": {
        "type": "IfStatement",
        "start": 1696,
        "end": 1758,
        "alternate": null,
        "consequent": {
          "type": "BlockStatement",
          "start": 1720,
          "end": 1758,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 1726,
              "end": 1756,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 1726,
                "end": 1755,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 1726,
                  "end": 1748,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1726,
                    "end": 1740,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1726,
                      "end": 1731,
                      "decorators": [],
                      "name": "crate",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1732,
                      "end": 1740,
                      "decorators": [],
                      "name": "contents",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1741,
                    "end": 1748,
                    "decorators": [],
                    "name": "spoiled",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 1751,
                  "end": 1755,
                  "raw": "true",
                  "value": true
                }
              }
            }
          ]
        },
        "test": {
          "type": "CallExpression",
          "start": 1700,
          "end": 1718,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1700,
            "end": 1716,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1700,
              "end": 1705,
              "decorators": [],
              "name": "crate",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1706,
              "end": 1716,
              "decorators": [],
              "name": "isSupplies",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1653,
        "end": 1690,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1659,
            "end": 1688,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1659,
              "end": 1687,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1659,
                "end": 1680,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1659,
                  "end": 1673,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1659,
                    "end": 1664,
                    "decorators": [],
                    "name": "crate",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1665,
                    "end": 1673,
                    "decorators": [],
                    "name": "contents",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1674,
                  "end": 1680,
                  "decorators": [],
                  "name": "broken",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1683,
                "end": 1687,
                "raw": "true",
                "value": true
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 1633,
        "end": 1651,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 1633,
          "end": 1649,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1633,
            "end": 1638,
            "decorators": [],
            "name": "crate",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1639,
            "end": 1649,
            "decorators": [],
            "name": "isSundries",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1801,
      "end": 1829,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1801,
        "end": 1828,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1801,
          "end": 1813,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1801,
            "end": 1802,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1803,
            "end": 1813,
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 1816,
          "end": 1828,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1816,
            "end": 1817,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1818,
            "end": 1828,
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1830,
      "end": 1854,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1830,
        "end": 1853,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1830,
          "end": 1840,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1830,
            "end": 1831,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1832,
            "end": 1840,
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 1843,
          "end": 1853,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1843,
            "end": 1844,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1845,
            "end": 1853,
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1856,
      "end": 2036,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1873,
        "end": 2036,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1879,
            "end": 1950,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1879,
              "end": 1887,
              "decorators": [],
              "name": "isLeader",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1887,
              "end": 1950,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1911,
                "end": 1950,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1913,
                    "end": 1948,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1920,
                      "end": 1947,
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "start": 1920,
                        "end": 1924
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1936,
                        "end": 1947,
                        "decorators": [],
                        "name": "MimicLeader",
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
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1889,
                "end": 1910,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1891,
                  "end": 1910,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 1891,
                    "end": 1895
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1899,
                    "end": 1910,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1899,
                      "end": 1910,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1899,
                        "end": 1910,
                        "decorators": [],
                        "name": "MimicLeader",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1956,
            "end": 2033,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1956,
              "end": 1966,
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1966,
              "end": 2033,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1992,
                "end": 2033,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1994,
                    "end": 2031,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 2001,
                      "end": 2030,
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "start": 2001,
                        "end": 2005
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2017,
                        "end": 2030,
                        "decorators": [],
                        "name": "MimicFollower",
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
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1968,
                "end": 1991,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1970,
                  "end": 1991,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 1970,
                    "end": 1974
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1978,
                    "end": 1991,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1978,
                      "end": 1991,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1978,
                        "end": 1991,
                        "decorators": [],
                        "name": "MimicFollower",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1862,
        "end": 1872,
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2038,
      "end": 2098,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2075,
        "end": 2098,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2081,
            "end": 2096,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2081,
              "end": 2085,
              "decorators": [],
              "name": "lead",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2085,
              "end": 2096,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2094,
                "end": 2096,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2087,
                "end": 2093,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2089,
                  "end": 2093
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2044,
        "end": 2055,
        "decorators": [],
        "name": "MimicLeader",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2064,
        "end": 2074,
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2100,
      "end": 2164,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2139,
        "end": 2164,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2145,
            "end": 2162,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2145,
              "end": 2151,
              "decorators": [],
              "name": "follow",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2151,
              "end": 2162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2160,
                "end": 2162,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2153,
                "end": 2159,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2155,
                  "end": 2159
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2106,
        "end": 2119,
        "decorators": [],
        "name": "MimicFollower",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2128,
        "end": 2138,
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2166,
      "end": 2195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2170,
          "end": 2194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2170,
            "end": 2175,
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2178,
            "end": 2194,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 2182,
              "end": 2192,
              "decorators": [],
              "name": "MimicGuard",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2197,
      "end": 2225,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2197,
        "end": 2224,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2197,
          "end": 2207,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2197,
            "end": 2198,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2199,
            "end": 2207,
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 2210,
          "end": 2224,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2210,
            "end": 2215,
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2216,
            "end": 2224,
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2226,
      "end": 2258,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2226,
        "end": 2257,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2226,
          "end": 2238,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2226,
            "end": 2227,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2228,
            "end": 2238,
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 2241,
          "end": 2257,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2241,
            "end": 2246,
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2247,
            "end": 2257,
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 2260,
      "end": 2344,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2284,
        "end": 2344,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2290,
            "end": 2305,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2290,
              "end": 2304,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 2290,
                "end": 2302,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2290,
                  "end": 2295,
                  "decorators": [],
                  "name": "mimic",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2296,
                  "end": 2302,
                  "decorators": [],
                  "name": "follow",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2310,
            "end": 2342,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2310,
              "end": 2341,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2310,
                "end": 2326,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2310,
                  "end": 2315,
                  "decorators": [],
                  "name": "mimic",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2316,
                  "end": 2326,
                  "decorators": [],
                  "name": "isFollower",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 2329,
                "end": 2341,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2329,
                  "end": 2330,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2331,
                  "end": 2341,
                  "decorators": [],
                  "name": "isFollower",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 2264,
        "end": 2282,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 2264,
          "end": 2280,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2264,
            "end": 2269,
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2270,
            "end": 2280,
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2347,
      "end": 2456,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2377,
        "end": 2456,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2383,
            "end": 2413,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2383,
              "end": 2391,
              "decorators": [],
              "name": "isLeader",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2393,
              "end": 2412,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 2395,
                "end": 2412,
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 2395,
                  "end": 2399
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2403,
                  "end": 2412,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2403,
                    "end": 2412,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2403,
                      "end": 2412,
                      "decorators": [],
                      "name": "LeadGuard",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2418,
            "end": 2454,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2418,
              "end": 2428,
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2430,
              "end": 2453,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 2432,
                "end": 2453,
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 2432,
                  "end": 2436
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2440,
                  "end": 2453,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2440,
                    "end": 2453,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2440,
                      "end": 2453,
                      "decorators": [],
                      "name": "FollowerGuard",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
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
        "start": 2357,
        "end": 2376,
        "decorators": [],
        "name": "MimicGuardInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
