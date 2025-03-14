__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3927,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 95,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 95,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 29,
            "end": 39,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 44,
            "end": 93,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 45,
              "end": 63,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 51,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 52,
                "end": 63,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 79,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 79,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 72,
                    "end": 79
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 82,
                "end": 92,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 87,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 92,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 91,
                    "end": 92,
                    "typeName": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "AConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 128,
      "body": {
        "type": "TSInterfaceBody",
        "start": 108,
        "end": 128,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 126,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 156,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 144,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 156,
                  "decorators": [],
                  "name": "AConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 179,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 179,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 169,
                "end": 179,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 169,
                    "end": 170,
                    "typeName": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 173,
                    "end": 179
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
      "start": 181,
      "end": 253,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 204,
        "end": 253,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 228,
            "end": 237,
            "expression": {
              "type": "MemberExpression",
              "start": 228,
              "end": 236,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 228,
                "end": 232,
                "decorators": [],
                "name": "obj1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 233,
                "end": 236,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 242,
            "end": 251,
            "expression": {
              "type": "MemberExpression",
              "start": 242,
              "end": 250,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 242,
                "end": 246,
                "decorators": [],
                "name": "obj1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 247,
                "end": 250,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 185,
        "end": 202,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 185,
          "end": 189,
          "decorators": [],
          "name": "obj1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 268,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 268,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 265,
                "end": 268
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
      "start": 270,
      "end": 324,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 293,
        "end": 324,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 299,
            "end": 308,
            "expression": {
              "type": "MemberExpression",
              "start": 299,
              "end": 307,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 299,
                "end": 303,
                "decorators": [],
                "name": "obj2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 304,
                "end": 307,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 313,
            "end": 322,
            "expression": {
              "type": "MemberExpression",
              "start": 313,
              "end": 321,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 313,
                "end": 317,
                "decorators": [],
                "name": "obj2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 318,
                "end": 321,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 274,
        "end": 291,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 274,
          "end": 278,
          "decorators": [],
          "name": "obj2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 365,
      "end": 471,
      "body": {
        "type": "TSInterfaceBody",
        "start": 388,
        "end": 471,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 394,
            "end": 410,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 405,
                "end": 409,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 406,
                  "end": 409,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 407,
                      "end": 408,
                      "typeName": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 408,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 398,
              "end": 401,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 399,
                  "end": 400,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 400,
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
            "type": "TSMethodSignature",
            "start": 415,
            "end": 469,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 416,
              "end": 434,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 416,
                "end": 422,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 423,
                "end": 434,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 436,
                "end": 450,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 441,
                  "end": 450,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 443,
                    "end": 450
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 468,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 453,
                "end": 468,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 458,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 462,
                  "end": 468,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 462,
                    "end": 468,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 463,
                      "end": 468,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 464,
                          "end": 467
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 463,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 387,
        "decorators": [],
        "name": "BConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 472,
      "end": 502,
      "body": {
        "type": "TSInterfaceBody",
        "start": 487,
        "end": 502,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 493,
            "end": 500,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 493,
              "end": 496,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 499,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 498,
                "end": 499,
                "typeName": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 499,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "end": 483,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 483,
        "end": 486,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 484,
            "end": 485,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 484,
              "end": 485,
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
      "type": "VariableDeclaration",
      "start": 503,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 530,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 530,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 516,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 518,
                "end": 530,
                "typeName": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 530,
                  "decorators": [],
                  "name": "BConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 533,
      "end": 562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 537,
          "end": 561,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 537,
            "end": 561,
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 541,
              "end": 561,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 543,
                "end": 561,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 543,
                    "end": 552,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 544,
                      "end": 552,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 545,
                          "end": 551
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 543,
                      "end": 544,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 555,
                    "end": 561
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
      "start": 563,
      "end": 677,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 586,
        "end": 677,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 618,
            "end": 631,
            "expression": {
              "type": "AssignmentExpression",
              "start": 618,
              "end": 630,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 618,
                "end": 626,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 622,
                  "decorators": [],
                  "name": "obj3",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 626,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 629,
                "end": 630,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 636,
            "end": 653,
            "expression": {
              "type": "AssignmentExpression",
              "start": 636,
              "end": 652,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 636,
                "end": 644,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 640,
                  "decorators": [],
                  "name": "obj3",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 644,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 647,
                "end": 652,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 658,
            "end": 675,
            "expression": {
              "type": "AssignmentExpression",
              "start": 658,
              "end": 674,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 658,
                "end": 666,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 662,
                  "decorators": [],
                  "name": "obj3",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 663,
                  "end": 666,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 669,
                "end": 674,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 567,
        "end": 584,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 567,
          "end": 571,
          "decorators": [],
          "name": "obj3",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 583,
          "end": 584,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 679,
      "end": 693,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 683,
          "end": 692,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 683,
            "end": 692,
            "decorators": [],
            "name": "obj4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 687,
              "end": 692,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 689,
                "end": 692
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
      "start": 694,
      "end": 782,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 717,
        "end": 782,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 723,
            "end": 740,
            "expression": {
              "type": "AssignmentExpression",
              "start": 723,
              "end": 739,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 723,
                "end": 731,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 727,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 731,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 734,
                "end": 739,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 745,
            "end": 758,
            "expression": {
              "type": "AssignmentExpression",
              "start": 745,
              "end": 757,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 745,
                "end": 753,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 745,
                  "end": 749,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 750,
                  "end": 753,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 756,
                "end": 757,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 763,
            "end": 780,
            "expression": {
              "type": "AssignmentExpression",
              "start": 763,
              "end": 779,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 763,
                "end": 771,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 767,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 771,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 774,
                "end": 779,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 698,
        "end": 715,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 698,
          "end": 702,
          "decorators": [],
          "name": "obj4",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 714,
          "end": 715,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 820,
      "end": 964,
      "body": {
        "type": "TSInterfaceBody",
        "start": 843,
        "end": 964,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 849,
            "end": 873,
            "params": [
              {
                "type": "Identifier",
                "start": 854,
                "end": 867,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 859,
                  "end": 867,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 861,
                    "end": 867
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 868,
              "end": 872,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 870,
                "end": 872,
                "typeName": {
                  "type": "Identifier",
                  "start": 870,
                  "end": 872,
                  "decorators": [],
                  "name": "C1",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 878,
            "end": 902,
            "params": [
              {
                "type": "Identifier",
                "start": 883,
                "end": 896,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 888,
                  "end": 896,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 890,
                    "end": 896
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 897,
              "end": 901,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 899,
                "end": 901,
                "typeName": {
                  "type": "Identifier",
                  "start": 899,
                  "end": 901,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 907,
            "end": 962,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 908,
              "end": 926,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 908,
                "end": 914,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 915,
                "end": 926,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 928,
                "end": 942,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 933,
                  "end": 942,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 935,
                    "end": 942
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 943,
              "end": 961,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 945,
                "end": 961,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 950,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 954,
                  "end": 961,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 954,
                    "end": 961,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 954,
                        "end": 956,
                        "typeName": {
                          "type": "Identifier",
                          "start": 954,
                          "end": 956,
                          "decorators": [],
                          "name": "C1",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 959,
                        "end": 961,
                        "typeName": {
                          "type": "Identifier",
                          "start": 959,
                          "end": 961,
                          "decorators": [],
                          "name": "C2",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 830,
        "end": 842,
        "decorators": [],
        "name": "CConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 965,
      "end": 1031,
      "body": {
        "type": "TSInterfaceBody",
        "start": 978,
        "end": 1031,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 984,
            "end": 996,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 984,
              "end": 987,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 987,
              "end": 995,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 989,
                "end": 995
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1001,
            "end": 1011,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1001,
              "end": 1002,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1010,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1004,
                "end": 1010
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1016,
            "end": 1029,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1016,
              "end": 1020,
              "decorators": [],
              "name": "bar1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1020,
              "end": 1028,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1022,
                "end": 1028
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 975,
        "end": 977,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1032,
      "end": 1098,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1045,
        "end": 1098,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1051,
            "end": 1063,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1051,
              "end": 1054,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1054,
              "end": 1062,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1056,
                "end": 1062
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1068,
            "end": 1078,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1068,
              "end": 1069,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1069,
              "end": 1077,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1071,
                "end": 1077
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1083,
            "end": 1096,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1083,
              "end": 1087,
              "decorators": [],
              "name": "bar2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1087,
              "end": 1095,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1089,
                "end": 1095
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1042,
        "end": 1044,
        "decorators": [],
        "name": "C2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1099,
      "end": 1127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1111,
          "end": 1126,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1111,
            "end": 1126,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1112,
              "end": 1126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1114,
                "end": 1126,
                "typeName": {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1126,
                  "decorators": [],
                  "name": "CConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1129,
      "end": 1146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1133,
          "end": 1145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1133,
            "end": 1145,
            "decorators": [],
            "name": "obj5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1137,
              "end": 1145,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1139,
                "end": 1145,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1139,
                    "end": 1141,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1139,
                      "end": 1141,
                      "decorators": [],
                      "name": "C1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1144,
                    "end": 1145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1144,
                      "end": 1145,
                      "decorators": [],
                      "name": "A",
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
      "start": 1147,
      "end": 1248,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1170,
        "end": 1248,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1195,
            "end": 1204,
            "expression": {
              "type": "MemberExpression",
              "start": 1195,
              "end": 1203,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1195,
                "end": 1199,
                "decorators": [],
                "name": "obj5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1200,
                "end": 1203,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1209,
            "end": 1216,
            "expression": {
              "type": "MemberExpression",
              "start": 1209,
              "end": 1215,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1209,
                "end": 1213,
                "decorators": [],
                "name": "obj5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1214,
                "end": 1215,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1221,
            "end": 1231,
            "expression": {
              "type": "MemberExpression",
              "start": 1221,
              "end": 1230,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1221,
                "end": 1225,
                "decorators": [],
                "name": "obj5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1226,
                "end": 1230,
                "decorators": [],
                "name": "bar1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1236,
            "end": 1246,
            "expression": {
              "type": "MemberExpression",
              "start": 1236,
              "end": 1245,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1236,
                "end": 1240,
                "decorators": [],
                "name": "obj5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1241,
                "end": 1245,
                "decorators": [],
                "name": "bar2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1151,
        "end": 1168,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1151,
          "end": 1155,
          "decorators": [],
          "name": "obj5",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1167,
          "end": 1168,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1250,
      "end": 1264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1254,
          "end": 1263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1254,
            "end": 1263,
            "decorators": [],
            "name": "obj6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1258,
              "end": 1263,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1260,
                "end": 1263
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
      "start": 1265,
      "end": 1335,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1288,
        "end": 1335,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1294,
            "end": 1303,
            "expression": {
              "type": "MemberExpression",
              "start": 1294,
              "end": 1302,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1294,
                "end": 1298,
                "decorators": [],
                "name": "obj6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1299,
                "end": 1302,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1308,
            "end": 1318,
            "expression": {
              "type": "MemberExpression",
              "start": 1308,
              "end": 1317,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1308,
                "end": 1312,
                "decorators": [],
                "name": "obj6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1313,
                "end": 1317,
                "decorators": [],
                "name": "bar1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1323,
            "end": 1333,
            "expression": {
              "type": "MemberExpression",
              "start": 1323,
              "end": 1332,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1323,
                "end": 1327,
                "decorators": [],
                "name": "obj6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1328,
                "end": 1332,
                "decorators": [],
                "name": "bar2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1269,
        "end": 1286,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1269,
          "end": 1273,
          "decorators": [],
          "name": "obj6",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1285,
          "end": 1286,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1365,
      "end": 1397,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1377,
        "end": 1397,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1383,
            "end": 1395,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1383,
              "end": 1386,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1386,
              "end": 1394,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1388,
                "end": 1394
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1375,
        "end": 1376,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1398,
      "end": 1486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1410,
          "end": 1485,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1410,
            "end": 1485,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1411,
              "end": 1485,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1413,
                "end": 1485,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1419,
                    "end": 1429,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1425,
                      "end": 1428,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1427,
                        "end": 1428,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1427,
                          "end": 1428,
                          "decorators": [],
                          "name": "D",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1434,
                    "end": 1483,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 1435,
                      "end": 1453,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1435,
                        "end": 1441,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1442,
                        "end": 1453,
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1455,
                        "end": 1469,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1460,
                          "end": 1469,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1462,
                            "end": 1469
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1470,
                      "end": 1482,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 1472,
                        "end": 1482,
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 1472,
                          "end": 1477,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1481,
                          "end": 1482,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1481,
                            "end": 1482,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1481,
                              "end": 1482,
                              "decorators": [],
                              "name": "D",
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
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1488,
      "end": 1509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1492,
          "end": 1508,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1492,
            "end": 1508,
            "decorators": [],
            "name": "obj7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1496,
              "end": 1508,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1498,
                "end": 1508,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1498,
                    "end": 1499,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1498,
                      "end": 1499,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1502,
                    "end": 1508
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
      "start": 1510,
      "end": 1582,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1533,
        "end": 1582,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1557,
            "end": 1566,
            "expression": {
              "type": "MemberExpression",
              "start": 1557,
              "end": 1565,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1557,
                "end": 1561,
                "decorators": [],
                "name": "obj7",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1562,
                "end": 1565,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1571,
            "end": 1580,
            "expression": {
              "type": "MemberExpression",
              "start": 1571,
              "end": 1579,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1571,
                "end": 1575,
                "decorators": [],
                "name": "obj7",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1576,
                "end": 1579,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1514,
        "end": 1531,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1514,
          "end": 1518,
          "decorators": [],
          "name": "obj7",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1530,
          "end": 1531,
          "decorators": [],
          "name": "D",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1584,
      "end": 1598,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1588,
          "end": 1597,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1588,
            "end": 1597,
            "decorators": [],
            "name": "obj8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1592,
              "end": 1597,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1594,
                "end": 1597
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
      "start": 1599,
      "end": 1653,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1622,
        "end": 1653,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1628,
            "end": 1637,
            "expression": {
              "type": "MemberExpression",
              "start": 1628,
              "end": 1636,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1628,
                "end": 1632,
                "decorators": [],
                "name": "obj8",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1633,
                "end": 1636,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1642,
            "end": 1651,
            "expression": {
              "type": "MemberExpression",
              "start": 1642,
              "end": 1650,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1642,
                "end": 1646,
                "decorators": [],
                "name": "obj8",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1647,
                "end": 1650,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1603,
        "end": 1620,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1603,
          "end": 1607,
          "decorators": [],
          "name": "obj8",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1619,
          "end": 1620,
          "decorators": [],
          "name": "D",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1706,
      "end": 1813,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1729,
        "end": 1813,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1735,
            "end": 1751,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1741,
              "end": 1750,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1743,
                "end": 1750,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1743,
                    "end": 1745,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1743,
                      "end": 1745,
                      "decorators": [],
                      "name": "E1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1748,
                    "end": 1750,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1748,
                      "end": 1750,
                      "decorators": [],
                      "name": "E2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1756,
            "end": 1811,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 1757,
              "end": 1775,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1757,
                "end": 1763,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1764,
                "end": 1775,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1777,
                "end": 1791,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1782,
                  "end": 1791,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1784,
                    "end": 1791
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1792,
              "end": 1810,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 1794,
                "end": 1810,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 1794,
                  "end": 1799,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1803,
                  "end": 1810,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1803,
                    "end": 1810,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1803,
                        "end": 1805,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1803,
                          "end": 1805,
                          "decorators": [],
                          "name": "E1",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1808,
                        "end": 1810,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1808,
                          "end": 1810,
                          "decorators": [],
                          "name": "E2",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1716,
        "end": 1728,
        "decorators": [],
        "name": "EConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1814,
      "end": 1865,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1827,
        "end": 1865,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1833,
            "end": 1845,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1833,
              "end": 1836,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1836,
              "end": 1844,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1838,
                "end": 1844
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1850,
            "end": 1863,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1850,
              "end": 1854,
              "decorators": [],
              "name": "bar1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1854,
              "end": 1862,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1856,
                "end": 1862
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1824,
        "end": 1826,
        "decorators": [],
        "name": "E1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1866,
      "end": 1917,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1879,
        "end": 1917,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1885,
            "end": 1897,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1885,
              "end": 1888,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1888,
              "end": 1896,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1890,
                "end": 1896
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1902,
            "end": 1915,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1902,
              "end": 1906,
              "decorators": [],
              "name": "bar2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1906,
              "end": 1914,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1908,
                "end": 1914
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1876,
        "end": 1878,
        "decorators": [],
        "name": "E2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1918,
      "end": 1946,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1930,
          "end": 1945,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1930,
            "end": 1945,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1931,
              "end": 1945,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1933,
                "end": 1945,
                "typeName": {
                  "type": "Identifier",
                  "start": 1933,
                  "end": 1945,
                  "decorators": [],
                  "name": "EConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1948,
      "end": 1965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1952,
          "end": 1964,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1952,
            "end": 1964,
            "decorators": [],
            "name": "obj9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1956,
              "end": 1964,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1958,
                "end": 1964,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1958,
                    "end": 1960,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1958,
                      "end": 1960,
                      "decorators": [],
                      "name": "E1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1963,
                    "end": 1964,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1963,
                      "end": 1964,
                      "decorators": [],
                      "name": "A",
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
      "start": 1966,
      "end": 2054,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1989,
        "end": 2054,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2013,
            "end": 2022,
            "expression": {
              "type": "MemberExpression",
              "start": 2013,
              "end": 2021,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2013,
                "end": 2017,
                "decorators": [],
                "name": "obj9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2018,
                "end": 2021,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2027,
            "end": 2037,
            "expression": {
              "type": "MemberExpression",
              "start": 2027,
              "end": 2036,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2027,
                "end": 2031,
                "decorators": [],
                "name": "obj9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2032,
                "end": 2036,
                "decorators": [],
                "name": "bar1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2042,
            "end": 2052,
            "expression": {
              "type": "MemberExpression",
              "start": 2042,
              "end": 2051,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2042,
                "end": 2046,
                "decorators": [],
                "name": "obj9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2047,
                "end": 2051,
                "decorators": [],
                "name": "bar2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1970,
        "end": 1987,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1970,
          "end": 1974,
          "decorators": [],
          "name": "obj9",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1986,
          "end": 1987,
          "decorators": [],
          "name": "E",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2056,
      "end": 2071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2060,
          "end": 2070,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2060,
            "end": 2070,
            "decorators": [],
            "name": "obj10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2065,
              "end": 2070,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2067,
                "end": 2070
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
      "start": 2072,
      "end": 2146,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2096,
        "end": 2146,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2102,
            "end": 2112,
            "expression": {
              "type": "MemberExpression",
              "start": 2102,
              "end": 2111,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2102,
                "end": 2107,
                "decorators": [],
                "name": "obj10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2108,
                "end": 2111,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2117,
            "end": 2128,
            "expression": {
              "type": "MemberExpression",
              "start": 2117,
              "end": 2127,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2117,
                "end": 2122,
                "decorators": [],
                "name": "obj10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2123,
                "end": 2127,
                "decorators": [],
                "name": "bar1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2133,
            "end": 2144,
            "expression": {
              "type": "MemberExpression",
              "start": 2133,
              "end": 2143,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2133,
                "end": 2138,
                "decorators": [],
                "name": "obj10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2139,
                "end": 2143,
                "decorators": [],
                "name": "bar2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2076,
        "end": 2094,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 2076,
          "end": 2081,
          "decorators": [],
          "name": "obj10",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2093,
          "end": 2094,
          "decorators": [],
          "name": "E",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2190,
      "end": 2289,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2213,
        "end": 2289,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2219,
            "end": 2231,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2225,
              "end": 2230,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2227,
                "end": 2230
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 2236,
            "end": 2287,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 2237,
              "end": 2255,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2237,
                "end": 2243,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2244,
                "end": 2255,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2257,
                "end": 2271,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2262,
                  "end": 2271,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 2264,
                    "end": 2271
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2272,
              "end": 2286,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 2274,
                "end": 2286,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 2274,
                  "end": 2279,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2283,
                  "end": 2286,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2283,
                    "end": 2286
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2200,
        "end": 2212,
        "decorators": [],
        "name": "FConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2290,
      "end": 2339,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2302,
        "end": 2339,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2308,
            "end": 2320,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2308,
              "end": 2311,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2311,
              "end": 2319,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2313,
                "end": 2319
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2325,
            "end": 2337,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2325,
              "end": 2328,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2328,
              "end": 2336,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2330,
                "end": 2336
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2300,
        "end": 2301,
        "decorators": [],
        "name": "F",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2340,
      "end": 2368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2352,
          "end": 2367,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2352,
            "end": 2367,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2353,
              "end": 2367,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2355,
                "end": 2367,
                "typeName": {
                  "type": "Identifier",
                  "start": 2355,
                  "end": 2367,
                  "decorators": [],
                  "name": "FConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2370,
      "end": 2392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2374,
          "end": 2391,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2374,
            "end": 2391,
            "decorators": [],
            "name": "obj11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2379,
              "end": 2391,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2381,
                "end": 2391,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2381,
                    "end": 2382,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2381,
                      "end": 2382,
                      "decorators": [],
                      "name": "F",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2385,
                    "end": 2391
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
      "start": 2393,
      "end": 2508,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2417,
        "end": 2508,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2481,
            "end": 2491,
            "expression": {
              "type": "MemberExpression",
              "start": 2481,
              "end": 2490,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2481,
                "end": 2486,
                "decorators": [],
                "name": "obj11",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2487,
                "end": 2490,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2496,
            "end": 2506,
            "expression": {
              "type": "MemberExpression",
              "start": 2496,
              "end": 2505,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2496,
                "end": 2501,
                "decorators": [],
                "name": "obj11",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2502,
                "end": 2505,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2397,
        "end": 2415,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 2397,
          "end": 2402,
          "decorators": [],
          "name": "obj11",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2414,
          "end": 2415,
          "decorators": [],
          "name": "F",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2510,
      "end": 2525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2514,
          "end": 2524,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2514,
            "end": 2524,
            "decorators": [],
            "name": "obj12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2519,
              "end": 2524,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2521,
                "end": 2524
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
      "start": 2526,
      "end": 2583,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2550,
        "end": 2583,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2556,
            "end": 2566,
            "expression": {
              "type": "MemberExpression",
              "start": 2556,
              "end": 2565,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2556,
                "end": 2561,
                "decorators": [],
                "name": "obj12",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2562,
                "end": 2565,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2571,
            "end": 2581,
            "expression": {
              "type": "MemberExpression",
              "start": 2571,
              "end": 2580,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2571,
                "end": 2576,
                "decorators": [],
                "name": "obj12",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2577,
                "end": 2580,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2530,
        "end": 2548,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 2530,
          "end": 2535,
          "decorators": [],
          "name": "obj12",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2547,
          "end": 2548,
          "decorators": [],
          "name": "F",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2650,
      "end": 2824,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2673,
        "end": 2824,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2679,
            "end": 2693,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2679,
              "end": 2688,
              "decorators": [],
              "name": "prototype",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2688,
              "end": 2692,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2690,
                "end": 2692,
                "typeName": {
                  "type": "Identifier",
                  "start": 2690,
                  "end": 2692,
                  "decorators": [],
                  "name": "G1",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2715,
            "end": 2726,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2721,
              "end": 2725,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2723,
                "end": 2725,
                "typeName": {
                  "type": "Identifier",
                  "start": 2723,
                  "end": 2725,
                  "decorators": [],
                  "name": "G2",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 2750,
            "end": 2800,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 2751,
              "end": 2769,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2751,
                "end": 2757,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2758,
                "end": 2769,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2771,
                "end": 2785,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2776,
                  "end": 2785,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 2778,
                    "end": 2785
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2786,
              "end": 2799,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 2788,
                "end": 2799,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 2788,
                  "end": 2793,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2797,
                  "end": 2799,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2797,
                    "end": 2799,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2797,
                      "end": 2799,
                      "decorators": [],
                      "name": "G1",
                      "optional": false
                    }
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2660,
        "end": 2672,
        "decorators": [],
        "name": "GConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2825,
      "end": 2859,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2838,
        "end": 2859,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2844,
            "end": 2857,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2844,
              "end": 2848,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2848,
              "end": 2856,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2850,
                "end": 2856
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2835,
        "end": 2837,
        "decorators": [],
        "name": "G1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2860,
      "end": 2895,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2873,
        "end": 2895,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2879,
            "end": 2893,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2879,
              "end": 2883,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2883,
              "end": 2892,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2885,
                "end": 2892
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2870,
        "end": 2872,
        "decorators": [],
        "name": "G2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2896,
      "end": 2924,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2908,
          "end": 2923,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2908,
            "end": 2923,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2909,
              "end": 2923,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2911,
                "end": 2923,
                "typeName": {
                  "type": "Identifier",
                  "start": 2911,
                  "end": 2923,
                  "decorators": [],
                  "name": "GConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2926,
      "end": 2945,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2930,
          "end": 2944,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2930,
            "end": 2944,
            "decorators": [],
            "name": "obj13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2935,
              "end": 2944,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2937,
                "end": 2944,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2937,
                    "end": 2939,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2937,
                      "end": 2939,
                      "decorators": [],
                      "name": "G1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2942,
                    "end": 2944,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2942,
                      "end": 2944,
                      "decorators": [],
                      "name": "G2",
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
      "start": 2946,
      "end": 3065,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2970,
        "end": 3065,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3036,
            "end": 3047,
            "expression": {
              "type": "MemberExpression",
              "start": 3036,
              "end": 3046,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3036,
                "end": 3041,
                "decorators": [],
                "name": "obj13",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3042,
                "end": 3046,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3052,
            "end": 3063,
            "expression": {
              "type": "MemberExpression",
              "start": 3052,
              "end": 3062,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3052,
                "end": 3057,
                "decorators": [],
                "name": "obj13",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3058,
                "end": 3062,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2950,
        "end": 2968,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 2950,
          "end": 2955,
          "decorators": [],
          "name": "obj13",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2967,
          "end": 2968,
          "decorators": [],
          "name": "G",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3067,
      "end": 3082,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3071,
          "end": 3081,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3071,
            "end": 3081,
            "decorators": [],
            "name": "obj14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3076,
              "end": 3081,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3078,
                "end": 3081
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
      "start": 3083,
      "end": 3142,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3107,
        "end": 3142,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3113,
            "end": 3124,
            "expression": {
              "type": "MemberExpression",
              "start": 3113,
              "end": 3123,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3113,
                "end": 3118,
                "decorators": [],
                "name": "obj14",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3119,
                "end": 3123,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3129,
            "end": 3140,
            "expression": {
              "type": "MemberExpression",
              "start": 3129,
              "end": 3139,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3129,
                "end": 3134,
                "decorators": [],
                "name": "obj14",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3135,
                "end": 3139,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3087,
        "end": 3105,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 3087,
          "end": 3092,
          "decorators": [],
          "name": "obj14",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3104,
          "end": 3105,
          "decorators": [],
          "name": "G",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3189,
      "end": 3431,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3212,
        "end": 3431,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3218,
            "end": 3233,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3218,
              "end": 3227,
              "decorators": [],
              "name": "prototype",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3227,
              "end": 3232,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3229,
                "end": 3232
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 3322,
            "end": 3332,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3328,
              "end": 3331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3330,
                "end": 3331,
                "typeName": {
                  "type": "Identifier",
                  "start": 3330,
                  "end": 3331,
                  "decorators": [],
                  "name": "H",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 3358,
            "end": 3407,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 3359,
              "end": 3377,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3359,
                "end": 3365,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3366,
                "end": 3377,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 3379,
                "end": 3393,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3384,
                  "end": 3393,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 3386,
                    "end": 3393
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3394,
              "end": 3406,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 3396,
                "end": 3406,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 3396,
                  "end": 3401,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3405,
                  "end": 3406,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3405,
                    "end": 3406,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3405,
                      "end": 3406,
                      "decorators": [],
                      "name": "H",
                      "optional": false
                    }
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 3199,
        "end": 3211,
        "decorators": [],
        "name": "HConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3432,
      "end": 3464,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3444,
        "end": 3464,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3450,
            "end": 3462,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3450,
              "end": 3453,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3453,
              "end": 3461,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3455,
                "end": 3461
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 3442,
        "end": 3443,
        "decorators": [],
        "name": "H",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3465,
      "end": 3493,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3477,
          "end": 3492,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3477,
            "end": 3492,
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3478,
              "end": 3492,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3480,
                "end": 3492,
                "typeName": {
                  "type": "Identifier",
                  "start": 3480,
                  "end": 3492,
                  "decorators": [],
                  "name": "HConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3495,
      "end": 3517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3499,
          "end": 3516,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3499,
            "end": 3516,
            "decorators": [],
            "name": "obj15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3504,
              "end": 3516,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3506,
                "end": 3516,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 3506,
                    "end": 3507,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3506,
                      "end": 3507,
                      "decorators": [],
                      "name": "H",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3510,
                    "end": 3516
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
      "start": 3518,
      "end": 3593,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3542,
        "end": 3593,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3566,
            "end": 3576,
            "expression": {
              "type": "MemberExpression",
              "start": 3566,
              "end": 3575,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3566,
                "end": 3571,
                "decorators": [],
                "name": "obj15",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3572,
                "end": 3575,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3581,
            "end": 3591,
            "expression": {
              "type": "MemberExpression",
              "start": 3581,
              "end": 3590,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3581,
                "end": 3586,
                "decorators": [],
                "name": "obj15",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3587,
                "end": 3590,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3522,
        "end": 3540,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 3522,
          "end": 3527,
          "decorators": [],
          "name": "obj15",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3539,
          "end": 3540,
          "decorators": [],
          "name": "H",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3595,
      "end": 3610,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3599,
          "end": 3609,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3599,
            "end": 3609,
            "decorators": [],
            "name": "obj16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3604,
              "end": 3609,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3606,
                "end": 3609
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
      "start": 3611,
      "end": 3670,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3635,
        "end": 3670,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3641,
            "end": 3652,
            "expression": {
              "type": "MemberExpression",
              "start": 3641,
              "end": 3651,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3641,
                "end": 3646,
                "decorators": [],
                "name": "obj16",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3647,
                "end": 3651,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3657,
            "end": 3668,
            "expression": {
              "type": "MemberExpression",
              "start": 3657,
              "end": 3667,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3657,
                "end": 3662,
                "decorators": [],
                "name": "obj16",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3663,
                "end": 3667,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3615,
        "end": 3633,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 3615,
          "end": 3620,
          "decorators": [],
          "name": "obj16",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3632,
          "end": 3633,
          "decorators": [],
          "name": "H",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3672,
      "end": 3687,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3676,
          "end": 3686,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3676,
            "end": 3686,
            "decorators": [],
            "name": "obj17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3681,
              "end": 3686,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3683,
                "end": 3686
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
      "start": 3688,
      "end": 3796,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3717,
        "end": 3796,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3767,
            "end": 3778,
            "expression": {
              "type": "MemberExpression",
              "start": 3767,
              "end": 3777,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3767,
                "end": 3772,
                "decorators": [],
                "name": "obj17",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3773,
                "end": 3777,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3783,
            "end": 3794,
            "expression": {
              "type": "MemberExpression",
              "start": 3783,
              "end": 3793,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3783,
                "end": 3788,
                "decorators": [],
                "name": "obj17",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3789,
                "end": 3793,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3692,
        "end": 3715,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 3692,
          "end": 3697,
          "decorators": [],
          "name": "obj17",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3709,
          "end": 3715,
          "decorators": [],
          "name": "Object",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3798,
      "end": 3813,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3802,
          "end": 3812,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3802,
            "end": 3812,
            "decorators": [],
            "name": "obj18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3807,
              "end": 3812,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3809,
                "end": 3812
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
      "start": 3814,
      "end": 3926,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3845,
        "end": 3926,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3897,
            "end": 3908,
            "expression": {
              "type": "MemberExpression",
              "start": 3897,
              "end": 3907,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3897,
                "end": 3902,
                "decorators": [],
                "name": "obj18",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3903,
                "end": 3907,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3913,
            "end": 3924,
            "expression": {
              "type": "MemberExpression",
              "start": 3913,
              "end": 3923,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3913,
                "end": 3918,
                "decorators": [],
                "name": "obj18",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3919,
                "end": 3923,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3818,
        "end": 3843,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 3818,
          "end": 3823,
          "decorators": [],
          "name": "obj18",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3835,
          "end": 3843,
          "decorators": [],
          "name": "Function",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
