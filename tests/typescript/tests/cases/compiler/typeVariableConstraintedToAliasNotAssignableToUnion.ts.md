__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 721,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 24,
        "decorators": [],
        "name": "TableClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 24,
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 32,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 50,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 46,
              "decorators": [],
              "name": "_field",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 85,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 61,
        "end": 85,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 71,
          "decorators": [],
          "name": "Table",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 74,
          "end": 84,
          "typeName": {
            "type": "Identifier",
            "start": 74,
            "end": 84,
            "decorators": [],
            "name": "TableClass",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 87,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 106,
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 107,
        "end": 128,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 126,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 117,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
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
      "start": 130,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 153,
        "decorators": [],
        "name": "SomethingElse",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 154,
        "end": 176,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 160,
            "end": 174,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 165,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 173,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
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
      "start": 178,
      "end": 208,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 207,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 207,
            "decorators": [],
            "name": "aBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 207,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 200,
                "end": 207
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 254,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 253,
            "decorators": [],
            "name": "aStringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 253,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 238,
                "end": 253,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 247,
                    "end": 253
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 306,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 305,
            "decorators": [],
            "name": "aStringOrSomething",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 305,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 287,
                "end": 305,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 287,
                    "end": 293
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 296,
                    "end": 305,
                    "typeName": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 305,
                      "decorators": [],
                      "name": "Something",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 356,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 355,
            "decorators": [],
            "name": "someUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 355,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 330,
                "end": 355,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 330,
                    "end": 339,
                    "typeName": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 339,
                      "decorators": [],
                      "name": "Something",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 342,
                    "end": 355,
                    "typeName": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 355,
                      "decorators": [],
                      "name": "SomethingElse",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 358,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 369,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 369,
        "end": 386,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 370,
            "end": 385,
            "name": {
              "type": "Identifier",
              "start": 370,
              "end": 371,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 380,
              "end": 385,
              "typeName": {
                "type": "Identifier",
                "start": 380,
                "end": 385,
                "decorators": [],
                "name": "Table",
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
          "start": 387,
          "end": 391,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 388,
            "end": 391,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 390,
              "end": 391,
              "typeName": {
                "type": "Identifier",
                "start": 390,
                "end": 391,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 393,
        "end": 486,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 399,
            "end": 412,
            "expression": {
              "type": "AssignmentExpression",
              "start": 399,
              "end": 411,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 399,
                "end": 407,
                "decorators": [],
                "name": "aBoolean",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 417,
            "end": 437,
            "expression": {
              "type": "AssignmentExpression",
              "start": 417,
              "end": 436,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 417,
                "end": 432,
                "decorators": [],
                "name": "aStringOrNumber",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 442,
            "end": 465,
            "expression": {
              "type": "AssignmentExpression",
              "start": 442,
              "end": 464,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 442,
                "end": 460,
                "decorators": [],
                "name": "aStringOrSomething",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 470,
            "end": 484,
            "expression": {
              "type": "AssignmentExpression",
              "start": 470,
              "end": 483,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 470,
                "end": 479,
                "decorators": [],
                "name": "someUnion",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 482,
                "end": 483,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 488,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 497,
        "end": 500,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 500,
        "end": 522,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 501,
            "end": 521,
            "name": {
              "type": "Identifier",
              "start": 501,
              "end": 502,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 511,
              "end": 521,
              "typeName": {
                "type": "Identifier",
                "start": 511,
                "end": 521,
                "decorators": [],
                "name": "TableClass",
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
          "start": 523,
          "end": 527,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 524,
            "end": 527,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 526,
              "end": 527,
              "typeName": {
                "type": "Identifier",
                "start": 526,
                "end": 527,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 529,
        "end": 622,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 535,
            "end": 548,
            "expression": {
              "type": "AssignmentExpression",
              "start": 535,
              "end": 547,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 535,
                "end": 543,
                "decorators": [],
                "name": "aBoolean",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 546,
                "end": 547,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 553,
            "end": 573,
            "expression": {
              "type": "AssignmentExpression",
              "start": 553,
              "end": 572,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 553,
                "end": 568,
                "decorators": [],
                "name": "aStringOrNumber",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 578,
            "end": 601,
            "expression": {
              "type": "AssignmentExpression",
              "start": 578,
              "end": 600,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 578,
                "end": 596,
                "decorators": [],
                "name": "aStringOrSomething",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 599,
                "end": 600,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 606,
            "end": 620,
            "expression": {
              "type": "AssignmentExpression",
              "start": 606,
              "end": 619,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 606,
                "end": 615,
                "decorators": [],
                "name": "someUnion",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 618,
                "end": 619,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 624,
      "end": 647,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 646,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 639,
              "end": 646,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 641,
                "end": 646,
                "typeName": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 646,
                  "decorators": [],
                  "name": "Table",
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 648,
      "end": 661,
      "expression": {
        "type": "AssignmentExpression",
        "start": 648,
        "end": 660,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 648,
          "end": 656,
          "decorators": [],
          "name": "aBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 659,
          "end": 660,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 662,
      "end": 682,
      "expression": {
        "type": "AssignmentExpression",
        "start": 662,
        "end": 681,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 662,
          "end": 677,
          "decorators": [],
          "name": "aStringOrNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 680,
          "end": 681,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 683,
      "end": 706,
      "expression": {
        "type": "AssignmentExpression",
        "start": 683,
        "end": 705,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 683,
          "end": 701,
          "decorators": [],
          "name": "aStringOrSomething",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 704,
          "end": 705,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 707,
      "end": 721,
      "expression": {
        "type": "AssignmentExpression",
        "start": 707,
        "end": 720,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 707,
          "end": 716,
          "decorators": [],
          "name": "someUnion",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 719,
          "end": 720,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
