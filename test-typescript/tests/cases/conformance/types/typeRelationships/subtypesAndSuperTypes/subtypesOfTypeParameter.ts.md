__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 2178,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 92,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 92,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 83,
            "end": 90,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 86,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
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
        "start": 71,
        "end": 73,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
      "type": "ClassDeclaration",
      "start": 94,
      "end": 147,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 147,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 136,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
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
        "start": 100,
        "end": 102,
        "decorators": [],
        "name": "D1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 119,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 119,
        "end": 122,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 120,
            "end": 121,
            "typeName": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 102,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 103,
            "end": 104,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 149,
      "end": 252,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 252,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 185,
            "end": 206,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 189,
                "end": 205,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 193,
                  "end": 205,
                  "alternate": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 193,
                    "end": 197,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 220,
            "end": 241,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 224,
                "end": 240,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 228,
                  "end": 240,
                  "alternate": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 240,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 228,
                    "end": 232,
                    "raw": "true",
                    "value": true
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 167,
          "end": 171,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 171,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 171,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 173,
          "end": 177,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 177,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 160,
        "end": 166,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 161,
            "end": 162,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 164,
            "end": 165,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 254,
      "end": 283,
      "body": {
        "type": "TSInterfaceBody",
        "start": 267,
        "end": 283,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 269,
            "end": 281,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 280,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 274,
                "end": 280
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 284,
      "end": 309,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 293,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 295,
            "end": 307,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 298,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 306,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 300,
                "end": 306
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
        "start": 290,
        "end": 292,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 310,
      "end": 333,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 322,
        "end": 333,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 324,
            "end": 331,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 327,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 329,
                "end": 330,
                "typeName": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 330,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
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
        "start": 316,
        "end": 318,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 318,
        "end": 321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 320,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
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
      "type": "TSEnumDeclaration",
      "start": 334,
      "end": 346,
      "body": {
        "type": "TSEnumBody",
        "start": 341,
        "end": 346,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 343,
            "end": 344,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 340,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 347,
      "end": 363,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 360,
        "end": 363,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 357,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 364,
      "end": 400,
      "body": {
        "type": "TSModuleBlock",
        "start": 373,
        "end": 400,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 379,
            "end": 398,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 386,
              "end": 398,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 390,
                  "end": 397,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 393,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 396,
                    "end": 397,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 372,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 401,
      "end": 424,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 424,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 411,
            "end": 422,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 414,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 422,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 416,
                "end": 422
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
        "start": 407,
        "end": 408,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 425,
      "end": 461,
      "body": {
        "type": "TSModuleBlock",
        "start": 434,
        "end": 461,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 440,
            "end": 459,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 447,
              "end": 459,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 451,
                  "end": 458,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 451,
                    "end": 454,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 457,
                    "end": 458,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 433,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 484,
      "end": 2178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 514,
        "end": 2178,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 520,
            "end": 545,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 524,
                "end": 544,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 526,
                  "decorators": [],
                  "name": "r0",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 529,
                  "end": 544,
                  "alternate": {
                    "type": "Literal",
                    "start": 540,
                    "end": 544,
                    "raw": "null",
                    "value": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 536,
                    "end": 537,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 529,
                    "end": 533,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 550,
            "end": 575,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 554,
                "end": 574,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 556,
                  "decorators": [],
                  "name": "r0",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 559,
                  "end": 574,
                  "alternate": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 566,
                    "end": 570,
                    "raw": "null",
                    "value": null
                  },
                  "test": {
                    "type": "Literal",
                    "start": 559,
                    "end": 563,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 581,
            "end": 605,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 585,
                "end": 604,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 604,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 586,
                    "end": 604,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 588,
                      "end": 604,
                      "exprName": {
                        "type": "Identifier",
                        "start": 595,
                        "end": 604,
                        "decorators": [],
                        "name": "undefined",
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
            "start": 610,
            "end": 633,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 614,
                "end": 632,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 617,
                  "decorators": [],
                  "name": "r0b",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 620,
                  "end": 632,
                  "alternate": {
                    "type": "Identifier",
                    "start": 631,
                    "end": 632,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 628,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 620,
                    "end": 624,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 638,
            "end": 661,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 642,
                "end": 660,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 642,
                  "end": 645,
                  "decorators": [],
                  "name": "r0b",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 648,
                  "end": 660,
                  "alternate": {
                    "type": "Identifier",
                    "start": 659,
                    "end": 660,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 655,
                    "end": 656,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 648,
                    "end": 652,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 667,
            "end": 689,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 671,
                "end": 688,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 673,
                  "decorators": [],
                  "name": "r1",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 676,
                  "end": 688,
                  "alternate": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 688,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 683,
                    "end": 684,
                    "raw": "1",
                    "value": 1
                  },
                  "test": {
                    "type": "Literal",
                    "start": 676,
                    "end": 680,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 695,
            "end": 717,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 699,
                "end": 716,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 701,
                  "decorators": [],
                  "name": "r1",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 704,
                  "end": 716,
                  "alternate": {
                    "type": "Literal",
                    "start": 715,
                    "end": 716,
                    "raw": "1",
                    "value": 1
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 711,
                    "end": 712,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 704,
                    "end": 708,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 723,
            "end": 746,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 727,
                "end": 745,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 727,
                  "end": 729,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 732,
                  "end": 745,
                  "alternate": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 745,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 739,
                    "end": 741,
                    "raw": "''",
                    "value": ""
                  },
                  "test": {
                    "type": "Literal",
                    "start": 732,
                    "end": 736,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 751,
            "end": 774,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 755,
                "end": 773,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 757,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 760,
                  "end": 773,
                  "alternate": {
                    "type": "Literal",
                    "start": 771,
                    "end": 773,
                    "raw": "''",
                    "value": ""
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 767,
                    "end": 768,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 760,
                    "end": 764,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 780,
            "end": 805,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 784,
                "end": 804,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 786,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 789,
                  "end": 804,
                  "alternate": {
                    "type": "Identifier",
                    "start": 803,
                    "end": 804,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 796,
                    "end": 800,
                    "raw": "true",
                    "value": true
                  },
                  "test": {
                    "type": "Literal",
                    "start": 789,
                    "end": 793,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 810,
            "end": 835,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 814,
                "end": 834,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 816,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 819,
                  "end": 834,
                  "alternate": {
                    "type": "Literal",
                    "start": 830,
                    "end": 834,
                    "raw": "true",
                    "value": true
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 826,
                    "end": 827,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 819,
                    "end": 823,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 841,
            "end": 872,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 845,
                "end": 871,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 845,
                  "end": 847,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 850,
                  "end": 871,
                  "alternate": {
                    "type": "Identifier",
                    "start": 870,
                    "end": 871,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 857,
                    "end": 867,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 861,
                      "end": 865,
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 850,
                    "end": 854,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 877,
            "end": 908,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 881,
                "end": 907,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 883,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 886,
                  "end": 907,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 897,
                    "end": 907,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 901,
                      "end": 905,
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 894,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 886,
                    "end": 890,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 914,
            "end": 938,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 918,
                "end": 937,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 920,
                  "decorators": [],
                  "name": "r5",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 923,
                  "end": 937,
                  "alternate": {
                    "type": "Identifier",
                    "start": 936,
                    "end": 937,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 930,
                    "end": 933,
                    "raw": "/1/",
                    "regex": {
                      "flags": "",
                      "pattern": "1"
                    },
                    "value": null
                  },
                  "test": {
                    "type": "Literal",
                    "start": 923,
                    "end": 927,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 943,
            "end": 967,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 947,
                "end": 966,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 947,
                  "end": 949,
                  "decorators": [],
                  "name": "r5",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 952,
                  "end": 966,
                  "alternate": {
                    "type": "Literal",
                    "start": 963,
                    "end": 966,
                    "raw": "/1/",
                    "regex": {
                      "flags": "",
                      "pattern": "1"
                    },
                    "value": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 959,
                    "end": 960,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 952,
                    "end": 956,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 973,
            "end": 1004,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 977,
                "end": 1003,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 979,
                  "decorators": [],
                  "name": "r6",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 982,
                  "end": 1003,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1002,
                    "end": 1003,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 989,
                    "end": 999,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 991,
                        "end": 997,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 991,
                          "end": 994,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 996,
                          "end": 997,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Literal",
                    "start": 982,
                    "end": 986,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1009,
            "end": 1040,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1013,
                "end": 1039,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1015,
                  "decorators": [],
                  "name": "r6",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1018,
                  "end": 1039,
                  "alternate": {
                    "type": "ObjectExpression",
                    "start": 1029,
                    "end": 1039,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1031,
                        "end": 1037,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1031,
                          "end": 1034,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 1036,
                          "end": 1037,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1025,
                    "end": 1026,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1018,
                    "end": 1022,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1046,
            "end": 1076,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1050,
                "end": 1075,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1050,
                  "end": 1052,
                  "decorators": [],
                  "name": "r7",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1055,
                  "end": 1075,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1074,
                    "end": 1075,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "start": 1062,
                    "end": 1071,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1068,
                      "end": 1071,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1055,
                    "end": 1059,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1081,
            "end": 1111,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1085,
                "end": 1110,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1085,
                  "end": 1087,
                  "decorators": [],
                  "name": "r7",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1090,
                  "end": 1110,
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "start": 1101,
                    "end": 1110,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1107,
                      "end": 1110,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1098,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1090,
                    "end": 1094,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1117,
            "end": 1163,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1121,
                "end": 1162,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1121,
                  "end": 1123,
                  "decorators": [],
                  "name": "r8",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1126,
                  "end": 1162,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1161,
                    "end": 1162,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "start": 1133,
                    "end": 1158,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1146,
                      "end": 1158,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1148,
                          "end": 1156,
                          "argument": {
                            "type": "Identifier",
                            "start": 1155,
                            "end": 1156,
                            "decorators": [],
                            "name": "x",
                            "optional": false
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
                        "start": 1137,
                        "end": 1141,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1138,
                          "end": 1141,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1140,
                            "end": 1141,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1140,
                              "end": 1141,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1133,
                      "end": 1136,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1134,
                          "end": 1135,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 1134,
                            "end": 1135,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1126,
                    "end": 1130,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1168,
            "end": 1215,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1172,
                "end": 1214,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1172,
                  "end": 1175,
                  "decorators": [],
                  "name": "r8b",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1178,
                  "end": 1214,
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "start": 1189,
                    "end": 1214,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1202,
                      "end": 1214,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1204,
                          "end": 1212,
                          "argument": {
                            "type": "Identifier",
                            "start": 1211,
                            "end": 1212,
                            "decorators": [],
                            "name": "x",
                            "optional": false
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
                        "start": 1193,
                        "end": 1197,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1194,
                          "end": 1197,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1196,
                            "end": 1197,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1196,
                              "end": 1197,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1189,
                      "end": 1192,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1190,
                          "end": 1191,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 1190,
                            "end": 1191,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1185,
                    "end": 1186,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1178,
                    "end": 1182,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1274,
            "end": 1285,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1278,
                "end": 1284,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1278,
                  "end": 1284,
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1280,
                    "end": 1284,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1282,
                      "end": 1284,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1282,
                        "end": 1284,
                        "decorators": [],
                        "name": "I1",
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
            "start": 1290,
            "end": 1313,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1294,
                "end": 1312,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1296,
                  "decorators": [],
                  "name": "r9",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1299,
                  "end": 1312,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1311,
                    "end": 1312,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1306,
                    "end": 1308,
                    "decorators": [],
                    "name": "i1",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1299,
                    "end": 1303,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1318,
            "end": 1341,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1322,
                "end": 1340,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1322,
                  "end": 1324,
                  "decorators": [],
                  "name": "r9",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1327,
                  "end": 1340,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1338,
                    "end": 1340,
                    "decorators": [],
                    "name": "i1",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1334,
                    "end": 1335,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1327,
                    "end": 1331,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1347,
            "end": 1358,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1351,
                "end": 1357,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1351,
                  "end": 1357,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1353,
                    "end": 1357,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1355,
                      "end": 1357,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1355,
                        "end": 1357,
                        "decorators": [],
                        "name": "C1",
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
            "start": 1363,
            "end": 1387,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1367,
                "end": 1386,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1367,
                  "end": 1370,
                  "decorators": [],
                  "name": "r10",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1373,
                  "end": 1386,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1385,
                    "end": 1386,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1380,
                    "end": 1382,
                    "decorators": [],
                    "name": "c1",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1373,
                    "end": 1377,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1392,
            "end": 1416,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1396,
                "end": 1415,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1396,
                  "end": 1399,
                  "decorators": [],
                  "name": "r10",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1402,
                  "end": 1415,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1413,
                    "end": 1415,
                    "decorators": [],
                    "name": "c1",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1409,
                    "end": 1410,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1402,
                    "end": 1406,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1423,
            "end": 1442,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1427,
                "end": 1441,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1427,
                  "end": 1441,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1429,
                    "end": 1441,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1431,
                      "end": 1441,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1433,
                        "end": 1441,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1434,
                            "end": 1440
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1431,
                        "end": 1433,
                        "decorators": [],
                        "name": "C2",
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
            "start": 1447,
            "end": 1471,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1451,
                "end": 1470,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1451,
                  "end": 1454,
                  "decorators": [],
                  "name": "r12",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1457,
                  "end": 1470,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1469,
                    "end": 1470,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1464,
                    "end": 1466,
                    "decorators": [],
                    "name": "c2",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1457,
                    "end": 1461,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1476,
            "end": 1500,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1480,
                "end": 1499,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1480,
                  "end": 1483,
                  "decorators": [],
                  "name": "r12",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1486,
                  "end": 1499,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1497,
                    "end": 1499,
                    "decorators": [],
                    "name": "c2",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1493,
                    "end": 1494,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1486,
                    "end": 1490,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1507,
            "end": 1530,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1511,
                "end": 1529,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1511,
                  "end": 1514,
                  "decorators": [],
                  "name": "r13",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1517,
                  "end": 1529,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1528,
                    "end": 1529,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1524,
                    "end": 1525,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1517,
                    "end": 1521,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1535,
            "end": 1558,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1539,
                "end": 1557,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1539,
                  "end": 1542,
                  "decorators": [],
                  "name": "r13",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1545,
                  "end": 1557,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1556,
                    "end": 1557,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1552,
                    "end": 1553,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1545,
                    "end": 1549,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1564,
            "end": 1589,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1568,
                "end": 1588,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1568,
                  "end": 1571,
                  "decorators": [],
                  "name": "r14",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1574,
                  "end": 1588,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1587,
                    "end": 1588,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 1581,
                    "end": 1584,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1581,
                      "end": 1582,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1583,
                      "end": 1584,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1574,
                    "end": 1578,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1594,
            "end": 1619,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1598,
                "end": 1618,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1598,
                  "end": 1601,
                  "decorators": [],
                  "name": "r14",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1604,
                  "end": 1618,
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 1615,
                    "end": 1618,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1615,
                      "end": 1616,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1617,
                      "end": 1618,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1611,
                    "end": 1612,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1604,
                    "end": 1608,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1625,
            "end": 1642,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1629,
                "end": 1641,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1629,
                  "end": 1641,
                  "decorators": [],
                  "name": "af",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1631,
                    "end": 1641,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1633,
                      "end": 1641,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1640,
                        "end": 1641,
                        "decorators": [],
                        "name": "f",
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
            "start": 1647,
            "end": 1671,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1651,
                "end": 1670,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1654,
                  "decorators": [],
                  "name": "r15",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1657,
                  "end": 1670,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1669,
                    "end": 1670,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1664,
                    "end": 1666,
                    "decorators": [],
                    "name": "af",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1657,
                    "end": 1661,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1676,
            "end": 1700,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1680,
                "end": 1699,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1680,
                  "end": 1683,
                  "decorators": [],
                  "name": "r15",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1686,
                  "end": 1699,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1697,
                    "end": 1699,
                    "decorators": [],
                    "name": "af",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1693,
                    "end": 1694,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1686,
                    "end": 1690,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1706,
            "end": 1723,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1710,
                "end": 1722,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1710,
                  "end": 1722,
                  "decorators": [],
                  "name": "ac",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1712,
                    "end": 1722,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1714,
                      "end": 1722,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1721,
                        "end": 1722,
                        "decorators": [],
                        "name": "c",
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
            "start": 1728,
            "end": 1752,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1732,
                "end": 1751,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1732,
                  "end": 1735,
                  "decorators": [],
                  "name": "r16",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1738,
                  "end": 1751,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1750,
                    "end": 1751,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1745,
                    "end": 1747,
                    "decorators": [],
                    "name": "ac",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1738,
                    "end": 1742,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1757,
            "end": 1781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1761,
                "end": 1780,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1761,
                  "end": 1764,
                  "decorators": [],
                  "name": "r16",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1767,
                  "end": 1780,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1778,
                    "end": 1780,
                    "decorators": [],
                    "name": "ac",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1774,
                    "end": 1775,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1767,
                    "end": 1771,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 1787,
            "end": 1880,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1809,
              "end": 1880,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1819,
                  "end": 1842,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1823,
                      "end": 1841,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1823,
                        "end": 1826,
                        "decorators": [],
                        "name": "r17",
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 1829,
                        "end": 1841,
                        "alternate": {
                          "type": "Identifier",
                          "start": 1840,
                          "end": 1841,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 1836,
                          "end": 1837,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "test": {
                          "type": "Literal",
                          "start": 1829,
                          "end": 1833,
                          "raw": "true",
                          "value": true
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1851,
                  "end": 1874,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1855,
                      "end": 1873,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1855,
                        "end": 1858,
                        "decorators": [],
                        "name": "r17",
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 1861,
                        "end": 1873,
                        "alternate": {
                          "type": "Identifier",
                          "start": 1872,
                          "end": 1873,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 1868,
                          "end": 1869,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "test": {
                          "type": "Literal",
                          "start": 1861,
                          "end": 1865,
                          "raw": "true",
                          "value": true
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
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 1796,
              "end": 1799,
              "decorators": [],
              "name": "f17",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1803,
                "end": 1807,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1804,
                  "end": 1807,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1806,
                    "end": 1807,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1806,
                      "end": 1807,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1799,
              "end": 1802,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1800,
                  "end": 1801,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1800,
                    "end": 1801,
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
            "type": "FunctionDeclaration",
            "start": 1886,
            "end": 1992,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1921,
              "end": 1992,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1931,
                  "end": 1954,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1935,
                      "end": 1953,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1935,
                        "end": 1938,
                        "decorators": [],
                        "name": "r18",
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 1941,
                        "end": 1953,
                        "alternate": {
                          "type": "Identifier",
                          "start": 1952,
                          "end": 1953,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 1948,
                          "end": 1949,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "test": {
                          "type": "Literal",
                          "start": 1941,
                          "end": 1945,
                          "raw": "true",
                          "value": true
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1963,
                  "end": 1986,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1967,
                      "end": 1985,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1967,
                        "end": 1970,
                        "decorators": [],
                        "name": "r18",
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 1973,
                        "end": 1985,
                        "alternate": {
                          "type": "Identifier",
                          "start": 1984,
                          "end": 1985,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 1980,
                          "end": 1981,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "test": {
                          "type": "Literal",
                          "start": 1973,
                          "end": 1977,
                          "raw": "true",
                          "value": true
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
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 1895,
              "end": 1898,
              "decorators": [],
              "name": "f18",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1915,
                "end": 1919,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1916,
                  "end": 1919,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1918,
                    "end": 1919,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1918,
                      "end": 1919,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1898,
              "end": 1914,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1899,
                  "end": 1900,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1899,
                    "end": 1900,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1902,
                  "end": 1913,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1912,
                    "end": 1913,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1912,
                      "end": 1913,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1902,
                    "end": 1903,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1998,
            "end": 2032,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2002,
                "end": 2031,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2002,
                  "end": 2005,
                  "decorators": [],
                  "name": "r19",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2008,
                  "end": 2031,
                  "alternate": {
                    "type": "Identifier",
                    "start": 2030,
                    "end": 2031,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 2015,
                    "end": 2027,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 2019,
                      "end": 2025,
                      "decorators": [],
                      "name": "Object",
                      "optional": false
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 2008,
                    "end": 2012,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 2054,
            "end": 2088,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2058,
                "end": 2087,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2058,
                  "end": 2061,
                  "decorators": [],
                  "name": "r19",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2064,
                  "end": 2087,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 2075,
                    "end": 2087,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 2079,
                      "end": 2085,
                      "decorators": [],
                      "name": "Object",
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2071,
                    "end": 2072,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 2064,
                    "end": 2068,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 2111,
            "end": 2135,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2115,
                "end": 2134,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2115,
                  "end": 2118,
                  "decorators": [],
                  "name": "r20",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2121,
                  "end": 2134,
                  "alternate": {
                    "type": "Identifier",
                    "start": 2133,
                    "end": 2134,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 2128,
                    "end": 2130,
                    "properties": []
                  },
                  "test": {
                    "type": "Literal",
                    "start": 2121,
                    "end": 2125,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 2146,
            "end": 2170,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2150,
                "end": 2169,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2150,
                  "end": 2153,
                  "decorators": [],
                  "name": "r20",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2156,
                  "end": 2169,
                  "alternate": {
                    "type": "ObjectExpression",
                    "start": 2167,
                    "end": 2169,
                    "properties": []
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2163,
                    "end": 2164,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 2156,
                    "end": 2160,
                    "raw": "true",
                    "value": true
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 495,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 502,
          "end": 506,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 503,
            "end": 506,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 505,
              "end": 506,
              "typeName": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 508,
          "end": 512,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 509,
            "end": 512,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 511,
              "end": 512,
              "typeName": {
                "type": "Identifier",
                "start": 511,
                "end": 512,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 495,
        "end": 501,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 496,
            "end": 497,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 499,
            "end": 500,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
