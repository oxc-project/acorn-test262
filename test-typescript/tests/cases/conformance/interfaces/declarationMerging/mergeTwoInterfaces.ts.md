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
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 84,
        "end": 104,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 90,
            "end": 102,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 93,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 95,
                "end": 101
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
      "type": "TSInterfaceDeclaration",
      "start": 106,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 138,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 124,
            "end": 136,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 135,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 129,
                "end": 135
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
      "start": 140,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 148,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 156,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 159,
            "end": 164,
            "object": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 161,
              "end": 164,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 171,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 174,
            "end": 179,
            "object": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 204,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 215,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 215,
        "end": 218,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 217,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 219,
        "end": 251,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 225,
            "end": 237,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 230,
                "end": 236
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 242,
            "end": 249,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 245,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 248,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 247,
                "end": 248,
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "name": "T",
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
      "type": "TSInterfaceDeclaration",
      "start": 253,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 264,
        "end": 267,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 265,
            "end": 266,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 268,
        "end": 283,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 274,
            "end": 281,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 277,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 280,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 280,
                "typeName": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "name": "T",
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
      "type": "VariableDeclaration",
      "start": 285,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 301,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 301,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 292,
                "end": 301,
                "typeName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 309,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 312,
            "end": 317,
            "object": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 314,
              "end": 317,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 324,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 327,
            "end": 332,
            "object": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 329,
              "end": 332,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 389,
      "end": 783,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 397,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 398,
        "end": 783,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 404,
            "end": 444,
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 416,
              "end": 444,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 426,
                  "end": 438,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 429,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 429,
                    "end": 437,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 431,
                      "end": 437
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
            "type": "TSInterfaceDeclaration",
            "start": 450,
            "end": 490,
            "id": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 462,
              "end": 490,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 472,
                  "end": 484,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 475,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 477,
                      "end": 483
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
            "start": 496,
            "end": 505,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 504,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 501,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 503,
                      "end": 504,
                      "typeName": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 504,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 516,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 519,
                  "end": 524,
                  "object": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 520,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 521,
                    "end": 524,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 554,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 557,
                  "end": 562,
                  "object": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 562,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 594,
            "end": 632,
            "id": {
              "type": "Identifier",
              "start": 604,
              "end": 605,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 605,
              "end": 608,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 606,
                  "end": 607,
                  "name": {
                    "type": "Identifier",
                    "start": 606,
                    "end": 607,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 609,
              "end": 632,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 619,
                  "end": 626,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 619,
                    "end": 622,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 625,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 624,
                      "end": 625,
                      "typeName": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 625,
                        "name": "T",
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
            "type": "TSInterfaceDeclaration",
            "start": 638,
            "end": 676,
            "id": {
              "type": "Identifier",
              "start": 648,
              "end": 649,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 649,
              "end": 652,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 650,
                  "end": 651,
                  "name": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 653,
              "end": 676,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 663,
                  "end": 670,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 666,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 666,
                    "end": 669,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 668,
                      "end": 669,
                      "typeName": {
                        "type": "Identifier",
                        "start": 668,
                        "end": 669,
                        "name": "T",
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
            "type": "VariableDeclaration",
            "start": 682,
            "end": 699,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 686,
                "end": 698,
                "id": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 698,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 687,
                    "end": 698,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 689,
                      "end": 698,
                      "typeName": {
                        "type": "Identifier",
                        "start": 689,
                        "end": 690,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 708,
                  "end": 710,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 713,
                  "end": 718,
                  "object": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 715,
                    "end": 718,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 745,
                  "end": 747,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 750,
                  "end": 755,
                  "object": {
                    "type": "Identifier",
                    "start": 750,
                    "end": 751,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 755,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
