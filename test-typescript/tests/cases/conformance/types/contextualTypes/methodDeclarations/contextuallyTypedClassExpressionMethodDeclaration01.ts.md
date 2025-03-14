contextuallyTypedClassExpressionMethodDeclaration01.ts
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
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "decorators": [],
              "name": "numProp",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 75,
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
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "decorators": [],
              "name": "strProp",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 148,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 148,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 97,
            "end": 119,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "decorators": [],
              "name": "method1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 105,
                "end": 111,
                "decorators": [],
                "name": "arg",
                "optional": false,
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
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 124,
            "end": 146,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 131,
              "decorators": [],
              "name": "method2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "decorators": [],
                "name": "arg",
                "optional": false,
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
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 90,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 347,
      "async": false,
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
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 193,
                "end": 345,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 203,
                    "end": 264,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 217,
                      "decorators": [],
                      "name": "method1",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 217,
                      "end": 264,
                      "async": false,
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
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 237,
                                  "end": 240,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 241,
                                  "end": 248,
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 251,
                                "end": 253,
                                "raw": "10",
                                "value": 10
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 218,
                          "end": 221,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 273,
                    "end": 339,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 287,
                      "decorators": [],
                      "name": "method2",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 287,
                      "end": 339,
                      "async": false,
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
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 307,
                                  "end": 310,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 311,
                                  "end": 318,
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 321,
                                "end": 328,
                                "raw": "\"hello\"",
                                "value": "hello"
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 288,
                          "end": 291,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 166,
        "decorators": [],
        "name": "getFoo1",
        "optional": false
      },
      "params": [],
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
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 349,
      "end": 558,
      "async": false,
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
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 392,
                "end": 556,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 402,
                    "end": 469,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 416,
                      "decorators": [],
                      "name": "method1",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 419,
                      "end": 469,
                      "async": false,
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
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 442,
                                  "end": 445,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 446,
                                  "end": 453,
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 456,
                                "end": 458,
                                "raw": "10",
                                "value": 10
                              }
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 420,
                          "end": 423,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 478,
                    "end": 550,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 492,
                      "decorators": [],
                      "name": "method2",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 495,
                      "end": 550,
                      "async": false,
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
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 518,
                                  "end": 521,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 522,
                                  "end": 529,
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 532,
                                "end": 539,
                                "raw": "\"hello\"",
                                "value": "hello"
                              }
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 496,
                          "end": 499,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 365,
        "decorators": [],
        "name": "getFoo2",
        "optional": false
      },
      "params": [],
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
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 560,
      "end": 781,
      "async": false,
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
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 603,
                "end": 779,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 613,
                    "end": 686,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 627,
                      "decorators": [],
                      "name": "method1",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 630,
                      "end": 686,
                      "async": false,
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
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 659,
                                  "end": 662,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 663,
                                  "end": 670,
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 673,
                                "end": 675,
                                "raw": "10",
                                "value": 10
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 640,
                          "end": 643,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 695,
                    "end": 773,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 702,
                      "end": 709,
                      "decorators": [],
                      "name": "method2",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 712,
                      "end": 773,
                      "async": false,
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
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 741,
                                  "end": 744,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 745,
                                  "end": 752,
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 755,
                                "end": 762,
                                "raw": "\"hello\"",
                                "value": "hello"
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 722,
                          "end": 725,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 569,
        "end": 576,
        "decorators": [],
        "name": "getFoo3",
        "optional": false
      },
      "params": [],
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
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
