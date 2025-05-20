__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 72,
  "end": 783,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 104,
      "body": {
        "type": "TSInterfaceBody",
        "start": 84,
        "end": 104,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 90,
            "end": 102,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 93,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 95,
                "end": 101
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 106,
      "end": 138,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 138,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 124,
            "end": 136,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 135,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 129,
                "end": 135
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 148,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 150,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 156,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 159,
            "end": 164,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 161,
              "end": 164,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 171,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 174,
            "end": 179,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 204,
      "end": 251,
      "body": {
        "type": "TSInterfaceBody",
        "start": 219,
        "end": 251,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 225,
            "end": 237,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 230,
                "end": 236
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 242,
            "end": 249,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 245,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 248,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 247,
                "end": 248,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "T",
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
        "start": 214,
        "end": 215,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 215,
        "end": 218,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 217,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
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
      "type": "TSInterfaceDeclaration",
      "start": 253,
      "end": 283,
      "body": {
        "type": "TSInterfaceBody",
        "start": 268,
        "end": 283,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 274,
            "end": 281,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 277,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 280,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 280,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "decorators": [],
                  "name": "T",
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
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 264,
        "end": 267,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 265,
            "end": 266,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
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
      "start": 285,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 301,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 301,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 292,
                "end": 301,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 293,
                  "end": 301,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 294,
                      "end": 300
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 303,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 309,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 312,
            "end": 317,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 314,
              "end": 317,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 324,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 327,
            "end": 332,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 329,
              "end": 332,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 389,
      "end": 783,
      "body": {
        "type": "TSModuleBlock",
        "start": 398,
        "end": 783,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 404,
            "end": 444,
            "body": {
              "type": "TSInterfaceBody",
              "start": 416,
              "end": 444,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 426,
                  "end": 438,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 429,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 429,
                    "end": 437,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 431,
                      "end": 437
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 450,
            "end": 490,
            "body": {
              "type": "TSInterfaceBody",
              "start": 462,
              "end": 490,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 472,
                  "end": 484,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 475,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 477,
                      "end": 483
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 496,
            "end": 505,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 504,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 501,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 503,
                      "end": 504,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 504,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 510,
            "end": 525,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 514,
                "end": 524,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 516,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 519,
                  "end": 524,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 520,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 521,
                    "end": 524,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 548,
            "end": 563,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 552,
                "end": 562,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 554,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 557,
                  "end": 562,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 562,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 594,
            "end": 632,
            "body": {
              "type": "TSInterfaceBody",
              "start": 609,
              "end": 632,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 619,
                  "end": 626,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 619,
                    "end": 622,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 625,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 624,
                      "end": 625,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 625,
                        "decorators": [],
                        "name": "T",
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
              "start": 604,
              "end": 605,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 605,
              "end": 608,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 606,
                  "end": 607,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 606,
                    "end": 607,
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
            "type": "TSInterfaceDeclaration",
            "start": 638,
            "end": 676,
            "body": {
              "type": "TSInterfaceBody",
              "start": 653,
              "end": 676,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 663,
                  "end": 670,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 666,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 666,
                    "end": 669,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 668,
                      "end": 669,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 668,
                        "end": 669,
                        "decorators": [],
                        "name": "T",
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
              "start": 648,
              "end": 649,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 649,
              "end": 652,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 650,
                  "end": 651,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
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
            "start": 682,
            "end": 699,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 686,
                "end": 698,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 698,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 687,
                    "end": 698,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 689,
                      "end": 698,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 690,
                        "end": 698,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 691,
                            "end": 697
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 689,
                        "end": 690,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 704,
            "end": 718,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 708,
                "end": 718,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 708,
                  "end": 710,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 713,
                  "end": 718,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 715,
                    "end": 718,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 741,
            "end": 756,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 745,
                "end": 755,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 745,
                  "end": 747,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 750,
                  "end": 755,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 750,
                    "end": 751,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 755,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 397,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
