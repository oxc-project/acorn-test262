__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 768,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 89,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 46,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 37,
                "end": 45,
                "exprName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "name": "a",
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
      "start": 91,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 103,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 104,
        "end": 180,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 122,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 113,
                "end": 121,
                "exprName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 168,
            "end": 178,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 177,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 171,
                "end": 177
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
      "start": 182,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 194,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 195,
        "end": 256,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 201,
            "end": 213,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 204,
                "end": 212,
                "exprName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "name": "e",
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
      "type": "ClassDeclaration",
      "start": 258,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 267,
        "end": 343,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 273,
            "end": 283,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "name": "a",
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
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 276,
                "end": 282
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 288,
            "end": 300,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "name": "b",
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
              "start": 289,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 291,
                "end": 299,
                "exprName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "name": "a",
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 346,
      "end": 431,
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 354,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 355,
        "end": 431,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 361,
            "end": 373,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "name": "c",
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
              "start": 362,
              "end": 372,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 364,
                "end": 372,
                "exprName": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 372,
                  "name": "d",
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
            "type": "PropertyDefinition",
            "start": 419,
            "end": 429,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 419,
              "end": 420,
              "name": "d",
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
              "start": 420,
              "end": 428,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 422,
                "end": 428
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
      "start": 433,
      "end": 503,
      "id": {
        "type": "Identifier",
        "start": 439,
        "end": 441,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 442,
        "end": 503,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 448,
            "end": 460,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "name": "e",
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
              "start": 449,
              "end": 459,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 451,
                "end": 459,
                "exprName": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 459,
                  "name": "e",
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 507,
      "end": 550,
      "id": {
        "type": "Identifier",
        "start": 517,
        "end": 531,
        "name": "ValidInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 532,
        "end": 550,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 538,
            "end": 548,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 539,
              "end": 547,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 541,
                "end": 547
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
      "type": "ClassDeclaration",
      "start": 552,
      "end": 613,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 568,
        "name": "ValidClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 595,
        "end": 613,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 601,
            "end": 611,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
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
              "start": 602,
              "end": 610,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 604,
                "end": 610
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 580,
          "end": 594,
          "expression": {
            "type": "Identifier",
            "start": 580,
            "end": 594,
            "name": "ValidInterface",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 615,
      "end": 649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 619,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 619,
            "end": 629,
            "name": "vcInstance",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 632,
            "end": 648,
            "callee": {
              "type": "Identifier",
              "start": 636,
              "end": 646,
              "name": "ValidClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 678,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 677,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 664,
            "name": "viInstance",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 667,
            "end": 677,
            "name": "vcInstance",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 680,
      "end": 708,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 684,
          "end": 707,
          "id": {
            "type": "Identifier",
            "start": 684,
            "end": 707,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 686,
              "end": 707,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 688,
                "end": 707,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 695,
                  "end": 707,
                  "left": {
                    "type": "Identifier",
                    "start": 695,
                    "end": 705,
                    "name": "vcInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 706,
                    "end": 707,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "start": 723,
      "end": 751,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 727,
          "end": 750,
          "id": {
            "type": "Identifier",
            "start": 727,
            "end": 750,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 729,
              "end": 750,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 731,
                "end": 750,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 738,
                  "end": 750,
                  "left": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 748,
                    "name": "viInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 749,
                    "end": 750,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
