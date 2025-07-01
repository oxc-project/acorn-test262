__ESTREE_TEST__:PASS:
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
