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
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "onError",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "getDefaultSettings",
    "start": 77,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 132,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "CtorOnly",
    "start": 142,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 194,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 203,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 215,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 225,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 288,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "getDefaultSettings",
    "start": 300,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 321,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 342,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 361,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Null",
    "value": "null",
    "start": 373,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 378,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "CtorOnly",
    "start": 381,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 392,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 409,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "String",
    "value": "'completely wrong'",
    "start": 421,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 442,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 454,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 564,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStart",
    "start": 569,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "useStart",
    "start": 591,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 602,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 612,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "ConfigurableEnd",
    "start": 617,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "useEnd",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 646,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 656,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStartEnd",
    "start": 661,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStart",
    "start": 684,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "ConfigurableEnd",
    "start": 704,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 720,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "InsertOptions",
    "start": 730,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 759,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "suffix",
    "start": 770,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 779,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 788,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "ChangeOptions",
    "start": 793,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStartEnd",
    "start": 809,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "InsertOptions",
    "start": 832,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 848,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "del",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 861,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStartEnd",
    "start": 870,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 910,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 919,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 927,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 948,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 952,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "ChangeOptions",
    "start": 961,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 982,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 990,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 995,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 1009,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1017,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1022,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1033,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1047,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1062,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1139,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1168,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1196,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 1200,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 1206,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1216,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "Spoiler",
    "start": 1221,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "nope",
    "start": 1233,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1249,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "Weak",
    "start": 1254,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1271,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 1282,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1309,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1324,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "propertiesWrong",
    "start": 1336,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 1359,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "wrong",
    "start": 1381,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1388,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "weak",
    "start": 1407,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "Weak",
    "start": 1413,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "Spoiler",
    "start": 1420,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "propertiesWrong",
    "start": 1430,
    "end": 1445
  }
]
```
