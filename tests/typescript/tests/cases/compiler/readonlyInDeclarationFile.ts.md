__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1311,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 44,
            "end": 73,
            "parameters": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 63,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 63,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 57,
                    "end": 63
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 72,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 1000,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
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
        "start": 85,
        "end": 1000,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 91,
            "end": 120,
            "parameters": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 110,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 104,
                    "end": 110
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 119,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 119,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 153,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 144,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 152,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 188,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 179,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 181,
                "end": 187
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 193,
            "end": 220,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 211,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 219,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 213,
                "end": 219
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 254,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 237,
              "end": 239,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 254,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 254,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 244,
                    "end": 252,
                    "argument": {
                      "type": "Literal",
                      "start": 251,
                      "end": 252,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 259,
            "end": 290,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 275,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 275,
              "end": 290,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 278,
                "end": 290,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 280,
                    "end": 288,
                    "argument": {
                      "type": "Literal",
                      "start": 287,
                      "end": 288,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 295,
            "end": 323,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 308,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 308,
              "end": 323,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 311,
                "end": 323,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 313,
                    "end": 321,
                    "argument": {
                      "type": "Literal",
                      "start": 320,
                      "end": 321,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 328,
            "end": 357,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 342,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 342,
              "end": 357,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 357,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 347,
                    "end": 355,
                    "argument": {
                      "type": "Literal",
                      "start": 354,
                      "end": 355,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 362,
            "end": 387,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 376,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 376,
              "end": 387,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 377,
                  "end": 382,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 384,
                "end": 387,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 392,
            "end": 423,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 406,
              "end": 408,
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 408,
              "end": 423,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 411,
                "end": 423,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 413,
                    "end": 421,
                    "argument": {
                      "type": "Literal",
                      "start": 420,
                      "end": 421,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 428,
            "end": 455,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 444,
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 444,
              "end": 455,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 445,
                  "end": 450,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 452,
                "end": 455,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 460,
            "end": 488,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 473,
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 473,
              "end": 488,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 476,
                "end": 488,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 478,
                    "end": 486,
                    "argument": {
                      "type": "Literal",
                      "start": 485,
                      "end": 486,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 493,
            "end": 517,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 506,
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 506,
              "end": 517,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 507,
                  "end": 512,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 514,
                "end": 517,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 522,
            "end": 557,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 548,
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 548,
              "end": 556,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 550,
                "end": 556
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 562,
            "end": 599,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 588,
              "end": 590,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 590,
              "end": 598,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 592,
                "end": 598
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 604,
            "end": 638,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 629,
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 637,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 631,
                "end": 637
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 643,
            "end": 679,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 662,
              "end": 664,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 664,
              "end": 679,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 667,
                "end": 679,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 669,
                    "end": 677,
                    "argument": {
                      "type": "Literal",
                      "start": 676,
                      "end": 677,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 684,
            "end": 722,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 705,
              "end": 707,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 707,
              "end": 722,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 710,
                "end": 722,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 712,
                    "end": 720,
                    "argument": {
                      "type": "Literal",
                      "start": 719,
                      "end": 720,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 727,
            "end": 762,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 745,
              "end": 747,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 747,
              "end": 762,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 750,
                "end": 762,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 752,
                    "end": 760,
                    "argument": {
                      "type": "Literal",
                      "start": 759,
                      "end": 760,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 767,
            "end": 803,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 786,
              "end": 788,
              "decorators": [],
              "name": "u1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 788,
              "end": 803,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 791,
                "end": 803,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 793,
                    "end": 801,
                    "argument": {
                      "type": "Literal",
                      "start": 800,
                      "end": 801,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 808,
            "end": 840,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 827,
              "end": 829,
              "decorators": [],
              "name": "u1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 829,
              "end": 840,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 830,
                  "end": 835,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 837,
                "end": 840,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 845,
            "end": 883,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 866,
              "end": 868,
              "decorators": [],
              "name": "u2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 868,
              "end": 883,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 871,
                "end": 883,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 873,
                    "end": 881,
                    "argument": {
                      "type": "Literal",
                      "start": 880,
                      "end": 881,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 888,
            "end": 922,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 909,
              "end": 911,
              "decorators": [],
              "name": "u2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 911,
              "end": 922,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 912,
                  "end": 917,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 919,
                "end": 922,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 927,
            "end": 962,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 945,
              "end": 947,
              "decorators": [],
              "name": "u3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 947,
              "end": 962,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 950,
                "end": 962,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 952,
                    "end": 960,
                    "argument": {
                      "type": "Literal",
                      "start": 959,
                      "end": 960,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 967,
            "end": 998,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 985,
              "end": 987,
              "decorators": [],
              "name": "u3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 987,
              "end": 998,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 988,
                  "end": 993,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 995,
                "end": 998,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1002,
      "end": 1070,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1006,
          "end": 1070,
          "id": {
            "type": "Identifier",
            "start": 1006,
            "end": 1070,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1007,
              "end": 1070,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1009,
                "end": 1070,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1015,
                    "end": 1034,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 1024,
                      "end": 1025,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1025,
                      "end": 1033,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1027,
                        "end": 1033
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 1039,
                    "end": 1068,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1049,
                        "end": 1058,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1050,
                          "end": 1058,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1052,
                            "end": 1058
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1059,
                      "end": 1067,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1061,
                        "end": 1067,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1061,
                          "end": 1067,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 1072,
      "end": 1194,
      "id": {
        "type": "Identifier",
        "start": 1081,
        "end": 1082,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1085,
        "end": 1194,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1091,
            "end": 1192,
            "argument": {
              "type": "ObjectExpression",
              "start": 1098,
              "end": 1192,
              "properties": [
                {
                  "type": "Property",
                  "start": 1108,
                  "end": 1129,
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "start": 1112,
                    "end": 1113,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1113,
                    "end": 1129,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1116,
                      "end": 1129,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1118,
                          "end": 1127,
                          "argument": {
                            "type": "Literal",
                            "start": 1125,
                            "end": 1126,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1139,
                  "end": 1160,
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "start": 1143,
                    "end": 1144,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1144,
                    "end": 1160,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1147,
                      "end": 1160,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1149,
                          "end": 1158,
                          "argument": {
                            "type": "Literal",
                            "start": 1156,
                            "end": 1157,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1170,
                  "end": 1186,
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "start": 1174,
                    "end": 1175,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1175,
                    "end": 1186,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1176,
                        "end": 1181,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1183,
                      "end": 1186,
                      "body": []
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1196,
      "end": 1311,
      "id": {
        "type": "Identifier",
        "start": 1205,
        "end": 1206,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1209,
        "end": 1311,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1215,
            "end": 1295,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1219,
                "end": 1295,
                "id": {
                  "type": "Identifier",
                  "start": 1219,
                  "end": 1295,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1220,
                    "end": 1295,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1222,
                      "end": 1295,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1232,
                          "end": 1251,
                          "computed": false,
                          "optional": false,
                          "readonly": true,
                          "key": {
                            "type": "Identifier",
                            "start": 1241,
                            "end": 1242,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1242,
                            "end": 1250,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1244,
                              "end": 1250
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSIndexSignature",
                          "start": 1260,
                          "end": 1289,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 1270,
                              "end": 1279,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1271,
                                "end": 1279,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1273,
                                  "end": 1279
                                }
                              }
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1280,
                            "end": 1288,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1282,
                              "end": 1288,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1282,
                                "end": 1288,
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": true,
                          "static": false,
                          "accessibility": null
                        }
                      ]
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
            "type": "ReturnStatement",
            "start": 1300,
            "end": 1309,
            "argument": {
              "type": "Identifier",
              "start": 1307,
              "end": 1308,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
