__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 697,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 113,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 69,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 69,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 69,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 55,
                    "end": 67,
                    "argument": {
                      "type": "Literal",
                      "start": 62,
                      "end": 66,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 51,
                  "end": 52,
                  "typeName": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 111,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 111,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 111,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 93,
                    "end": 105,
                    "argument": {
                      "type": "Literal",
                      "start": 100,
                      "end": 104,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 79,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 82,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 24,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 18,
              "end": 24
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 115,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 367,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 154,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 153,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 150,
                "end": 153
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 200,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 200,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 172,
                "end": 200,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 182,
                    "end": 194,
                    "argument": {
                      "type": "Literal",
                      "start": 189,
                      "end": 193,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 166,
                "end": 171,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 168,
                  "end": 171
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 205,
            "end": 241,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 208,
              "end": 241,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 216,
                "end": 241,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 226,
                    "end": 235,
                    "argument": {
                      "type": "Literal",
                      "start": 233,
                      "end": 234,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 210,
                "end": 215,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 212,
                  "end": 215
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 247,
            "end": 261,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 260,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 257,
                "end": 260
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 266,
            "end": 314,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "name": "Y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 278,
              "end": 314,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 286,
                "end": 314,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 296,
                    "end": 308,
                    "argument": {
                      "type": "Literal",
                      "start": 303,
                      "end": 307,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 280,
                "end": 285,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 282,
                  "end": 285
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 319,
            "end": 365,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 326,
              "end": 329,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 329,
              "end": 365,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 337,
                "end": 365,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 347,
                    "end": 359,
                    "argument": {
                      "type": "Literal",
                      "start": 354,
                      "end": 358,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 331,
                "end": 336,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 333,
                  "end": 336
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 132,
        "end": 140,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 133,
            "end": 139
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 452,
      "end": 589,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 459,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 486,
        "end": 487,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 488,
        "end": 589,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 494,
            "end": 499,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 494,
              "end": 495,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 498,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 497,
                "end": 498,
                "typeName": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 498,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 504,
            "end": 529,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 508,
              "end": 509,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 509,
              "end": 529,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 515,
                "end": 529,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 517,
                    "end": 527,
                    "argument": {
                      "type": "Literal",
                      "start": 524,
                      "end": 526,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 511,
                "end": 514,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 513,
                  "end": 514,
                  "typeName": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 514,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 543,
            "end": 587,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 543,
              "end": 546,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 546,
              "end": 587,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 552,
                "end": 587,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 562,
                    "end": 572,
                    "argument": {
                      "type": "Literal",
                      "start": 569,
                      "end": 571,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 548,
                "end": 551,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 550,
                  "end": 551,
                  "typeName": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 551,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 459,
        "end": 477,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 460,
            "end": 476,
            "name": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 470,
              "end": 476
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 591,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 607,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 607,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 596,
              "end": 607,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 598,
                "end": 607,
                "typeName": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 599,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 599,
                  "end": 607,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 600,
                      "end": 606
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
      "start": 609,
      "end": 618,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 617,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 617,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 614,
              "end": 617,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 616,
                "end": 617,
                "typeName": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "name": "D",
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
      "start": 619,
      "end": 636,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 623,
          "end": 635,
          "id": {
            "type": "Identifier",
            "start": 623,
            "end": 635,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 624,
              "end": 635,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 626,
                "end": 635,
                "typeName": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 627,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 627,
                  "end": 635,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 628,
                      "end": 634
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
      "type": "ExpressionStatement",
      "start": 638,
      "end": 644,
      "expression": {
        "type": "AssignmentExpression",
        "start": 638,
        "end": 643,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 638,
          "end": 639,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 642,
          "end": 643,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 645,
      "end": 651,
      "expression": {
        "type": "AssignmentExpression",
        "start": 645,
        "end": 650,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 645,
          "end": 646,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 649,
          "end": 650,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 652,
      "end": 668,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 656,
          "end": 667,
          "id": {
            "type": "Identifier",
            "start": 656,
            "end": 657,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 660,
            "end": 667,
            "callee": {
              "type": "MemberExpression",
              "start": 660,
              "end": 665,
              "object": {
                "type": "Identifier",
                "start": 660,
                "end": 661,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 662,
                "end": 665,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
