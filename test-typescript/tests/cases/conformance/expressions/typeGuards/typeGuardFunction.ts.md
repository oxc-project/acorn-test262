typeGuardFunction.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1434,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "decorators": [],
              "name": "propA",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 62,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 60,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "decorators": [],
              "name": "propB",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 53,
                "end": 59
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 104,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 102,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "propC",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 95,
                "end": 101
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 106,
      "end": 145,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "isA",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 134,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 134,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 131,
              "end": 134
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 135,
        "end": 144,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 137,
          "end": 144,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 143,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 146,
      "end": 185,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 166,
        "decorators": [],
        "name": "isB",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 167,
          "end": 174,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 174,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 171,
              "end": 174
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 184,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 177,
          "end": 184,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 177,
            "end": 179,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 184,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 183,
              "end": 184,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 186,
      "end": 225,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 206,
        "decorators": [],
        "name": "isC",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 207,
          "end": 214,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 209,
            "end": 214,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 211,
              "end": 214
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 224,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 217,
          "end": 224,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 217,
            "end": 219,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 223,
            "end": 224,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 223,
              "end": 224,
              "typeName": {
                "type": "Identifier",
                "start": 223,
                "end": 224,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 227,
      "end": 254,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
        "decorators": [],
        "name": "retC",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 250,
        "end": 253,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 252,
          "end": 253,
          "typeName": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 264,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 264,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 274,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 274,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 274,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 286,
      "end": 314,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 298,
        "end": 314,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 304,
            "end": 312,
            "expression": {
              "type": "MemberExpression",
              "start": 304,
              "end": 311,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 306,
                "end": 311,
                "decorators": [],
                "name": "propC",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 290,
        "end": 296,
        "arguments": [
          {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "decorators": [],
          "name": "isC",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 342,
            "decorators": [],
            "name": "subType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 344,
      "end": 383,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 361,
        "end": 383,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 367,
            "end": 381,
            "expression": {
              "type": "MemberExpression",
              "start": 367,
              "end": 380,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 367,
                "end": 374,
                "decorators": [],
                "name": "subType",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 375,
                "end": 380,
                "decorators": [],
                "name": "propC",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 347,
        "end": 359,
        "arguments": [
          {
            "type": "Identifier",
            "start": 351,
            "end": 358,
            "decorators": [],
            "name": "subType",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 347,
          "end": 350,
          "decorators": [],
          "name": "isA",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 415,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 415,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 415,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 410,
                "end": 415,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 410,
                    "end": 411,
                    "typeName": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 415,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 417,
      "end": 452,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 432,
        "end": 452,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 438,
            "end": 450,
            "expression": {
              "type": "MemberExpression",
              "start": 438,
              "end": 449,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 438,
                "end": 443,
                "decorators": [],
                "name": "union",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 449,
                "decorators": [],
                "name": "propA",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 420,
        "end": 430,
        "arguments": [
          {
            "type": "Identifier",
            "start": 424,
            "end": 429,
            "decorators": [],
            "name": "union",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 420,
          "end": 423,
          "decorators": [],
          "name": "isA",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 472,
      "end": 510,
      "body": {
        "type": "TSInterfaceBody",
        "start": 485,
        "end": 510,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 491,
            "end": 508,
            "params": [
              {
                "type": "Identifier",
                "start": 492,
                "end": 497,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 494,
                  "end": 497,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 496,
                    "end": 497,
                    "typeName": {
                      "type": "Identifier",
                      "start": 496,
                      "end": 497,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 507,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 500,
                "end": 507,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 502,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 506,
                  "end": 507,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 506,
                    "end": 507,
                    "typeName": {
                      "type": "Identifier",
                      "start": 506,
                      "end": 507,
                      "decorators": [],
                      "name": "C",
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
        "start": 482,
        "end": 484,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 657,
      "end": 710,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 692,
        "decorators": [],
        "name": "isC_multipleParams",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 693,
          "end": 695,
          "decorators": [],
          "name": "p1",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 697,
          "end": 699,
          "decorators": [],
          "name": "p2",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 700,
        "end": 709,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 702,
          "end": 709,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 702,
            "end": 704,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 708,
            "end": 709,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 708,
              "end": 709,
              "typeName": {
                "type": "Identifier",
                "start": 708,
                "end": 709,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 711,
      "end": 757,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 741,
        "end": 757,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 747,
            "end": 755,
            "expression": {
              "type": "MemberExpression",
              "start": 747,
              "end": 754,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 747,
                "end": 748,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 749,
                "end": 754,
                "decorators": [],
                "name": "propC",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 715,
        "end": 739,
        "arguments": [
          {
            "type": "Identifier",
            "start": 734,
            "end": 735,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          {
            "type": "Literal",
            "start": 737,
            "end": 738,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 715,
          "end": 733,
          "decorators": [],
          "name": "isC_multipleParams",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 770,
      "end": 809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 809,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 809,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 777,
              "end": 809,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 779,
                "end": 809,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 785,
                    "end": 807,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 785,
                      "end": 790,
                      "decorators": [],
                      "name": "func1",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 791,
                        "end": 796,
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 793,
                          "end": 796,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 795,
                            "end": 796,
                            "typeName": {
                              "type": "Identifier",
                              "start": 795,
                              "end": 796,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 797,
                      "end": 806,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 799,
                        "end": 806,
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 799,
                          "end": 801,
                          "decorators": [],
                          "name": "p1",
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 805,
                          "end": 806,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 805,
                            "end": 806,
                            "typeName": {
                              "type": "Identifier",
                              "start": 805,
                              "end": 806,
                              "decorators": [],
                              "name": "C",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 810,
      "end": 878,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 818,
        "end": 878,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 824,
            "end": 876,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 824,
              "end": 831,
              "decorators": [],
              "name": "method1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 831,
              "end": 876,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 848,
                "end": 876,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 858,
                    "end": 870,
                    "argument": {
                      "type": "Literal",
                      "start": 865,
                      "end": 869,
                      "raw": "true",
                      "value": true
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
                  "start": 832,
                  "end": 837,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 834,
                    "end": 837,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 836,
                      "end": 837,
                      "typeName": {
                        "type": "Identifier",
                        "start": 836,
                        "end": 837,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 838,
                "end": 847,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 840,
                  "end": 847,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 840,
                    "end": 842,
                    "decorators": [],
                    "name": "p1",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 846,
                    "end": 847,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 846,
                      "end": 847,
                      "typeName": {
                        "type": "Identifier",
                        "start": 846,
                        "end": 847,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 816,
        "end": 817,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 898,
      "end": 933,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 902,
          "end": 932,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 902,
            "end": 904,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 907,
            "end": 932,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 927,
              "end": 932,
              "raw": "false",
              "value": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 908,
                "end": 913,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 910,
                  "end": 913,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 912,
                    "end": 913,
                    "typeName": {
                      "type": "Identifier",
                      "start": 912,
                      "end": 913,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 914,
              "end": 923,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 916,
                "end": 923,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 916,
                  "end": 918,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 922,
                  "end": 923,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 922,
                    "end": 923,
                    "typeName": {
                      "type": "Identifier",
                      "start": 922,
                      "end": 923,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 952,
      "end": 996,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 969,
        "end": 971,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 972,
          "end": 994,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 974,
            "end": 994,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 976,
              "end": 994,
              "params": [
                {
                  "type": "Identifier",
                  "start": 977,
                  "end": 982,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 979,
                    "end": 982,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 981,
                      "end": 982,
                      "typeName": {
                        "type": "Identifier",
                        "start": 981,
                        "end": 982,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 984,
                "end": 994,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 987,
                  "end": 994,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 987,
                    "end": 989,
                    "decorators": [],
                    "name": "p1",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 993,
                    "end": 994,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 993,
                      "end": 994,
                      "typeName": {
                        "type": "Identifier",
                        "start": 993,
                        "end": 994,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 1022,
      "end": 1072,
      "expression": {
        "type": "CallExpression",
        "start": 1022,
        "end": 1071,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 1025,
            "end": 1070,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1050,
              "end": 1070,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1056,
                  "end": 1068,
                  "argument": {
                    "type": "Literal",
                    "start": 1063,
                    "end": 1067,
                    "raw": "true",
                    "value": true
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
                "start": 1034,
                "end": 1039,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1036,
                  "end": 1039,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1038,
                    "end": 1039,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1038,
                      "end": 1039,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1040,
              "end": 1049,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 1042,
                "end": 1049,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 1042,
                  "end": 1044,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1048,
                  "end": 1049,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1048,
                    "end": 1049,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1048,
                      "end": 1049,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1022,
          "end": 1024,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1117,
      "end": 1163,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1134,
        "end": 1150,
        "decorators": [],
        "name": "acceptingBoolean",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1151,
          "end": 1161,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1152,
            "end": 1161,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1154,
              "end": 1161
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 1164,
      "end": 1189,
      "expression": {
        "type": "CallExpression",
        "start": 1164,
        "end": 1188,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1181,
            "end": 1187,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1185,
                "end": 1186,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1181,
              "end": 1184,
              "decorators": [],
              "name": "isA",
              "optional": false
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1164,
          "end": 1180,
          "decorators": [],
          "name": "acceptingBoolean",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1241,
      "end": 1310,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1258,
        "end": 1284,
        "decorators": [],
        "name": "acceptingTypeGuardFunction",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1285,
          "end": 1308,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1287,
            "end": 1308,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1289,
              "end": 1308,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1290,
                  "end": 1294,
                  "decorators": [],
                  "name": "item",
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1296,
                "end": 1308,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1299,
                  "end": 1308,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1299,
                    "end": 1303,
                    "decorators": [],
                    "name": "item",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1307,
                    "end": 1308,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1307,
                      "end": 1308,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1307,
                        "end": 1308,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 1311,
      "end": 1343,
      "expression": {
        "type": "CallExpression",
        "start": 1311,
        "end": 1342,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1338,
            "end": 1341,
            "decorators": [],
            "name": "isA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1311,
          "end": 1337,
          "decorators": [],
          "name": "acceptingTypeGuardFunction",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1367,
      "end": 1385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1371,
          "end": 1384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1371,
            "end": 1384,
            "decorators": [],
            "name": "union2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1377,
              "end": 1384,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1379,
                "end": 1384,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1379,
                    "end": 1380,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1379,
                      "end": 1380,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1383,
                    "end": 1384,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1383,
                      "end": 1384,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1386,
      "end": 1434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1390,
          "end": 1433,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1390,
            "end": 1409,
            "decorators": [],
            "name": "union3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1396,
              "end": 1409,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1398,
                "end": 1409,
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1398,
                    "end": 1405
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1408,
                    "end": 1409,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1408,
                      "end": 1409,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1412,
            "end": 1433,
            "operator": "||",
            "left": {
              "type": "CallExpression",
              "start": 1412,
              "end": 1423,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1416,
                  "end": 1422,
                  "decorators": [],
                  "name": "union2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1412,
                "end": 1415,
                "decorators": [],
                "name": "isA",
                "optional": false
              },
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1427,
              "end": 1433,
              "decorators": [],
              "name": "union2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
