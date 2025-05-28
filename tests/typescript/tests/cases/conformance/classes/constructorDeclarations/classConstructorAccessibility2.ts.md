__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1210,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 99,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "BaseA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 99,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 58,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 58,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 37,
                  "end": 53,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 53,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 47,
                        "end": 53
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 58,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 97,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 77,
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 97,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 97,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 82,
                    "end": 95,
                    "expression": {
                      "type": "NewExpression",
                      "start": 82,
                      "end": 94,
                      "callee": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 91,
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 92,
                          "end": 93,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 101,
      "end": 203,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 112,
        "decorators": [],
        "name": "BaseB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 162,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 140,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 162,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 141,
                  "end": 157,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 157,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 151,
                        "end": 157
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 162,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 201,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 181,
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 201,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 184,
                "end": 201,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 186,
                    "end": 199,
                    "expression": {
                      "type": "NewExpression",
                      "start": 186,
                      "end": 198,
                      "callee": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 195,
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 196,
                          "end": 197,
                          "value": 2,
                          "raw": "2"
                        }
                      ]
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 205,
      "end": 351,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 216,
        "decorators": [],
        "name": "BaseC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 217,
        "end": 351,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 223,
            "end": 264,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 242,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 242,
              "end": 264,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 243,
                  "end": 259,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 259,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 251,
                      "end": 259,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 253,
                        "end": 259
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 264,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 269,
            "end": 303,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 283,
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 283,
              "end": 303,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 286,
                "end": 303,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 288,
                    "end": 301,
                    "expression": {
                      "type": "NewExpression",
                      "start": 288,
                      "end": 300,
                      "callee": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 297,
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 298,
                          "end": 299,
                          "value": 3,
                          "raw": "3"
                        }
                      ]
                    },
                    "directive": null
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
            "start": 308,
            "end": 349,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 329,
              "decorators": [],
              "name": "staticInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 329,
              "end": 349,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 349,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 334,
                    "end": 347,
                    "expression": {
                      "type": "NewExpression",
                      "start": 334,
                      "end": 346,
                      "callee": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 343,
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 344,
                          "end": 345,
                          "value": 4,
                          "raw": "4"
                        }
                      ]
                    },
                    "directive": null
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 353,
      "end": 568,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 367,
        "decorators": [],
        "name": "DerivedA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 376,
        "end": 381,
        "decorators": [],
        "name": "BaseA",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 382,
        "end": 568,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 388,
            "end": 431,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 399,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 399,
              "end": 431,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 400,
                  "end": 416,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 416,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 408,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 410,
                        "end": 416
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 418,
                "end": 431,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 420,
                    "end": 429,
                    "expression": {
                      "type": "CallExpression",
                      "start": 420,
                      "end": 428,
                      "callee": {
                        "type": "Super",
                        "start": 420,
                        "end": 425
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 426,
                          "end": 427,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 436,
            "end": 473,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 450,
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 450,
              "end": 473,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 453,
                "end": 473,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 455,
                    "end": 471,
                    "expression": {
                      "type": "NewExpression",
                      "start": 455,
                      "end": 470,
                      "callee": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 467,
                        "decorators": [],
                        "name": "DerivedA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 468,
                          "end": 469,
                          "value": 5,
                          "raw": "5"
                        }
                      ]
                    },
                    "directive": null
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
            "start": 478,
            "end": 516,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 478,
              "end": 496,
              "decorators": [],
              "name": "createBaseInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 496,
              "end": 516,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 499,
                "end": 516,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 501,
                    "end": 514,
                    "expression": {
                      "type": "NewExpression",
                      "start": 501,
                      "end": 513,
                      "callee": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 510,
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 511,
                          "end": 512,
                          "value": 6,
                          "raw": "6"
                        }
                      ]
                    },
                    "directive": null
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
            "start": 521,
            "end": 566,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 528,
              "end": 546,
              "decorators": [],
              "name": "staticBaseInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 546,
              "end": 566,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 549,
                "end": 566,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 551,
                    "end": 564,
                    "expression": {
                      "type": "NewExpression",
                      "start": 551,
                      "end": 563,
                      "callee": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 560,
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 561,
                          "end": 562,
                          "value": 7,
                          "raw": "7"
                        }
                      ]
                    },
                    "directive": null
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 570,
      "end": 797,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 576,
        "end": 584,
        "decorators": [],
        "name": "DerivedB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 593,
        "end": 598,
        "decorators": [],
        "name": "BaseB",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 599,
        "end": 797,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 605,
            "end": 648,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 605,
              "end": 616,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 616,
              "end": 648,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 617,
                  "end": 633,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 624,
                    "end": 633,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 625,
                      "end": 633,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 627,
                        "end": 633
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 635,
                "end": 648,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 637,
                    "end": 646,
                    "expression": {
                      "type": "CallExpression",
                      "start": 637,
                      "end": 645,
                      "callee": {
                        "type": "Super",
                        "start": 637,
                        "end": 642
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 643,
                          "end": 644,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 653,
            "end": 690,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 667,
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 667,
              "end": 690,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 670,
                "end": 690,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 672,
                    "end": 688,
                    "expression": {
                      "type": "NewExpression",
                      "start": 672,
                      "end": 687,
                      "callee": {
                        "type": "Identifier",
                        "start": 676,
                        "end": 684,
                        "decorators": [],
                        "name": "DerivedB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 685,
                          "end": 686,
                          "value": 7,
                          "raw": "7"
                        }
                      ]
                    },
                    "directive": null
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
            "start": 695,
            "end": 733,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 695,
              "end": 713,
              "decorators": [],
              "name": "createBaseInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 713,
              "end": 733,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 716,
                "end": 733,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 718,
                    "end": 731,
                    "expression": {
                      "type": "NewExpression",
                      "start": 718,
                      "end": 730,
                      "callee": {
                        "type": "Identifier",
                        "start": 722,
                        "end": 727,
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 728,
                          "end": 729,
                          "value": 8,
                          "raw": "8"
                        }
                      ]
                    },
                    "directive": null
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
            "start": 744,
            "end": 789,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 751,
              "end": 769,
              "decorators": [],
              "name": "staticBaseInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 769,
              "end": 789,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 772,
                "end": 789,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 774,
                    "end": 787,
                    "expression": {
                      "type": "NewExpression",
                      "start": 774,
                      "end": 786,
                      "callee": {
                        "type": "Identifier",
                        "start": 778,
                        "end": 783,
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 784,
                          "end": 785,
                          "value": 9,
                          "raw": "9"
                        }
                      ]
                    },
                    "directive": null
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 799,
      "end": 1043,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 813,
        "decorators": [],
        "name": "DerivedC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 822,
        "end": 827,
        "decorators": [],
        "name": "BaseC",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 828,
        "end": 1043,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 843,
            "end": 886,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 843,
              "end": 854,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 854,
              "end": 886,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 855,
                  "end": 871,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 862,
                    "end": 871,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 863,
                      "end": 871,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 865,
                        "end": 871
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 873,
                "end": 886,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 875,
                    "end": 884,
                    "expression": {
                      "type": "CallExpression",
                      "start": 875,
                      "end": 883,
                      "callee": {
                        "type": "Super",
                        "start": 875,
                        "end": 880
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 881,
                          "end": 882,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 891,
            "end": 928,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 891,
              "end": 905,
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 905,
              "end": 928,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 908,
                "end": 928,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 910,
                    "end": 926,
                    "expression": {
                      "type": "NewExpression",
                      "start": 910,
                      "end": 925,
                      "callee": {
                        "type": "Identifier",
                        "start": 914,
                        "end": 922,
                        "decorators": [],
                        "name": "DerivedC",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 923,
                          "end": 924,
                          "value": 9,
                          "raw": "9"
                        }
                      ]
                    },
                    "directive": null
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
            "start": 933,
            "end": 972,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 933,
              "end": 951,
              "decorators": [],
              "name": "createBaseInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 951,
              "end": 972,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 954,
                "end": 972,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 956,
                    "end": 970,
                    "expression": {
                      "type": "NewExpression",
                      "start": 956,
                      "end": 969,
                      "callee": {
                        "type": "Identifier",
                        "start": 960,
                        "end": 965,
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 966,
                          "end": 968,
                          "value": 10,
                          "raw": "10"
                        }
                      ]
                    },
                    "directive": null
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
            "start": 986,
            "end": 1032,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 993,
              "end": 1011,
              "decorators": [],
              "name": "staticBaseInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1011,
              "end": 1032,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1014,
                "end": 1032,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1016,
                    "end": 1030,
                    "expression": {
                      "type": "NewExpression",
                      "start": 1016,
                      "end": 1029,
                      "callee": {
                        "type": "Identifier",
                        "start": 1020,
                        "end": 1025,
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1026,
                          "end": 1028,
                          "value": 11,
                          "raw": "11"
                        }
                      ]
                    },
                    "directive": null
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1045,
      "end": 1067,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1049,
          "end": 1066,
          "id": {
            "type": "Identifier",
            "start": 1049,
            "end": 1051,
            "decorators": [],
            "name": "ba",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1054,
            "end": 1066,
            "callee": {
              "type": "Identifier",
              "start": 1058,
              "end": 1063,
              "decorators": [],
              "name": "BaseA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1064,
                "end": 1065,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1068,
      "end": 1090,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1072,
          "end": 1089,
          "id": {
            "type": "Identifier",
            "start": 1072,
            "end": 1074,
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1077,
            "end": 1089,
            "callee": {
              "type": "Identifier",
              "start": 1081,
              "end": 1086,
              "decorators": [],
              "name": "BaseB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1087,
                "end": 1088,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1100,
      "end": 1122,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1104,
          "end": 1121,
          "id": {
            "type": "Identifier",
            "start": 1104,
            "end": 1106,
            "decorators": [],
            "name": "bc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1109,
            "end": 1121,
            "callee": {
              "type": "Identifier",
              "start": 1113,
              "end": 1118,
              "decorators": [],
              "name": "BaseC",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1119,
                "end": 1120,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1133,
      "end": 1158,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1137,
          "end": 1157,
          "id": {
            "type": "Identifier",
            "start": 1137,
            "end": 1139,
            "decorators": [],
            "name": "da",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1142,
            "end": 1157,
            "callee": {
              "type": "Identifier",
              "start": 1146,
              "end": 1154,
              "decorators": [],
              "name": "DerivedA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1155,
                "end": 1156,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1159,
      "end": 1184,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1163,
          "end": 1183,
          "id": {
            "type": "Identifier",
            "start": 1163,
            "end": 1165,
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1168,
            "end": 1183,
            "callee": {
              "type": "Identifier",
              "start": 1172,
              "end": 1180,
              "decorators": [],
              "name": "DerivedB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1181,
                "end": 1182,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1185,
      "end": 1210,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1189,
          "end": 1209,
          "id": {
            "type": "Identifier",
            "start": 1189,
            "end": 1191,
            "decorators": [],
            "name": "dc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1194,
            "end": 1209,
            "callee": {
              "type": "Identifier",
              "start": 1198,
              "end": 1206,
              "decorators": [],
              "name": "DerivedC",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1207,
                "end": 1208,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
