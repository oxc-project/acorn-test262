__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 164,
  "end": 693,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 164,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 174,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 191,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 177,
            "end": 189,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "name": "foo",
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
              "start": 180,
              "end": 188,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 182,
                "end": 188
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 192,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 205,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 214,
        "end": 218,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 219,
        "end": 235,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 221,
            "end": 233,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 224,
              "name": "bar",
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
              "start": 224,
              "end": 232,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 226,
                "end": 232
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 236,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 250,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 259,
        "end": 263,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 264,
        "end": 280,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 266,
            "end": 278,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 269,
              "name": "baz",
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
              "start": 269,
              "end": 277,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 271,
                "end": 277
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 295,
            "name": "base",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 295,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 295,
                  "name": "Base",
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
      "start": 297,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 317,
            "name": "derived",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 310,
                "end": 317,
                "typeName": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 317,
                  "name": "Derived",
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
      "start": 319,
      "end": 342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 341,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 341,
            "name": "derived2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 333,
                "end": 341,
                "typeName": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 341,
                  "name": "Derived2",
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
      "start": 344,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 350,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 353,
            "end": 366,
            "test": {
              "type": "Literal",
              "start": 353,
              "end": 357,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Literal",
              "start": 360,
              "end": 361,
              "value": 1,
              "raw": "1"
            },
            "alternate": {
              "type": "Literal",
              "start": 364,
              "end": 366,
              "value": "",
              "raw": "''"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 374,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 377,
            "end": 402,
            "test": {
              "type": "Literal",
              "start": 377,
              "end": 381,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Identifier",
              "start": 384,
              "end": 391,
              "name": "derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "alternate": {
              "type": "Identifier",
              "start": 394,
              "end": 402,
              "name": "derived2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 405,
      "end": 464,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 417,
        "name": "foo",
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
          "start": 424,
          "end": 428,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 425,
            "end": 428,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 427,
              "end": 428,
              "typeName": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
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
        },
        {
          "type": "Identifier",
          "start": 430,
          "end": 434,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 431,
            "end": 434,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 433,
              "end": 434,
              "typeName": {
                "type": "Identifier",
                "start": 433,
                "end": 434,
                "name": "U",
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
        "start": 436,
        "end": 464,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 442,
            "end": 462,
            "argument": {
              "type": "ConditionalExpression",
              "start": 449,
              "end": 461,
              "test": {
                "type": "Literal",
                "start": 449,
                "end": 453,
                "value": true,
                "raw": "true"
              },
              "consequent": {
                "type": "Identifier",
                "start": 456,
                "end": 457,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 417,
        "end": 423,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 418,
            "end": 419,
            "name": {
              "type": "Identifier",
              "start": 418,
              "end": 419,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 421,
            "end": 422,
            "name": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "name": "U",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 466,
      "end": 608,
      "id": {
        "type": "Identifier",
        "start": 475,
        "end": 479,
        "name": "foo2",
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
          "start": 496,
          "end": 500,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 497,
            "end": 500,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 499,
              "end": 500,
              "typeName": {
                "type": "Identifier",
                "start": 499,
                "end": 500,
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
        },
        {
          "type": "Identifier",
          "start": 502,
          "end": 506,
          "name": "u",
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
                "name": "U",
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
        "start": 508,
        "end": 608,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 558,
            "end": 578,
            "argument": {
              "type": "ConditionalExpression",
              "start": 565,
              "end": 577,
              "test": {
                "type": "Literal",
                "start": 565,
                "end": 569,
                "value": true,
                "raw": "true"
              },
              "consequent": {
                "type": "Identifier",
                "start": 572,
                "end": 573,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 576,
                "end": 577,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 479,
        "end": 495,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 480,
            "end": 491,
            "name": {
              "type": "Identifier",
              "start": 480,
              "end": 481,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 490,
              "end": 491,
              "typeName": {
                "type": "Identifier",
                "start": 490,
                "end": 491,
                "name": "U",
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
          },
          {
            "type": "TSTypeParameter",
            "start": 493,
            "end": 494,
            "name": {
              "type": "Identifier",
              "start": 493,
              "end": 494,
              "name": "U",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 610,
      "end": 693,
      "id": {
        "type": "Identifier",
        "start": 619,
        "end": 623,
        "name": "foo3",
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
          "start": 653,
          "end": 657,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 654,
            "end": 657,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 656,
              "end": 657,
              "typeName": {
                "type": "Identifier",
                "start": 656,
                "end": 657,
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
        },
        {
          "type": "Identifier",
          "start": 659,
          "end": 663,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 660,
            "end": 663,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 662,
              "end": 663,
              "typeName": {
                "type": "Identifier",
                "start": 662,
                "end": 663,
                "name": "U",
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
        "start": 665,
        "end": 693,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 671,
            "end": 691,
            "argument": {
              "type": "ConditionalExpression",
              "start": 678,
              "end": 690,
              "test": {
                "type": "Literal",
                "start": 678,
                "end": 682,
                "value": true,
                "raw": "true"
              },
              "consequent": {
                "type": "Identifier",
                "start": 685,
                "end": 686,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 689,
                "end": 690,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 623,
        "end": 652,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 624,
            "end": 635,
            "name": {
              "type": "Identifier",
              "start": 624,
              "end": 625,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 634,
              "end": 635,
              "typeName": {
                "type": "Identifier",
                "start": 634,
                "end": 635,
                "name": "U",
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
          },
          {
            "type": "TSTypeParameter",
            "start": 637,
            "end": 648,
            "name": {
              "type": "Identifier",
              "start": 637,
              "end": 638,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 647,
              "end": 648,
              "typeName": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "name": "V",
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
          },
          {
            "type": "TSTypeParameter",
            "start": 650,
            "end": 651,
            "name": {
              "type": "Identifier",
              "start": 650,
              "end": 651,
              "name": "V",
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
