discriminantElementAccessCheck.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 864,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "U",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 22,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 9,
            "end": 14,
            "typeName": {
              "type": "Identifier",
              "start": 9,
              "end": 14,
              "decorators": [],
              "name": "TypeA",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 17,
            "end": 22,
            "typeName": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "decorators": [],
              "name": "TypeB",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 25,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 74,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 57,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 56,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 53,
                "end": 56,
                "literal": {
                  "type": "Literal",
                  "start": 53,
                  "end": 56,
                  "raw": "'A'",
                  "value": "A"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 62,
            "end": 72,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "decorators": [],
        "name": "TypeA",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 75,
      "end": 124,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 124,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 107,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 101,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 106,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 103,
                "end": 106,
                "literal": {
                  "type": "Literal",
                  "start": 103,
                  "end": 106,
                  "raw": "'B'",
                  "value": "B"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 112,
            "end": 122,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 90,
        "decorators": [],
        "name": "TypeB",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 174,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 163,
            "end": 172,
            "argument": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 146,
        "decorators": [],
        "name": "assertNever",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 147,
          "end": 155,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 155,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 150,
              "end": 155
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 303,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 303,
        "body": [
          {
            "type": "IfStatement",
            "start": 212,
            "end": 301,
            "alternate": {
              "type": "BlockStatement",
              "start": 272,
              "end": 301,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 282,
                  "end": 295,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 289,
                    "end": 294,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 292,
                      "decorators": [],
                      "name": "val",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 294,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 237,
              "end": 266,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 247,
                  "end": 260,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 254,
                    "end": 259,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 257,
                      "decorators": [],
                      "name": "val",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 216,
              "end": 235,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 216,
                "end": 227,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 219,
                  "decorators": [],
                  "name": "val",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 220,
                  "end": 226,
                  "raw": "'kind'",
                  "value": "kind"
                }
              },
              "right": {
                "type": "Literal",
                "start": 232,
                "end": 235,
                "raw": "'B'",
                "value": "B"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 197,
        "decorators": [],
        "name": "IfWithString",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 198,
          "end": 204,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 204,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 204,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 305,
      "end": 517,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 517,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 345,
            "end": 515,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 376,
                "end": 411,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 398,
                    "end": 411,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 405,
                      "end": 410,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 408,
                        "decorators": [],
                        "name": "val",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 410,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 381,
                  "end": 384,
                  "raw": "'A'",
                  "value": "A"
                }
              },
              {
                "type": "SwitchCase",
                "start": 420,
                "end": 455,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 442,
                    "end": 455,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 449,
                      "end": 454,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 452,
                        "decorators": [],
                        "name": "val",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 454,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 425,
                  "end": 428,
                  "raw": "'B'",
                  "value": "B"
                }
              },
              {
                "type": "SwitchCase",
                "start": 464,
                "end": 509,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 485,
                    "end": 509,
                    "argument": {
                      "type": "CallExpression",
                      "start": 492,
                      "end": 508,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 504,
                          "end": 507,
                          "decorators": [],
                          "name": "val",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 503,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "start": 353,
              "end": 364,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 353,
                "end": 356,
                "decorators": [],
                "name": "val",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 357,
                "end": 363,
                "raw": "'kind'",
                "value": "kind"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 330,
        "decorators": [],
        "name": "SwitchWithString",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 331,
          "end": 337,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 334,
            "end": 337,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 336,
              "end": 337,
              "typeName": {
                "type": "Identifier",
                "start": 336,
                "end": 337,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 519,
      "end": 648,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 551,
        "end": 648,
        "body": [
          {
            "type": "IfStatement",
            "start": 557,
            "end": 646,
            "alternate": {
              "type": "BlockStatement",
              "start": 617,
              "end": 646,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 627,
                  "end": 640,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 634,
                    "end": 639,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 637,
                      "decorators": [],
                      "name": "val",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 639,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 582,
              "end": 611,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 592,
                  "end": 605,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 599,
                    "end": 604,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 599,
                      "end": 602,
                      "decorators": [],
                      "name": "val",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 604,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 561,
              "end": 580,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 561,
                "end": 572,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 564,
                  "decorators": [],
                  "name": "val",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "TemplateLiteral",
                  "start": 565,
                  "end": 571,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 565,
                      "end": 571,
                      "tail": true,
                      "value": {
                        "cooked": "kind",
                        "raw": "kind"
                      }
                    }
                  ]
                }
              },
              "right": {
                "type": "Literal",
                "start": 577,
                "end": 580,
                "raw": "'B'",
                "value": "B"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 528,
        "end": 542,
        "decorators": [],
        "name": "IfWithTemplate",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 543,
          "end": 549,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 546,
            "end": 549,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 548,
              "end": 549,
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 549,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 650,
      "end": 864,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 686,
        "end": 864,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 692,
            "end": 862,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 723,
                "end": 758,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 745,
                    "end": 758,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 752,
                      "end": 757,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 752,
                        "end": 755,
                        "decorators": [],
                        "name": "val",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 756,
                        "end": 757,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 728,
                  "end": 731,
                  "raw": "'A'",
                  "value": "A"
                }
              },
              {
                "type": "SwitchCase",
                "start": 767,
                "end": 802,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 789,
                    "end": 802,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 796,
                      "end": 801,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 796,
                        "end": 799,
                        "decorators": [],
                        "name": "val",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 800,
                        "end": 801,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 772,
                  "end": 775,
                  "raw": "'B'",
                  "value": "B"
                }
              },
              {
                "type": "SwitchCase",
                "start": 811,
                "end": 856,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 832,
                    "end": 856,
                    "argument": {
                      "type": "CallExpression",
                      "start": 839,
                      "end": 855,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 851,
                          "end": 854,
                          "decorators": [],
                          "name": "val",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 839,
                        "end": 850,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "start": 700,
              "end": 711,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 700,
                "end": 703,
                "decorators": [],
                "name": "val",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "TemplateLiteral",
                "start": 704,
                "end": 710,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 704,
                    "end": 710,
                    "tail": true,
                    "value": {
                      "cooked": "kind",
                      "raw": "kind"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 677,
        "decorators": [],
        "name": "SwitchWithTemplate",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 678,
          "end": 684,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 681,
            "end": 684,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 683,
              "end": 684,
              "typeName": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
