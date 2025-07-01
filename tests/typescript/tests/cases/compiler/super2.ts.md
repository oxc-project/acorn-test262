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
        "name": "Base5",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 21
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "Literal",
                      "value": "BaseX",
                      "raw": "\"BaseX\"",
                      "start": 56,
                      "end": 63
                    },
                    "start": 49,
                    "end": 64
                  }
                ],
                "start": 39,
                "end": 70
              },
              "expression": false,
              "start": 36,
              "end": 70
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 28,
            "end": 70
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "Literal",
                      "value": "BaseY",
                      "raw": "\"BaseY\"",
                      "start": 108,
                      "end": 115
                    },
                    "start": 101,
                    "end": 116
                  }
                ],
                "start": 91,
                "end": 122
              },
              "expression": false,
              "start": 88,
              "end": 122
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 80,
            "end": 122
          }
        ],
        "start": 22,
        "end": 124
      },
      "abstract": false,
      "declare": false,
      "start": 10,
      "end": 124
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub5",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 136
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base5",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 150
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "Literal",
                      "value": "SubX",
                      "raw": "\"SubX\"",
                      "start": 185,
                      "end": 191
                    },
                    "start": 178,
                    "end": 192
                  }
                ],
                "start": 168,
                "end": 198
              },
              "expression": false,
              "start": 165,
              "end": 198
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 157,
            "end": 198
          }
        ],
        "start": 151,
        "end": 200
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 200
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubSub5",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 215
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub5",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 228
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 243
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 263,
                          "end": 268
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 270
                        },
                        "optional": false,
                        "computed": false,
                        "start": 263,
                        "end": 270
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 263,
                      "end": 272
                    },
                    "start": 256,
                    "end": 273
                  }
                ],
                "start": 246,
                "end": 279
              },
              "expression": false,
              "start": 243,
              "end": 279
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 235,
            "end": 279
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 312,
                          "end": 317
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 318,
                          "end": 319
                        },
                        "optional": false,
                        "computed": false,
                        "start": 312,
                        "end": 319
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 312,
                      "end": 321
                    },
                    "start": 305,
                    "end": 322
                  }
                ],
                "start": 295,
                "end": 328
              },
              "expression": false,
              "start": 292,
              "end": 328
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 284,
            "end": 328
          }
        ],
        "start": 229,
        "end": 330
      },
      "abstract": false,
      "declare": false,
      "start": 202,
      "end": 330
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base6",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 353
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "Literal",
                      "value": "BaseX",
                      "raw": "\"BaseX\"",
                      "start": 388,
                      "end": 395
                    },
                    "start": 381,
                    "end": 396
                  }
                ],
                "start": 371,
                "end": 402
              },
              "expression": false,
              "start": 368,
              "end": 402
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 360,
            "end": 402
          }
        ],
        "start": 354,
        "end": 404
      },
      "abstract": false,
      "declare": false,
      "start": 342,
      "end": 404
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub6",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 416
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base6",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 430
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 445
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "Literal",
                      "value": "SubY",
                      "raw": "\"SubY\"",
                      "start": 465,
                      "end": 471
                    },
                    "start": 458,
                    "end": 472
                  }
                ],
                "start": 448,
                "end": 478
              },
              "expression": false,
              "start": 445,
              "end": 478
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 437,
            "end": 478
          }
        ],
        "start": 431,
        "end": 480
      },
      "abstract": false,
      "declare": false,
      "start": 406,
      "end": 480
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubSub6",
        "optional": false,
        "typeAnnotation": null,
        "start": 488,
        "end": 495
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub6",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 508
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 523
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 543,
                          "end": 548
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 549,
                          "end": 550
                        },
                        "optional": false,
                        "computed": false,
                        "start": 543,
                        "end": 550
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 543,
                      "end": 552
                    },
                    "start": 536,
                    "end": 553
                  }
                ],
                "start": 526,
                "end": 559
              },
              "expression": false,
              "start": 523,
              "end": 559
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 515,
            "end": 559
          }
        ],
        "start": 509,
        "end": 561
      },
      "abstract": false,
      "declare": false,
      "start": 482,
      "end": 561
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "results1",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 576
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubSub5",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 590
            },
            "typeArguments": null,
            "arguments": [],
            "start": 579,
            "end": 592
          },
          "definite": false,
          "start": 568,
          "end": 592
        }
      ],
      "declare": false,
      "start": 564,
      "end": 593
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "results2",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 606
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubSub6",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 620
            },
            "typeArguments": null,
            "arguments": [],
            "start": 609,
            "end": 622
          },
          "definite": false,
          "start": 598,
          "end": 622
        }
      ],
      "declare": false,
      "start": 594,
      "end": 623
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "results1",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 634
              },
              "optional": false,
              "computed": false,
              "start": 624,
              "end": 634
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 624,
            "end": 636
          },
          "operator": "+",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "results1",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 647
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 649
              },
              "optional": false,
              "computed": false,
              "start": 639,
              "end": 649
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 639,
            "end": 651
          },
          "start": 624,
          "end": 651
        },
        "operator": "+",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "results2",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 662
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 664
            },
            "optional": false,
            "computed": false,
            "start": 654,
            "end": 664
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 654,
          "end": 666
        },
        "start": 624,
        "end": 666
      },
      "directive": null,
      "start": 624,
      "end": 667
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 667
}
```
