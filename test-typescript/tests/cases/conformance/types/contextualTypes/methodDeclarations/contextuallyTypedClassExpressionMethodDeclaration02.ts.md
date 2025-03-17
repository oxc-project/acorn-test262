__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 775,
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
      "end": 111,
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
        "end": 111,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 97,
            "end": 109,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 113,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 184,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 133,
            "end": 155,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 140,
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
                "start": 141,
                "end": 147,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 144,
                  "end": 147,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 146,
                    "end": 147,
                    "typeName": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
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
              "start": 148,
              "end": 154,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 150,
                "end": 154
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 160,
            "end": 182,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 167,
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
                "start": 168,
                "end": 174,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 174,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
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
              "start": 175,
              "end": 181,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 177,
                "end": 181
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
      "start": 186,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 202,
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
        "start": 210,
        "end": 369,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 216,
            "end": 367,
            "argument": {
              "type": "ClassExpression",
              "start": 223,
              "end": 367,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 229,
                "end": 367,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 239,
                    "end": 293,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 246,
                      "name": "method1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 246,
                      "end": 293,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 247,
                          "end": 250,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 252,
                        "end": 293,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 266,
                            "end": 283,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 266,
                              "end": 282,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 266,
                                "end": 277,
                                "object": {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 269,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 270,
                                  "end": 277,
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
                                "start": 280,
                                "end": 282,
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
                    "start": 302,
                    "end": 361,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 309,
                      "name": "method2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 309,
                      "end": 361,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 310,
                          "end": 313,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 315,
                        "end": 361,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 329,
                            "end": 351,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 329,
                              "end": 350,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 329,
                                "end": 340,
                                "object": {
                                  "type": "Identifier",
                                  "start": 329,
                                  "end": 332,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 333,
                                  "end": 340,
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
                                "start": 343,
                                "end": 350,
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
        "start": 204,
        "end": 209,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 206,
          "end": 209,
          "typeName": {
            "type": "Identifier",
            "start": 206,
            "end": 209,
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
      "start": 371,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 380,
        "end": 387,
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
        "start": 395,
        "end": 566,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 401,
            "end": 564,
            "argument": {
              "type": "ClassExpression",
              "start": 408,
              "end": 564,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 414,
                "end": 564,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 424,
                    "end": 484,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 431,
                      "name": "method1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 434,
                      "end": 484,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 435,
                          "end": 438,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 443,
                        "end": 484,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 457,
                            "end": 474,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 457,
                              "end": 473,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 457,
                                "end": 468,
                                "object": {
                                  "type": "Identifier",
                                  "start": 457,
                                  "end": 460,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 461,
                                  "end": 468,
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
                                "start": 471,
                                "end": 473,
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
                    "start": 493,
                    "end": 558,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 493,
                      "end": 500,
                      "name": "method2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 503,
                      "end": 558,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 504,
                          "end": 507,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 512,
                        "end": 558,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 526,
                            "end": 548,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 526,
                              "end": 547,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 526,
                                "end": 537,
                                "object": {
                                  "type": "Identifier",
                                  "start": 526,
                                  "end": 529,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 530,
                                  "end": 537,
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
                                "start": 540,
                                "end": 547,
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
        "start": 389,
        "end": 394,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 391,
          "end": 394,
          "typeName": {
            "type": "Identifier",
            "start": 391,
            "end": 394,
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
      "start": 568,
      "end": 775,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 584,
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
        "start": 592,
        "end": 775,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 598,
            "end": 773,
            "argument": {
              "type": "ClassExpression",
              "start": 605,
              "end": 773,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 611,
                "end": 773,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 621,
                    "end": 687,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 628,
                      "name": "method1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 631,
                      "end": 687,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 641,
                          "end": 644,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 646,
                        "end": 687,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 660,
                            "end": 677,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 660,
                              "end": 676,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 660,
                                "end": 671,
                                "object": {
                                  "type": "Identifier",
                                  "start": 660,
                                  "end": 663,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 664,
                                  "end": 671,
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
                                "start": 674,
                                "end": 676,
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
                    "start": 696,
                    "end": 767,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 696,
                      "end": 703,
                      "name": "method2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 706,
                      "end": 767,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 716,
                          "end": 719,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 721,
                        "end": 767,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 735,
                            "end": 757,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 735,
                              "end": 756,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 735,
                                "end": 746,
                                "object": {
                                  "type": "Identifier",
                                  "start": 735,
                                  "end": 738,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 739,
                                  "end": 746,
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
                                "start": 749,
                                "end": 756,
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
        "start": 586,
        "end": 591,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 588,
          "end": 591,
          "typeName": {
            "type": "Identifier",
            "start": 588,
            "end": 591,
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
