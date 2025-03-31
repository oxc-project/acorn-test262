__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1275,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 494,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 494,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Cls",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 494,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 24,
              "end": 38,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 29,
                "name": "field",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "BinaryExpression",
                "start": 32,
                "end": 37,
                "left": {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 36,
                  "end": 37,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 43,
              "end": 54,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 49,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 54,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 52,
                  "end": 54,
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
            },
            {
              "type": "MethodDefinition",
              "start": 60,
              "end": 79,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 68,
                "name": "methodOk",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 68,
                "end": 79,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 77,
                  "end": 79,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 72,
                    "end": 76
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 85,
              "end": 109,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 85,
                "end": 97,
                "name": "methodParams",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 97,
                "end": 109,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 107,
                  "end": 109,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 100,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 102,
                    "end": 106
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 114,
              "end": 147,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 127,
                "name": "methodParams2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 127,
                "end": 147,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 128,
                    "end": 137,
                    "left": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 132,
                      "end": 137,
                      "left": {
                        "type": "Literal",
                        "start": 132,
                        "end": 133,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 136,
                        "end": 137,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 145,
                  "end": 147,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 138,
                  "end": 144,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 140,
                    "end": 144
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 153,
              "end": 183,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 157,
                "end": 164,
                "name": "getOnly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 164,
                "end": 183,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 167,
                  "end": 183,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 169,
                      "end": 181,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 176,
                        "end": 181,
                        "left": {
                          "type": "Literal",
                          "start": 176,
                          "end": 177,
                          "value": 1,
                          "raw": "1"
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 180,
                          "end": 181,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 188,
              "end": 210,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 192,
                "end": 199,
                "name": "setOnly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 199,
                "end": 210,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 200,
                    "end": 205,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 207,
                  "end": 210,
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
            },
            {
              "type": "MethodDefinition",
              "start": 216,
              "end": 244,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 220,
                "end": 229,
                "name": "getSetBad",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 229,
                "end": 244,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 232,
                  "end": 244,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 234,
                      "end": 242,
                      "argument": {
                        "type": "Literal",
                        "start": 241,
                        "end": 242,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 249,
              "end": 273,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 253,
                "end": 262,
                "name": "getSetBad",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 262,
                "end": 273,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 263,
                    "end": 268,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 270,
                  "end": 273,
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
            },
            {
              "type": "MethodDefinition",
              "start": 279,
              "end": 314,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 283,
                "end": 291,
                "name": "getSetOk",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 291,
                "end": 314,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 302,
                  "end": 314,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 304,
                      "end": 312,
                      "argument": {
                        "type": "Literal",
                        "start": 311,
                        "end": 312,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 293,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 295,
                    "end": 301
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 319,
              "end": 342,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 323,
                "end": 331,
                "name": "getSetOk",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 331,
                "end": 342,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 332,
                    "end": 337,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 339,
                  "end": 342,
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
            },
            {
              "type": "MethodDefinition",
              "start": 348,
              "end": 376,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 352,
                "end": 361,
                "name": "getSetOk2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 361,
                "end": 376,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 364,
                  "end": 376,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 366,
                      "end": 374,
                      "argument": {
                        "type": "Literal",
                        "start": 373,
                        "end": 374,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 381,
              "end": 413,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 385,
                "end": 394,
                "name": "getSetOk2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 394,
                "end": 413,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 395,
                    "end": 408,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 400,
                      "end": 408,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 402,
                        "end": 408
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 410,
                  "end": 413,
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
            },
            {
              "type": "MethodDefinition",
              "start": 419,
              "end": 455,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 423,
                "end": 432,
                "name": "getSetOk3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 432,
                "end": 455,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 443,
                  "end": 455,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 445,
                      "end": 453,
                      "argument": {
                        "type": "Literal",
                        "start": 452,
                        "end": 453,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 434,
                  "end": 442,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 436,
                    "end": 442
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 460,
              "end": 492,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 464,
                "end": 473,
                "name": "getSetOk3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 473,
                "end": 492,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 474,
                    "end": 487,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 479,
                      "end": 487,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 481,
                        "end": 487
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 489,
                  "end": 492,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 496,
      "end": 558,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 557,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 530,
            "name": "noAnnotationStringName",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 530,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 524,
                "end": 530
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 533,
            "end": 557,
            "value": "noAnnotationStringName",
            "raw": "\"noAnnotationStringName\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 559,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 598,
            "name": "noParamAnnotationStringName",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 590,
              "end": 598,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 592,
                "end": 598
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 601,
            "end": 630,
            "value": "noParamAnnotationStringName",
            "raw": "\"noParamAnnotationStringName\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 633,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 639,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 639,
            "end": 662,
            "name": "noAnnotationLiteralName",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 665,
            "end": 690,
            "value": "noAnnotationLiteralName",
            "raw": "\"noAnnotationLiteralName\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 760,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 698,
          "end": 759,
          "id": {
            "type": "Identifier",
            "start": 698,
            "end": 726,
            "name": "noParamAnnotationLiteralName",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 729,
            "end": 759,
            "value": "noParamAnnotationLiteralName",
            "raw": "\"noParamAnnotationLiteralName\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 762,
      "end": 1184,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 769,
        "end": 1184,
        "id": {
          "type": "Identifier",
          "start": 775,
          "end": 776,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 777,
          "end": 1184,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 847,
              "end": 861,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 848,
                "end": 855,
                "name": "missing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 859,
                "end": 860,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 871,
              "end": 908,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 872,
                "end": 895,
                "name": "noAnnotationLiteralName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 896,
                "end": 908,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 905,
                  "end": 908,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 898,
                  "end": 904,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 900,
                    "end": 904
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 914,
              "end": 965,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 915,
                "end": 943,
                "name": "noParamAnnotationLiteralName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 944,
                "end": 965,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 945,
                    "end": 954,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 946,
                      "end": 954,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 948,
                        "end": 954
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 962,
                  "end": 965,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 955,
                  "end": 961,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 957,
                    "end": 961
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 971,
              "end": 1001,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 972,
                "end": 994,
                "name": "noAnnotationStringName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 995,
                "end": 1001,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 998,
                  "end": 1001,
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
            },
            {
              "type": "MethodDefinition",
              "start": 1007,
              "end": 1049,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1008,
                "end": 1035,
                "name": "noParamAnnotationStringName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1036,
                "end": 1049,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1037,
                    "end": 1038,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1046,
                  "end": 1049,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1039,
                  "end": 1045,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1041,
                    "end": 1045
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1055,
              "end": 1098,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1060,
                "end": 1082,
                "name": "noAnnotationStringName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1083,
                "end": 1098,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1086,
                  "end": 1098,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1088,
                      "end": 1097,
                      "argument": {
                        "type": "Literal",
                        "start": 1095,
                        "end": 1096,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1104,
              "end": 1148,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1109,
                "end": 1136,
                "name": "noParamAnnotationStringName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 1137,
                "end": 1148,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1138,
                    "end": 1143,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1145,
                  "end": 1148,
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
            },
            {
              "type": "PropertyDefinition",
              "start": 1154,
              "end": 1181,
              "static": false,
              "computed": true,
              "key": {
                "type": "TSAsExpression",
                "start": 1155,
                "end": 1174,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 1156,
                  "end": 1165,
                  "left": {
                    "type": "Literal",
                    "start": 1156,
                    "end": 1159,
                    "value": "A",
                    "raw": "\"A\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 1162,
                    "end": 1165,
                    "value": "B",
                    "raw": "\"B\""
                  }
                },
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1170,
                  "end": 1174,
                  "literal": {
                    "type": "Literal",
                    "start": 1170,
                    "end": 1174,
                    "value": "AB",
                    "raw": "\"AB\""
                  }
                }
              },
              "value": {
                "type": "Literal",
                "start": 1179,
                "end": 1180,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1186,
      "end": 1275,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1193,
        "end": 1275,
        "id": {
          "type": "Identifier",
          "start": 1203,
          "end": 1204,
          "name": "I",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1205,
          "end": 1275,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 1211,
              "end": 1240,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1212,
                "end": 1234,
                "name": "noAnnotationStringName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1235,
                "end": 1239,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1237,
                  "end": 1239,
                  "literal": {
                    "type": "Literal",
                    "start": 1237,
                    "end": 1239,
                    "value": 10,
                    "raw": "10"
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 1245,
              "end": 1273,
              "key": {
                "type": "Identifier",
                "start": 1246,
                "end": 1269,
                "name": "noAnnotationLiteralName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
