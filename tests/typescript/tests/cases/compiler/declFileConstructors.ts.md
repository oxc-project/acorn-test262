__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1004,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 105,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 105,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 30,
          "decorators": [],
          "name": "SimpleConstructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 31,
          "end": 105,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 82,
              "end": 103,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 82,
                "end": 93,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 93,
                "end": 103,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 96,
                  "end": 103,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 106,
      "end": 335,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 113,
        "end": 335,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 144,
          "decorators": [],
          "name": "ConstructorWithParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 145,
          "end": 335,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 200,
              "end": 333,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 200,
                "end": 211,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 211,
                "end": 333,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 241,
                    "end": 250,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 242,
                      "end": 250,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 244,
                        "end": 250
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 296,
                    "end": 305,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 305,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 307,
                  "end": 333,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 317,
                      "end": 327,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 321,
                          "end": 326,
                          "id": {
                            "type": "Identifier",
                            "start": 321,
                            "end": 322,
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 326,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 337,
      "end": 472,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 344,
        "end": 472,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 350,
          "end": 378,
          "decorators": [],
          "name": "ConstructorWithRestParamters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 379,
          "end": 472,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 385,
              "end": 470,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 385,
                "end": 396,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 396,
                "end": 470,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 397,
                    "end": 406,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 398,
                      "end": 406,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 400,
                        "end": 406
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 408,
                    "end": 426,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 411,
                      "end": 416,
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 416,
                      "end": 426,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 418,
                        "end": 426,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 418,
                          "end": 424
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 428,
                  "end": 470,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 438,
                      "end": 464,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 445,
                        "end": 463,
                        "left": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "start": 449,
                          "end": 463,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 449,
                            "end": 459,
                            "object": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 454,
                              "decorators": [],
                              "name": "rests",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 455,
                              "end": 459,
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 460,
                              "end": 462,
                              "value": "",
                              "raw": "\"\""
                            }
                          ],
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 474,
      "end": 603,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 481,
        "end": 603,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 487,
          "end": 511,
          "decorators": [],
          "name": "ConstructorWithOverloads",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 512,
          "end": 603,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 518,
              "end": 541,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 518,
                "end": 529,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 529,
                "end": 541,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 530,
                    "end": 539,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 531,
                      "end": 539,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 533,
                        "end": 539
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 546,
              "end": 569,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 546,
                "end": 557,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 557,
                "end": 569,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 558,
                    "end": 567,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 559,
                      "end": 567,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 561,
                        "end": 567
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 574,
              "end": 601,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 574,
                "end": 585,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 585,
                "end": 601,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 586,
                    "end": 592,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 587,
                      "end": 592,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 589,
                        "end": 592
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 594,
                  "end": 601,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 605,
      "end": 702,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 612,
        "end": 702,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 618,
          "end": 656,
          "decorators": [],
          "name": "ConstructorWithPublicParameterProperty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 657,
          "end": 702,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 663,
              "end": 700,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 663,
                "end": 674,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 674,
                "end": 700,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 675,
                    "end": 691,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 682,
                      "end": 691,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 683,
                        "end": 691,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 685,
                          "end": 691
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 693,
                  "end": 700,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 704,
      "end": 803,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 711,
        "end": 803,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 717,
          "end": 756,
          "decorators": [],
          "name": "ConstructorWithPrivateParameterProperty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 757,
          "end": 803,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 763,
              "end": 801,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 763,
                "end": 774,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 774,
                "end": 801,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 775,
                    "end": 792,
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 783,
                      "end": 792,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 784,
                        "end": 792,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 786,
                          "end": 792
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 794,
                  "end": 801,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 805,
      "end": 905,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 812,
        "end": 905,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 818,
          "end": 858,
          "decorators": [],
          "name": "ConstructorWithOptionalParameterProperty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 859,
          "end": 905,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 865,
              "end": 903,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 865,
                "end": 876,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 876,
                "end": 903,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 877,
                    "end": 894,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 884,
                      "end": 894,
                      "decorators": [],
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 886,
                        "end": 894,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 888,
                          "end": 894
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 896,
                  "end": 903,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 907,
      "end": 1003,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 914,
        "end": 1003,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 920,
          "end": 955,
          "decorators": [],
          "name": "ConstructorWithParameterInitializer",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 956,
          "end": 1003,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 962,
              "end": 1001,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 962,
                "end": 973,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 973,
                "end": 1001,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 974,
                    "end": 992,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "start": 981,
                      "end": 992,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 981,
                        "end": 982,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 985,
                        "end": 992,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 994,
                  "end": 1001,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 995,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 104,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 29,
        "decorators": [],
        "name": "GlobalSimpleConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 104,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 92,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 102,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 102,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 333,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 142,
        "decorators": [],
        "name": "GlobalConstructorWithParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 143,
        "end": 333,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 198,
            "end": 331,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 209,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 331,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 239,
                  "end": 248,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 240,
                    "end": 248,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 242,
                      "end": 248
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 294,
                  "end": 303,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 295,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 297,
                      "end": 303
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 305,
                "end": 331,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 315,
                    "end": 325,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 319,
                        "end": 324,
                        "id": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 320,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 324,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 469,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 375,
        "decorators": [],
        "name": "GlobalConstructorWithRestParamters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 376,
        "end": 469,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 382,
            "end": 467,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 382,
              "end": 393,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 393,
              "end": 467,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 394,
                  "end": 403,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 395,
                    "end": 403,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 397,
                      "end": 403
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 405,
                  "end": 423,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 413,
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 413,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 415,
                      "end": 423,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 415,
                        "end": 421
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 425,
                "end": 467,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 435,
                    "end": 461,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 442,
                      "end": 460,
                      "left": {
                        "type": "Identifier",
                        "start": 442,
                        "end": 443,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 446,
                        "end": 460,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 446,
                          "end": 456,
                          "object": {
                            "type": "Identifier",
                            "start": 446,
                            "end": 451,
                            "decorators": [],
                            "name": "rests",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 456,
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 457,
                            "end": 459,
                            "value": "",
                            "raw": "\"\""
                          }
                        ],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 471,
      "end": 599,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 507,
        "decorators": [],
        "name": "GlobalConstructorWithOverloads",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 508,
        "end": 599,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 514,
            "end": 537,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 514,
              "end": 525,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 525,
              "end": 537,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 526,
                  "end": 535,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 527,
                    "end": 535,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 529,
                      "end": 535
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 542,
            "end": 565,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 542,
              "end": 553,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 553,
              "end": 565,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 554,
                  "end": 563,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 555,
                    "end": 563,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 557,
                      "end": 563
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 570,
            "end": 597,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 581,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 581,
              "end": 597,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 582,
                  "end": 588,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 583,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 585,
                      "end": 588
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 590,
                "end": 597,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 601,
      "end": 697,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 607,
        "end": 651,
        "decorators": [],
        "name": "GlobalConstructorWithPublicParameterProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 652,
        "end": 697,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 658,
            "end": 695,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 658,
              "end": 669,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 669,
              "end": 695,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 670,
                  "end": 686,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 677,
                    "end": 686,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 678,
                      "end": 686,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 680,
                        "end": 686
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 688,
                "end": 695,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 699,
      "end": 797,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 705,
        "end": 750,
        "decorators": [],
        "name": "GlobalConstructorWithPrivateParameterProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 751,
        "end": 797,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 757,
            "end": 795,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 757,
              "end": 768,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 768,
              "end": 795,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 769,
                  "end": 786,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 777,
                    "end": 786,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 778,
                      "end": 786,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 780,
                        "end": 786
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 788,
                "end": 795,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 799,
      "end": 898,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 851,
        "decorators": [],
        "name": "GlobalConstructorWithOptionalParameterProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 852,
        "end": 898,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 858,
            "end": 896,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 858,
              "end": 869,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 869,
              "end": 896,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 870,
                  "end": 887,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 877,
                    "end": 887,
                    "decorators": [],
                    "name": "x",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 879,
                      "end": 887,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 881,
                        "end": 887
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 889,
                "end": 896,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 900,
      "end": 995,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 906,
        "end": 947,
        "decorators": [],
        "name": "GlobalConstructorWithParameterInitializer",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 948,
        "end": 995,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 954,
            "end": 993,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 954,
              "end": 965,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 965,
              "end": 993,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 966,
                  "end": 984,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 973,
                    "end": 984,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 973,
                      "end": 974,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 977,
                      "end": 984,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 986,
                "end": 993,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
