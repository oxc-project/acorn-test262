__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1447,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "name": "Settings",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 66,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 42,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 32,
              "name": "timeout",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 47,
            "end": 64,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
              "name": "onError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 63,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 59,
                "end": 63
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
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 95,
        "name": "getDefaultSettings",
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
        "start": 98,
        "end": 131,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 104,
            "end": 129,
            "argument": {
              "type": "ObjectExpression",
              "start": 111,
              "end": 128,
              "properties": [
                {
                  "type": "Property",
                  "start": 113,
                  "end": 126,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 120,
                    "name": "timeout",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 122,
                    "end": 126,
                    "value": 1000,
                    "raw": "1000"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 132,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 150,
        "name": "CtorOnly",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 151,
        "end": 192,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 157,
            "end": 190,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 161,
                "end": 170,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 173,
                "end": 190,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 175,
                    "end": 188,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 182,
                      "name": "timeout",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 182,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 184,
                        "end": 188,
                        "literal": {
                          "type": "Literal",
                          "start": 184,
                          "end": 188,
                          "value": 1000,
                          "raw": "1000"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 214,
        "name": "doSomething",
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
          "start": 215,
          "end": 233,
          "name": "settings",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 223,
            "end": 233,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 225,
              "end": 233,
              "typeName": {
                "type": "Identifier",
                "start": 225,
                "end": 233,
                "name": "Settings",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 235,
        "end": 248,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 288,
      "end": 320,
      "expression": {
        "type": "CallExpression",
        "start": 288,
        "end": 319,
        "callee": {
          "type": "Identifier",
          "start": 288,
          "end": 299,
          "name": "doSomething",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 300,
            "end": 318,
            "name": "getDefaultSettings",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 360,
      "expression": {
        "type": "CallExpression",
        "start": 321,
        "end": 359,
        "callee": {
          "type": "Identifier",
          "start": 321,
          "end": 332,
          "name": "doSomething",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 333,
            "end": 358,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 340,
              "end": 357,
              "properties": [
                {
                  "type": "Property",
                  "start": 342,
                  "end": 355,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 349,
                    "name": "timeout",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 351,
                    "end": 355,
                    "value": 1000,
                    "raw": "1000"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 361,
      "end": 391,
      "expression": {
        "type": "CallExpression",
        "start": 361,
        "end": 390,
        "callee": {
          "type": "Identifier",
          "start": 361,
          "end": 372,
          "name": "doSomething",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 373,
            "end": 389,
            "expression": {
              "type": "Literal",
              "start": 373,
              "end": 377,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 381,
              "end": 389,
              "typeName": {
                "type": "Identifier",
                "start": 381,
                "end": 389,
                "name": "CtorOnly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 392,
      "end": 408,
      "expression": {
        "type": "CallExpression",
        "start": 392,
        "end": 407,
        "callee": {
          "type": "Identifier",
          "start": 392,
          "end": 403,
          "name": "doSomething",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 404,
            "end": 406,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 409,
      "end": 441,
      "expression": {
        "type": "CallExpression",
        "start": 409,
        "end": 440,
        "callee": {
          "type": "Identifier",
          "start": 409,
          "end": 420,
          "name": "doSomething",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 421,
            "end": 439,
            "value": "completely wrong",
            "raw": "'completely wrong'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 461,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 460,
        "callee": {
          "type": "Identifier",
          "start": 442,
          "end": 453,
          "name": "doSomething",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 454,
            "end": 459,
            "value": false,
            "raw": "false"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 564,
      "end": 611,
      "id": {
        "type": "Identifier",
        "start": 569,
        "end": 586,
        "name": "ConfigurableStart",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 589,
        "end": 611,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 591,
            "end": 609,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 591,
              "end": 599,
              "name": "useStart",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 600,
              "end": 609,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 602,
                "end": 609
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
      "type": "TSTypeAliasDeclaration",
      "start": 612,
      "end": 655,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 632,
        "name": "ConfigurableEnd",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 635,
        "end": 655,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 637,
            "end": 653,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 637,
              "end": 643,
              "name": "useEnd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 644,
              "end": 653,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 646,
                "end": 653
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
      "type": "TSTypeAliasDeclaration",
      "start": 656,
      "end": 719,
      "id": {
        "type": "Identifier",
        "start": 661,
        "end": 681,
        "name": "ConfigurableStartEnd",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 684,
        "end": 719,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 684,
            "end": 701,
            "typeName": {
              "type": "Identifier",
              "start": 684,
              "end": 701,
              "name": "ConfigurableStart",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 704,
            "end": 719,
            "typeName": {
              "type": "Identifier",
              "start": 704,
              "end": 719,
              "name": "ConfigurableEnd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 720,
      "end": 787,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 743,
        "name": "InsertOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 744,
        "end": 787,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 750,
            "end": 765,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 750,
              "end": 756,
              "name": "prefix",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 757,
              "end": 765,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 759,
                "end": 765
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 770,
            "end": 785,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 770,
              "end": 776,
              "name": "suffix",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 777,
              "end": 785,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 779,
                "end": 785
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
      "type": "TSTypeAliasDeclaration",
      "start": 788,
      "end": 846,
      "id": {
        "type": "Identifier",
        "start": 793,
        "end": 806,
        "name": "ChangeOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 809,
        "end": 845,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 809,
            "end": 829,
            "typeName": {
              "type": "Identifier",
              "start": 809,
              "end": 829,
              "name": "ConfigurableStartEnd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 832,
            "end": 845,
            "typeName": {
              "type": "Identifier",
              "start": 832,
              "end": 845,
              "name": "InsertOptions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 848,
      "end": 1031,
      "id": {
        "type": "Identifier",
        "start": 857,
        "end": 860,
        "name": "del",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 861,
          "end": 895,
          "left": {
            "type": "Identifier",
            "start": 861,
            "end": 890,
            "name": "options",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 868,
              "end": 890,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 870,
                "end": 890,
                "typeName": {
                  "type": "Identifier",
                  "start": 870,
                  "end": 890,
                  "name": "ConfigurableStartEnd",
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
          "right": {
            "type": "ObjectExpression",
            "start": 893,
            "end": 895,
            "properties": []
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 910,
          "end": 940,
          "left": {
            "type": "Identifier",
            "start": 910,
            "end": 935,
            "name": "error",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 915,
              "end": 935,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 917,
                "end": 935,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 919,
                    "end": 933,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 919,
                      "end": 924,
                      "name": "error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 925,
                      "end": 933,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 927,
                        "end": 933
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ObjectExpression",
            "start": 938,
            "end": 940,
            "properties": []
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 942,
        "end": 1031,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 948,
            "end": 977,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 952,
                "end": 976,
                "id": {
                  "type": "Identifier",
                  "start": 952,
                  "end": 976,
                  "name": "changes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 959,
                    "end": 976,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 961,
                      "end": 976,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 961,
                        "end": 974,
                        "typeName": {
                          "type": "Identifier",
                          "start": 961,
                          "end": 974,
                          "name": "ChangeOptions",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 982,
            "end": 1004,
            "expression": {
              "type": "CallExpression",
              "start": 982,
              "end": 1003,
              "callee": {
                "type": "MemberExpression",
                "start": 982,
                "end": 994,
                "object": {
                  "type": "Identifier",
                  "start": 982,
                  "end": 989,
                  "name": "changes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 994,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 995,
                  "end": 1002,
                  "name": "options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1009,
            "end": 1029,
            "expression": {
              "type": "CallExpression",
              "start": 1009,
              "end": 1028,
              "callee": {
                "type": "MemberExpression",
                "start": 1009,
                "end": 1021,
                "object": {
                  "type": "Identifier",
                  "start": 1009,
                  "end": 1016,
                  "name": "changes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1017,
                  "end": 1021,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1027,
                  "name": "error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1033,
      "end": 1075,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1040,
        "name": "K",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1041,
        "end": 1075,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1047,
            "end": 1073,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1047,
              "end": 1058,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1058,
              "end": 1073,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1059,
                  "end": 1068,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1060,
                    "end": 1068,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1062,
                      "end": 1068
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1070,
                "end": 1073,
                "body": []
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
      "type": "TSInterfaceDeclaration",
      "start": 1139,
      "end": 1195,
      "id": {
        "type": "Identifier",
        "start": 1149,
        "end": 1153,
        "name": "Ctor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1154,
        "end": 1195,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1160,
            "end": 1178,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1165,
                "end": 1174,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1166,
                  "end": 1174,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1168,
                    "end": 1174
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1175,
              "end": 1178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1177,
                "end": 1178,
                "typeName": {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1178,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1183,
            "end": 1193,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1183,
              "end": 1184,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1185,
              "end": 1193,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1187,
                "end": 1193
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
      "start": 1196,
      "end": 1214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1200,
          "end": 1214,
          "id": {
            "type": "Identifier",
            "start": 1200,
            "end": 1210,
            "name": "ctor",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1204,
              "end": 1210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1206,
                "end": 1210,
                "typeName": {
                  "type": "Identifier",
                  "start": 1206,
                  "end": 1210,
                  "name": "Ctor",
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
          "init": {
            "type": "Identifier",
            "start": 1213,
            "end": 1214,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1216,
      "end": 1248,
      "id": {
        "type": "Identifier",
        "start": 1221,
        "end": 1228,
        "name": "Spoiler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1231,
        "end": 1248,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1233,
            "end": 1246,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1233,
              "end": 1237,
              "name": "nope",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1238,
              "end": 1246,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1240,
                "end": 1246
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
      "type": "TSTypeAliasDeclaration",
      "start": 1249,
      "end": 1323,
      "id": {
        "type": "Identifier",
        "start": 1254,
        "end": 1258,
        "name": "Weak",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1261,
        "end": 1323,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1267,
            "end": 1277,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1267,
              "end": 1268,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1269,
              "end": 1277,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1271,
                "end": 1277
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1282,
            "end": 1321,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1282,
              "end": 1292,
              "name": "properties",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1293,
              "end": 1321,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1295,
                "end": 1321,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1305,
                    "end": 1315,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1305,
                      "end": 1306,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1307,
                      "end": 1315,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1309,
                        "end": 1315
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 1324,
      "end": 1402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1336,
          "end": 1402,
          "id": {
            "type": "Identifier",
            "start": 1336,
            "end": 1402,
            "name": "propertiesWrong",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1351,
              "end": 1402,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1353,
                "end": 1402,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1359,
                    "end": 1400,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1359,
                      "end": 1369,
                      "name": "properties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1369,
                      "end": 1400,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1371,
                        "end": 1400,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1381,
                            "end": 1394,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1381,
                              "end": 1386,
                              "name": "wrong",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1386,
                              "end": 1394,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1388,
                                "end": 1394
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1403,
      "end": 1445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1407,
          "end": 1445,
          "id": {
            "type": "Identifier",
            "start": 1407,
            "end": 1427,
            "name": "weak",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1411,
              "end": 1427,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1413,
                "end": 1427,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1413,
                    "end": 1417,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1413,
                      "end": 1417,
                      "name": "Weak",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1420,
                    "end": 1427,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1420,
                      "end": 1427,
                      "name": "Spoiler",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 1430,
            "end": 1445,
            "name": "propertiesWrong",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
