__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1186,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 22,
        "name": "Thenable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 40,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 38,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 29,
              "end": 38,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 33,
                  "end": 37
                }
              }
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 59,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 59,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 56,
                "end": 59
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
      "start": 61,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 95,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 78,
                "end": 95,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 80,
                    "end": 93,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 84,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 86,
                        "end": 92
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
      "start": 97,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 127,
            "name": "thenable",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 127,
                  "name": "Thenable",
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
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 150,
        "end": 153,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 178,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 196,
        "name": "fn2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 207,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 198,
        "end": 203,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 200,
          "end": 203,
          "members": []
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 217,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 235,
        "name": "fn3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 243,
        "end": 246,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 237,
        "end": 242,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 239,
          "end": 242
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 256,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 274,
        "name": "fn4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 285,
        "end": 288,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 276,
        "end": 284,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 278,
          "end": 284
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 298,
      "end": 341,
      "id": {
        "type": "Identifier",
        "start": 313,
        "end": 316,
        "name": "fn5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 338,
        "end": 341,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 318,
        "end": 337,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 320,
          "end": 337,
          "typeName": {
            "type": "Identifier",
            "start": 320,
            "end": 331,
            "name": "PromiseLike",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 331,
            "end": 337,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 332,
                "end": 336
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 351,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 369,
        "name": "fn6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 382,
        "end": 385,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 371,
        "end": 381,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 373,
          "end": 381,
          "typeName": {
            "type": "Identifier",
            "start": 373,
            "end": 381,
            "name": "Thenable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 395,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 413,
        "name": "fn7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 416,
        "end": 427,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 418,
            "end": 425,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 452,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 467,
        "end": 470,
        "name": "fn8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 473,
        "end": 486,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 475,
            "end": 484,
            "argument": {
              "type": "Literal",
              "start": 482,
              "end": 483,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 513,
      "end": 550,
      "id": {
        "type": "Identifier",
        "start": 528,
        "end": 531,
        "name": "fn9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 534,
        "end": 550,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 536,
            "end": 548,
            "argument": {
              "type": "Literal",
              "start": 543,
              "end": 547,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 574,
      "end": 617,
      "id": {
        "type": "Identifier",
        "start": 589,
        "end": 593,
        "name": "fn10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 596,
        "end": 617,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 598,
            "end": 615,
            "argument": {
              "type": "Identifier",
              "start": 605,
              "end": 614,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 641,
      "end": 676,
      "id": {
        "type": "Identifier",
        "start": 656,
        "end": 660,
        "name": "fn11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 663,
        "end": 676,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 665,
            "end": 674,
            "argument": {
              "type": "Identifier",
              "start": 672,
              "end": 673,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 700,
      "end": 737,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 719,
        "name": "fn12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 722,
        "end": 737,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 724,
            "end": 735,
            "argument": {
              "type": "Identifier",
              "start": 731,
              "end": 734,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 775,
      "end": 817,
      "id": {
        "type": "Identifier",
        "start": 790,
        "end": 794,
        "name": "fn13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 797,
        "end": 817,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 799,
            "end": 815,
            "argument": {
              "type": "Identifier",
              "start": 806,
              "end": 814,
              "name": "thenable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 827,
      "end": 861,
      "id": {
        "type": "Identifier",
        "start": 842,
        "end": 846,
        "name": "fn14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 849,
        "end": 861,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 851,
            "end": 859,
            "expression": {
              "type": "AwaitExpression",
              "start": 851,
              "end": 858,
              "argument": {
                "type": "Literal",
                "start": 857,
                "end": 858,
                "value": 1,
                "raw": "1"
              }
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
      "type": "FunctionDeclaration",
      "start": 886,
      "end": 923,
      "id": {
        "type": "Identifier",
        "start": 901,
        "end": 905,
        "name": "fn15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 908,
        "end": 923,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 910,
            "end": 921,
            "expression": {
              "type": "AwaitExpression",
              "start": 910,
              "end": 920,
              "argument": {
                "type": "Literal",
                "start": 916,
                "end": 920,
                "value": null,
                "raw": "null"
              }
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
      "type": "FunctionDeclaration",
      "start": 948,
      "end": 990,
      "id": {
        "type": "Identifier",
        "start": 963,
        "end": 967,
        "name": "fn16",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 970,
        "end": 990,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 972,
            "end": 988,
            "expression": {
              "type": "AwaitExpression",
              "start": 972,
              "end": 987,
              "argument": {
                "type": "Identifier",
                "start": 978,
                "end": 987,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "type": "FunctionDeclaration",
      "start": 1015,
      "end": 1049,
      "id": {
        "type": "Identifier",
        "start": 1030,
        "end": 1034,
        "name": "fn17",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1037,
        "end": 1049,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1039,
            "end": 1047,
            "expression": {
              "type": "AwaitExpression",
              "start": 1039,
              "end": 1046,
              "argument": {
                "type": "Identifier",
                "start": 1045,
                "end": 1046,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "type": "FunctionDeclaration",
      "start": 1074,
      "end": 1110,
      "id": {
        "type": "Identifier",
        "start": 1089,
        "end": 1093,
        "name": "fn18",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1096,
        "end": 1110,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1098,
            "end": 1108,
            "expression": {
              "type": "AwaitExpression",
              "start": 1098,
              "end": 1107,
              "argument": {
                "type": "Identifier",
                "start": 1104,
                "end": 1107,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "type": "FunctionDeclaration",
      "start": 1135,
      "end": 1176,
      "id": {
        "type": "Identifier",
        "start": 1150,
        "end": 1154,
        "name": "fn19",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1157,
        "end": 1176,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1159,
            "end": 1174,
            "expression": {
              "type": "AwaitExpression",
              "start": 1159,
              "end": 1173,
              "argument": {
                "type": "Identifier",
                "start": 1165,
                "end": 1173,
                "name": "thenable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
