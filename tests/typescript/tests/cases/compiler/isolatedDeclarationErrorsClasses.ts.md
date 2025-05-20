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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 494,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 494,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 24,
              "end": 38,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 29,
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "start": 32,
                "end": 37,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "raw": "1",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "start": 36,
                  "end": 37,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 43,
              "end": 54,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 49,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 54,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 52,
                  "end": 54,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 60,
              "end": 79,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 68,
                "decorators": [],
                "name": "methodOk",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 68,
                "end": 79,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 77,
                  "end": 79,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 72,
                    "end": 76
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 85,
              "end": 109,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 85,
                "end": 97,
                "decorators": [],
                "name": "methodParams",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 97,
                "end": 109,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 107,
                  "end": 109,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 100,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 102,
                    "end": 106
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 114,
              "end": 147,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 127,
                "decorators": [],
                "name": "methodParams2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 127,
                "end": 147,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 145,
                  "end": 147,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 128,
                    "end": 137,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "BinaryExpression",
                      "start": 132,
                      "end": 137,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 132,
                        "end": 133,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 136,
                        "end": 137,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 138,
                  "end": 144,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 140,
                    "end": 144
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 153,
              "end": 183,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 157,
                "end": 164,
                "decorators": [],
                "name": "getOnly",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 164,
                "end": 183,
                "async": false,
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
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "start": 176,
                          "end": 177,
                          "raw": "1",
                          "value": 1
                        },
                        "right": {
                          "type": "Literal",
                          "start": 180,
                          "end": 181,
                          "raw": "1",
                          "value": 1
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
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 188,
              "end": 210,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 192,
                "end": 199,
                "decorators": [],
                "name": "setOnly",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 199,
                "end": 210,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 207,
                  "end": 210,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 200,
                    "end": 205,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 216,
              "end": 244,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 220,
                "end": 229,
                "decorators": [],
                "name": "getSetBad",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 229,
                "end": 244,
                "async": false,
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
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 249,
              "end": 273,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 253,
                "end": 262,
                "decorators": [],
                "name": "getSetBad",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 262,
                "end": 273,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 270,
                  "end": 273,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 263,
                    "end": 268,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 279,
              "end": 314,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 283,
                "end": 291,
                "decorators": [],
                "name": "getSetOk",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 291,
                "end": 314,
                "async": false,
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
                        "raw": "0",
                        "value": 0
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
                  "start": 293,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 295,
                    "end": 301
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 319,
              "end": 342,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 323,
                "end": 331,
                "decorators": [],
                "name": "getSetOk",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 331,
                "end": 342,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 339,
                  "end": 342,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 332,
                    "end": 337,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 348,
              "end": 376,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 352,
                "end": 361,
                "decorators": [],
                "name": "getSetOk2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 361,
                "end": 376,
                "async": false,
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
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 381,
              "end": 413,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 385,
                "end": 394,
                "decorators": [],
                "name": "getSetOk2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 394,
                "end": 413,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 410,
                  "end": 413,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 395,
                    "end": 408,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 400,
                      "end": 408,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 402,
                        "end": 408
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 419,
              "end": 455,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 423,
                "end": 432,
                "decorators": [],
                "name": "getSetOk3",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 432,
                "end": 455,
                "async": false,
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
                        "raw": "0",
                        "value": 0
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
                  "start": 434,
                  "end": 442,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 436,
                    "end": 442
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 460,
              "end": 492,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 464,
                "end": 473,
                "decorators": [],
                "name": "getSetOk3",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 473,
                "end": 492,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 489,
                  "end": 492,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 474,
                    "end": 487,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 479,
                      "end": 487,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 481,
                        "end": 487
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 530,
            "decorators": [],
            "name": "noAnnotationStringName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 530,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 524,
                "end": 530
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 533,
            "end": 557,
            "raw": "\"noAnnotationStringName\"",
            "value": "noAnnotationStringName"
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 598,
            "decorators": [],
            "name": "noParamAnnotationStringName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 590,
              "end": 598,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 592,
                "end": 598
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 601,
            "end": 630,
            "raw": "\"noParamAnnotationStringName\"",
            "value": "noParamAnnotationStringName"
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 639,
            "end": 662,
            "decorators": [],
            "name": "noAnnotationLiteralName",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 665,
            "end": 690,
            "raw": "\"noAnnotationLiteralName\"",
            "value": "noAnnotationLiteralName"
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 698,
            "end": 726,
            "decorators": [],
            "name": "noParamAnnotationLiteralName",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 729,
            "end": 759,
            "raw": "\"noParamAnnotationLiteralName\"",
            "value": "noParamAnnotationLiteralName"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 762,
      "end": 1184,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 769,
        "end": 1184,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 777,
          "end": 1184,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 847,
              "end": 861,
              "accessibility": null,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 848,
                "end": 855,
                "decorators": [],
                "name": "missing",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 859,
                "end": 860,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "MethodDefinition",
              "start": 871,
              "end": 908,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 872,
                "end": 895,
                "decorators": [],
                "name": "noAnnotationLiteralName",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 896,
                "end": 908,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 905,
                  "end": 908,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 898,
                  "end": 904,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 900,
                    "end": 904
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 914,
              "end": 965,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 915,
                "end": 943,
                "decorators": [],
                "name": "noParamAnnotationLiteralName",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 944,
                "end": 965,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 962,
                  "end": 965,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 945,
                    "end": 954,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 946,
                      "end": 954,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 948,
                        "end": 954
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 955,
                  "end": 961,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 957,
                    "end": 961
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 971,
              "end": 1001,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 972,
                "end": 994,
                "decorators": [],
                "name": "noAnnotationStringName",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 995,
                "end": 1001,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 998,
                  "end": 1001,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1007,
              "end": 1049,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1008,
                "end": 1035,
                "decorators": [],
                "name": "noParamAnnotationStringName",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1036,
                "end": 1049,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1046,
                  "end": 1049,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1037,
                    "end": 1038,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1039,
                  "end": 1045,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1041,
                    "end": 1045
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1055,
              "end": 1098,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1060,
                "end": 1082,
                "decorators": [],
                "name": "noAnnotationStringName",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1083,
                "end": 1098,
                "async": false,
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
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1104,
              "end": 1148,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1109,
                "end": 1136,
                "decorators": [],
                "name": "noParamAnnotationStringName",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1137,
                "end": 1148,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1145,
                  "end": 1148,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1138,
                    "end": 1143,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 1154,
              "end": 1181,
              "accessibility": null,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "TSAsExpression",
                "start": 1155,
                "end": 1174,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 1156,
                  "end": 1165,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 1156,
                    "end": 1159,
                    "raw": "\"A\"",
                    "value": "A"
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1162,
                    "end": 1165,
                    "raw": "\"B\"",
                    "value": "B"
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
                    "raw": "\"AB\"",
                    "value": "AB"
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 1179,
                "end": 1180,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 775,
          "end": 776,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1186,
      "end": 1275,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1193,
        "end": 1275,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1205,
          "end": 1275,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 1211,
              "end": 1240,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1212,
                "end": 1234,
                "decorators": [],
                "name": "noAnnotationStringName",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "raw": "10",
                    "value": 10
                  }
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 1245,
              "end": 1273,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1246,
                "end": 1269,
                "decorators": [],
                "name": "noAnnotationLiteralName",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": null,
              "static": false,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1203,
          "end": 1204,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
