__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 75,
  "end": 1000,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 75,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 82,
        "end": 87,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 84,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 88,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 95,
        "end": 100,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 97,
            "end": 98,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 114,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 110,
            "end": 113,
            "object": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 127,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 126,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 123,
            "end": 126,
            "object": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 133,
          "end": 134,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 143,
      "expression": {
        "type": "AssignmentExpression",
        "start": 137,
        "end": 142,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 137,
          "end": 138,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 141,
          "end": 142,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 149,
          "end": 150,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 158,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 162,
          "end": 163,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 189,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 184,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 178,
                "end": 184
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 202,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 201,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 200,
          "end": 201,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 210,
      "end": 1000,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 223,
        "decorators": [],
        "name": "Others",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 224,
        "end": 1000,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 230,
            "end": 245,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 234,
                "end": 244,
                "id": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 240,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 240,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 237,
                      "end": 240
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 257,
            "end": 293,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 265,
              "end": 293,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 275,
                  "end": 287,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 278,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 278,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 298,
            "end": 308,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 302,
                "end": 307,
                "id": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 307,
                  "decorators": [],
                  "name": "ac",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 304,
                    "end": 307,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 306,
                      "end": 307,
                      "typeName": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 307,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 313,
            "end": 353,
            "id": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 325,
              "end": 353,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 335,
                  "end": 347,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 338,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 338,
                    "end": 346,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 340,
                      "end": 346
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
            "start": 358,
            "end": 368,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 362,
                "end": 367,
                "id": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 367,
                  "decorators": [],
                  "name": "ai",
                  "optional": false,
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
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 374,
            "end": 392,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 378,
                "end": 391,
                "id": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 387,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 379,
                    "end": 387,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 381,
                      "end": 387
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 403,
            "end": 421,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 407,
                "end": 420,
                "id": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 416,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 408,
                    "end": 416,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 410,
                      "end": 416
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 420,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 426,
            "end": 445,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 430,
                "end": 444,
                "id": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 440,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 431,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 433,
                      "end": 440
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 444,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 450,
            "end": 467,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 454,
                "end": 466,
                "id": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 462,
                  "decorators": [],
                  "name": "ee",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 456,
                    "end": 462,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 458,
                      "end": 462,
                      "typeName": {
                        "type": "Identifier",
                        "start": 458,
                        "end": 462,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 466,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 472,
            "end": 487,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 476,
                "end": 486,
                "id": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 482,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 477,
                    "end": 482,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 479,
                      "end": 482
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 498,
            "end": 514,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 502,
                "end": 513,
                "id": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 509,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 503,
                    "end": 509,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 505,
                      "end": 509
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 513,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 519,
            "end": 537,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 523,
                "end": 536,
                "id": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 532,
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 524,
                    "end": 532,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 526,
                      "end": 532,
                      "typeName": {
                        "type": "Identifier",
                        "start": 526,
                        "end": 532,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 542,
            "end": 556,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 546,
                "end": 555,
                "id": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 551,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 547,
                    "end": 551,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 549,
                      "end": 551,
                      "members": []
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 555,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 561,
            "end": 581,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 565,
                "end": 580,
                "id": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 576,
                  "decorators": [],
                  "name": "j",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 566,
                    "end": 576,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 568,
                      "end": 576,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 571,
                        "end": 576,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 574,
                          "end": 576,
                          "members": []
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 580,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 586,
            "end": 606,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 590,
                "end": 605,
                "id": {
                  "type": "Identifier",
                  "start": 590,
                  "end": 601,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 591,
                    "end": 601,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 593,
                      "end": 601,
                      "typeName": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 601,
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 605,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 611,
            "end": 644,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 615,
                "end": 643,
                "id": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 639,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 616,
                    "end": 639,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 618,
                      "end": 639,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 619,
                          "end": 628,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 620,
                            "end": 628,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 622,
                              "end": 628
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 630,
                        "end": 639,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 633,
                          "end": 639
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 642,
                  "end": 643,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 649,
            "end": 656,
            "expression": {
              "type": "AssignmentExpression",
              "start": 649,
              "end": 655,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 649,
                "end": 651,
                "decorators": [],
                "name": "ac",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 654,
                "end": 655,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 661,
            "end": 668,
            "expression": {
              "type": "AssignmentExpression",
              "start": 661,
              "end": 667,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 661,
                "end": 663,
                "decorators": [],
                "name": "ai",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 666,
                "end": 667,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 673,
            "end": 693,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 677,
                "end": 692,
                "id": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 688,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 678,
                    "end": 688,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 680,
                      "end": 688,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 680,
                        "end": 686
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 692,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 698,
            "end": 725,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 702,
                "end": 724,
                "id": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 720,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 703,
                    "end": 720,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 705,
                      "end": 720,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 707,
                          "end": 718,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 707,
                            "end": 710,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 710,
                            "end": 718,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 712,
                              "end": 718
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 724,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 730,
            "end": 756,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 734,
                "end": 755,
                "id": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 751,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 735,
                    "end": 751,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 737,
                      "end": 751,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 737,
                        "end": 740,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 738,
                            "end": 739,
                            "name": {
                              "type": "Identifier",
                              "start": 738,
                              "end": 739,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 741,
                          "end": 745,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 742,
                            "end": 745,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 744,
                              "end": 745,
                              "typeName": {
                                "type": "Identifier",
                                "start": 744,
                                "end": 745,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 747,
                        "end": 751,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 750,
                          "end": 751,
                          "typeName": {
                            "type": "Identifier",
                            "start": 750,
                            "end": 751,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 754,
                  "end": 755,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 761,
            "end": 779,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 765,
                "end": 778,
                "id": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 774,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 766,
                    "end": 774,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 768,
                      "end": 774,
                      "typeName": {
                        "type": "Identifier",
                        "start": 768,
                        "end": 774,
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 777,
                  "end": 778,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 784,
            "end": 802,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 788,
                "end": 801,
                "id": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 797,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 789,
                    "end": 797,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 791,
                      "end": 797,
                      "typeName": {
                        "type": "Identifier",
                        "start": 791,
                        "end": 797,
                        "decorators": [],
                        "name": "String",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 801,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 808,
            "end": 998,
            "id": {
              "type": "Identifier",
              "start": 817,
              "end": 820,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 820,
              "end": 883,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 821,
                  "end": 822,
                  "name": {
                    "type": "Identifier",
                    "start": 821,
                    "end": 822,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 824,
                  "end": 835,
                  "name": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 825,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 834,
                    "end": 835,
                    "typeName": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 835,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 837,
                  "end": 851,
                  "name": {
                    "type": "Identifier",
                    "start": 837,
                    "end": 838,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 847,
                    "end": 851,
                    "typeName": {
                      "type": "Identifier",
                      "start": 847,
                      "end": 851,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 853,
                  "end": 869,
                  "name": {
                    "type": "Identifier",
                    "start": 853,
                    "end": 854,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 863,
                    "end": 869,
                    "typeName": {
                      "type": "Identifier",
                      "start": 863,
                      "end": 869,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 871,
                  "end": 882,
                  "name": {
                    "type": "Identifier",
                    "start": 871,
                    "end": 872,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 881,
                    "end": 882,
                    "typeName": {
                      "type": "Identifier",
                      "start": 881,
                      "end": 882,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
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
            "params": [
              {
                "type": "Identifier",
                "start": 884,
                "end": 888,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 885,
                  "end": 888,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 887,
                    "end": 888,
                    "typeName": {
                      "type": "Identifier",
                      "start": 887,
                      "end": 888,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 890,
                "end": 894,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 891,
                  "end": 894,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 893,
                    "end": 894,
                    "typeName": {
                      "type": "Identifier",
                      "start": 893,
                      "end": 894,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 896,
                "end": 900,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 897,
                  "end": 900,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 899,
                    "end": 900,
                    "typeName": {
                      "type": "Identifier",
                      "start": 899,
                      "end": 900,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 902,
              "end": 998,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 912,
                  "end": 918,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 912,
                    "end": 917,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 912,
                      "end": 913,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 916,
                      "end": 917,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 927,
                  "end": 933,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 927,
                    "end": 932,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 927,
                      "end": 928,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 931,
                      "end": 932,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 942,
                  "end": 948,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 942,
                    "end": 947,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 942,
                      "end": 943,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 946,
                      "end": 947,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 957,
                  "end": 970,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 961,
                      "end": 969,
                      "id": {
                        "type": "Identifier",
                        "start": 961,
                        "end": 965,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 962,
                          "end": 965,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 964,
                            "end": 965,
                            "typeName": {
                              "type": "Identifier",
                              "start": 964,
                              "end": 965,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 968,
                        "end": 969,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 979,
                  "end": 992,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 983,
                      "end": 991,
                      "id": {
                        "type": "Identifier",
                        "start": 983,
                        "end": 987,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 984,
                          "end": 987,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 986,
                            "end": 987,
                            "typeName": {
                              "type": "Identifier",
                              "start": 986,
                              "end": 987,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 990,
                        "end": 991,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
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
