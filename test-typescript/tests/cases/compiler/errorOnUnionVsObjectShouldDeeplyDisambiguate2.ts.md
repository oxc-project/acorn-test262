errorOnUnionVsObjectShouldDeeplyDisambiguate2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 620,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 330,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 330,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 48,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 47,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 24,
                "end": 47,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 30,
                    "end": 47,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 37,
                      "end": 47,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 38,
                          "end": 46,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 38,
                            "end": 44
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 37,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 51,
            "end": 76,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 75,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 54,
                "end": 75,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 75,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 67,
                      "end": 75,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 68,
                          "end": 74
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 67,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 104,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 103,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 82,
                "end": 103,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 88,
                    "end": 103,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 95,
                      "end": 103,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 96,
                          "end": 102
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 95,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 107,
            "end": 132,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 131,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 110,
                "end": 131,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 113,
                  "end": 131,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 116,
                    "end": 131,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 123,
                      "end": 131,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 124,
                          "end": 130
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 123,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 160,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 159,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 138,
                "end": 159,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 141,
                  "end": 159,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 144,
                    "end": 159,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 151,
                      "end": 159,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 152,
                          "end": 158
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 151,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 163,
            "end": 188,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 187,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 166,
                "end": 187,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 169,
                  "end": 187,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 187,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 179,
                      "end": 187,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 180,
                          "end": 186
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 179,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 191,
            "end": 216,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 215,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 194,
                "end": 215,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 197,
                  "end": 215,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 200,
                    "end": 215,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 207,
                      "end": 215,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 208,
                          "end": 214
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 207,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 219,
            "end": 244,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "h",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 243,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 222,
                "end": 243,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 225,
                  "end": 243,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 228,
                    "end": 243,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 235,
                      "end": 243,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 236,
                          "end": 242
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 235,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 247,
            "end": 272,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 271,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 250,
                "end": 271,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 253,
                  "end": 271,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 256,
                    "end": 271,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 263,
                      "end": 271,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 264,
                          "end": 270
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 263,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 275,
            "end": 300,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "decorators": [],
              "name": "j",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 299,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 278,
                "end": 299,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 281,
                  "end": 299,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 284,
                    "end": 299,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 291,
                      "end": 299,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 292,
                          "end": 298
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 291,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 303,
            "end": 328,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "k",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 327,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 306,
                "end": 327,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 309,
                  "end": 327,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 312,
                    "end": 327,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 319,
                      "end": 327,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 320,
                          "end": 326
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 319,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
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
        "end": 15,
        "decorators": [],
        "name": "Stuff",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 332,
      "end": 620,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 361,
        "end": 620,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 365,
            "end": 618,
            "argument": {
              "type": "ObjectExpression",
              "start": 372,
              "end": 618,
              "properties": [
                {
                  "type": "Property",
                  "start": 378,
                  "end": 398,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 379,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 379,
                    "end": 398,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 382,
                      "end": 398,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 384,
                          "end": 396,
                          "argument": {
                            "type": "ArrayExpression",
                            "start": 391,
                            "end": 396,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 392,
                                "end": 395,
                                "raw": "123",
                                "value": 123
                              }
                            ]
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
                  "type": "Property",
                  "start": 404,
                  "end": 420,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 405,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 407,
                    "end": 420,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 413,
                      "end": 420,
                      "raw": "\"hello\"",
                      "value": "hello"
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 426,
                  "end": 442,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 427,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 429,
                    "end": 442,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 435,
                      "end": 442,
                      "raw": "\"hello\"",
                      "value": "hello"
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 448,
                  "end": 464,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 449,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 451,
                    "end": 464,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 457,
                      "end": 464,
                      "raw": "\"hello\"",
                      "value": "hello"
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 470,
                  "end": 486,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 471,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 473,
                    "end": 486,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 479,
                      "end": 486,
                      "raw": "\"hello\"",
                      "value": "hello"
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 492,
                  "end": 508,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 493,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 495,
                    "end": 508,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 501,
                      "end": 508,
                      "raw": "\"hello\"",
                      "value": "hello"
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 514,
                  "end": 530,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 515,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 517,
                    "end": 530,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 523,
                      "end": 530,
                      "raw": "\"hello\"",
                      "value": "hello"
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 536,
                  "end": 552,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 536,
                    "end": 537,
                    "decorators": [],
                    "name": "h",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 539,
                    "end": 552,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 545,
                      "end": 552,
                      "raw": "\"hello\"",
                      "value": "hello"
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 558,
                  "end": 574,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 558,
                    "end": 559,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 561,
                    "end": 574,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 567,
                      "end": 574,
                      "raw": "\"hello\"",
                      "value": "hello"
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 580,
                  "end": 596,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 580,
                    "end": 581,
                    "decorators": [],
                    "name": "j",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 583,
                    "end": 596,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 589,
                      "end": 596,
                      "raw": "\"hello\"",
                      "value": "hello"
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 602,
                  "end": 614,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 603,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 605,
                    "end": 614,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 611,
                      "end": 614,
                      "raw": "123",
                      "value": 123
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
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
        "start": 341,
        "end": 344,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 346,
        "end": 360,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 348,
          "end": 360,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 348,
              "end": 353,
              "typeName": {
                "type": "Identifier",
                "start": 348,
                "end": 353,
                "decorators": [],
                "name": "Stuff",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 356,
              "end": 360,
              "typeName": {
                "type": "Identifier",
                "start": 356,
                "end": 360,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
