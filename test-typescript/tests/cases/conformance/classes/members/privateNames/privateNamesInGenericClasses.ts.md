__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 930,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 621,
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
        "start": 11,
        "end": 621,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 21,
              "name": "foo"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 64,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 30,
              "end": 37,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 64,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 64,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 45,
                    "end": 62,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 52,
                      "end": 61,
                      "object": {
                        "type": "ThisExpression",
                        "start": 52,
                        "end": 56
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 57,
                        "end": 61,
                        "name": "foo"
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 41,
                  "end": 42,
                  "typeName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 69,
            "end": 105,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 73,
              "end": 78,
              "name": "prop"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 105,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 105,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 86,
                    "end": 103,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 93,
                      "end": 102,
                      "object": {
                        "type": "ThisExpression",
                        "start": 93,
                        "end": 97
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 98,
                        "end": 102,
                        "name": "foo"
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 83,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 82,
                  "end": 83,
                  "typeName": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 110,
            "end": 153,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 114,
              "end": 119,
              "name": "prop"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 153,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 129,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "name": "T",
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
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 153,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 133,
                    "end": 151,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 133,
                      "end": 150,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 133,
                        "end": 142,
                        "object": {
                          "type": "ThisExpression",
                          "start": 133,
                          "end": 137
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 138,
                          "end": 142,
                          "name": "foo"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 150,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
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
            "start": 163,
            "end": 194,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 194,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 167,
                  "end": 174,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 170,
                      "end": 174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 171,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 171,
                        "end": 174,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 172,
                            "end": 173,
                            "typeName": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 173,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 194,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 178,
                    "end": 192,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 185,
                      "end": 191,
                      "object": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 186,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 187,
                        "end": 191,
                        "name": "foo"
                      },
                      "computed": false,
                      "optional": false
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
            "start": 214,
            "end": 251,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 218,
              "name": "bar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 218,
              "end": 251,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 219,
                  "end": 226,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 220,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 222,
                      "end": 226,
                      "typeName": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 223,
                        "end": 226,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 224,
                            "end": 225,
                            "typeName": {
                              "type": "Identifier",
                              "start": 224,
                              "end": 225,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 228,
                "end": 251,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 230,
                    "end": 249,
                    "argument": {
                      "type": "CallExpression",
                      "start": 237,
                      "end": 248,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 237,
                        "end": 246,
                        "object": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 238,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 239,
                          "end": 246,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
            "start": 265,
            "end": 298,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 269,
              "name": "bar3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 269,
              "end": 298,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 270,
                  "end": 277,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 271,
                    "end": 277,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 273,
                      "end": 277,
                      "typeName": {
                        "type": "Identifier",
                        "start": 273,
                        "end": 274,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 274,
                        "end": 277,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 275,
                            "end": 276,
                            "typeName": {
                              "type": "Identifier",
                              "start": 275,
                              "end": 276,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 279,
                "end": 298,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 281,
                    "end": 296,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 288,
                      "end": 295,
                      "object": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 290,
                        "end": 295,
                        "name": "prop"
                      },
                      "computed": false,
                      "optional": false
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
            "start": 317,
            "end": 353,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 320,
              "end": 353,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 321,
                  "end": 333,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 322,
                    "end": 333,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 324,
                      "end": 333,
                      "typeName": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 325,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 325,
                        "end": 333,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 326,
                            "end": 332
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 335,
                "end": 353,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 337,
                    "end": 351,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 344,
                      "end": 350,
                      "object": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 345,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 346,
                        "end": 350,
                        "name": "foo"
                      },
                      "computed": false,
                      "optional": false
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
            "start": 368,
            "end": 408,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 368,
              "end": 372,
              "name": "baz2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 372,
              "end": 408,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 373,
                  "end": 385,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 374,
                    "end": 385,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 376,
                      "end": 385,
                      "typeName": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 377,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 377,
                        "end": 385,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 378,
                            "end": 384
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 387,
                "end": 408,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 389,
                    "end": 406,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 396,
                      "end": 405,
                      "object": {
                        "type": "Identifier",
                        "start": 396,
                        "end": 397,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 398,
                        "end": 405,
                        "name": "method"
                      },
                      "computed": false,
                      "optional": false
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
            "start": 419,
            "end": 457,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 419,
              "end": 423,
              "name": "baz3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 423,
              "end": 457,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 424,
                  "end": 436,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 425,
                    "end": 436,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 427,
                      "end": 436,
                      "typeName": {
                        "type": "Identifier",
                        "start": 427,
                        "end": 428,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 428,
                        "end": 436,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 429,
                            "end": 435
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 438,
                "end": 457,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 440,
                    "end": 455,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 447,
                      "end": 454,
                      "object": {
                        "type": "Identifier",
                        "start": 447,
                        "end": 448,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 449,
                        "end": 454,
                        "name": "prop"
                      },
                      "computed": false,
                      "optional": false
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
            "start": 471,
            "end": 508,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 475,
              "name": "quux",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 475,
              "end": 508,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 476,
                  "end": 488,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 477,
                    "end": 488,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 479,
                      "end": 488,
                      "typeName": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 480,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 480,
                        "end": 488,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 481,
                            "end": 487
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 490,
                "end": 508,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 492,
                    "end": 506,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 499,
                      "end": 505,
                      "object": {
                        "type": "Identifier",
                        "start": 499,
                        "end": 500,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 501,
                        "end": 505,
                        "name": "foo"
                      },
                      "computed": false,
                      "optional": false
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
            "start": 522,
            "end": 563,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 527,
              "name": "quux2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 527,
              "end": 563,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 528,
                  "end": 540,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 529,
                    "end": 540,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 531,
                      "end": 540,
                      "typeName": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 532,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 532,
                        "end": 540,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 533,
                            "end": 539
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 542,
                "end": 563,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 544,
                    "end": 561,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 551,
                      "end": 560,
                      "object": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 552,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 553,
                        "end": 560,
                        "name": "method"
                      },
                      "computed": false,
                      "optional": false
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
            "start": 573,
            "end": 612,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 573,
              "end": 578,
              "name": "quux3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 578,
              "end": 612,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 579,
                  "end": 591,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 580,
                    "end": 591,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 582,
                      "end": 591,
                      "typeName": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 583,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 583,
                        "end": 591,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 584,
                            "end": 590
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 593,
                "end": 612,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 595,
                    "end": 610,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 602,
                      "end": 609,
                      "object": {
                        "type": "Identifier",
                        "start": 602,
                        "end": 603,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 604,
                        "end": 609,
                        "name": "prop"
                      },
                      "computed": false,
                      "optional": false
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 623,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 647,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 647,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 636,
              "end": 647,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 638,
                "end": 647,
                "typeName": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 639,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 639,
                  "end": 647,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 640,
                      "end": 646
                    }
                  ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 649,
      "end": 674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 673,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 662,
              "end": 673,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 664,
                "end": 673,
                "typeName": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 665,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 665,
                  "end": 673,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 666,
                      "end": 672
                    }
                  ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 675,
      "end": 682,
      "expression": {
        "type": "MemberExpression",
        "start": 675,
        "end": 681,
        "object": {
          "type": "Identifier",
          "start": 675,
          "end": 676,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 677,
          "end": 681,
          "name": "foo"
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 726,
      "end": 736,
      "expression": {
        "type": "MemberExpression",
        "start": 726,
        "end": 735,
        "object": {
          "type": "Identifier",
          "start": 726,
          "end": 727,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 728,
          "end": 735,
          "name": "method"
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 777,
      "end": 785,
      "expression": {
        "type": "MemberExpression",
        "start": 777,
        "end": 784,
        "object": {
          "type": "Identifier",
          "start": 777,
          "end": 778,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 779,
          "end": 784,
          "name": "prop"
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 828,
      "end": 834,
      "expression": {
        "type": "AssignmentExpression",
        "start": 828,
        "end": 833,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 828,
          "end": 829,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 832,
          "end": 833,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 879,
      "end": 885,
      "expression": {
        "type": "AssignmentExpression",
        "start": 879,
        "end": 884,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 879,
          "end": 880,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 883,
          "end": 884,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
