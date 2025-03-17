__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1111,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "Boxified",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 19,
        "end": 53,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 22,
          "end": 34,
          "name": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 27,
            "end": 34,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 33,
              "end": 34,
              "typeName": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 37,
          "end": 51,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 39,
              "end": 50,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 46,
                  "end": 50,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 46,
                    "end": 47,
                    "typeName": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 48,
                    "end": 49,
                    "typeName": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 27,
          "end": 34,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 33,
            "end": 34,
            "typeName": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 22,
          "end": 23,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 81,
        "name": "unboxify",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 85,
          "end": 101,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 101,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 101,
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 98,
                "name": "Boxified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 98,
                "end": 101,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 105,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 104,
          "end": 105,
          "typeName": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "name": "T",
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
      "start": 108,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 120,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 168,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 168,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 132,
              "end": 168,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 134,
                  "end": 150,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 135,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 137,
                      "end": 149,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 139,
                          "end": 147,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 144,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 144,
                            "end": 147,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 146,
                              "end": 147,
                              "typeName": {
                                "type": "Identifier",
                                "start": 146,
                                "end": 147,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 151,
                  "end": 166,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 154,
                      "end": 166,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 156,
                          "end": 164,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 156,
                            "end": 161,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 161,
                            "end": 164,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 163,
                              "end": 164,
                              "typeName": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 164,
                                "name": "V",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 170,
        "end": 199,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 176,
            "end": 197,
            "argument": {
              "type": "CallExpression",
              "start": 183,
              "end": 196,
              "callee": {
                "type": "Identifier",
                "start": 183,
                "end": 191,
                "name": "unboxify",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 192,
                  "end": 195,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 122,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "V",
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 207,
            "name": "qq",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 210,
            "end": 257,
            "callee": {
              "type": "Identifier",
              "start": 210,
              "end": 213,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 214,
                "end": 256,
                "properties": [
                  {
                    "type": "Property",
                    "start": 216,
                    "end": 232,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 217,
                      "name": "u",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 219,
                      "end": 232,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 221,
                          "end": 230,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 226,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 228,
                            "end": 230,
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 234,
                    "end": 254,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 237,
                      "end": 254,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 239,
                          "end": 253,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 239,
                            "end": 244,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 246,
                            "end": 253,
                            "value": "hello",
                            "raw": "'hello'"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 333,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 350,
        "name": "Targets",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 350,
        "end": 353,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 351,
            "end": 352,
            "name": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "name": "A",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 354,
        "end": 382,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 360,
            "end": 367,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 364,
              "name": "left",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 367,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 366,
                "end": 367,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 372,
            "end": 380,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 377,
              "name": "right",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 380,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 383,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 394,
        "name": "Target",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 397,
        "end": 415,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 403,
          "end": 415,
          "typeName": {
            "type": "Identifier",
            "start": 403,
            "end": 410,
            "name": "Targets",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 410,
            "end": 415,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 411,
                "end": 414
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 416,
      "end": 464,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 427,
        "name": "Result",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 427,
        "end": 448,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 428,
            "end": 444,
            "name": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 438,
              "end": 444,
              "typeName": {
                "type": "Identifier",
                "start": 438,
                "end": 444,
                "name": "Target",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 446,
            "end": 447,
            "name": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "name": "A",
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
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 451,
        "end": 464,
        "objectType": {
          "type": "TSTypeReference",
          "start": 451,
          "end": 461,
          "typeName": {
            "type": "Identifier",
            "start": 451,
            "end": 458,
            "name": "Targets",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 458,
            "end": 461,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 459,
                "end": 460,
                "typeName": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 460,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 462,
          "end": 463,
          "typeName": {
            "type": "Identifier",
            "start": 462,
            "end": 463,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 466,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 473,
        "name": "LR",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 473,
        "end": 497,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 474,
            "end": 490,
            "name": {
              "type": "Identifier",
              "start": 474,
              "end": 475,
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 484,
              "end": 490,
              "typeName": {
                "type": "Identifier",
                "start": 484,
                "end": 490,
                "name": "Target",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 492,
            "end": 493,
            "name": {
              "type": "Identifier",
              "start": 492,
              "end": 493,
              "name": "L",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 495,
            "end": 496,
            "name": {
              "type": "Identifier",
              "start": 495,
              "end": 496,
              "name": "R",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 500,
        "end": 528,
        "checkType": {
          "type": "TSTupleType",
          "start": 500,
          "end": 503,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 501,
              "end": 502,
              "typeName": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 512,
          "end": 520,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 513,
              "end": 519,
              "literal": {
                "type": "Literal",
                "start": 513,
                "end": 519,
                "value": "left",
                "raw": "\"left\""
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 523,
          "end": 524,
          "typeName": {
            "type": "Identifier",
            "start": 523,
            "end": 524,
            "name": "L",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 527,
          "end": 528,
          "typeName": {
            "type": "Identifier",
            "start": 527,
            "end": 528,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 530,
      "end": 768,
      "id": {
        "type": "Identifier",
        "start": 540,
        "end": 543,
        "name": "Ops",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 543,
        "end": 561,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 544,
            "end": 560,
            "name": {
              "type": "Identifier",
              "start": 544,
              "end": 545,
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 554,
              "end": 560,
              "typeName": {
                "type": "Identifier",
                "start": 554,
                "end": 560,
                "name": "Target",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 562,
        "end": 768,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 568,
            "end": 573,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 568,
              "end": 570,
              "name": "_f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 573,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 573,
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 573,
                  "name": "F",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 578,
            "end": 600,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 578,
              "end": 581,
              "name": "str",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 581,
              "end": 600,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 583,
                "end": 600,
                "typeName": {
                  "type": "Identifier",
                  "start": 583,
                  "end": 589,
                  "name": "Result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 589,
                  "end": 600,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 590,
                      "end": 591,
                      "typeName": {
                        "type": "Identifier",
                        "start": 590,
                        "end": 591,
                        "name": "F",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 593,
                      "end": 599
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 605,
            "end": 627,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 605,
              "end": 608,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 608,
              "end": 627,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 610,
                "end": 627,
                "typeName": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 616,
                  "name": "Result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 616,
                  "end": 627,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 617,
                      "end": 618,
                      "typeName": {
                        "type": "Identifier",
                        "start": 617,
                        "end": 618,
                        "name": "F",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 620,
                      "end": 626
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 632,
            "end": 698,
            "key": {
              "type": "Identifier",
              "start": 632,
              "end": 634,
              "name": "lr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 634,
              "end": 640,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 635,
                  "end": 636,
                  "name": {
                    "type": "Identifier",
                    "start": 635,
                    "end": 636,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 638,
                  "end": 639,
                  "name": {
                    "type": "Identifier",
                    "start": 638,
                    "end": 639,
                    "name": "O",
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
            "params": [
              {
                "type": "Identifier",
                "start": 641,
                "end": 656,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 642,
                  "end": 656,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 644,
                    "end": 656,
                    "typeName": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 650,
                      "name": "Result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 650,
                      "end": 656,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 651,
                          "end": 652,
                          "typeName": {
                            "type": "Identifier",
                            "start": 651,
                            "end": 652,
                            "name": "F",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 654,
                          "end": 655,
                          "typeName": {
                            "type": "Identifier",
                            "start": 654,
                            "end": 655,
                            "name": "I",
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
              },
              {
                "type": "Identifier",
                "start": 658,
                "end": 673,
                "name": "o",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 659,
                  "end": 673,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 661,
                    "end": 673,
                    "typeName": {
                      "type": "Identifier",
                      "start": 661,
                      "end": 667,
                      "name": "Result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 667,
                      "end": 673,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 668,
                          "end": 669,
                          "typeName": {
                            "type": "Identifier",
                            "start": 668,
                            "end": 669,
                            "name": "F",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 671,
                          "end": 672,
                          "typeName": {
                            "type": "Identifier",
                            "start": 671,
                            "end": 672,
                            "name": "O",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 674,
              "end": 698,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 676,
                "end": 698,
                "typeName": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 682,
                  "name": "Result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 682,
                  "end": 698,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 683,
                      "end": 684,
                      "typeName": {
                        "type": "Identifier",
                        "start": 683,
                        "end": 684,
                        "name": "F",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 686,
                      "end": 697,
                      "typeName": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 688,
                        "name": "LR",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 688,
                        "end": 697,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 689,
                            "end": 690,
                            "typeName": {
                              "type": "Identifier",
                              "start": 689,
                              "end": 690,
                              "name": "F",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 692,
                            "end": 693,
                            "typeName": {
                              "type": "Identifier",
                              "start": 692,
                              "end": 693,
                              "name": "I",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 695,
                            "end": 696,
                            "typeName": {
                              "type": "Identifier",
                              "start": 695,
                              "end": 696,
                              "name": "O",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 703,
            "end": 766,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 703,
              "end": 707,
              "name": "dict",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 707,
              "end": 766,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 709,
                "end": 766,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 709,
                  "end": 712,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 710,
                      "end": 711,
                      "name": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 711,
                        "name": "P",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 713,
                    "end": 749,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 714,
                      "end": 749,
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "start": 716,
                        "end": 749,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 718,
                          "end": 730,
                          "name": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 719,
                            "name": "k",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeOperator",
                            "start": 723,
                            "end": 730,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 729,
                              "end": 730,
                              "typeName": {
                                "type": "Identifier",
                                "start": 729,
                                "end": 730,
                                "name": "P",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 733,
                          "end": 748,
                          "typeName": {
                            "type": "Identifier",
                            "start": 733,
                            "end": 739,
                            "name": "Result",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 739,
                            "end": 748,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 740,
                                "end": 741,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 740,
                                  "end": 741,
                                  "name": "F",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSIndexedAccessType",
                                "start": 743,
                                "end": 747,
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 743,
                                  "end": 744,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 743,
                                    "end": 744,
                                    "name": "P",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 745,
                                  "end": 746,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 745,
                                    "end": 746,
                                    "name": "k",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            ]
                          }
                        },
                        "optional": null,
                        "readonly": null,
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 723,
                          "end": 730,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 729,
                            "end": 730,
                            "typeName": {
                              "type": "Identifier",
                              "start": 729,
                              "end": 730,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 718,
                          "end": 719,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 751,
                  "end": 766,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 754,
                    "end": 766,
                    "typeName": {
                      "type": "Identifier",
                      "start": 754,
                      "end": 760,
                      "name": "Result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 760,
                      "end": 766,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 761,
                          "end": 762,
                          "typeName": {
                            "type": "Identifier",
                            "start": 761,
                            "end": 762,
                            "name": "F",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 764,
                          "end": 765,
                          "typeName": {
                            "type": "Identifier",
                            "start": 764,
                            "end": 765,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 769,
      "end": 804,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 804,
          "id": {
            "type": "Identifier",
            "start": 775,
            "end": 792,
            "name": "left",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 779,
              "end": 792,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 781,
                "end": 792,
                "typeName": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 784,
                  "name": "Ops",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 784,
                  "end": 792,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 785,
                      "end": 791,
                      "literal": {
                        "type": "Literal",
                        "start": 785,
                        "end": 791,
                        "value": "left",
                        "raw": "\"left\""
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 795,
            "end": 804,
            "expression": {
              "type": "ObjectExpression",
              "start": 795,
              "end": 797,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 801,
              "end": 804
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 805,
      "end": 842,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 811,
          "end": 842,
          "id": {
            "type": "Identifier",
            "start": 811,
            "end": 830,
            "name": "right",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 816,
              "end": 830,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 818,
                "end": 830,
                "typeName": {
                  "type": "Identifier",
                  "start": 818,
                  "end": 821,
                  "name": "Ops",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 821,
                  "end": 830,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 822,
                      "end": 829,
                      "literal": {
                        "type": "Literal",
                        "start": 822,
                        "end": 829,
                        "value": "right",
                        "raw": "\"right\""
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 833,
            "end": 842,
            "expression": {
              "type": "ObjectExpression",
              "start": 833,
              "end": 835,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 839,
              "end": 842
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 844,
      "end": 918,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 850,
          "end": 918,
          "id": {
            "type": "Identifier",
            "start": 850,
            "end": 852,
            "name": "ok",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 855,
            "end": 918,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 874,
                "end": 884,
                "name": "at",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 876,
                  "end": 884,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 878,
                    "end": 884,
                    "typeName": {
                      "type": "Identifier",
                      "start": 878,
                      "end": 881,
                      "name": "Ops",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 881,
                      "end": 884,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 882,
                          "end": 883,
                          "typeName": {
                            "type": "Identifier",
                            "start": 882,
                            "end": 883,
                            "name": "F",
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
              "type": "ObjectExpression",
              "start": 890,
              "end": 917,
              "properties": [
                {
                  "type": "Property",
                  "start": 891,
                  "end": 916,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 891,
                    "end": 893,
                    "name": "lr",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 895,
                    "end": 916,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 895,
                      "end": 900,
                      "object": {
                        "type": "Identifier",
                        "start": 895,
                        "end": 897,
                        "name": "at",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 898,
                        "end": 900,
                        "name": "lr",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 901,
                        "end": 907,
                        "object": {
                          "type": "Identifier",
                          "start": 901,
                          "end": 903,
                          "name": "at",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 904,
                          "end": 907,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "MemberExpression",
                        "start": 909,
                        "end": 915,
                        "object": {
                          "type": "Identifier",
                          "start": 909,
                          "end": 911,
                          "name": "at",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 915,
                          "name": "num",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 855,
              "end": 873,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 856,
                  "end": 872,
                  "name": {
                    "type": "Identifier",
                    "start": 856,
                    "end": 857,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 866,
                    "end": 872,
                    "typeName": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 872,
                      "name": "Target",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 919,
      "end": 985,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 925,
          "end": 985,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 933,
            "name": "orphaned",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 936,
            "end": 985,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 955,
                "end": 965,
                "name": "at",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 957,
                  "end": 965,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 959,
                    "end": 965,
                    "typeName": {
                      "type": "Identifier",
                      "start": 959,
                      "end": 962,
                      "name": "Ops",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 962,
                      "end": 965,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 963,
                          "end": 964,
                          "typeName": {
                            "type": "Identifier",
                            "start": 963,
                            "end": 964,
                            "name": "F",
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
              "type": "CallExpression",
              "start": 970,
              "end": 985,
              "callee": {
                "type": "MemberExpression",
                "start": 970,
                "end": 977,
                "object": {
                  "type": "Identifier",
                  "start": 970,
                  "end": 972,
                  "name": "at",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 977,
                  "name": "dict",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 978,
                  "end": 984,
                  "callee": {
                    "type": "Identifier",
                    "start": 978,
                    "end": 980,
                    "name": "ok",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 981,
                      "end": 983,
                      "name": "at",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 936,
              "end": 954,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 937,
                  "end": 953,
                  "name": {
                    "type": "Identifier",
                    "start": 937,
                    "end": 938,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 947,
                    "end": 953,
                    "typeName": {
                      "type": "Identifier",
                      "start": 947,
                      "end": 953,
                      "name": "Target",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 987,
      "end": 1010,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 993,
          "end": 1010,
          "id": {
            "type": "Identifier",
            "start": 993,
            "end": 999,
            "name": "leftOk",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1002,
            "end": 1010,
            "callee": {
              "type": "Identifier",
              "start": 1002,
              "end": 1004,
              "name": "ok",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1005,
                "end": 1009,
                "name": "left",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1011,
      "end": 1046,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1017,
          "end": 1046,
          "id": {
            "type": "Identifier",
            "start": 1017,
            "end": 1029,
            "name": "leftOrphaned",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1032,
            "end": 1046,
            "callee": {
              "type": "Identifier",
              "start": 1032,
              "end": 1040,
              "name": "orphaned",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1041,
                "end": 1045,
                "name": "left",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1048,
      "end": 1073,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1054,
          "end": 1073,
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1061,
            "name": "rightOk",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1064,
            "end": 1073,
            "callee": {
              "type": "Identifier",
              "start": 1064,
              "end": 1066,
              "name": "ok",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1067,
                "end": 1072,
                "name": "right",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1074,
      "end": 1111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1080,
          "end": 1111,
          "id": {
            "type": "Identifier",
            "start": 1080,
            "end": 1093,
            "name": "rightOrphaned",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1096,
            "end": 1111,
            "callee": {
              "type": "Identifier",
              "start": 1096,
              "end": 1104,
              "name": "orphaned",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1105,
                "end": 1110,
                "name": "right",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
