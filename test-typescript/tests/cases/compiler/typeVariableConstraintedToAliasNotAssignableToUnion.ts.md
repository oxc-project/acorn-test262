__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 722,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 24,
        "name": "TableClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 50,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 46,
              "name": "_field",
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
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
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
          "name": "Table",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "TableClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 87,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 106,
        "name": "Something",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "SomethingElse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 207,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 207,
            "name": "aBoolean",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 207,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 200,
                "end": 207
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 253,
            "name": "aStringOrNumber",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 305,
            "name": "aStringOrSomething",
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
                      "name": "Something",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 355,
            "name": "someUnion",
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
                      "name": "Something",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "SomethingElse",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 387,
          "end": 391,
          "name": "o",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "aBoolean",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "aStringOrNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "aStringOrSomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "someUnion",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 482,
                "end": 483,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 380,
              "end": 385,
              "typeName": {
                "type": "Identifier",
                "start": 380,
                "end": 385,
                "name": "Table",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 488,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 497,
        "end": 500,
        "name": "fn2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 523,
          "end": 527,
          "name": "o",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "aBoolean",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 546,
                "end": 547,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "aStringOrNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "aStringOrSomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 599,
                "end": 600,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "someUnion",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 618,
                "end": 619,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 511,
              "end": 521,
              "typeName": {
                "type": "Identifier",
                "start": 511,
                "end": 521,
                "name": "TableClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 624,
      "end": 647,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 646,
            "name": "o",
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
                  "name": "Table",
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
      "kind": "const",
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
          "name": "aBoolean",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 659,
          "end": 660,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "aStringOrNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 680,
          "end": 681,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "aStringOrSomething",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 704,
          "end": 705,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "someUnion",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 719,
          "end": 720,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
