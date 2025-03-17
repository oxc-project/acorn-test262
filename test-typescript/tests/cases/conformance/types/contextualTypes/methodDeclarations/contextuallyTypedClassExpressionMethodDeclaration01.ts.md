__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 781,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 34,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "name": "numProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 51,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "name": "strProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 90,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 148,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 97,
            "end": 119,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 105,
                "end": 111,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 108,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 110,
                    "end": 111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 118,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 114,
                "end": 118
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 124,
            "end": 146,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 131,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 135,
                  "end": 138,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 137,
                    "end": 138,
                    "typeName": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 145,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 141,
                "end": 145
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 166,
        "name": "getFoo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 347,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 345,
            "argument": {
              "type": "ClassExpression",
              "start": 187,
              "end": 345,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 193,
                "end": 345,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 203,
                    "end": 264,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 217,
                      "name": "method1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 217,
                      "end": 264,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 218,
                          "end": 221,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 223,
                        "end": 264,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 237,
                            "end": 254,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 237,
                              "end": 253,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 237,
                                "end": 248,
                                "object": {
                                  "type": "Identifier",
                                  "start": 237,
                                  "end": 240,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 241,
                                  "end": 248,
                                  "name": "numProp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 251,
                                "end": 253,
                                "value": 10,
                                "raw": "10"
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
                    "start": 273,
                    "end": 339,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 287,
                      "name": "method2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 287,
                      "end": 339,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 288,
                          "end": 291,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 293,
                        "end": 339,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 307,
                            "end": 329,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 307,
                              "end": 328,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 307,
                                "end": 318,
                                "object": {
                                  "type": "Identifier",
                                  "start": 307,
                                  "end": 310,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 311,
                                  "end": 318,
                                  "name": "strProp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 321,
                                "end": 328,
                                "value": "hello",
                                "raw": "\"hello\""
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 168,
        "end": 173,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 170,
          "end": 173,
          "typeName": {
            "type": "Identifier",
            "start": 170,
            "end": 173,
            "name": "Foo",
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
      "start": 349,
      "end": 558,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 365,
        "name": "getFoo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 373,
        "end": 558,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 379,
            "end": 556,
            "argument": {
              "type": "ClassExpression",
              "start": 386,
              "end": 556,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 392,
                "end": 556,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 402,
                    "end": 469,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 416,
                      "name": "method1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 419,
                      "end": 469,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 420,
                          "end": 423,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 428,
                        "end": 469,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 442,
                            "end": 459,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 442,
                              "end": 458,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 442,
                                "end": 453,
                                "object": {
                                  "type": "Identifier",
                                  "start": 442,
                                  "end": 445,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 446,
                                  "end": 453,
                                  "name": "numProp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 456,
                                "end": 458,
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
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
                    "start": 478,
                    "end": 550,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 492,
                      "name": "method2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 495,
                      "end": 550,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 496,
                          "end": 499,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 504,
                        "end": 550,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 518,
                            "end": 540,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 518,
                              "end": 539,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 518,
                                "end": 529,
                                "object": {
                                  "type": "Identifier",
                                  "start": 518,
                                  "end": 521,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 522,
                                  "end": 529,
                                  "name": "strProp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 532,
                                "end": 539,
                                "value": "hello",
                                "raw": "\"hello\""
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
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
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 367,
        "end": 372,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 369,
          "end": 372,
          "typeName": {
            "type": "Identifier",
            "start": 369,
            "end": 372,
            "name": "Foo",
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
      "start": 560,
      "end": 781,
      "id": {
        "type": "Identifier",
        "start": 569,
        "end": 576,
        "name": "getFoo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 584,
        "end": 781,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 590,
            "end": 779,
            "argument": {
              "type": "ClassExpression",
              "start": 597,
              "end": 779,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 603,
                "end": 779,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 613,
                    "end": 686,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 627,
                      "name": "method1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 630,
                      "end": 686,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 640,
                          "end": 643,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 645,
                        "end": 686,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 659,
                            "end": 676,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 659,
                              "end": 675,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 659,
                                "end": 670,
                                "object": {
                                  "type": "Identifier",
                                  "start": 659,
                                  "end": 662,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 663,
                                  "end": 670,
                                  "name": "numProp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 673,
                                "end": 675,
                                "value": 10,
                                "raw": "10"
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
                    "start": 695,
                    "end": 773,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 702,
                      "end": 709,
                      "name": "method2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 712,
                      "end": 773,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 722,
                          "end": 725,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 727,
                        "end": 773,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 741,
                            "end": 763,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 741,
                              "end": 762,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 741,
                                "end": 752,
                                "object": {
                                  "type": "Identifier",
                                  "start": 741,
                                  "end": 744,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 745,
                                  "end": 752,
                                  "name": "strProp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 755,
                                "end": 762,
                                "value": "hello",
                                "raw": "\"hello\""
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
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 578,
        "end": 583,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 580,
          "end": 583,
          "typeName": {
            "type": "Identifier",
            "start": 580,
            "end": 583,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
