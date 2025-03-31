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
      "end": 328,
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
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 204,
                    "name": "method1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 204,
                    "end": 251,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 205,
                        "end": 208,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 210,
                      "end": 251,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 224,
                          "end": 241,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 224,
                            "end": 240,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 224,
                              "end": 235,
                              "object": {
                                "type": "Identifier",
                                "start": 224,
                                "end": 227,
                                "name": "arg",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 228,
                                "end": 235,
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
                              "start": 238,
                              "end": 240,
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
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 261,
                  "end": 320,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 268,
                    "name": "method2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 268,
                    "end": 320,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 269,
                        "end": 272,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 274,
                      "end": 320,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 288,
                          "end": 310,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 288,
                            "end": 309,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 288,
                              "end": 299,
                              "object": {
                                "type": "Identifier",
                                "start": 288,
                                "end": 291,
                                "name": "arg",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 292,
                                "end": 299,
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
                              "start": 302,
                              "end": 309,
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
                  "kind": "init",
                  "optional": false
                }
              ]
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
      "start": 330,
      "end": 518,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 346,
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 384,
                    "name": "method1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 386,
                    "end": 436,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 387,
                        "end": 390,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 395,
                      "end": 436,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 409,
                          "end": 426,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 409,
                            "end": 425,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 409,
                              "end": 420,
                              "object": {
                                "type": "Identifier",
                                "start": 409,
                                "end": 412,
                                "name": "arg",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 413,
                                "end": 420,
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
                              "start": 423,
                              "end": 425,
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
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 446,
                  "end": 510,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 453,
                    "name": "method2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 455,
                    "end": 510,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 456,
                        "end": 459,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 464,
                      "end": 510,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 478,
                          "end": 500,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 478,
                            "end": 499,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 478,
                              "end": 489,
                              "object": {
                                "type": "Identifier",
                                "start": 478,
                                "end": 481,
                                "name": "arg",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 482,
                                "end": 489,
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
                              "start": 492,
                              "end": 499,
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
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 348,
        "end": 353,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 350,
          "end": 353,
          "typeName": {
            "type": "Identifier",
            "start": 350,
            "end": 353,
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
      "start": 520,
      "end": 720,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 536,
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 567,
                    "end": 574,
                    "name": "method1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 576,
                    "end": 632,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 586,
                        "end": 589,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 591,
                      "end": 632,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 605,
                          "end": 622,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 605,
                            "end": 621,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 605,
                              "end": 616,
                              "object": {
                                "type": "Identifier",
                                "start": 605,
                                "end": 608,
                                "name": "arg",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 609,
                                "end": 616,
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
                              "start": 619,
                              "end": 621,
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
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 642,
                  "end": 712,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 649,
                    "name": "method2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 651,
                    "end": 712,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 661,
                        "end": 664,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 666,
                      "end": 712,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 680,
                          "end": 702,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 680,
                            "end": 701,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 680,
                              "end": 691,
                              "object": {
                                "type": "Identifier",
                                "start": 680,
                                "end": 683,
                                "name": "arg",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 684,
                                "end": 691,
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
                              "start": 694,
                              "end": 701,
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
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 538,
        "end": 543,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 540,
          "end": 543,
          "typeName": {
            "type": "Identifier",
            "start": 540,
            "end": 543,
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
