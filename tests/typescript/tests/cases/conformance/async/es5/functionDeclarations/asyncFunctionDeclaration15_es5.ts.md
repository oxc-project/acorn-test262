__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thenable",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 22
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
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 33,
                  "end": 37
                },
                "start": 31,
                "end": 37
              },
              "body": null,
              "expression": false,
              "start": 29,
              "end": 38
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 38
          }
        ],
        "start": 23,
        "end": 40
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 40
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 56,
                "end": 59
              },
              "start": 54,
              "end": 59
            },
            "start": 53,
            "end": 59
          },
          "init": null,
          "definite": false,
          "start": 53,
          "end": 59
        }
      ],
      "declare": true,
      "start": 41,
      "end": 60
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
            "name": "obj",
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
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 84
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 86,
                        "end": 92
                      },
                      "start": 84,
                      "end": 92
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 80,
                    "end": 93
                  }
                ],
                "start": 78,
                "end": 95
              },
              "start": 76,
              "end": 95
            },
            "start": 73,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 73,
          "end": 95
        }
      ],
      "declare": true,
      "start": 61,
      "end": 96
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
            "name": "thenable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thenable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 127
                },
                "typeArguments": null,
                "start": 119,
                "end": 127
              },
              "start": 117,
              "end": 127
            },
            "start": 109,
            "end": 127
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 127
        }
      ],
      "declare": true,
      "start": 97,
      "end": 128
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 147
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 150,
        "end": 153
      },
      "expression": false,
      "start": 129,
      "end": 153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 196
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 200,
          "end": 203
        },
        "start": 198,
        "end": 203
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 204,
        "end": 207
      },
      "expression": false,
      "start": 178,
      "end": 207
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 235
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 239,
          "end": 242
        },
        "start": 237,
        "end": 242
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 243,
        "end": 246
      },
      "expression": false,
      "start": 217,
      "end": 246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 274
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 278,
          "end": 284
        },
        "start": 276,
        "end": 284
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 285,
        "end": 288
      },
      "expression": false,
      "start": 256,
      "end": 288
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 316
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 331
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 332,
                "end": 336
              }
            ],
            "start": 331,
            "end": 337
          },
          "start": 320,
          "end": 337
        },
        "start": 318,
        "end": 337
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 338,
        "end": 341
      },
      "expression": false,
      "start": 298,
      "end": 341
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 369
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thenable",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 381
          },
          "typeArguments": null,
          "start": 373,
          "end": 381
        },
        "start": 371,
        "end": 381
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 382,
        "end": 385
      },
      "expression": false,
      "start": 351,
      "end": 385
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn7",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 413
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 418,
            "end": 425
          }
        ],
        "start": 416,
        "end": 427
      },
      "expression": false,
      "start": 395,
      "end": 427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null,
        "start": 467,
        "end": 470
      },
      "generator": false,
      "async": true,
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 482,
              "end": 483
            },
            "start": 475,
            "end": 484
          }
        ],
        "start": 473,
        "end": 486
      },
      "expression": false,
      "start": 452,
      "end": 486
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn9",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 531
      },
      "generator": false,
      "async": true,
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
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 543,
              "end": 547
            },
            "start": 536,
            "end": 548
          }
        ],
        "start": 534,
        "end": 550
      },
      "expression": false,
      "start": 513,
      "end": 550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 593
      },
      "generator": false,
      "async": true,
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
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 614
            },
            "start": 598,
            "end": 615
          }
        ],
        "start": 596,
        "end": 617
      },
      "expression": false,
      "start": 574,
      "end": 617
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn11",
        "optional": false,
        "typeAnnotation": null,
        "start": 656,
        "end": 660
      },
      "generator": false,
      "async": true,
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
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 673
            },
            "start": 665,
            "end": 674
          }
        ],
        "start": 663,
        "end": 676
      },
      "expression": false,
      "start": 641,
      "end": 676
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 719
      },
      "generator": false,
      "async": true,
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
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 731,
              "end": 734
            },
            "start": 724,
            "end": 735
          }
        ],
        "start": 722,
        "end": 737
      },
      "expression": false,
      "start": 700,
      "end": 737
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn13",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 794
      },
      "generator": false,
      "async": true,
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
              "type": "Identifier",
              "decorators": [],
              "name": "thenable",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 814
            },
            "start": 799,
            "end": 815
          }
        ],
        "start": 797,
        "end": 817
      },
      "expression": false,
      "start": 775,
      "end": 817
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn14",
        "optional": false,
        "typeAnnotation": null,
        "start": 842,
        "end": 846
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 857,
                "end": 858
              },
              "start": 851,
              "end": 858
            },
            "directive": null,
            "start": 851,
            "end": 859
          }
        ],
        "start": 849,
        "end": 861
      },
      "expression": false,
      "start": 827,
      "end": 861
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn15",
        "optional": false,
        "typeAnnotation": null,
        "start": 901,
        "end": 905
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 916,
                "end": 920
              },
              "start": 910,
              "end": 920
            },
            "directive": null,
            "start": 910,
            "end": 921
          }
        ],
        "start": 908,
        "end": 923
      },
      "expression": false,
      "start": 886,
      "end": 923
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn16",
        "optional": false,
        "typeAnnotation": null,
        "start": 963,
        "end": 967
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 978,
                "end": 987
              },
              "start": 972,
              "end": 987
            },
            "directive": null,
            "start": 972,
            "end": 988
          }
        ],
        "start": 970,
        "end": 990
      },
      "expression": false,
      "start": 948,
      "end": 990
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1030,
        "end": 1034
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1045,
                "end": 1046
              },
              "start": 1039,
              "end": 1046
            },
            "directive": null,
            "start": 1039,
            "end": 1047
          }
        ],
        "start": 1037,
        "end": 1049
      },
      "expression": false,
      "start": 1015,
      "end": 1049
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1089,
        "end": 1093
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1104,
                "end": 1107
              },
              "start": 1098,
              "end": 1107
            },
            "directive": null,
            "start": 1098,
            "end": 1108
          }
        ],
        "start": 1096,
        "end": 1110
      },
      "expression": false,
      "start": 1074,
      "end": 1110
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn19",
        "optional": false,
        "typeAnnotation": null,
        "start": 1150,
        "end": 1154
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "thenable",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1173
              },
              "start": 1159,
              "end": 1173
            },
            "directive": null,
            "start": 1159,
            "end": 1174
          }
        ],
        "start": 1157,
        "end": 1176
      },
      "expression": false,
      "start": 1135,
      "end": 1176
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1185
}
```
