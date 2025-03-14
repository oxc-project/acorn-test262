__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 509,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 126,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 35,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 35,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 32,
              "end": 35
            }
          }
        },
        {
          "type": "Identifier",
          "start": 37,
          "end": 56,
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 56,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 50,
              "end": 56
            }
          }
        },
        {
          "type": "Identifier",
          "start": 58,
          "end": 96,
          "decorators": [],
          "name": "descriptor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 96,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 96,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 93,
                "end": 96,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 94,
                    "end": 95,
                    "typeName": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 93,
                "decorators": [],
                "name": "TypedPropertyDescriptor",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 97,
        "end": 125,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 99,
          "end": 125,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 122,
            "end": 125,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 99,
            "end": 122,
            "decorators": [],
            "name": "TypedPropertyDescriptor",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 128,
      "end": 199,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 168,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 142,
                "end": 146,
                "expression": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 146,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
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
              "start": 152,
              "end": 168,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 155,
                "end": 168,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 157,
                    "end": 166,
                    "argument": {
                      "type": "Literal",
                      "start": 164,
                      "end": 165,
                      "raw": "0",
                      "value": 0
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
            "start": 173,
            "end": 197,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
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
              "start": 178,
              "end": 197,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 197,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 179,
                  "end": 192,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 186,
                      "end": 192
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 135,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 272,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 272,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 215,
            "end": 236,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
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
              "start": 220,
              "end": 236,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 223,
                "end": 236,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 225,
                    "end": 234,
                    "argument": {
                      "type": "Literal",
                      "start": 232,
                      "end": 233,
                      "raw": "0",
                      "value": 0
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
            "start": 241,
            "end": 270,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 241,
                "end": 245,
                "expression": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 245,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
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
              "start": 251,
              "end": 270,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 267,
                "end": 270,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 252,
                  "end": 265,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 257,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 259,
                      "end": 265
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 208,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 274,
      "end": 345,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 345,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 288,
            "end": 317,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 288,
                "end": 292,
                "expression": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 292,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
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
              "start": 298,
              "end": 317,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 314,
                "end": 317,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 299,
                  "end": 312,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 304,
                    "end": 312,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 306,
                      "end": 312
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 322,
            "end": 343,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 326,
              "end": 327,
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
              "start": 327,
              "end": 343,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 330,
                "end": 343,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 332,
                    "end": 341,
                    "argument": {
                      "type": "Literal",
                      "start": 339,
                      "end": 340,
                      "raw": "0",
                      "value": 0
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 281,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 347,
      "end": 418,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 355,
        "end": 418,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 361,
            "end": 385,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
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
              "start": 366,
              "end": 385,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 382,
                "end": 385,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 367,
                  "end": 380,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 372,
                    "end": 380,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 374,
                      "end": 380
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 390,
            "end": 416,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 390,
                "end": 394,
                "expression": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 394,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
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
              "start": 400,
              "end": 416,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 403,
                "end": 416,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 405,
                    "end": 414,
                    "argument": {
                      "type": "Literal",
                      "start": 412,
                      "end": 413,
                      "raw": "0",
                      "value": 0
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 354,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 420,
      "end": 462,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 428,
        "end": 462,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 434,
            "end": 460,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 434,
                "end": 438,
                "expression": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 438,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
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
              "start": 444,
              "end": 460,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 447,
                "end": 460,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 449,
                    "end": 458,
                    "argument": {
                      "type": "Literal",
                      "start": 456,
                      "end": 457,
                      "raw": "0",
                      "value": 0
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 427,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 464,
      "end": 509,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 472,
        "end": 509,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 478,
            "end": 507,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 478,
                "end": 482,
                "expression": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 482,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 488,
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
              "start": 488,
              "end": 507,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 504,
                "end": 507,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 489,
                  "end": 502,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 494,
                    "end": 502,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 496,
                      "end": 502
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 471,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
