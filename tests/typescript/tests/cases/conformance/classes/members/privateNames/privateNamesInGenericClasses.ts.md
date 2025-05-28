__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 929,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 621,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 621,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 25,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 21,
              "name": "foo"
            },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 64,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 30,
              "end": 37,
              "name": "method"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 64,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 105,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 73,
              "end": 78,
              "name": "prop"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 105,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 153,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 114,
              "end": 119,
              "name": "prop"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 153,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 129,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
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
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 150,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
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
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 194,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 194,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 167,
                  "end": 174,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 187,
                        "end": 191,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 251,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 218,
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 218,
              "end": 251,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 219,
                  "end": 226,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 239,
                          "end": 246,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 265,
            "end": 298,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 269,
              "decorators": [],
              "name": "bar3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 269,
              "end": 298,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 270,
                  "end": 277,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 290,
                        "end": 295,
                        "name": "prop"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 317,
            "end": 353,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 320,
              "end": 353,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 321,
                  "end": 333,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                }
              ],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 346,
                        "end": 350,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 368,
            "end": 408,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 368,
              "end": 372,
              "decorators": [],
              "name": "baz2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 372,
              "end": 408,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 373,
                  "end": 385,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                }
              ],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 398,
                        "end": 405,
                        "name": "method"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 419,
            "end": 457,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 419,
              "end": 423,
              "decorators": [],
              "name": "baz3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 423,
              "end": 457,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 424,
                  "end": 436,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                }
              ],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 449,
                        "end": 454,
                        "name": "prop"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 471,
            "end": 508,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 475,
              "decorators": [],
              "name": "quux",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 475,
              "end": 508,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 476,
                  "end": 488,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                }
              ],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 501,
                        "end": 505,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 522,
            "end": 563,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 527,
              "decorators": [],
              "name": "quux2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 527,
              "end": 563,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 528,
                  "end": 540,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                }
              ],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 553,
                        "end": 560,
                        "name": "method"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 573,
            "end": 612,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 573,
              "end": 578,
              "decorators": [],
              "name": "quux3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 578,
              "end": 612,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 579,
                  "end": 591,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                }
              ],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 604,
                        "end": 609,
                        "name": "prop"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
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
      "type": "VariableDeclaration",
      "start": 623,
      "end": 648,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 647,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 647,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 649,
      "end": 674,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 673,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 677,
          "end": 681,
          "name": "foo"
        },
        "optional": false,
        "computed": false
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 728,
          "end": 735,
          "name": "method"
        },
        "optional": false,
        "computed": false
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 779,
          "end": 784,
          "name": "prop"
        },
        "optional": false,
        "computed": false
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 832,
          "end": 833,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 883,
          "end": 884,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
