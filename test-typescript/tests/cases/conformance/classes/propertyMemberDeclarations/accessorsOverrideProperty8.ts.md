__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 751,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Types",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 13,
        "end": 45,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 13,
            "end": 22,
            "literal": {
              "type": "Literal",
              "start": 13,
              "end": 22,
              "raw": "'boolean'",
              "value": "boolean"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 25,
            "end": 34,
            "literal": {
              "type": "Literal",
              "start": 25,
              "end": 34,
              "raw": "'unknown'",
              "value": "unknown"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 37,
            "end": 45,
            "literal": {
              "type": "Literal",
              "start": 37,
              "end": 45,
              "raw": "'string'",
              "value": "string"
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 48,
      "end": 216,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 63,
        "decorators": [],
        "name": "Properties",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 102,
        "end": 216,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 125,
          "end": 132,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 131,
            "end": 132,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 118,
          "end": 121,
          "decorators": [],
          "name": "key",
          "optional": false
        },
        "nameType": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 135,
          "end": 214,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 135,
            "end": 141,
            "indexType": {
              "type": "TSTypeReference",
              "start": 137,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 137,
                "end": 140,
                "decorators": [],
                "name": "key",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "extendsType": {
            "type": "TSLiteralType",
            "start": 150,
            "end": 159,
            "literal": {
              "type": "Literal",
              "start": 150,
              "end": 159,
              "raw": "'boolean'",
              "value": "boolean"
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 172,
            "end": 214,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 172,
              "end": 178,
              "indexType": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 177,
                  "decorators": [],
                  "name": "key",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "extendsType": {
              "type": "TSLiteralType",
              "start": 187,
              "end": 195,
              "literal": {
                "type": "Literal",
                "start": 187,
                "end": 195,
                "raw": "'string'",
                "value": "string"
              }
            },
            "falseType": {
              "type": "TSUnknownKeyword",
              "start": 207,
              "end": 214
            },
            "trueType": {
              "type": "TSStringKeyword",
              "start": 198,
              "end": 204
            }
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "start": 162,
            "end": 169
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 99,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 98,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 74,
              "end": 98,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 76,
                  "end": 96,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 77,
                      "end": 88,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 80,
                        "end": 88,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 82,
                          "end": 88
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 96,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 91,
                      "end": 96,
                      "typeName": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 96,
                        "decorators": [],
                        "name": "Types",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
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
      "type": "TSTypeAliasDeclaration",
      "start": 218,
      "end": 273,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 230,
        "decorators": [],
        "name": "AnyCtor",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 251,
        "end": 273,
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "start": 256,
            "end": 267,
            "argument": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 267,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 262,
                "end": 267,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 262,
                  "end": 265
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 269,
          "end": 273,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 272,
            "end": 273,
            "typeName": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 230,
        "end": 248,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 247,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 241,
              "end": 247
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 275,
      "end": 468,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 311,
        "decorators": [],
        "name": "classWithProperties",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 366,
          "end": 379,
          "decorators": [],
          "name": "properties",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 379,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 378,
              "end": 379,
              "typeName": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 381,
          "end": 398,
          "decorators": [],
          "name": "klass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 386,
            "end": 398,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 388,
              "end": 398,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 395,
                "end": 398,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 396,
                    "end": 397,
                    "typeName": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 397,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 388,
                "end": 395,
                "decorators": [],
                "name": "AnyCtor",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 399,
        "end": 467,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 401,
          "end": 467,
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 407,
              "end": 432,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 412,
                "end": 431,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 414,
                  "end": 431,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 414,
                      "end": 415,
                      "typeName": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 415,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 418,
                      "end": 431,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 428,
                        "end": 431,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 429,
                            "end": 430,
                            "typeName": {
                              "type": "Identifier",
                              "start": 429,
                              "end": 430,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 418,
                        "end": 428,
                        "decorators": [],
                        "name": "Properties",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 437,
              "end": 465,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 437,
                "end": 446,
                "decorators": [],
                "name": "prototype",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 446,
                "end": 465,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 448,
                  "end": 465,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 448,
                      "end": 449,
                      "typeName": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 449,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 452,
                      "end": 465,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 462,
                        "end": 465,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 463,
                            "end": 464,
                            "typeName": {
                              "type": "Identifier",
                              "start": 463,
                              "end": 464,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 462,
                        "decorators": [],
                        "name": "Properties",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 311,
        "end": 365,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 312,
            "end": 346,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 322,
              "end": 346,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 324,
                  "end": 344,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 325,
                      "end": 336,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 328,
                        "end": 336,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 330,
                          "end": 336
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 344,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 339,
                      "end": 344,
                      "typeName": {
                        "type": "Identifier",
                        "start": 339,
                        "end": 344,
                        "decorators": [],
                        "name": "Types",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 348,
            "end": 364,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 358,
              "end": 364
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 470,
      "end": 584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 583,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 476,
            "end": 480,
            "decorators": [],
            "name": "Base",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 483,
            "end": 583,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 503,
                "end": 566,
                "properties": [
                  {
                    "type": "Property",
                    "start": 509,
                    "end": 546,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 514,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "get",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 514,
                      "end": 546,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 517,
                        "end": 546,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 519,
                            "end": 544,
                            "argument": {
                              "type": "TSAsExpression",
                              "start": 526,
                              "end": 544,
                              "expression": {
                                "type": "Literal",
                                "start": 526,
                                "end": 535,
                                "raw": "'boolean'",
                                "value": "boolean"
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 539,
                                "end": 544,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 539,
                                  "end": 544,
                                  "decorators": [],
                                  "name": "const",
                                  "optional": false
                                }
                              }
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
                    "start": 552,
                    "end": 563,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 553,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 555,
                      "end": 563,
                      "raw": "'string'",
                      "value": "string"
                    }
                  }
                ]
              },
              {
                "type": "ClassExpression",
                "start": 568,
                "end": 582,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 579,
                  "end": 582,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 578,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                },
                "implements": [],
                "superClass": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 483,
              "end": 502,
              "decorators": [],
              "name": "classWithProperties",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 586,
      "end": 698,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 613,
        "end": 698,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 619,
            "end": 656,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 623,
              "end": 624,
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
              "start": 624,
              "end": 656,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 627,
                "end": 656,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 637,
                    "end": 650,
                    "argument": {
                      "type": "Literal",
                      "start": 644,
                      "end": 649,
                      "raw": "false",
                      "value": false
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
            "start": 661,
            "end": 696,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 665,
              "end": 666,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 666,
              "end": 696,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 669,
                "end": 696,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 679,
                    "end": 690,
                    "argument": {
                      "type": "Literal",
                      "start": 686,
                      "end": 690,
                      "raw": "'hi'",
                      "value": "hi"
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
        "start": 592,
        "end": 599,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 608,
        "end": 612,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 700,
      "end": 727,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 706,
          "end": 726,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 706,
            "end": 710,
            "decorators": [],
            "name": "mine",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 713,
            "end": 726,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 717,
              "end": 724,
              "decorators": [],
              "name": "MyClass",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 728,
      "end": 749,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 748,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 734,
            "end": 739,
            "decorators": [],
            "name": "value",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 742,
            "end": 748,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 742,
              "end": 746,
              "decorators": [],
              "name": "mine",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 747,
              "end": 748,
              "decorators": [],
              "name": "x",
              "optional": false
            }
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
