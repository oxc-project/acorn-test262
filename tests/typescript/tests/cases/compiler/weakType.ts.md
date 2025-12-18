__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Settings",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "timeout",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 42
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onError",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 54
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 59,
                "end": 63
              },
              "start": 57,
              "end": 63
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 47,
            "end": 64
          }
        ],
        "start": 19,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getDefaultSettings",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 95
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 120
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1000,
                    "raw": "1000",
                    "start": 122,
                    "end": 126
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 113,
                  "end": 126
                }
              ],
              "start": 111,
              "end": 128
            },
            "start": 104,
            "end": 129
          }
        ],
        "start": 98,
        "end": 131
      },
      "expression": false,
      "start": 68,
      "end": 131
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CtorOnly",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 150
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  },
                  "start": 162,
                  "end": 170
                },
                "start": 161,
                "end": 170
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "timeout",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 182
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1000,
                          "raw": "1000",
                          "start": 184,
                          "end": 188
                        },
                        "start": 184,
                        "end": 188
                      },
                      "start": 182,
                      "end": 188
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 175,
                    "end": 188
                  }
                ],
                "start": 173,
                "end": 190
              },
              "start": 171,
              "end": 190
            },
            "start": 157,
            "end": 190
          }
        ],
        "start": 151,
        "end": 192
      },
      "declare": false,
      "start": 132,
      "end": 192
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 214
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "settings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Settings",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 233
              },
              "typeArguments": null,
              "start": 225,
              "end": 233
            },
            "start": 223,
            "end": 233
          },
          "start": 215,
          "end": 233
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 235,
        "end": 248
      },
      "expression": false,
      "start": 194,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 299
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "getDefaultSettings",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 318
          }
        ],
        "optional": false,
        "start": 288,
        "end": 319
      },
      "directive": null,
      "start": 288,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 332
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 349
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1000,
                    "raw": "1000",
                    "start": 351,
                    "end": 355
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 342,
                  "end": 355
                }
              ],
              "start": 340,
              "end": 357
            },
            "id": null,
            "generator": false,
            "start": 333,
            "end": 358
          }
        ],
        "optional": false,
        "start": 321,
        "end": 359
      },
      "directive": null,
      "start": 321,
      "end": 360
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 361,
          "end": 372
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 373,
              "end": 377
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CtorOnly",
                "optional": false,
                "typeAnnotation": null,
                "start": 381,
                "end": 389
              },
              "typeArguments": null,
              "start": 381,
              "end": 389
            },
            "start": 373,
            "end": 389
          }
        ],
        "optional": false,
        "start": 361,
        "end": 390
      },
      "directive": null,
      "start": 361,
      "end": 391
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 392,
          "end": 403
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 404,
            "end": 406
          }
        ],
        "optional": false,
        "start": 392,
        "end": 407
      },
      "directive": null,
      "start": 392,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "completely wrong",
            "raw": "'completely wrong'",
            "start": 421,
            "end": 439
          }
        ],
        "optional": false,
        "start": 409,
        "end": 440
      },
      "directive": null,
      "start": 409,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 453
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 454,
            "end": 459
          }
        ],
        "optional": false,
        "start": 442,
        "end": 460
      },
      "directive": null,
      "start": 442,
      "end": 461
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigurableStart",
        "optional": false,
        "typeAnnotation": null,
        "start": 569,
        "end": 586
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useStart",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 599
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 602,
                "end": 609
              },
              "start": 600,
              "end": 609
            },
            "accessibility": null,
            "static": false,
            "start": 591,
            "end": 609
          }
        ],
        "start": 589,
        "end": 611
      },
      "declare": false,
      "start": 564,
      "end": 611
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigurableEnd",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 632
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useEnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 643
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 646,
                "end": 653
              },
              "start": 644,
              "end": 653
            },
            "accessibility": null,
            "static": false,
            "start": 637,
            "end": 653
          }
        ],
        "start": 635,
        "end": 655
      },
      "declare": false,
      "start": 612,
      "end": 655
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigurableStartEnd",
        "optional": false,
        "typeAnnotation": null,
        "start": 661,
        "end": 681
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConfigurableStart",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 701
            },
            "typeArguments": null,
            "start": 684,
            "end": 701
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConfigurableEnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 719
            },
            "typeArguments": null,
            "start": 704,
            "end": 719
          }
        ],
        "start": 684,
        "end": 719
      },
      "declare": false,
      "start": 656,
      "end": 719
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InsertOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 743
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prefix",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 756
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 759,
                "end": 765
              },
              "start": 757,
              "end": 765
            },
            "accessibility": null,
            "static": false,
            "start": 750,
            "end": 765
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "suffix",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 776
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 779,
                "end": 785
              },
              "start": 777,
              "end": 785
            },
            "accessibility": null,
            "static": false,
            "start": 770,
            "end": 785
          }
        ],
        "start": 744,
        "end": 787
      },
      "declare": false,
      "start": 720,
      "end": 787
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChangeOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 793,
        "end": 806
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConfigurableStartEnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 829
            },
            "typeArguments": null,
            "start": 809,
            "end": 829
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InsertOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 845
            },
            "typeArguments": null,
            "start": 832,
            "end": 845
          }
        ],
        "start": 809,
        "end": 845
      },
      "declare": false,
      "start": 788,
      "end": 846
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "del",
        "optional": false,
        "typeAnnotation": null,
        "start": 857,
        "end": 860
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConfigurableStartEnd",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 870,
                  "end": 890
                },
                "typeArguments": null,
                "start": 870,
                "end": 890
              },
              "start": 868,
              "end": 890
            },
            "start": 861,
            "end": 890
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 893,
            "end": 895
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 861,
          "end": 895
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 919,
                      "end": 924
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 927,
                        "end": 933
                      },
                      "start": 925,
                      "end": 933
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 919,
                    "end": 933
                  }
                ],
                "start": 917,
                "end": 935
              },
              "start": 915,
              "end": 935
            },
            "start": 910,
            "end": 935
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 938,
            "end": 940
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 910,
          "end": 940
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "changes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ChangeOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 961,
                          "end": 974
                        },
                        "typeArguments": null,
                        "start": 961,
                        "end": 974
                      },
                      "start": 961,
                      "end": 976
                    },
                    "start": 959,
                    "end": 976
                  },
                  "start": 952,
                  "end": 976
                },
                "init": null,
                "definite": false,
                "start": 952,
                "end": 976
              }
            ],
            "declare": false,
            "start": 948,
            "end": 977
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "changes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 982,
                  "end": 989
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 994
                },
                "optional": false,
                "computed": false,
                "start": 982,
                "end": 994
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 995,
                  "end": 1002
                }
              ],
              "optional": false,
              "start": 982,
              "end": 1003
            },
            "directive": null,
            "start": 982,
            "end": 1004
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "changes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1009,
                  "end": 1016
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1017,
                  "end": 1021
                },
                "optional": false,
                "computed": false,
                "start": 1009,
                "end": 1021
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1027
                }
              ],
              "optional": false,
              "start": 1009,
              "end": 1028
            },
            "directive": null,
            "start": 1009,
            "end": 1029
          }
        ],
        "start": 942,
        "end": 1031
      },
      "expression": false,
      "start": 848,
      "end": 1031
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1040
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1047,
              "end": 1058
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1062,
                      "end": 1068
                    },
                    "start": 1060,
                    "end": 1068
                  },
                  "start": 1059,
                  "end": 1068
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1070,
                "end": 1073
              },
              "expression": false,
              "start": 1058,
              "end": 1073
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1047,
            "end": 1073
          }
        ],
        "start": 1041,
        "end": 1075
      },
      "abstract": false,
      "declare": false,
      "start": 1033,
      "end": 1075
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ctor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1153
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1168,
                    "end": 1174
                  },
                  "start": 1166,
                  "end": 1174
                },
                "start": 1165,
                "end": 1174
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1177,
                  "end": 1178
                },
                "typeArguments": null,
                "start": 1177,
                "end": 1178
              },
              "start": 1175,
              "end": 1178
            },
            "start": 1160,
            "end": 1178
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1184
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1187,
                "end": 1193
              },
              "start": 1185,
              "end": 1193
            },
            "accessibility": null,
            "static": false,
            "start": 1183,
            "end": 1193
          }
        ],
        "start": 1154,
        "end": 1195
      },
      "declare": false,
      "start": 1139,
      "end": 1195
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ctor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1206,
                  "end": 1210
                },
                "typeArguments": null,
                "start": 1206,
                "end": 1210
              },
              "start": 1204,
              "end": 1210
            },
            "start": 1200,
            "end": 1210
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1213,
            "end": 1214
          },
          "definite": false,
          "start": 1200,
          "end": 1214
        }
      ],
      "declare": false,
      "start": 1196,
      "end": 1214
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spoiler",
        "optional": false,
        "typeAnnotation": null,
        "start": 1221,
        "end": 1228
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nope",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1240,
                "end": 1246
              },
              "start": 1238,
              "end": 1246
            },
            "accessibility": null,
            "static": false,
            "start": 1233,
            "end": 1246
          }
        ],
        "start": 1231,
        "end": 1248
      },
      "declare": false,
      "start": 1216,
      "end": 1248
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Weak",
        "optional": false,
        "typeAnnotation": null,
        "start": 1254,
        "end": 1258
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1268
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1271,
                "end": 1277
              },
              "start": 1269,
              "end": 1277
            },
            "accessibility": null,
            "static": false,
            "start": 1267,
            "end": 1277
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "properties",
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1292
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1305,
                      "end": 1306
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1309,
                        "end": 1315
                      },
                      "start": 1307,
                      "end": 1315
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1305,
                    "end": 1315
                  }
                ],
                "start": 1295,
                "end": 1321
              },
              "start": 1293,
              "end": 1321
            },
            "accessibility": null,
            "static": false,
            "start": 1282,
            "end": 1321
          }
        ],
        "start": 1261,
        "end": 1323
      },
      "declare": false,
      "start": 1249,
      "end": 1323
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "propertiesWrong",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "properties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1359,
                      "end": 1369
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "wrong",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1381,
                              "end": 1386
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1388,
                                "end": 1394
                              },
                              "start": 1386,
                              "end": 1394
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1381,
                            "end": 1394
                          }
                        ],
                        "start": 1371,
                        "end": 1400
                      },
                      "start": 1369,
                      "end": 1400
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1359,
                    "end": 1400
                  }
                ],
                "start": 1353,
                "end": 1402
              },
              "start": 1351,
              "end": 1402
            },
            "start": 1336,
            "end": 1402
          },
          "init": null,
          "definite": false,
          "start": 1336,
          "end": 1402
        }
      ],
      "declare": true,
      "start": 1324,
      "end": 1402
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "weak",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Weak",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1413,
                      "end": 1417
                    },
                    "typeArguments": null,
                    "start": 1413,
                    "end": 1417
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Spoiler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1420,
                      "end": 1427
                    },
                    "typeArguments": null,
                    "start": 1420,
                    "end": 1427
                  }
                ],
                "start": 1413,
                "end": 1427
              },
              "start": 1411,
              "end": 1427
            },
            "start": 1407,
            "end": 1427
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "propertiesWrong",
            "optional": false,
            "typeAnnotation": null,
            "start": 1430,
            "end": 1445
          },
          "definite": false,
          "start": 1407,
          "end": 1445
        }
      ],
      "declare": false,
      "start": 1403,
      "end": 1445
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1446
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 10,
    "end": 18,
    "range": [
      10,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 25,
    "end": 32,
    "range": [
      25,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41,
    "range": [
      35,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "onError",
    "start": 47,
    "end": 54,
    "range": [
      47,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 59,
    "end": 63,
    "range": [
      59,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76,
    "range": [
      68,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "getDefaultSettings",
    "start": 77,
    "end": 95,
    "range": [
      77,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 104,
    "end": 110,
    "range": [
      104,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 113,
    "end": 120,
    "range": [
      113,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 122,
    "end": 126,
    "range": [
      122,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 132,
    "end": 141,
    "range": [
      132,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "CtorOnly",
    "start": 142,
    "end": 150,
    "range": [
      142,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 157,
    "end": 160,
    "range": [
      157,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170,
    "range": [
      164,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 175,
    "end": 182,
    "range": [
      175,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 184,
    "end": 188,
    "range": [
      184,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 194,
    "end": 202,
    "range": [
      194,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 203,
    "end": 214,
    "range": [
      203,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 215,
    "end": 223,
    "range": [
      215,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 225,
    "end": 233,
    "range": [
      225,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 288,
    "end": 299,
    "range": [
      288,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "getDefaultSettings",
    "start": 300,
    "end": 318,
    "range": [
      300,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 321,
    "end": 332,
    "range": [
      321,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 336,
    "end": 338,
    "range": [
      336,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 342,
    "end": 349,
    "range": [
      342,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 351,
    "end": 355,
    "range": [
      351,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 361,
    "end": 372,
    "range": [
      361,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 373,
    "end": 377,
    "range": [
      373,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 378,
    "end": 380,
    "range": [
      378,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "CtorOnly",
    "start": 381,
    "end": 389,
    "range": [
      381,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 392,
    "end": 403,
    "range": [
      392,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 404,
    "end": 406,
    "range": [
      404,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 409,
    "end": 420,
    "range": [
      409,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "String",
    "value": "'completely wrong'",
    "start": 421,
    "end": 439,
    "range": [
      421,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 442,
    "end": 453,
    "range": [
      442,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 454,
    "end": 459,
    "range": [
      454,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 564,
    "end": 568,
    "range": [
      564,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStart",
    "start": 569,
    "end": 586,
    "range": [
      569,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "useStart",
    "start": 591,
    "end": 599,
    "range": [
      591,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 602,
    "end": 609,
    "range": [
      602,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 612,
    "end": 616,
    "range": [
      612,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "ConfigurableEnd",
    "start": 617,
    "end": 632,
    "range": [
      617,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "useEnd",
    "start": 637,
    "end": 643,
    "range": [
      637,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 646,
    "end": 653,
    "range": [
      646,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 656,
    "end": 660,
    "range": [
      656,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStartEnd",
    "start": 661,
    "end": 681,
    "range": [
      661,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStart",
    "start": 684,
    "end": 701,
    "range": [
      684,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "ConfigurableEnd",
    "start": 704,
    "end": 719,
    "range": [
      704,
      719
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 720,
    "end": 729,
    "range": [
      720,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "InsertOptions",
    "start": 730,
    "end": 743,
    "range": [
      730,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 750,
    "end": 756,
    "range": [
      750,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 759,
    "end": 765,
    "range": [
      759,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "suffix",
    "start": 770,
    "end": 776,
    "range": [
      770,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 779,
    "end": 785,
    "range": [
      779,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 788,
    "end": 792,
    "range": [
      788,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "ChangeOptions",
    "start": 793,
    "end": 806,
    "range": [
      793,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStartEnd",
    "start": 809,
    "end": 829,
    "range": [
      809,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "InsertOptions",
    "start": 832,
    "end": 845,
    "range": [
      832,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 848,
    "end": 856,
    "range": [
      848,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "del",
    "start": 857,
    "end": 860,
    "range": [
      857,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 861,
    "end": 868,
    "range": [
      861,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStartEnd",
    "start": 870,
    "end": 890,
    "range": [
      870,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 910,
    "end": 915,
    "range": [
      910,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 919,
    "end": 924,
    "range": [
      919,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 927,
    "end": 933,
    "range": [
      927,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 948,
    "end": 951,
    "range": [
      948,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 952,
    "end": 959,
    "range": [
      952,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "ChangeOptions",
    "start": 961,
    "end": 974,
    "range": [
      961,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 982,
    "end": 989,
    "range": [
      982,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 990,
    "end": 994,
    "range": [
      990,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 995,
    "end": 1002,
    "range": [
      995,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 1009,
    "end": 1016,
    "range": [
      1009,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1017,
    "end": 1021,
    "range": [
      1017,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1022,
    "end": 1027,
    "range": [
      1022,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1033,
    "end": 1038,
    "range": [
      1033,
      1038
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1047,
    "end": 1058,
    "range": [
      1047,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1062,
    "end": 1068,
    "range": [
      1062,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1139,
    "end": 1148,
    "range": [
      1139,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 1149,
    "end": 1153,
    "range": [
      1149,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1160,
    "end": 1163,
    "range": [
      1160,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1168,
    "end": 1174,
    "range": [
      1168,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1187,
    "end": 1193,
    "range": [
      1187,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1196,
    "end": 1199,
    "range": [
      1196,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 1200,
    "end": 1204,
    "range": [
      1200,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 1206,
    "end": 1210,
    "range": [
      1206,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1216,
    "end": 1220,
    "range": [
      1216,
      1220
    ]
  },
  {
    "type": "Identifier",
    "value": "Spoiler",
    "start": 1221,
    "end": 1228,
    "range": [
      1221,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "nope",
    "start": 1233,
    "end": 1237,
    "range": [
      1233,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1240,
    "end": 1246,
    "range": [
      1240,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1249,
    "end": 1253,
    "range": [
      1249,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "Weak",
    "start": 1254,
    "end": 1258,
    "range": [
      1254,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1271,
    "end": 1277,
    "range": [
      1271,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 1282,
    "end": 1292,
    "range": [
      1282,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1309,
    "end": 1315,
    "range": [
      1309,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1324,
    "end": 1331,
    "range": [
      1324,
      1331
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1332,
    "end": 1335,
    "range": [
      1332,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "propertiesWrong",
    "start": 1336,
    "end": 1351,
    "range": [
      1336,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 1359,
    "end": 1369,
    "range": [
      1359,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "wrong",
    "start": 1381,
    "end": 1386,
    "range": [
      1381,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1388,
    "end": 1394,
    "range": [
      1388,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1403,
    "end": 1406,
    "range": [
      1403,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "weak",
    "start": 1407,
    "end": 1411,
    "range": [
      1407,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "Weak",
    "start": 1413,
    "end": 1417,
    "range": [
      1413,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Identifier",
    "value": "Spoiler",
    "start": 1420,
    "end": 1427,
    "range": [
      1420,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "propertiesWrong",
    "start": 1430,
    "end": 1445,
    "range": [
      1430,
      1445
    ]
  }
]
```
