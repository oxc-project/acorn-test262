__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 856,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 86,
      "decorators": [
        {
          "type": "Decorator",
          "start": 25,
          "end": 29,
          "expression": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 86,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 57,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 55,
              "end": 56,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 62,
            "end": 84,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 73,
              "end": 83,
              "left": {
                "type": "MemberExpression",
                "start": 73,
                "end": 79,
                "object": {
                  "type": "ThisExpression",
                  "start": 73,
                  "end": 77
                },
                "property": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 82,
                "end": 83,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 443,
      "decorators": [
        {
          "type": "Decorator",
          "start": 88,
          "end": 92,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 443,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 117,
            "end": 130,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 128,
              "end": 129,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 157,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 146,
              "end": 156,
              "left": {
                "type": "MemberExpression",
                "start": 146,
                "end": 152,
                "object": {
                  "type": "ThisExpression",
                  "start": 146,
                  "end": 150
                },
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 155,
                "end": 156,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 162,
            "end": 194,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 173,
              "end": 193,
              "left": {
                "type": "BinaryExpression",
                "start": 173,
                "end": 189,
                "left": {
                  "type": "MemberExpression",
                  "start": 173,
                  "end": 180,
                  "object": {
                    "type": "Super",
                    "start": 173,
                    "end": 178
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "start": 183,
                  "end": 189,
                  "object": {
                    "type": "ThisExpression",
                    "start": 183,
                    "end": 187
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 189,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 192,
                "end": 193,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 199,
            "end": 227,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 210,
              "end": 226,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "start": 216,
                "end": 226,
                "left": {
                  "type": "MemberExpression",
                  "start": 216,
                  "end": 222,
                  "object": {
                    "type": "ThisExpression",
                    "start": 216,
                    "end": 220
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 225,
                  "end": 226,
                  "value": 1,
                  "raw": "1"
                }
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 232,
            "end": 270,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 241,
              "decorators": [],
              "name": "ff",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 270,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 256,
                "end": 270,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 258,
                    "end": 268,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 258,
                      "end": 268,
                      "left": {
                        "type": "MemberExpression",
                        "start": 258,
                        "end": 264,
                        "object": {
                          "type": "ThisExpression",
                          "start": 258,
                          "end": 262
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 267,
                        "end": 268,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 275,
            "end": 323,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 285,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 323,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 323,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 299,
                    "end": 317,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 306,
                      "end": 316,
                      "left": {
                        "type": "MemberExpression",
                        "start": 306,
                        "end": 312,
                        "object": {
                          "type": "ThisExpression",
                          "start": 306,
                          "end": 310
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 312,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 315,
                        "end": 316,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 328,
            "end": 379,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 341,
              "decorators": [],
              "name": "fa",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 342,
              "end": 379,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 379,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 355,
                    "end": 373,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 362,
                      "end": 372,
                      "left": {
                        "type": "MemberExpression",
                        "start": 362,
                        "end": 368,
                        "object": {
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 368,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 371,
                        "end": 372,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 384,
            "end": 441,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 397,
              "decorators": [],
              "name": "fa",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 398,
              "end": 441,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 399,
                  "end": 408,
                  "decorators": [],
                  "name": "v",
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
              "body": {
                "type": "BlockStatement",
                "start": 410,
                "end": 441,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 420,
                    "end": 435,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 420,
                      "end": 434,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 420,
                        "end": 426,
                        "object": {
                          "type": "ThisExpression",
                          "start": 420,
                          "end": 424
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 425,
                          "end": 426,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 429,
                        "end": 434,
                        "left": {
                          "type": "Identifier",
                          "start": 429,
                          "end": 430,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 433,
                          "end": 434,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 445,
      "end": 502,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 453,
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 454,
        "end": 502,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 460,
            "end": 473,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 471,
              "end": 472,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 478,
            "end": 500,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 489,
              "end": 499,
              "left": {
                "type": "MemberExpression",
                "start": 489,
                "end": 495,
                "object": {
                  "type": "ThisExpression",
                  "start": 489,
                  "end": 493
                },
                "property": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 495,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 498,
                "end": 499,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 504,
      "end": 856,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 512,
        "decorators": [],
        "name": "DD",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 521,
        "end": 523,
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 524,
        "end": 856,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 530,
            "end": 543,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 541,
              "end": 542,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 548,
            "end": 570,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 555,
              "end": 556,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 559,
              "end": 569,
              "left": {
                "type": "MemberExpression",
                "start": 559,
                "end": 565,
                "object": {
                  "type": "ThisExpression",
                  "start": 559,
                  "end": 563
                },
                "property": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 565,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 568,
                "end": 569,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 575,
            "end": 607,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 586,
              "end": 606,
              "left": {
                "type": "BinaryExpression",
                "start": 586,
                "end": 602,
                "left": {
                  "type": "MemberExpression",
                  "start": 586,
                  "end": 593,
                  "object": {
                    "type": "Super",
                    "start": 586,
                    "end": 591
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 593,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "start": 596,
                  "end": 602,
                  "object": {
                    "type": "ThisExpression",
                    "start": 596,
                    "end": 600
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 602,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 605,
                "end": 606,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 612,
            "end": 640,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 619,
              "end": 620,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 623,
              "end": 639,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "start": 629,
                "end": 639,
                "left": {
                  "type": "MemberExpression",
                  "start": 629,
                  "end": 635,
                  "object": {
                    "type": "ThisExpression",
                    "start": 629,
                    "end": 633
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 635,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 638,
                  "end": 639,
                  "value": 1,
                  "raw": "1"
                }
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 645,
            "end": 683,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 652,
              "end": 654,
              "decorators": [],
              "name": "ff",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 657,
              "end": 683,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 669,
                "end": 683,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 671,
                    "end": 681,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 671,
                      "end": 681,
                      "left": {
                        "type": "MemberExpression",
                        "start": 671,
                        "end": 677,
                        "object": {
                          "type": "ThisExpression",
                          "start": 671,
                          "end": 675
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 677,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 680,
                        "end": 681,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 688,
            "end": 736,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 695,
              "end": 698,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 699,
              "end": 736,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 702,
                "end": 736,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 712,
                    "end": 730,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 719,
                      "end": 729,
                      "left": {
                        "type": "MemberExpression",
                        "start": 719,
                        "end": 725,
                        "object": {
                          "type": "ThisExpression",
                          "start": 719,
                          "end": 723
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 725,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 728,
                        "end": 729,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 741,
            "end": 792,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 752,
              "end": 754,
              "decorators": [],
              "name": "fa",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 755,
              "end": 792,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 758,
                "end": 792,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 768,
                    "end": 786,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 775,
                      "end": 785,
                      "left": {
                        "type": "MemberExpression",
                        "start": 775,
                        "end": 781,
                        "object": {
                          "type": "ThisExpression",
                          "start": 775,
                          "end": 779
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 780,
                          "end": 781,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 784,
                        "end": 785,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 797,
            "end": 854,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 808,
              "end": 810,
              "decorators": [],
              "name": "fa",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 811,
              "end": 854,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 812,
                  "end": 821,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 813,
                    "end": 821,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 815,
                      "end": 821
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 823,
                "end": 854,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 833,
                    "end": 848,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 833,
                      "end": 847,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 833,
                        "end": 839,
                        "object": {
                          "type": "ThisExpression",
                          "start": 833,
                          "end": 837
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 838,
                          "end": 839,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 842,
                        "end": 847,
                        "left": {
                          "type": "Identifier",
                          "start": 842,
                          "end": 843,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 846,
                          "end": 847,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
