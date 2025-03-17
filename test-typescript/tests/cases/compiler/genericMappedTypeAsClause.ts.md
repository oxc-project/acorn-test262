__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 803,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Model",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 13,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
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
      "start": 49,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 65,
        "name": "MappedModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 72,
              "name": "Suffix",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 81,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 91,
        "end": 147,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 98,
          "end": 114,
          "name": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 103,
            "end": 114,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 109,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 114,
                "name": "Model",
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
        "nameType": {
          "type": "TSTemplateLiteralType",
          "start": 118,
          "end": 133,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 118,
              "end": 121,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 122,
              "end": 125,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 131,
              "end": 133,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 121,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 125,
              "end": 131,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 131,
                "name": "Suffix",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 136,
          "end": 144,
          "objectType": {
            "type": "TSTypeReference",
            "start": 136,
            "end": 141,
            "typeName": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "name": "Model",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 142,
            "end": 143,
            "typeName": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 103,
          "end": 114,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 109,
            "end": 114,
            "typeName": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "name": "Model",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 180,
            "name": "foo1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 173,
                  "name": "MappedModel",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 173,
                  "end": 180,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 174,
                      "end": 179,
                      "literal": {
                        "type": "Literal",
                        "start": 174,
                        "end": 179,
                        "value": "Foo",
                        "raw": "'Foo'"
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
            "type": "ObjectExpression",
            "start": 183,
            "end": 209,
            "properties": [
              {
                "type": "Property",
                "start": 185,
                "end": 197,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 189,
                  "name": "aFoo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 191,
                  "end": 197,
                  "value": "test",
                  "raw": "'test'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 199,
                "end": 207,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 203,
                  "name": "bFoo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 205,
                  "end": 207,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 241,
            "name": "foo2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 241,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 234,
                  "name": "MappedModel",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 234,
                  "end": 241,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 235,
                      "end": 240,
                      "literal": {
                        "type": "Literal",
                        "start": 235,
                        "end": 240,
                        "value": "Foo",
                        "raw": "'Foo'"
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
            "type": "ObjectExpression",
            "start": 244,
            "end": 259,
            "properties": [
              {
                "type": "Property",
                "start": 246,
                "end": 257,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 250,
                  "name": "bFoo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 252,
                  "end": 257,
                  "value": "bar",
                  "raw": "'bar'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 615,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 283,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 304,
        "end": 615,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 310,
            "end": 340,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 316,
                "end": 339,
                "id": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 334,
                  "name": "x1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 318,
                    "end": 334,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 320,
                      "end": 334,
                      "typeName": {
                        "type": "Identifier",
                        "start": 320,
                        "end": 331,
                        "name": "MappedModel",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 331,
                        "end": 334,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 332,
                            "end": 333,
                            "typeName": {
                              "type": "Identifier",
                              "start": 332,
                              "end": 333,
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
                },
                "init": {
                  "type": "Literal",
                  "start": 337,
                  "end": 339,
                  "value": 42,
                  "raw": "42"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 355,
            "end": 389,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 361,
                "end": 388,
                "id": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 379,
                  "name": "x2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 379,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 365,
                      "end": 379,
                      "typeName": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 376,
                        "name": "MappedModel",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 376,
                        "end": 379,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 377,
                            "end": 378,
                            "typeName": {
                              "type": "Identifier",
                              "start": 377,
                              "end": 378,
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
                },
                "init": {
                  "type": "Literal",
                  "start": 382,
                  "end": 388,
                  "value": "test",
                  "raw": "'test'"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 404,
            "end": 441,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 410,
                "end": 440,
                "id": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 428,
                  "name": "x3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 412,
                    "end": 428,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 414,
                      "end": 428,
                      "typeName": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 425,
                        "name": "MappedModel",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 425,
                        "end": 428,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 426,
                            "end": 427,
                            "typeName": {
                              "type": "Identifier",
                              "start": 426,
                              "end": 427,
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
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 431,
                  "end": 440,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 432,
                      "end": 433,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 435,
                      "end": 436,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 438,
                      "end": 439,
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 456,
            "end": 489,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 462,
                "end": 488,
                "id": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 480,
                  "name": "x4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 464,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 466,
                      "end": 480,
                      "typeName": {
                        "type": "Identifier",
                        "start": 466,
                        "end": 477,
                        "name": "MappedModel",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 477,
                        "end": 480,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 478,
                            "end": 479,
                            "typeName": {
                              "type": "Identifier",
                              "start": 478,
                              "end": 479,
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
                },
                "init": {
                  "type": "Literal",
                  "start": 483,
                  "end": 488,
                  "value": false,
                  "raw": "false"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 504,
            "end": 551,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 510,
                "end": 550,
                "id": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 528,
                  "name": "x5",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 528,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 514,
                      "end": 528,
                      "typeName": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 525,
                        "name": "MappedModel",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 525,
                        "end": 528,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 526,
                            "end": 527,
                            "typeName": {
                              "type": "Identifier",
                              "start": 526,
                              "end": 527,
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
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 531,
                  "end": 550,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 533,
                      "end": 541,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 534,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 536,
                        "end": 541,
                        "value": "bar",
                        "raw": "'bar'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 543,
                      "end": 548,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 544,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 546,
                        "end": 548,
                        "value": 42,
                        "raw": "42"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 566,
            "end": 603,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 572,
                "end": 602,
                "id": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 590,
                  "name": "x6",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 590,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 576,
                      "end": 590,
                      "typeName": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 587,
                        "name": "MappedModel",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 587,
                        "end": 590,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 588,
                            "end": 589,
                            "typeName": {
                              "type": "Identifier",
                              "start": 588,
                              "end": 589,
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
                },
                "init": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 602,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 283,
        "end": 301,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 284,
            "end": 300,
            "name": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 294,
              "end": 300
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 639,
      "end": 706,
      "id": {
        "type": "Identifier",
        "start": 644,
        "end": 655,
        "name": "RemapRecord",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 655,
        "end": 679,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 656,
            "end": 675,
            "name": {
              "type": "Identifier",
              "start": 656,
              "end": 657,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 666,
              "end": 675,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 672,
                "end": 675
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 677,
            "end": 678,
            "name": {
              "type": "Identifier",
              "start": 677,
              "end": 678,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 682,
        "end": 706,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 685,
          "end": 695,
          "name": {
            "type": "Identifier",
            "start": 685,
            "end": 686,
            "name": "_",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSNeverKeyword",
            "start": 690,
            "end": 695
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 699,
          "end": 700,
          "typeName": {
            "type": "Identifier",
            "start": 699,
            "end": 700,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 703,
          "end": 704,
          "typeName": {
            "type": "Identifier",
            "start": 703,
            "end": 704,
            "name": "V",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSNeverKeyword",
          "start": 690,
          "end": 695
        },
        "key": {
          "type": "Identifier",
          "start": 685,
          "end": 686,
          "name": "_",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 707,
      "end": 786,
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 733,
        "name": "RecordInterface2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 766,
          "end": 783,
          "expression": {
            "type": "Identifier",
            "start": 766,
            "end": 777,
            "name": "RemapRecord",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 777,
            "end": 783,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 778,
                "end": 779,
                "typeName": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 779,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 781,
                "end": 782,
                "typeName": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 782,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 733,
        "end": 757,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 734,
            "end": 753,
            "name": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 744,
              "end": 753,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 750,
                "end": 753
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 755,
            "end": 756,
            "name": {
              "type": "Identifier",
              "start": 755,
              "end": 756,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 784,
        "end": 786,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
