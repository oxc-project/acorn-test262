__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 547,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 124,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 86,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 61,
              "end": 86,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 62,
                  "end": 76,
                  "argument": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 76,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 71,
                      "end": 76,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 122,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 97,
              "end": 122,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 98,
                  "end": 112,
                  "argument": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 105,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 107,
                      "end": 112,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 107,
                        "end": 110
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 113,
                "end": 121,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 115,
                  "end": 121
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 546,
      "expression": {
        "type": "ClassExpression",
        "start": 185,
        "end": 544,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 211,
          "end": 544,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 217,
              "end": 247,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 225,
                "end": 247,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 228,
                  "end": 247,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 230,
                      "end": 245,
                      "expression": {
                        "type": "CallExpression",
                        "start": 230,
                        "end": 244,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 230,
                          "end": 242,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 230,
                            "end": 235
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 242,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 252,
              "end": 293,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 264,
                "end": 293,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 267,
                  "end": 293,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 269,
                      "end": 291,
                      "argument": {
                        "type": "CallExpression",
                        "start": 276,
                        "end": 290,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 276,
                          "end": 288,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 276,
                            "end": 281
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 288,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 298,
              "end": 341,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 310,
                "end": 341,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 322,
                  "end": 341,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 324,
                      "end": 339,
                      "expression": {
                        "type": "CallExpression",
                        "start": 324,
                        "end": 338,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 324,
                          "end": 336,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 324,
                            "end": 329
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 330,
                            "end": 336,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          }
                        },
                        "optional": false
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
                    "start": 311,
                    "end": 320,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 312,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 347,
              "end": 409,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 347,
                "end": 358,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 358,
                "end": 409,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 361,
                  "end": 409,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 371,
                      "end": 379,
                      "expression": {
                        "type": "CallExpression",
                        "start": 371,
                        "end": 378,
                        "arguments": [],
                        "callee": {
                          "type": "Super",
                          "start": 371,
                          "end": 376
                        },
                        "optional": false
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 388,
                      "end": 403,
                      "expression": {
                        "type": "CallExpression",
                        "start": 388,
                        "end": 402,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 388,
                          "end": 400,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 388,
                            "end": 393
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 394,
                            "end": 400,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 415,
              "end": 434,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "CallExpression",
                "start": 419,
                "end": 433,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 419,
                  "end": 431,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 419,
                    "end": 424
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 431,
                    "decorators": [],
                    "name": "method",
                    "optional": false
                  }
                },
                "optional": false
              }
            },
            {
              "type": "MethodDefinition",
              "start": 439,
              "end": 462,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 439,
                "end": 440,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 440,
                "end": 462,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 443,
                  "end": 462,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 445,
                      "end": 460,
                      "expression": {
                        "type": "CallExpression",
                        "start": 445,
                        "end": 459,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 445,
                          "end": 457,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 445,
                            "end": 450
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 451,
                            "end": 457,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 467,
              "end": 501,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 472,
                "end": 501,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 475,
                  "end": 501,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 477,
                      "end": 499,
                      "argument": {
                        "type": "CallExpression",
                        "start": 484,
                        "end": 498,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 484,
                          "end": 496,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 484,
                            "end": 489
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 490,
                            "end": 496,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 506,
              "end": 542,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 511,
                "end": 542,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 523,
                  "end": 542,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 525,
                      "end": 540,
                      "expression": {
                        "type": "CallExpression",
                        "start": 525,
                        "end": 539,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 525,
                          "end": 537,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 525,
                            "end": 530
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 531,
                            "end": 537,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          }
                        },
                        "optional": false
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
                    "start": 512,
                    "end": 521,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 513,
                      "end": 521,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 515,
                        "end": 521
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 185,
            "end": 189,
            "expression": {
              "type": "Identifier",
              "start": 186,
              "end": 189,
              "decorators": [],
              "name": "dec",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 206,
          "end": 210,
          "decorators": [],
          "name": "Base",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
