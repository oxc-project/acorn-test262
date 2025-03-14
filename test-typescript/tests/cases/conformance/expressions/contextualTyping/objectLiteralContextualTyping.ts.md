objectLiteralContextualTyping.ts
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
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 396,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 404,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 398,
                "end": 404
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 410,
            "end": 431,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 421,
              "decorators": [],
              "name": "description",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 430,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 424,
                "end": 430
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 385,
        "decorators": [],
        "name": "Item",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 435,
      "end": 476,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 455,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 456,
          "end": 466,
          "decorators": [],
          "name": "item",
          "optional": false,
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
                "decorators": [],
                "name": "Item",
                "optional": false
              }
            }
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 497,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 498,
          "end": 507,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 502,
            "end": 507,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 504,
              "end": 507
            }
          }
        }
      ],
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 524,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 527,
            "end": 552,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 533,
                      "end": 537,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 539,
                      "end": 549,
                      "raw": "\"Sprocket\"",
                      "value": "Sprocket"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 527,
              "end": 530,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 567,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 567,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 561,
                "end": 567
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
      "start": 570,
      "end": 632,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 574,
          "end": 631,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 574,
            "end": 575,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 578,
            "end": 631,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 588,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 590,
                      "end": 600,
                      "raw": "\"Sprocket\"",
                      "value": "Sprocket"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 602,
                    "end": 628,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 613,
                      "decorators": [],
                      "name": "description",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 615,
                      "end": 628,
                      "raw": "\"Bumpy wheel\"",
                      "value": "Bumpy wheel"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 578,
              "end": 581,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 637,
            "end": 646,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 638,
              "end": 646,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 640,
                "end": 646
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
      "start": 649,
      "end": 703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 653,
          "end": 702,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 653,
            "end": 654,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 657,
            "end": 702,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 663,
                      "end": 667,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 669,
                      "end": 679,
                      "raw": "\"Sprocket\"",
                      "value": "Sprocket"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 681,
                    "end": 699,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 692,
                      "decorators": [],
                      "name": "description",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 694,
                      "end": 699,
                      "raw": "false",
                      "value": false
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 657,
              "end": 660,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
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
          "end": 717,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 708,
            "end": 717,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 709,
              "end": 717,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 711,
                "end": 717
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
      "start": 720,
      "end": 743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 724,
          "end": 742,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 724,
            "end": 725,
            "decorators": [],
            "name": "w",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 728,
            "end": 742,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 734,
                      "end": 735,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 737,
                      "end": 739,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 728,
              "end": 731,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 748,
            "end": 757,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 749,
              "end": 757,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 751,
                "end": 757
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
      "type": "TSDeclareFunction",
      "start": 760,
      "end": 805,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 780,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 784,
          "end": 800,
          "decorators": [],
          "name": "param",
          "optional": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 794,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 780,
        "end": 783,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 781,
            "end": 782,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 781,
              "end": 782,
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
      "type": "VariableDeclaration",
      "start": 807,
      "end": 823,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 811,
          "end": 822,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 811,
            "end": 812,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 815,
            "end": 822,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 819,
                "end": 821,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 815,
              "end": 818,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 828,
            "end": 833,
            "decorators": [],
            "name": "b",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
