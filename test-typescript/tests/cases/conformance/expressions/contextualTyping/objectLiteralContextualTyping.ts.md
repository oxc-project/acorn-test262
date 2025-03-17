__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 371,
  "end": 835,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 371,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 385,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 386,
        "end": 433,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 392,
            "end": 405,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 396,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 404,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 398,
                "end": 404
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 410,
            "end": 431,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 421,
              "name": "description",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 430,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 424,
                "end": 430
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
      "type": "TSDeclareFunction",
      "start": 435,
      "end": 476,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 455,
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
          "start": 456,
          "end": 466,
          "name": "item",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 460,
            "end": 466,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 462,
              "end": 466,
              "typeName": {
                "type": "Identifier",
                "start": 462,
                "end": 466,
                "name": "Item",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 467,
        "end": 475,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 469,
          "end": 475
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 477,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 497,
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
          "start": 498,
          "end": 507,
          "name": "item",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 502,
            "end": 507,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 504,
              "end": 507
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 508,
        "end": 516,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 510,
          "end": 516
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 519,
      "end": 553,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 552,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 524,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 527,
            "end": 552,
            "callee": {
              "type": "Identifier",
              "start": 527,
              "end": 530,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 531,
                "end": 551,
                "properties": [
                  {
                    "type": "Property",
                    "start": 533,
                    "end": 549,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 533,
                      "end": 537,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 539,
                      "end": 549,
                      "value": "Sprocket",
                      "raw": "\"Sprocket\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
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
      "start": 554,
      "end": 568,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 567,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 567,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 567,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 561,
                "end": 567
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
      "start": 570,
      "end": 632,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 574,
          "end": 631,
          "id": {
            "type": "Identifier",
            "start": 574,
            "end": 575,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 578,
            "end": 631,
            "callee": {
              "type": "Identifier",
              "start": 578,
              "end": 581,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 582,
                "end": 630,
                "properties": [
                  {
                    "type": "Property",
                    "start": 584,
                    "end": 600,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 588,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 590,
                      "end": 600,
                      "value": "Sprocket",
                      "raw": "\"Sprocket\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 602,
                    "end": 628,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 613,
                      "name": "description",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 615,
                      "end": 628,
                      "value": "Bumpy wheel",
                      "raw": "\"Bumpy wheel\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
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
      "start": 633,
      "end": 647,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 637,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 637,
            "end": 646,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 638,
              "end": 646,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 640,
                "end": 646
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
      "start": 649,
      "end": 703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 653,
          "end": 702,
          "id": {
            "type": "Identifier",
            "start": 653,
            "end": 654,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 657,
            "end": 702,
            "callee": {
              "type": "Identifier",
              "start": 657,
              "end": 660,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 661,
                "end": 701,
                "properties": [
                  {
                    "type": "Property",
                    "start": 663,
                    "end": 679,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 663,
                      "end": 667,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 669,
                      "end": 679,
                      "value": "Sprocket",
                      "raw": "\"Sprocket\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 681,
                    "end": 699,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 692,
                      "name": "description",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 694,
                      "end": 699,
                      "value": false,
                      "raw": "false"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
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
      "start": 704,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 708,
          "end": 717,
          "id": {
            "type": "Identifier",
            "start": 708,
            "end": 717,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 709,
              "end": 717,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 711,
                "end": 717
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
      "start": 720,
      "end": 743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 724,
          "end": 742,
          "id": {
            "type": "Identifier",
            "start": 724,
            "end": 725,
            "name": "w",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 728,
            "end": 742,
            "callee": {
              "type": "Identifier",
              "start": 728,
              "end": 731,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 732,
                "end": 741,
                "properties": [
                  {
                    "type": "Property",
                    "start": 734,
                    "end": 739,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 734,
                      "end": 735,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 737,
                      "end": 739,
                      "value": 10,
                      "raw": "10"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
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
      "start": 744,
      "end": 758,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 748,
          "end": 757,
          "id": {
            "type": "Identifier",
            "start": 748,
            "end": 757,
            "name": "w",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 749,
              "end": 757,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 751,
                "end": 757
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
      "type": "TSDeclareFunction",
      "start": 760,
      "end": 805,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 780,
        "name": "bar",
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
          "start": 784,
          "end": 800,
          "name": "param",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 789,
            "end": 800,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 791,
              "end": 800,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 793,
                  "end": 798,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 794,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 795,
                    "end": 798,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 797,
                      "end": 798,
                      "typeName": {
                        "type": "Identifier",
                        "start": 797,
                        "end": 798,
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
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 780,
        "end": 783,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 781,
            "end": 782,
            "name": {
              "type": "Identifier",
              "start": 781,
              "end": 782,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 801,
        "end": 804,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 803,
          "end": 804,
          "typeName": {
            "type": "Identifier",
            "start": 803,
            "end": 804,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 807,
      "end": 823,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 811,
          "end": 822,
          "id": {
            "type": "Identifier",
            "start": 811,
            "end": 812,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 815,
            "end": 822,
            "callee": {
              "type": "Identifier",
              "start": 815,
              "end": 818,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 819,
                "end": 821,
                "properties": []
              }
            ],
            "optional": false,
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
      "start": 824,
      "end": 834,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 828,
          "end": 833,
          "id": {
            "type": "Identifier",
            "start": 828,
            "end": 833,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 829,
              "end": 833,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 831,
                "end": 833,
                "members": []
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
