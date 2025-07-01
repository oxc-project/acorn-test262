__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 29
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 32,
                  "end": 33
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 36,
                  "end": 37
                },
                "start": 32,
                "end": 37
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 24,
              "end": 38
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 49
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
                  "body": [],
                  "start": 52,
                  "end": 54
                },
                "expression": false,
                "start": 49,
                "end": 54
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 43,
              "end": 54
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 68
              },
              "value": {
                "type": "FunctionExpression",
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
                    "start": 72,
                    "end": 76
                  },
                  "start": 70,
                  "end": 76
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 77,
                  "end": 79
                },
                "expression": false,
                "start": 68,
                "end": 79
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 60,
              "end": 79
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodParams",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 97
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 99
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 102,
                    "end": 106
                  },
                  "start": 100,
                  "end": 106
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 107,
                  "end": 109
                },
                "expression": false,
                "start": 97,
                "end": 109
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 85,
              "end": 109
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodParams2",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 127
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 132,
                        "end": 133
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 136,
                        "end": 137
                      },
                      "start": 132,
                      "end": 137
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 137
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 140,
                    "end": 144
                  },
                  "start": 138,
                  "end": 144
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 145,
                  "end": 147
                },
                "expression": false,
                "start": 127,
                "end": 147
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 114,
              "end": 147
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOnly",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 164
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 176,
                          "end": 177
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 180,
                          "end": 181
                        },
                        "start": 176,
                        "end": 181
                      },
                      "start": 169,
                      "end": 181
                    }
                  ],
                  "start": 167,
                  "end": 183
                },
                "expression": false,
                "start": 164,
                "end": 183
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 153,
              "end": 183
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "setOnly",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 199
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 205
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 207,
                  "end": 210
                },
                "expression": false,
                "start": 199,
                "end": 210
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 188,
              "end": 210
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetBad",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 229
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
                        "value": 0,
                        "raw": "0",
                        "start": 241,
                        "end": 242
                      },
                      "start": 234,
                      "end": 242
                    }
                  ],
                  "start": 232,
                  "end": 244
                },
                "expression": false,
                "start": 229,
                "end": 244
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 216,
              "end": 244
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetBad",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 262
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 268
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 270,
                  "end": 273
                },
                "expression": false,
                "start": 262,
                "end": 273
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 249,
              "end": 273
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 291
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 295,
                    "end": 301
                  },
                  "start": 293,
                  "end": 301
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 311,
                        "end": 312
                      },
                      "start": 304,
                      "end": 312
                    }
                  ],
                  "start": 302,
                  "end": 314
                },
                "expression": false,
                "start": 291,
                "end": 314
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 279,
              "end": 314
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 331
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 337
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 339,
                  "end": 342
                },
                "expression": false,
                "start": 331,
                "end": 342
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 319,
              "end": 342
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk2",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 361
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
                        "value": 0,
                        "raw": "0",
                        "start": 373,
                        "end": 374
                      },
                      "start": 366,
                      "end": 374
                    }
                  ],
                  "start": 364,
                  "end": 376
                },
                "expression": false,
                "start": 361,
                "end": 376
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 348,
              "end": 376
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk2",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 394
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 402,
                        "end": 408
                      },
                      "start": 400,
                      "end": 408
                    },
                    "start": 395,
                    "end": 408
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 410,
                  "end": 413
                },
                "expression": false,
                "start": 394,
                "end": 413
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 381,
              "end": 413
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk3",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 432
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 436,
                    "end": 442
                  },
                  "start": 434,
                  "end": 442
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 452,
                        "end": 453
                      },
                      "start": 445,
                      "end": 453
                    }
                  ],
                  "start": 443,
                  "end": 455
                },
                "expression": false,
                "start": 432,
                "end": 455
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 419,
              "end": 455
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk3",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 473
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 481,
                        "end": 487
                      },
                      "start": 479,
                      "end": 487
                    },
                    "start": 474,
                    "end": 487
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 489,
                  "end": 492
                },
                "expression": false,
                "start": 473,
                "end": 492
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 460,
              "end": 492
            }
          ],
          "start": 17,
          "end": 494
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 494
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 494
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
            "name": "noAnnotationStringName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 524,
                "end": 530
              },
              "start": 522,
              "end": 530
            },
            "start": 500,
            "end": 530
          },
          "init": {
            "type": "Literal",
            "value": "noAnnotationStringName",
            "raw": "\"noAnnotationStringName\"",
            "start": 533,
            "end": 557
          },
          "definite": false,
          "start": 500,
          "end": 557
        }
      ],
      "declare": false,
      "start": 496,
      "end": 558
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
            "name": "noParamAnnotationStringName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 592,
                "end": 598
              },
              "start": 590,
              "end": 598
            },
            "start": 563,
            "end": 598
          },
          "init": {
            "type": "Literal",
            "value": "noParamAnnotationStringName",
            "raw": "\"noParamAnnotationStringName\"",
            "start": 601,
            "end": 630
          },
          "definite": false,
          "start": 563,
          "end": 630
        }
      ],
      "declare": false,
      "start": 559,
      "end": 631
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "noAnnotationLiteralName",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 662
          },
          "init": {
            "type": "Literal",
            "value": "noAnnotationLiteralName",
            "raw": "\"noAnnotationLiteralName\"",
            "start": 665,
            "end": 690
          },
          "definite": false,
          "start": 639,
          "end": 690
        }
      ],
      "declare": false,
      "start": 633,
      "end": 691
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "noParamAnnotationLiteralName",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 726
          },
          "init": {
            "type": "Literal",
            "value": "noParamAnnotationLiteralName",
            "raw": "\"noParamAnnotationLiteralName\"",
            "start": 729,
            "end": 759
          },
          "definite": false,
          "start": 698,
          "end": 759
        }
      ],
      "declare": false,
      "start": 692,
      "end": 760
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 775,
          "end": 776
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "missing",
                "optional": false,
                "typeAnnotation": null,
                "start": 848,
                "end": 855
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 859,
                "end": 860
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 847,
              "end": 861
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationLiteralName",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 895
              },
              "value": {
                "type": "FunctionExpression",
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
                    "start": 900,
                    "end": 904
                  },
                  "start": 898,
                  "end": 904
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 905,
                  "end": 908
                },
                "expression": false,
                "start": 896,
                "end": 908
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 871,
              "end": 908
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noParamAnnotationLiteralName",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 943
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 948,
                        "end": 954
                      },
                      "start": 946,
                      "end": 954
                    },
                    "start": 945,
                    "end": 954
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 957,
                    "end": 961
                  },
                  "start": 955,
                  "end": 961
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 962,
                  "end": 965
                },
                "expression": false,
                "start": 944,
                "end": 965
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 914,
              "end": 965
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 994
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
                  "body": [],
                  "start": 998,
                  "end": 1001
                },
                "expression": false,
                "start": 995,
                "end": 1001
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 971,
              "end": 1001
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noParamAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1008,
                "end": 1035
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1037,
                    "end": 1038
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1041,
                    "end": 1045
                  },
                  "start": 1039,
                  "end": 1045
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1046,
                  "end": 1049
                },
                "expression": false,
                "start": 1036,
                "end": 1049
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1007,
              "end": 1049
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1060,
                "end": 1082
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
                        "value": 0,
                        "raw": "0",
                        "start": 1095,
                        "end": 1096
                      },
                      "start": 1088,
                      "end": 1097
                    }
                  ],
                  "start": 1086,
                  "end": 1098
                },
                "expression": false,
                "start": 1083,
                "end": 1098
              },
              "kind": "get",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1055,
              "end": 1098
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noParamAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1109,
                "end": 1136
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1138,
                    "end": 1143
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1145,
                  "end": 1148
                },
                "expression": false,
                "start": 1137,
                "end": 1148
              },
              "kind": "set",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1104,
              "end": 1148
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 1156,
                    "end": 1159
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 1162,
                    "end": 1165
                  },
                  "start": 1156,
                  "end": 1165
                },
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "AB",
                    "raw": "\"AB\"",
                    "start": 1170,
                    "end": 1174
                  },
                  "start": 1170,
                  "end": 1174
                },
                "start": 1155,
                "end": 1174
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1179,
                "end": 1180
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1154,
              "end": 1181
            }
          ],
          "start": 777,
          "end": 1184
        },
        "abstract": false,
        "declare": false,
        "start": 769,
        "end": 1184
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 762,
      "end": 1184
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 1203,
          "end": 1204
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1212,
                "end": 1234
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1237,
                    "end": 1239
                  },
                  "start": 1237,
                  "end": 1239
                },
                "start": 1235,
                "end": 1239
              },
              "accessibility": null,
              "static": false,
              "start": 1211,
              "end": 1240
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationLiteralName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1269
              },
              "computed": true,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1245,
              "end": 1273
            }
          ],
          "start": 1205,
          "end": 1275
        },
        "declare": false,
        "start": 1193,
        "end": 1275
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1186,
      "end": 1275
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1275
}
```
