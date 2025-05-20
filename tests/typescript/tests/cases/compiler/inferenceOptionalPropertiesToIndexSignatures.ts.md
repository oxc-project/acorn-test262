__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 670,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 52,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 47,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 47,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 29,
              "end": 47,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 31,
                  "end": 45,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 32,
                      "end": 41,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 33,
                        "end": 41,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 44,
                      "end": 45,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 48,
        "end": 51,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 50,
          "end": 51,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 96,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 72,
                "end": 96,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 74,
                    "end": 84,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 75,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 85,
                    "end": 94,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 86,
                      "end": 94,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 152,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 116,
                "end": 152,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 118,
                    "end": 128,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 119,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 129,
                    "end": 150,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 132,
                        "end": 150,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 132,
                            "end": 138
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 141,
                            "end": 150
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 197,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 197,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 172,
                "end": 197,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 174,
                    "end": 184,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 175,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 177,
                        "end": 183
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 185,
                    "end": 195,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 186,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 187,
                      "end": 195,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 189,
                        "end": 195
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 254,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 217,
                "end": 254,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 219,
                    "end": 229,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 222,
                        "end": 228
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 230,
                    "end": 252,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 231,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 232,
                      "end": 252,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 234,
                        "end": 252,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 234,
                            "end": 240
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 243,
                            "end": 252
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 266,
            "end": 273,
            "arguments": [
              {
                "type": "Identifier",
                "start": 270,
                "end": 272,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 269,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 295,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 301,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 304,
            "end": 311,
            "arguments": [
              {
                "type": "Identifier",
                "start": 308,
                "end": 310,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 304,
              "end": 307,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 361,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 354,
            "end": 361,
            "arguments": [
              {
                "type": "Identifier",
                "start": 358,
                "end": 360,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 392,
            "end": 399,
            "arguments": [
              {
                "type": "Identifier",
                "start": 396,
                "end": 398,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 392,
              "end": 395,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 496,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 456,
            "decorators": [],
            "name": "param2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 459,
            "end": 496,
            "alternate": {
              "type": "Literal",
              "start": 492,
              "end": 496,
              "raw": "null",
              "value": null
            },
            "consequent": {
              "type": "Literal",
              "start": 481,
              "end": 489,
              "raw": "'value2'",
              "value": "value2"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 459,
              "end": 478,
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "start": 459,
                "end": 472,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 459,
                  "end": 470,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 459,
                    "end": 463,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 470,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 475,
                "end": 478,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 499,
      "end": 569,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 568,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 508,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 511,
            "end": 568,
            "properties": [
              {
                "type": "Property",
                "start": 517,
                "end": 533,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 523,
                  "decorators": [],
                  "name": "param1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 525,
                  "end": 533,
                  "raw": "'value1'",
                  "value": "value1"
                }
              },
              {
                "type": "SpreadElement",
                "start": 539,
                "end": 566,
                "argument": {
                  "type": "ConditionalExpression",
                  "start": 543,
                  "end": 565,
                  "alternate": {
                    "type": "ObjectExpression",
                    "start": 563,
                    "end": 565,
                    "properties": []
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 552,
                    "end": 560,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 553,
                        "end": 559,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 559,
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 559,
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 549,
                    "decorators": [],
                    "name": "param2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 571,
      "end": 670,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 669,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 582,
            "decorators": [],
            "name": "query",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 585,
            "end": 669,
            "arguments": [
              {
                "type": "Literal",
                "start": 665,
                "end": 668,
                "raw": "'&'",
                "value": "&"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 585,
              "end": 664,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 585,
                "end": 659,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 614,
                    "end": 657,
                    "async": false,
                    "body": {
                      "type": "TemplateLiteral",
                      "start": 626,
                      "end": 657,
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 629,
                          "end": 630,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "CallExpression",
                          "start": 634,
                          "end": 655,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 653,
                              "end": 654,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 634,
                            "end": 652,
                            "decorators": [],
                            "name": "encodeURIComponent",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 626,
                          "end": 629,
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 630,
                          "end": 634,
                          "tail": false,
                          "value": {
                            "cooked": "=",
                            "raw": "="
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 655,
                          "end": 657,
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        }
                      ]
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "ArrayPattern",
                        "start": 615,
                        "end": 621,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 616,
                            "end": 617,
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 619,
                            "end": 620,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 585,
                  "end": 608,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 585,
                    "end": 604,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 600,
                        "end": 603,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 585,
                      "end": 599,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 591,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 599,
                        "decorators": [],
                        "name": "entries",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 608,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 660,
                "end": 664,
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
