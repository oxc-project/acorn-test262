__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 997,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 94,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 37,
        "decorators": [],
        "name": "Attributes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 64,
        "end": 94,
        "constraint": {
          "type": "TSTypeReference",
          "start": 78,
          "end": 82,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 78,
            "end": 82,
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 71,
          "end": 74,
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 85,
          "end": 91
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 60,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 51,
              "end": 60,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 205,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 153,
              "decorators": [],
              "name": "multiply",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 153,
              "end": 205,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 185,
                  "end": 189,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 186,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 188,
                      "end": 189,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 190,
                "end": 204,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 192,
                  "end": 204,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 197,
                    "end": 204,
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "start": 198,
                        "end": 203,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 198,
                            "end": 199,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 198,
                              "end": 199,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 202,
                            "end": 203,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 202,
                              "end": 203,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 197,
                    "decorators": [],
                    "name": "Query",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 153,
                "end": 184,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 154,
                    "end": 183,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 164,
                      "end": 183,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 174,
                        "end": 183,
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "start": 175,
                            "end": 182,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 181,
                              "end": 182,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 181,
                                "end": 182,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 174,
                        "decorators": [],
                        "name": "Attributes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 107,
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 107,
        "end": 138,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 137,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 137,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 128,
                "end": 137,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 129,
                    "end": 136,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 128,
                "decorators": [],
                "name": "Attributes",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
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
      "start": 231,
      "end": 259,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 245,
        "decorators": [],
        "name": "ClassName",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 251,
        "end": 258,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 257,
          "end": 258,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 245,
        "end": 248,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 246,
            "end": 247,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "decorators": [],
              "name": "S",
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
      "start": 260,
      "end": 311,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 277,
        "decorators": [],
        "name": "ClassNameMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 283,
        "end": 311,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 291,
          "end": 298,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 297,
            "end": 298,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": true,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 302,
          "end": 309
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 277,
        "end": 280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 278,
            "end": 279,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 278,
              "end": 279,
              "decorators": [],
              "name": "S",
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
      "start": 312,
      "end": 366,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 335,
        "decorators": [],
        "name": "ClassNameObjectMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 341,
        "end": 365,
        "types": [
          {
            "type": "TSObjectKeyword",
            "start": 341,
            "end": 347
          },
          {
            "type": "TSTypeReference",
            "start": 350,
            "end": 365,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 362,
              "end": 365,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 363,
                  "end": 364,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 364,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 350,
              "end": 362,
              "decorators": [],
              "name": "ClassNameMap",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 335,
        "end": 338,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 336,
            "end": 337,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "decorators": [],
              "name": "S",
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
      "start": 367,
      "end": 427,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 384,
        "decorators": [],
        "name": "ClassNameArg",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 390,
        "end": 426,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 390,
            "end": 402,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 399,
              "end": 402,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 400,
                  "end": 401,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 401,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 390,
              "end": 399,
              "decorators": [],
              "name": "ClassName",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 405,
            "end": 426,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 423,
              "end": 426,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 424,
                  "end": 425,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 425,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 405,
              "end": 423,
              "decorators": [],
              "name": "ClassNameObjectMap",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 384,
        "end": 387,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 385,
            "end": 386,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 429,
      "end": 997,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 436,
        "end": 997,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 540,
          "end": 997,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 544,
              "end": 982,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 550,
                  "end": 981,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 554,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 557,
                    "end": 981,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 572,
                        "end": 980,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 579,
                          "end": 980,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 585,
                              "end": 628,
                              "alternate": null,
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 602,
                                "end": 628,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 610,
                                    "end": 622,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 617,
                                      "end": 621,
                                      "raw": "null",
                                      "value": null,
                                      "regex": null,
                                      "bigint": null
                                    }
                                  }
                                ]
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "start": 589,
                                "end": 600,
                                "operator": "==",
                                "left": {
                                  "type": "Identifier",
                                  "start": 589,
                                  "end": 592,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 596,
                                  "end": 600,
                                  "raw": "null",
                                  "value": null,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "start": 633,
                              "end": 694,
                              "alternate": null,
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 661,
                                "end": 694,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 669,
                                    "end": 688,
                                    "argument": {
                                      "type": "MemberExpression",
                                      "start": 676,
                                      "end": 687,
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 676,
                                        "end": 682,
                                        "decorators": [],
                                        "name": "styles",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 683,
                                        "end": 686,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                ]
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "start": 637,
                                "end": 659,
                                "operator": "==",
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 637,
                                  "end": 647,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 644,
                                    "end": 647,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "typeof",
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 651,
                                  "end": 659,
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "start": 699,
                              "end": 976,
                              "alternate": null,
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 727,
                                "end": 976,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 735,
                                    "end": 970,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 742,
                                      "end": 969,
                                      "arguments": [
                                        {
                                          "type": "ArrowFunctionExpression",
                                          "start": 783,
                                          "end": 964,
                                          "async": false,
                                          "body": {
                                            "type": "BlockStatement",
                                            "start": 823,
                                            "end": 964,
                                            "body": [
                                              {
                                                "type": "VariableDeclaration",
                                                "start": 833,
                                                "end": 871,
                                                "declarations": [
                                                  {
                                                    "type": "VariableDeclarator",
                                                    "start": 839,
                                                    "end": 870,
                                                    "definite": false,
                                                    "id": {
                                                      "type": "Identifier",
                                                      "start": 839,
                                                      "end": 856,
                                                      "decorators": [],
                                                      "name": "exportedClassName",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "init": {
                                                      "type": "MemberExpression",
                                                      "start": 859,
                                                      "end": 870,
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "start": 859,
                                                        "end": 865,
                                                        "decorators": [],
                                                        "name": "styles",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "optional": false,
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 866,
                                                        "end": 869,
                                                        "decorators": [],
                                                        "name": "key",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      }
                                                    }
                                                  }
                                                ],
                                                "declare": false,
                                                "kind": "const"
                                              },
                                              {
                                                "type": "ExpressionStatement",
                                                "start": 880,
                                                "end": 935,
                                                "directive": null,
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "start": 880,
                                                  "end": 934,
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "start": 880,
                                                    "end": 902,
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 880,
                                                      "end": 883,
                                                      "decorators": [],
                                                      "name": "obj",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 884,
                                                      "end": 901,
                                                      "decorators": [],
                                                      "name": "exportedClassName",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "start": 905,
                                                    "end": 934,
                                                    "computed": true,
                                                    "object": {
                                                      "type": "TSAsExpression",
                                                      "start": 906,
                                                      "end": 928,
                                                      "expression": {
                                                        "type": "Identifier",
                                                        "start": 906,
                                                        "end": 909,
                                                        "decorators": [],
                                                        "name": "arg",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "start": 913,
                                                        "end": 928,
                                                        "typeArguments": {
                                                          "type": "TSTypeParameterInstantiation",
                                                          "start": 925,
                                                          "end": 928,
                                                          "params": [
                                                            {
                                                              "type": "TSTypeReference",
                                                              "start": 926,
                                                              "end": 927,
                                                              "typeArguments": null,
                                                              "typeName": {
                                                                "type": "Identifier",
                                                                "start": 926,
                                                                "end": 927,
                                                                "decorators": [],
                                                                "name": "S",
                                                                "optional": false,
                                                                "typeAnnotation": null
                                                              }
                                                            }
                                                          ]
                                                        },
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "start": 913,
                                                          "end": 925,
                                                          "decorators": [],
                                                          "name": "ClassNameMap",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        }
                                                      }
                                                    },
                                                    "optional": false,
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 930,
                                                      "end": 933,
                                                      "decorators": [],
                                                      "name": "key",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                "type": "ReturnStatement",
                                                "start": 945,
                                                "end": 956,
                                                "argument": {
                                                  "type": "Identifier",
                                                  "start": 952,
                                                  "end": 955,
                                                  "decorators": [],
                                                  "name": "obj",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            ]
                                          },
                                          "expression": false,
                                          "generator": false,
                                          "id": null,
                                          "params": [
                                            {
                                              "type": "Identifier",
                                              "start": 784,
                                              "end": 804,
                                              "decorators": [],
                                              "name": "obj",
                                              "optional": false,
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "start": 787,
                                                "end": 804,
                                                "typeAnnotation": {
                                                  "type": "TSTypeReference",
                                                  "start": 789,
                                                  "end": 804,
                                                  "typeArguments": null,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 789,
                                                    "end": 804,
                                                    "decorators": [],
                                                    "name": "ClassNameObject",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "start": 806,
                                              "end": 818,
                                              "decorators": [],
                                              "name": "key",
                                              "optional": false,
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "start": 809,
                                                "end": 818,
                                                "typeAnnotation": {
                                                  "type": "TSTypeOperator",
                                                  "start": 811,
                                                  "end": 818,
                                                  "operator": "keyof",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 817,
                                                    "end": 818,
                                                    "typeArguments": null,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 817,
                                                      "end": 818,
                                                      "decorators": [],
                                                      "name": "S",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "returnType": null,
                                          "typeParameters": null
                                        },
                                        {
                                          "type": "ObjectExpression",
                                          "start": 966,
                                          "end": 968,
                                          "properties": []
                                        }
                                      ],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 742,
                                        "end": 765,
                                        "computed": false,
                                        "object": {
                                          "type": "CallExpression",
                                          "start": 742,
                                          "end": 758,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 754,
                                              "end": 757,
                                              "decorators": [],
                                              "name": "arg",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 742,
                                            "end": 753,
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 742,
                                              "end": 748,
                                              "decorators": [],
                                              "name": "Object",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 749,
                                              "end": 753,
                                              "decorators": [],
                                              "name": "keys",
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
                                          "start": 759,
                                          "end": 765,
                                          "decorators": [],
                                          "name": "reduce",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 765,
                                        "end": 782,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 766,
                                            "end": 781,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 766,
                                              "end": 781,
                                              "decorators": [],
                                              "name": "ClassNameObject",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "start": 703,
                                "end": 725,
                                "operator": "==",
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 703,
                                  "end": 713,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 710,
                                    "end": 713,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "typeof",
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 717,
                                  "end": 725,
                                  "raw": "\"object\"",
                                  "value": "object",
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 572,
                            "end": 575,
                            "decorators": [],
                            "name": "arg",
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
                      "start": 557,
                      "end": 571,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 567,
                        "decorators": [],
                        "name": "classNames",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 568,
                        "end": 571,
                        "decorators": [],
                        "name": "map",
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
            },
            {
              "type": "ReturnStatement",
              "start": 985,
              "end": 995,
              "argument": {
                "type": "Literal",
                "start": 992,
                "end": 994,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 445,
          "end": 448,
          "decorators": [],
          "name": "css",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 487,
            "end": 496,
            "decorators": [],
            "name": "styles",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 496,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 495,
                "end": 496,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 495,
                  "end": 496,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "RestElement",
            "start": 498,
            "end": 530,
            "argument": {
              "type": "Identifier",
              "start": 501,
              "end": 511,
              "decorators": [],
              "name": "classNames",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 511,
              "end": 530,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 513,
                "end": 530,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 513,
                  "end": 528,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 525,
                    "end": 528,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 526,
                        "end": 527,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 526,
                          "end": 527,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 525,
                    "decorators": [],
                    "name": "ClassNameArg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 531,
          "end": 539,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 533,
            "end": 539
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 448,
          "end": 486,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 449,
              "end": 485,
              "const": false,
              "constraint": {
                "type": "TSMappedType",
                "start": 459,
                "end": 485,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 467,
                  "end": 474,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 474,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": false,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 477,
                  "end": 483
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 449,
                "end": 450,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
