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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 19,
        "end": 53,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 27,
          "end": 34,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 33,
            "end": 34,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 22,
          "end": 23,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 37,
          "end": 51,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 39,
              "end": 50,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 46,
                  "end": 50,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 48,
                    "end": 49,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 46,
                    "end": 47,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
          ]
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 106,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 81,
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 85,
          "end": 101,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 101,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 101,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 98,
                "end": 101,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 100,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 98,
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 105,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 104,
          "end": 105,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
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
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 199,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 192,
                  "end": 195,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 183,
                "end": 191,
                "decorators": [],
                "name": "unboxify",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 120,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 168,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 135,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 144,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 144,
                            "end": 147,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 146,
                              "end": 147,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 146,
                                "end": 147,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 151,
                  "end": 166,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 156,
                            "end": 161,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 161,
                            "end": 164,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 163,
                              "end": 164,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 164,
                                "decorators": [],
                                "name": "V",
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 122,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "V",
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
      "start": 201,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 207,
            "decorators": [],
            "name": "qq",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 210,
            "end": 257,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 217,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 219,
                      "end": 232,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 221,
                          "end": 230,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 226,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 228,
                            "end": 230,
                            "raw": "10",
                            "value": 10,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 234,
                    "end": 254,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 237,
                      "end": 254,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 239,
                          "end": 253,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 239,
                            "end": 244,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 246,
                            "end": 253,
                            "raw": "'hello'",
                            "value": "hello",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 210,
              "end": 213,
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
      "type": "TSInterfaceDeclaration",
      "start": 333,
      "end": 382,
      "body": {
        "type": "TSInterfaceBody",
        "start": 354,
        "end": 382,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 360,
            "end": 367,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 364,
              "decorators": [],
              "name": "left",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 367,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 366,
                "end": 367,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 372,
            "end": 380,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 377,
              "decorators": [],
              "name": "right",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 380,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 343,
        "end": 350,
        "decorators": [],
        "name": "Targets",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 350,
        "end": 353,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 351,
            "end": 352,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 383,
      "end": 415,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 394,
        "decorators": [],
        "name": "Target",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 397,
        "end": 415,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 403,
          "end": 415,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 403,
            "end": 410,
            "decorators": [],
            "name": "Targets",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 416,
      "end": 464,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 427,
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 451,
        "end": 464,
        "indexType": {
          "type": "TSTypeReference",
          "start": 462,
          "end": 463,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 462,
            "end": 463,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 451,
          "end": 461,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 458,
            "end": 461,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 459,
                "end": 460,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 460,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 451,
            "end": 458,
            "decorators": [],
            "name": "Targets",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 438,
              "end": 444,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 438,
                "end": 444,
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 446,
            "end": 447,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 466,
      "end": 528,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 473,
        "decorators": [],
        "name": "LR",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              }
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
                "raw": "\"left\"",
                "value": "left",
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 527,
          "end": 528,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 527,
            "end": 528,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 523,
          "end": 524,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 523,
            "end": 524,
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 484,
              "end": 490,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 484,
                "end": 490,
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 474,
              "end": 475,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 492,
            "end": 493,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 492,
              "end": 493,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 495,
            "end": 496,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 495,
              "end": 496,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 530,
      "end": 768,
      "body": {
        "type": "TSInterfaceBody",
        "start": 562,
        "end": 768,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 568,
            "end": 573,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 568,
              "end": 570,
              "decorators": [],
              "name": "_f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 573,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 573,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 573,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 578,
            "end": 600,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 578,
              "end": 581,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 581,
              "end": 600,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 583,
                "end": 600,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 589,
                  "end": 600,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 590,
                      "end": 591,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 590,
                        "end": 591,
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 593,
                      "end": 599
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 583,
                  "end": 589,
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 605,
            "end": 627,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 605,
              "end": 608,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 608,
              "end": 627,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 610,
                "end": 627,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 616,
                  "end": 627,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 617,
                      "end": 618,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 617,
                        "end": 618,
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 620,
                      "end": 626
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 616,
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 632,
            "end": 698,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 632,
              "end": 634,
              "decorators": [],
              "name": "lr",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 641,
                "end": 656,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 642,
                  "end": 656,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 644,
                    "end": 656,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 650,
                      "end": 656,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 651,
                          "end": 652,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 651,
                            "end": 652,
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 654,
                          "end": 655,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 654,
                            "end": 655,
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 650,
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 658,
                "end": 673,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 659,
                  "end": 673,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 661,
                    "end": 673,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 667,
                      "end": 673,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 668,
                          "end": 669,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 668,
                            "end": 669,
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 671,
                          "end": 672,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 671,
                            "end": 672,
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 661,
                      "end": 667,
                      "decorators": [],
                      "name": "Result",
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
              "start": 674,
              "end": 698,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 676,
                "end": 698,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 682,
                  "end": 698,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 683,
                      "end": 684,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 683,
                        "end": 684,
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 686,
                      "end": 697,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 688,
                        "end": 697,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 689,
                            "end": 690,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 689,
                              "end": 690,
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 692,
                            "end": 693,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 692,
                              "end": 693,
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 695,
                            "end": 696,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 695,
                              "end": 696,
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 688,
                        "decorators": [],
                        "name": "LR",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 682,
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 634,
              "end": 640,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 635,
                  "end": 636,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 635,
                    "end": 636,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 638,
                  "end": 639,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 638,
                    "end": 639,
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 703,
            "end": 766,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 703,
              "end": 707,
              "decorators": [],
              "name": "dict",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 707,
              "end": 766,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 709,
                "end": 766,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 713,
                    "end": 749,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 714,
                      "end": 749,
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "start": 716,
                        "end": 749,
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 723,
                          "end": 730,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 729,
                            "end": 730,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 729,
                              "end": 730,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 718,
                          "end": 719,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "nameType": null,
                        "optional": false,
                        "readonly": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 733,
                          "end": 748,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 739,
                            "end": 748,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 740,
                                "end": 741,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 740,
                                  "end": 741,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSIndexedAccessType",
                                "start": 743,
                                "end": 747,
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 745,
                                  "end": 746,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 745,
                                    "end": 746,
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 743,
                                  "end": 744,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 743,
                                    "end": 744,
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 733,
                            "end": 739,
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 760,
                      "end": 766,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 761,
                          "end": 762,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 761,
                            "end": 762,
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 764,
                          "end": 765,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 764,
                            "end": 765,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 754,
                      "end": 760,
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 709,
                  "end": 712,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 710,
                      "end": 711,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 711,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
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
        "start": 540,
        "end": 543,
        "decorators": [],
        "name": "Ops",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 543,
        "end": 561,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 544,
            "end": 560,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 554,
              "end": 560,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 554,
                "end": 560,
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 544,
              "end": 545,
              "decorators": [],
              "name": "F",
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
      "start": 769,
      "end": 804,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 804,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 775,
            "end": 792,
            "decorators": [],
            "name": "left",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 779,
              "end": 792,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 781,
                "end": 792,
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
                        "raw": "\"left\"",
                        "value": "left",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 784,
                  "decorators": [],
                  "name": "Ops",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 811,
            "end": 830,
            "decorators": [],
            "name": "right",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 816,
              "end": 830,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 818,
                "end": 830,
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
                        "raw": "\"right\"",
                        "value": "right",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 818,
                  "end": 821,
                  "decorators": [],
                  "name": "Ops",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 850,
            "end": 852,
            "decorators": [],
            "name": "ok",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 855,
            "end": 918,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 890,
              "end": 917,
              "properties": [
                {
                  "type": "Property",
                  "start": 891,
                  "end": 916,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 891,
                    "end": 893,
                    "decorators": [],
                    "name": "lr",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "CallExpression",
                    "start": 895,
                    "end": 916,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 901,
                        "end": 907,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 901,
                          "end": 903,
                          "decorators": [],
                          "name": "at",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 904,
                          "end": 907,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "start": 909,
                        "end": 915,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 909,
                          "end": 911,
                          "decorators": [],
                          "name": "at",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 915,
                          "decorators": [],
                          "name": "num",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 895,
                      "end": 900,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 895,
                        "end": 897,
                        "decorators": [],
                        "name": "at",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 898,
                        "end": 900,
                        "decorators": [],
                        "name": "lr",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 874,
                "end": 884,
                "decorators": [],
                "name": "at",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 876,
                  "end": 884,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 878,
                    "end": 884,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 881,
                      "end": 884,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 882,
                          "end": 883,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 882,
                            "end": 883,
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 878,
                      "end": 881,
                      "decorators": [],
                      "name": "Ops",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 855,
              "end": 873,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 856,
                  "end": 872,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 866,
                    "end": 872,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 872,
                      "decorators": [],
                      "name": "Target",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 856,
                    "end": 857,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 933,
            "decorators": [],
            "name": "orphaned",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 936,
            "end": 985,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 970,
              "end": 985,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 978,
                  "end": 984,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 981,
                      "end": 983,
                      "decorators": [],
                      "name": "at",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 978,
                    "end": 980,
                    "decorators": [],
                    "name": "ok",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 970,
                "end": 977,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 970,
                  "end": 972,
                  "decorators": [],
                  "name": "at",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 977,
                  "decorators": [],
                  "name": "dict",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 955,
                "end": 965,
                "decorators": [],
                "name": "at",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 957,
                  "end": 965,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 959,
                    "end": 965,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 962,
                      "end": 965,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 963,
                          "end": 964,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 963,
                            "end": 964,
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 959,
                      "end": 962,
                      "decorators": [],
                      "name": "Ops",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 936,
              "end": 954,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 937,
                  "end": 953,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 947,
                    "end": 953,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 947,
                      "end": 953,
                      "decorators": [],
                      "name": "Target",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 937,
                    "end": 938,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 993,
            "end": 999,
            "decorators": [],
            "name": "leftOk",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1002,
            "end": 1010,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1005,
                "end": 1009,
                "decorators": [],
                "name": "left",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1002,
              "end": 1004,
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1017,
            "end": 1029,
            "decorators": [],
            "name": "leftOrphaned",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1032,
            "end": 1046,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1041,
                "end": 1045,
                "decorators": [],
                "name": "left",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1032,
              "end": 1040,
              "decorators": [],
              "name": "orphaned",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1061,
            "decorators": [],
            "name": "rightOk",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1064,
            "end": 1073,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1067,
                "end": 1072,
                "decorators": [],
                "name": "right",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1064,
              "end": 1066,
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1080,
            "end": 1093,
            "decorators": [],
            "name": "rightOrphaned",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1096,
            "end": 1111,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1105,
                "end": 1110,
                "decorators": [],
                "name": "right",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1096,
              "end": 1104,
              "decorators": [],
              "name": "orphaned",
              "optional": false,
              "typeAnnotation": null
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
