__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 870,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 428,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 428,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "name": "self",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
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
            "type": "PropertyDefinition",
            "start": 31,
            "end": 43,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 35,
              "end": 42,
              "callee": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
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
            "start": 48,
            "end": 82,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 82,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 82,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 76,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 71,
                      "end": 75
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
            "start": 87,
            "end": 165,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 89,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 165,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 165,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 121,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 120,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 108,
                        "object": {
                          "type": "ThisExpression",
                          "start": 102,
                          "end": 106
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 108,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 111,
                        "end": 120,
                        "object": {
                          "type": "ThisExpression",
                          "start": 111,
                          "end": 115
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 120,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 130,
                    "end": 149,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 130,
                      "end": 148,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 139,
                        "object": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 139,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 142,
                        "end": 148,
                        "object": {
                          "type": "ThisExpression",
                          "start": 142,
                          "end": 146
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 148,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 170,
            "end": 344,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 172,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 344,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 344,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 185,
                    "end": 196,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 189,
                        "end": 195,
                        "id": {
                          "type": "Identifier",
                          "start": 189,
                          "end": 195,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 190,
                            "end": 195,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 192,
                              "end": 195,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 192,
                                "end": 193,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 193,
                                  "name": "C",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 205,
                    "end": 228,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 209,
                        "end": 227,
                        "id": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 210,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 213,
                          "end": 227,
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "start": 214,
                              "end": 218
                            },
                            {
                              "type": "MemberExpression",
                              "start": 220,
                              "end": 226,
                              "object": {
                                "type": "ThisExpression",
                                "start": 220,
                                "end": 224
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 225,
                                "end": 226,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 272,
                    "end": 286,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 276,
                        "end": 285,
                        "id": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 285,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 277,
                            "end": 285,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 279,
                              "end": 285,
                              "elementType": {
                                "type": "TSThisType",
                                "start": 279,
                                "end": 283
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 295,
                    "end": 338,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 299,
                        "end": 337,
                        "id": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 300,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 303,
                          "end": 337,
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "start": 304,
                              "end": 308
                            },
                            {
                              "type": "MemberExpression",
                              "start": 310,
                              "end": 319,
                              "object": {
                                "type": "ThisExpression",
                                "start": 310,
                                "end": 314
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 315,
                                "end": 319,
                                "name": "self",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Literal",
                              "start": 321,
                              "end": 325,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Identifier",
                              "start": 327,
                              "end": 336,
                              "name": "undefined",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 349,
            "end": 426,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 351,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 351,
              "end": 426,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 352,
                  "end": 362,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 362,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 355,
                      "end": 362
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 426,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 374,
                    "end": 404,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 381,
                      "end": 403,
                      "test": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 382,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "start": 385,
                        "end": 391,
                        "object": {
                          "type": "ThisExpression",
                          "start": 385,
                          "end": 389
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 391,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "alternate": {
                        "type": "MemberExpression",
                        "start": 394,
                        "end": 403,
                        "object": {
                          "type": "ThisExpression",
                          "start": 394,
                          "end": 398
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 399,
                          "end": 403,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
    {
      "type": "ClassDeclaration",
      "start": 430,
      "end": 869,
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 437,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 446,
        "end": 447,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 448,
        "end": 869,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 454,
            "end": 467,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 459,
              "name": "self1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ThisExpression",
              "start": 462,
              "end": 466
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
            "type": "PropertyDefinition",
            "start": 472,
            "end": 490,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 472,
              "end": 477,
              "name": "self2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 480,
              "end": 489,
              "object": {
                "type": "ThisExpression",
                "start": 480,
                "end": 484
              },
              "property": {
                "type": "Identifier",
                "start": 485,
                "end": 489,
                "name": "self",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
            "type": "PropertyDefinition",
            "start": 495,
            "end": 514,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 500,
              "name": "self3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 503,
              "end": 513,
              "callee": {
                "type": "MemberExpression",
                "start": 503,
                "end": 511,
                "object": {
                  "type": "ThisExpression",
                  "start": 503,
                  "end": 507
                },
                "property": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 511,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
            "type": "PropertyDefinition",
            "start": 519,
            "end": 531,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 523,
              "end": 530,
              "callee": {
                "type": "Identifier",
                "start": 527,
                "end": 528,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
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
            "start": 536,
            "end": 867,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 536,
              "end": 539,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 539,
              "end": 867,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 542,
                "end": 867,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 552,
                    "end": 575,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 552,
                      "end": 574,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 552,
                        "end": 561,
                        "object": {
                          "type": "ThisExpression",
                          "start": 552,
                          "end": 556
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 561,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 564,
                        "end": 574,
                        "object": {
                          "type": "ThisExpression",
                          "start": 564,
                          "end": 568
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 569,
                          "end": 574,
                          "name": "self1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 584,
                    "end": 607,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 584,
                      "end": 606,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 584,
                        "end": 593,
                        "object": {
                          "type": "ThisExpression",
                          "start": 584,
                          "end": 588
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 589,
                          "end": 593,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 596,
                        "end": 606,
                        "object": {
                          "type": "ThisExpression",
                          "start": 596,
                          "end": 600
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 601,
                          "end": 606,
                          "name": "self2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 616,
                    "end": 639,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 616,
                      "end": 638,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 616,
                        "end": 625,
                        "object": {
                          "type": "ThisExpression",
                          "start": 616,
                          "end": 620
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 621,
                          "end": 625,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 628,
                        "end": 638,
                        "object": {
                          "type": "ThisExpression",
                          "start": 628,
                          "end": 632
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 638,
                          "name": "self3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 648,
                    "end": 671,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 648,
                      "end": 670,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 648,
                        "end": 658,
                        "object": {
                          "type": "ThisExpression",
                          "start": 648,
                          "end": 652
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 653,
                          "end": 658,
                          "name": "self1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 661,
                        "end": 670,
                        "object": {
                          "type": "ThisExpression",
                          "start": 661,
                          "end": 665
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 666,
                          "end": 670,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 680,
                    "end": 703,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 680,
                      "end": 702,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 680,
                        "end": 690,
                        "object": {
                          "type": "ThisExpression",
                          "start": 680,
                          "end": 684
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 685,
                          "end": 690,
                          "name": "self2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 693,
                        "end": 702,
                        "object": {
                          "type": "ThisExpression",
                          "start": 693,
                          "end": 697
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 698,
                          "end": 702,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 712,
                    "end": 735,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 712,
                      "end": 734,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 712,
                        "end": 722,
                        "object": {
                          "type": "ThisExpression",
                          "start": 712,
                          "end": 716
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 717,
                          "end": 722,
                          "name": "self3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 725,
                        "end": 734,
                        "object": {
                          "type": "ThisExpression",
                          "start": 725,
                          "end": 729
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 730,
                          "end": 734,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 744,
                    "end": 763,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 744,
                      "end": 762,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 744,
                        "end": 750,
                        "object": {
                          "type": "ThisExpression",
                          "start": 744,
                          "end": 748
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 749,
                          "end": 750,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 753,
                        "end": 762,
                        "object": {
                          "type": "ThisExpression",
                          "start": 753,
                          "end": 757
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 758,
                          "end": 762,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 772,
                    "end": 788,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 772,
                      "end": 787,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 772,
                        "end": 778,
                        "object": {
                          "type": "ThisExpression",
                          "start": 772,
                          "end": 776
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 777,
                          "end": 778,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 781,
                        "end": 787,
                        "object": {
                          "type": "ThisExpression",
                          "start": 781,
                          "end": 785
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 786,
                          "end": 787,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 807,
                    "end": 826,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 807,
                      "end": 825,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 807,
                        "end": 816,
                        "object": {
                          "type": "ThisExpression",
                          "start": 807,
                          "end": 811
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 816,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 819,
                        "end": 825,
                        "object": {
                          "type": "ThisExpression",
                          "start": 819,
                          "end": 823
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 824,
                          "end": 825,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 845,
                    "end": 861,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 845,
                      "end": 860,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 845,
                        "end": 851,
                        "object": {
                          "type": "ThisExpression",
                          "start": 845,
                          "end": 849
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 850,
                          "end": 851,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 854,
                        "end": 860,
                        "object": {
                          "type": "ThisExpression",
                          "start": 854,
                          "end": 858
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 859,
                          "end": 860,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
