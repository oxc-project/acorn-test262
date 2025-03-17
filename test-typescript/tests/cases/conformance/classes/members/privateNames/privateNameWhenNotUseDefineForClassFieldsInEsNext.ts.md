__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1186,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 605,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "name": "TestWithStatics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 605,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 28,
              "end": 33,
              "name": "prop"
            },
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 42,
            "end": 82,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 51,
              "name": "dd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 54,
              "end": 81,
              "object": {
                "type": "NewExpression",
                "start": 54,
                "end": 75,
                "callee": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 73,
                  "name": "TestWithStatics",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 76,
                "end": 81,
                "name": "prop"
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 603,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 101,
              "end": 111,
              "value": "X_ z_ zz",
              "raw": "\"X_ z_ zz\""
            },
            "value": {
              "type": "ClassExpression",
              "start": 115,
              "end": 603,
              "id": {
                "type": "Identifier",
                "start": 121,
                "end": 126,
                "name": "Inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 127,
                "end": 603,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 137,
                    "end": 147,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "PrivateIdentifier",
                      "start": 137,
                      "end": 141,
                      "name": "foo"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 145,
                      "end": 147,
                      "value": 10,
                      "raw": "10"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 156,
                    "end": 217,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 157,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 157,
                      "end": 217,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 160,
                        "end": 217,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 174,
                            "end": 201,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 174,
                              "end": 201,
                              "object": {
                                "type": "NewExpression",
                                "start": 174,
                                "end": 195,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 193,
                                  "name": "TestWithStatics",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 196,
                                "end": 201,
                                "name": "prop"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 226,
                    "end": 387,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 234,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ClassExpression",
                      "start": 237,
                      "end": 387,
                      "id": {
                        "type": "Identifier",
                        "start": 243,
                        "end": 253,
                        "name": "InnerInner",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 254,
                        "end": 387,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 268,
                            "end": 377,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 268,
                              "end": 269,
                              "name": "m",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 269,
                              "end": 377,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 272,
                                "end": 377,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 290,
                                    "end": 317,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 290,
                                      "end": 317,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 290,
                                        "end": 311,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 294,
                                          "end": 309,
                                          "name": "TestWithStatics",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 312,
                                        "end": 317,
                                        "name": "prop"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 340,
                                    "end": 357,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 340,
                                      "end": 356,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 340,
                                        "end": 351,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 344,
                                          "end": 349,
                                          "name": "Inner",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 352,
                                        "end": 356,
                                        "name": "foo"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
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
                      "superTypeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 397,
                    "end": 597,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 405,
                      "end": 597,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 407,
                        "end": 597,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 421,
                            "end": 587,
                            "argument": {
                              "type": "ClassExpression",
                              "start": 428,
                              "end": 587,
                              "id": null,
                              "superClass": null,
                              "body": {
                                "type": "ClassBody",
                                "start": 434,
                                "end": 587,
                                "body": [
                                  {
                                    "type": "MethodDefinition",
                                    "start": 452,
                                    "end": 573,
                                    "static": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 452,
                                      "end": 453,
                                      "name": "m",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "kind": "method",
                                    "value": {
                                      "type": "FunctionExpression",
                                      "start": 453,
                                      "end": 573,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 456,
                                        "end": 573,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 478,
                                            "end": 505,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 478,
                                              "end": 505,
                                              "object": {
                                                "type": "NewExpression",
                                                "start": 478,
                                                "end": 499,
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 482,
                                                  "end": 497,
                                                  "name": "TestWithStatics",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "arguments": [],
                                                "typeArguments": null
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "start": 500,
                                                "end": 505,
                                                "name": "prop"
                                              },
                                              "computed": false,
                                              "optional": false
                                            },
                                            "directive": null
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 532,
                                            "end": 549,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 532,
                                              "end": 548,
                                              "object": {
                                                "type": "NewExpression",
                                                "start": 532,
                                                "end": 543,
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 536,
                                                  "end": 541,
                                                  "name": "Inner",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "arguments": [],
                                                "typeArguments": null
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "start": 544,
                                                "end": 548,
                                                "name": "foo"
                                              },
                                              "computed": false,
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      },
                                      "declare": false,
                                      "typeParameters": null,
                                      "returnType": null
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
                              "superTypeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
              "superTypeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "start": 607,
      "end": 1186,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 627,
        "name": "TestNonStatics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 628,
        "end": 1186,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 634,
            "end": 643,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 634,
              "end": 639,
              "name": "prop"
            },
            "value": {
              "type": "Literal",
              "start": 642,
              "end": 643,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 648,
            "end": 680,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 648,
              "end": 650,
              "name": "dd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 653,
              "end": 679,
              "object": {
                "type": "NewExpression",
                "start": 653,
                "end": 673,
                "callee": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 671,
                  "name": "TestNonStatics",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 674,
                "end": 679,
                "name": "prop"
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 691,
            "end": 1184,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 692,
              "end": 702,
              "value": "X_ z_ zz",
              "raw": "\"X_ z_ zz\""
            },
            "value": {
              "type": "ClassExpression",
              "start": 706,
              "end": 1184,
              "id": {
                "type": "Identifier",
                "start": 712,
                "end": 717,
                "name": "Inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 718,
                "end": 1184,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 728,
                    "end": 738,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "PrivateIdentifier",
                      "start": 728,
                      "end": 732,
                      "name": "foo"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 736,
                      "end": 738,
                      "value": 10,
                      "raw": "10"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 747,
                    "end": 807,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 747,
                      "end": 748,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 748,
                      "end": 807,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 751,
                        "end": 807,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 765,
                            "end": 791,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 765,
                              "end": 791,
                              "object": {
                                "type": "NewExpression",
                                "start": 765,
                                "end": 785,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 769,
                                  "end": 783,
                                  "name": "TestNonStatics",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 786,
                                "end": 791,
                                "name": "prop"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 816,
                    "end": 969,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 816,
                      "end": 817,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ClassExpression",
                      "start": 820,
                      "end": 969,
                      "id": {
                        "type": "Identifier",
                        "start": 826,
                        "end": 836,
                        "name": "InnerInner",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 837,
                        "end": 969,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 851,
                            "end": 959,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 851,
                              "end": 852,
                              "name": "m",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 852,
                              "end": 959,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 855,
                                "end": 959,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 873,
                                    "end": 899,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 873,
                                      "end": 899,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 873,
                                        "end": 893,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 877,
                                          "end": 891,
                                          "name": "TestNonStatics",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 894,
                                        "end": 899,
                                        "name": "prop"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 922,
                                    "end": 939,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 922,
                                      "end": 938,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 922,
                                        "end": 933,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 926,
                                          "end": 931,
                                          "name": "Inner",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 934,
                                        "end": 938,
                                        "name": "foo"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
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
                      "superTypeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 979,
                    "end": 1178,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 986,
                      "end": 987,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 987,
                      "end": 1178,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 989,
                        "end": 1178,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1003,
                            "end": 1168,
                            "argument": {
                              "type": "ClassExpression",
                              "start": 1010,
                              "end": 1168,
                              "id": null,
                              "superClass": null,
                              "body": {
                                "type": "ClassBody",
                                "start": 1016,
                                "end": 1168,
                                "body": [
                                  {
                                    "type": "MethodDefinition",
                                    "start": 1034,
                                    "end": 1154,
                                    "static": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1034,
                                      "end": 1035,
                                      "name": "m",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "kind": "method",
                                    "value": {
                                      "type": "FunctionExpression",
                                      "start": 1035,
                                      "end": 1154,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 1038,
                                        "end": 1154,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 1060,
                                            "end": 1086,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 1060,
                                              "end": 1086,
                                              "object": {
                                                "type": "NewExpression",
                                                "start": 1060,
                                                "end": 1080,
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 1064,
                                                  "end": 1078,
                                                  "name": "TestNonStatics",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "arguments": [],
                                                "typeArguments": null
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "start": 1081,
                                                "end": 1086,
                                                "name": "prop"
                                              },
                                              "computed": false,
                                              "optional": false
                                            },
                                            "directive": null
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 1113,
                                            "end": 1130,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 1113,
                                              "end": 1129,
                                              "object": {
                                                "type": "NewExpression",
                                                "start": 1113,
                                                "end": 1124,
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 1117,
                                                  "end": 1122,
                                                  "name": "Inner",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "arguments": [],
                                                "typeArguments": null
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "start": 1125,
                                                "end": 1129,
                                                "name": "foo"
                                              },
                                              "computed": false,
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      },
                                      "declare": false,
                                      "typeParameters": null,
                                      "returnType": null
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
                              "superTypeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
              "superTypeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
