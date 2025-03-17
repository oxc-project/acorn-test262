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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 30,
          "name": "SimpleConstructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 31,
          "end": 105,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 82,
              "end": 103,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 82,
                "end": 93,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 93,
                "end": 103,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 96,
                  "end": 103,
                  "body": []
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 106,
      "end": 335,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 113,
        "end": 335,
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 144,
          "name": "ConstructorWithParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 145,
          "end": 335,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 200,
              "end": 333,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 200,
                "end": 211,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 211,
                "end": 333,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 241,
                    "end": 250,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 242,
                      "end": 250,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 244,
                        "end": 250
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 296,
                    "end": 305,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 305,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 307,
                  "end": 333,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 317,
                      "end": 327,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 321,
                          "end": 326,
                          "id": {
                            "type": "Identifier",
                            "start": 321,
                            "end": 322,
                            "name": "d",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 326,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 337,
      "end": 472,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 344,
        "end": 472,
        "id": {
          "type": "Identifier",
          "start": 350,
          "end": 378,
          "name": "ConstructorWithRestParamters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 379,
          "end": 472,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 385,
              "end": 470,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 385,
                "end": 396,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 396,
                "end": 470,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 397,
                    "end": 406,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 398,
                      "end": 406,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 400,
                        "end": 406
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 408,
                    "end": 426,
                    "argument": {
                      "type": "Identifier",
                      "start": 411,
                      "end": 416,
                      "name": "rests",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "rests",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 455,
                              "end": 459,
                              "name": "join",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 460,
                              "end": 462,
                              "value": "",
                              "raw": "\"\""
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 474,
      "end": 603,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 481,
        "end": 603,
        "id": {
          "type": "Identifier",
          "start": 487,
          "end": 511,
          "name": "ConstructorWithOverloads",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 512,
          "end": 603,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 518,
              "end": 541,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 518,
                "end": 529,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 529,
                "end": 541,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 530,
                    "end": 539,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 531,
                      "end": 539,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 533,
                        "end": 539
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
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
              "type": "MethodDefinition",
              "start": 546,
              "end": 569,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 546,
                "end": 557,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 557,
                "end": 569,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 558,
                    "end": 567,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 559,
                      "end": 567,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 561,
                        "end": 567
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
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
              "type": "MethodDefinition",
              "start": 574,
              "end": 601,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 574,
                "end": 585,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 585,
                "end": 601,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 586,
                    "end": 592,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 587,
                      "end": 592,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 589,
                        "end": 592
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 594,
                  "end": 601,
                  "body": []
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 605,
      "end": 702,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 612,
        "end": 702,
        "id": {
          "type": "Identifier",
          "start": 618,
          "end": 656,
          "name": "ConstructorWithPublicParameterProperty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 657,
          "end": 702,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 663,
              "end": 700,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 663,
                "end": 674,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 674,
                "end": 700,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 683,
                        "end": 691,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 685,
                          "end": 691
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 693,
                  "end": 700,
                  "body": []
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 704,
      "end": 803,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 711,
        "end": 803,
        "id": {
          "type": "Identifier",
          "start": 717,
          "end": 756,
          "name": "ConstructorWithPrivateParameterProperty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 757,
          "end": 803,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 763,
              "end": 801,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 763,
                "end": 774,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 774,
                "end": 801,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 784,
                        "end": 792,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 786,
                          "end": 792
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 794,
                  "end": 801,
                  "body": []
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 805,
      "end": 905,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 812,
        "end": 905,
        "id": {
          "type": "Identifier",
          "start": 818,
          "end": 858,
          "name": "ConstructorWithOptionalParameterProperty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 859,
          "end": 905,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 865,
              "end": 903,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 865,
                "end": 876,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 876,
                "end": 903,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 886,
                        "end": 894,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 888,
                          "end": 894
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 896,
                  "end": 903,
                  "body": []
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 907,
      "end": 1003,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 914,
        "end": 1003,
        "id": {
          "type": "Identifier",
          "start": 920,
          "end": 955,
          "name": "ConstructorWithParameterInitializer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 956,
          "end": 1003,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 962,
              "end": 1001,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 962,
                "end": 973,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 973,
                "end": 1001,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "left": {
                        "type": "Identifier",
                        "start": 981,
                        "end": 982,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 985,
                        "end": 992,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 994,
                  "end": 1001,
                  "body": []
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 29,
        "name": "GlobalSimpleConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 104,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 102,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 92,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 102,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 102,
                "body": []
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
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 142,
        "name": "GlobalConstructorWithParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 143,
        "end": 333,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 198,
            "end": 331,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 209,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 331,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 239,
                  "end": 248,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 240,
                    "end": 248,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 242,
                      "end": 248
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 294,
                  "end": 303,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 295,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 297,
                      "end": 303
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 305,
                "end": 331,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 315,
                    "end": 325,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 319,
                        "end": 324,
                        "id": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 320,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 324,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 469,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 375,
        "name": "GlobalConstructorWithRestParamters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 376,
        "end": 469,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 382,
            "end": 467,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 382,
              "end": 393,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 393,
              "end": 467,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 394,
                  "end": 403,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 395,
                    "end": 403,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 397,
                      "end": 403
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 405,
                  "end": 423,
                  "argument": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 413,
                    "name": "rests",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "rests",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 456,
                            "name": "join",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 457,
                            "end": 459,
                            "value": "",
                            "raw": "\"\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
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
    {
      "type": "ClassDeclaration",
      "start": 471,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 507,
        "name": "GlobalConstructorWithOverloads",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 508,
        "end": 599,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 514,
            "end": 537,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 514,
              "end": 525,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 525,
              "end": 537,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 526,
                  "end": 535,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 527,
                    "end": 535,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 529,
                      "end": 535
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "type": "MethodDefinition",
            "start": 542,
            "end": 565,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 542,
              "end": 553,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 553,
              "end": 565,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 554,
                  "end": 563,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 555,
                    "end": 563,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 557,
                      "end": 563
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "type": "MethodDefinition",
            "start": 570,
            "end": 597,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 581,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 581,
              "end": 597,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 582,
                  "end": 588,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 583,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 585,
                      "end": 588
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 590,
                "end": 597,
                "body": []
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
    {
      "type": "ClassDeclaration",
      "start": 601,
      "end": 697,
      "id": {
        "type": "Identifier",
        "start": 607,
        "end": 651,
        "name": "GlobalConstructorWithPublicParameterProperty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 652,
        "end": 697,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 658,
            "end": 695,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 658,
              "end": 669,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 669,
              "end": 695,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 678,
                      "end": 686,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 680,
                        "end": 686
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 688,
                "end": 695,
                "body": []
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
    {
      "type": "ClassDeclaration",
      "start": 699,
      "end": 797,
      "id": {
        "type": "Identifier",
        "start": 705,
        "end": 750,
        "name": "GlobalConstructorWithPrivateParameterProperty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 751,
        "end": 797,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 757,
            "end": 795,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 757,
              "end": 768,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 768,
              "end": 795,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 778,
                      "end": 786,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 780,
                        "end": 786
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 788,
                "end": 795,
                "body": []
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
    {
      "type": "ClassDeclaration",
      "start": 799,
      "end": 898,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 851,
        "name": "GlobalConstructorWithOptionalParameterProperty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 852,
        "end": 898,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 858,
            "end": 896,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 858,
              "end": 869,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 869,
              "end": 896,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 879,
                      "end": 887,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 881,
                        "end": 887
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 889,
                "end": 896,
                "body": []
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
    {
      "type": "ClassDeclaration",
      "start": 900,
      "end": 995,
      "id": {
        "type": "Identifier",
        "start": 906,
        "end": 947,
        "name": "GlobalConstructorWithParameterInitializer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 948,
        "end": 995,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 954,
            "end": 993,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 954,
              "end": 965,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 965,
              "end": 993,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "left": {
                      "type": "Identifier",
                      "start": 973,
                      "end": 974,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 977,
                      "end": 984,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 986,
                "end": 993,
                "body": []
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
