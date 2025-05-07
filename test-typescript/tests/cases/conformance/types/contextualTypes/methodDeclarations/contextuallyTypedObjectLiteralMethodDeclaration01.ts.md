__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 720,
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "decorators": [],
              "name": "numProp",
              "optional": false,
              "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "decorators": [],
              "name": "strProp",
              "optional": false,
              "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 124,
            "end": 146,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 131,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
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
            "static": false,
            "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 328,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 328,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 326,
            "argument": {
              "type": "ObjectExpression",
              "start": 187,
              "end": 326,
              "properties": [
                {
                  "type": "Property",
                  "start": 197,
                  "end": 251,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 204,
                    "decorators": [],
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 204,
                    "end": 251,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 210,
                      "end": 251,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 224,
                          "end": 241,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 224,
                            "end": 240,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 224,
                              "end": 235,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 224,
                                "end": 227,
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 228,
                                "end": 235,
                                "decorators": [],
                                "name": "numProp",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 238,
                              "end": 240,
                              "raw": "10",
                              "value": 10,
                              "regex": null,
                              "bigint": null
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
                        "start": 205,
                        "end": 208,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 261,
                  "end": 320,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 268,
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 268,
                    "end": 320,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 274,
                      "end": 320,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 288,
                          "end": 310,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 288,
                            "end": 309,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 288,
                              "end": 299,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 288,
                                "end": 291,
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 292,
                                "end": 299,
                                "decorators": [],
                                "name": "strProp",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 302,
                              "end": 309,
                              "raw": "\"hello\"",
                              "value": "hello",
                              "regex": null,
                              "bigint": null
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
                        "start": 269,
                        "end": 272,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
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
        "optional": false,
        "typeAnnotation": null
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
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 170,
            "end": 173,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 330,
      "end": 518,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 518,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 360,
            "end": 516,
            "argument": {
              "type": "ObjectExpression",
              "start": 367,
              "end": 516,
              "properties": [
                {
                  "type": "Property",
                  "start": 377,
                  "end": 436,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 384,
                    "decorators": [],
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 386,
                    "end": 436,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 395,
                      "end": 436,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 409,
                          "end": 426,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 409,
                            "end": 425,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 409,
                              "end": 420,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 409,
                                "end": 412,
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 413,
                                "end": 420,
                                "decorators": [],
                                "name": "numProp",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 423,
                              "end": 425,
                              "raw": "10",
                              "value": 10,
                              "regex": null,
                              "bigint": null
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
                        "start": 387,
                        "end": 390,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 446,
                  "end": 510,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 453,
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 455,
                    "end": 510,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 464,
                      "end": 510,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 478,
                          "end": 500,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 478,
                            "end": 499,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 478,
                              "end": 489,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 478,
                                "end": 481,
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 482,
                                "end": 489,
                                "decorators": [],
                                "name": "strProp",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 492,
                              "end": 499,
                              "raw": "\"hello\"",
                              "value": "hello",
                              "regex": null,
                              "bigint": null
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
                        "start": 456,
                        "end": 459,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 346,
        "decorators": [],
        "name": "getFoo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 348,
        "end": 353,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 350,
          "end": 353,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 350,
            "end": 353,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 520,
      "end": 720,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 544,
        "end": 720,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 550,
            "end": 718,
            "argument": {
              "type": "ObjectExpression",
              "start": 557,
              "end": 718,
              "properties": [
                {
                  "type": "Property",
                  "start": 567,
                  "end": 632,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 567,
                    "end": 574,
                    "decorators": [],
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 576,
                    "end": 632,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 591,
                      "end": 632,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 605,
                          "end": 622,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 605,
                            "end": 621,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 605,
                              "end": 616,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 605,
                                "end": 608,
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 609,
                                "end": 616,
                                "decorators": [],
                                "name": "numProp",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 619,
                              "end": 621,
                              "raw": "10",
                              "value": 10,
                              "regex": null,
                              "bigint": null
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
                        "start": 586,
                        "end": 589,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 642,
                  "end": 712,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 649,
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 651,
                    "end": 712,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 666,
                      "end": 712,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 680,
                          "end": 702,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 680,
                            "end": 701,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 680,
                              "end": 691,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 680,
                                "end": 683,
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 684,
                                "end": 691,
                                "decorators": [],
                                "name": "strProp",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 694,
                              "end": 701,
                              "raw": "\"hello\"",
                              "value": "hello",
                              "regex": null,
                              "bigint": null
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
                        "start": 661,
                        "end": 664,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 536,
        "decorators": [],
        "name": "getFoo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 538,
        "end": 543,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 540,
          "end": 543,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 540,
            "end": 543,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
