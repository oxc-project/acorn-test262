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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "numProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 34
          }
        ],
        "start": 12,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 73
          }
        ],
        "start": 51,
        "end": 75
      },
      "declare": false,
      "start": 38,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 90
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 104
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 111
                    },
                    "typeArguments": null,
                    "start": 110,
                    "end": 111
                  },
                  "start": 108,
                  "end": 111
                },
                "start": 105,
                "end": 111
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 114,
                "end": 118
              },
              "start": 112,
              "end": 118
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 97,
            "end": 119
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 131
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 138
                    },
                    "typeArguments": null,
                    "start": 137,
                    "end": 138
                  },
                  "start": 135,
                  "end": 138
                },
                "start": 132,
                "end": 138
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 141,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 124,
            "end": 146
          }
        ],
        "start": 91,
        "end": 148
      },
      "declare": false,
      "start": 77,
      "end": 148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 166
      },
      "generator": false,
      "async": false,
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 173
          },
          "typeArguments": null,
          "start": 170,
          "end": 173
        },
        "start": 168,
        "end": 173
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "method1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 217
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 218,
                          "end": 221
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 237,
                                  "end": 240
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 241,
                                  "end": 248
                                },
                                "optional": false,
                                "computed": false,
                                "start": 237,
                                "end": 248
                              },
                              "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 251,
                                "end": 253
                              },
                              "start": 237,
                              "end": 253
                            },
                            "directive": null,
                            "start": 237,
                            "end": 254
                          }
                        ],
                        "start": 223,
                        "end": 264
                      },
                      "expression": false,
                      "start": 217,
                      "end": 264
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 203,
                    "end": 264
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 287
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 291
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 307,
                                  "end": 310
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 311,
                                  "end": 318
                                },
                                "optional": false,
                                "computed": false,
                                "start": 307,
                                "end": 318
                              },
                              "right": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 321,
                                "end": 328
                              },
                              "start": 307,
                              "end": 328
                            },
                            "directive": null,
                            "start": 307,
                            "end": 329
                          }
                        ],
                        "start": 293,
                        "end": 339
                      },
                      "expression": false,
                      "start": 287,
                      "end": 339
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 273,
                    "end": 339
                  }
                ],
                "start": 193,
                "end": 345
              },
              "abstract": false,
              "declare": false,
              "start": 187,
              "end": 345
            },
            "start": 180,
            "end": 345
          }
        ],
        "start": 174,
        "end": 347
      },
      "expression": false,
      "start": 150,
      "end": 347
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 365
      },
      "generator": false,
      "async": false,
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 372
          },
          "typeArguments": null,
          "start": 369,
          "end": 372
        },
        "start": 367,
        "end": 372
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "method1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 416
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 423
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 442,
                                  "end": 445
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 446,
                                  "end": 453
                                },
                                "optional": false,
                                "computed": false,
                                "start": 442,
                                "end": 453
                              },
                              "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 456,
                                "end": 458
                              },
                              "start": 442,
                              "end": 458
                            },
                            "directive": null,
                            "start": 442,
                            "end": 459
                          }
                        ],
                        "start": 428,
                        "end": 469
                      },
                      "id": null,
                      "generator": false,
                      "start": 419,
                      "end": 469
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 402,
                    "end": 469
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 492
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 496,
                          "end": 499
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 518,
                                  "end": 521
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 522,
                                  "end": 529
                                },
                                "optional": false,
                                "computed": false,
                                "start": 518,
                                "end": 529
                              },
                              "right": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 532,
                                "end": 539
                              },
                              "start": 518,
                              "end": 539
                            },
                            "directive": null,
                            "start": 518,
                            "end": 540
                          }
                        ],
                        "start": 504,
                        "end": 550
                      },
                      "id": null,
                      "generator": false,
                      "start": 495,
                      "end": 550
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 478,
                    "end": 550
                  }
                ],
                "start": 392,
                "end": 556
              },
              "abstract": false,
              "declare": false,
              "start": 386,
              "end": 556
            },
            "start": 379,
            "end": 556
          }
        ],
        "start": 373,
        "end": 558
      },
      "expression": false,
      "start": 349,
      "end": 558
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 569,
        "end": 576
      },
      "generator": false,
      "async": false,
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 580,
            "end": 583
          },
          "typeArguments": null,
          "start": 580,
          "end": 583
        },
        "start": 578,
        "end": 583
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "method1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 627
                    },
                    "typeAnnotation": null,
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 640,
                          "end": 643
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 659,
                                  "end": 662
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 663,
                                  "end": 670
                                },
                                "optional": false,
                                "computed": false,
                                "start": 659,
                                "end": 670
                              },
                              "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 673,
                                "end": 675
                              },
                              "start": 659,
                              "end": 675
                            },
                            "directive": null,
                            "start": 659,
                            "end": 676
                          }
                        ],
                        "start": 645,
                        "end": 686
                      },
                      "expression": false,
                      "start": 630,
                      "end": 686
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 613,
                    "end": 686
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 702,
                      "end": 709
                    },
                    "typeAnnotation": null,
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 722,
                          "end": 725
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 741,
                                  "end": 744
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 745,
                                  "end": 752
                                },
                                "optional": false,
                                "computed": false,
                                "start": 741,
                                "end": 752
                              },
                              "right": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 755,
                                "end": 762
                              },
                              "start": 741,
                              "end": 762
                            },
                            "directive": null,
                            "start": 741,
                            "end": 763
                          }
                        ],
                        "start": 727,
                        "end": 773
                      },
                      "expression": false,
                      "start": 712,
                      "end": 773
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 695,
                    "end": 773
                  }
                ],
                "start": 603,
                "end": 779
              },
              "abstract": false,
              "declare": false,
              "start": 597,
              "end": 779
            },
            "start": 590,
            "end": 779
          }
        ],
        "start": 584,
        "end": 781
      },
      "expression": false,
      "start": 560,
      "end": 781
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 781
}
```
