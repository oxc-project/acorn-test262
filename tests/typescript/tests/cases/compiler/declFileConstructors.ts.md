__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SimpleConstructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 30
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 93
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 96,
                  "end": 103
                },
                "expression": false,
                "start": 93,
                "end": 103
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 82,
              "end": 103
            }
          ],
          "start": 31,
          "end": 105
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 105
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 105
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorWithParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 144
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 211
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 244,
                        "end": 250
                      },
                      "start": 242,
                      "end": 250
                    },
                    "start": 241,
                    "end": 250
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
                      },
                      "start": 297,
                      "end": 305
                    },
                    "start": 296,
                    "end": 305
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 321,
                            "end": 322
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 326
                          },
                          "definite": false,
                          "start": 321,
                          "end": 326
                        }
                      ],
                      "declare": false,
                      "start": 317,
                      "end": 327
                    }
                  ],
                  "start": 307,
                  "end": 333
                },
                "expression": false,
                "start": 211,
                "end": 333
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 200,
              "end": 333
            }
          ],
          "start": 145,
          "end": 335
        },
        "abstract": false,
        "declare": false,
        "start": 113,
        "end": 335
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 106,
      "end": 335
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorWithRestParamters",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 378
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 396
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 400,
                        "end": 406
                      },
                      "start": 398,
                      "end": 406
                    },
                    "start": 397,
                    "end": 406
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 416
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 418,
                          "end": 424
                        },
                        "start": 418,
                        "end": 426
                      },
                      "start": 416,
                      "end": 426
                    },
                    "value": null,
                    "start": 408,
                    "end": 426
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 446
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rests",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 449,
                              "end": 454
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 455,
                              "end": 459
                            },
                            "optional": false,
                            "computed": false,
                            "start": 449,
                            "end": 459
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 460,
                              "end": 462
                            }
                          ],
                          "optional": false,
                          "start": 449,
                          "end": 463
                        },
                        "start": 445,
                        "end": 463
                      },
                      "start": 438,
                      "end": 464
                    }
                  ],
                  "start": 428,
                  "end": 470
                },
                "expression": false,
                "start": 396,
                "end": 470
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 385,
              "end": 470
            }
          ],
          "start": 379,
          "end": 472
        },
        "abstract": false,
        "declare": false,
        "start": 344,
        "end": 472
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 337,
      "end": 472
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorWithOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 487,
          "end": 511
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 529
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 533,
                        "end": 539
                      },
                      "start": 531,
                      "end": 539
                    },
                    "start": 530,
                    "end": 539
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 529,
                "end": 541
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 518,
              "end": 541
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 557
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 561,
                        "end": 567
                      },
                      "start": 559,
                      "end": 567
                    },
                    "start": 558,
                    "end": 567
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 557,
                "end": 569
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 546,
              "end": 569
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 585
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 589,
                        "end": 592
                      },
                      "start": 587,
                      "end": 592
                    },
                    "start": 586,
                    "end": 592
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 594,
                  "end": 601
                },
                "expression": false,
                "start": 585,
                "end": 601
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 574,
              "end": 601
            }
          ],
          "start": 512,
          "end": 603
        },
        "abstract": false,
        "declare": false,
        "start": 481,
        "end": 603
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 474,
      "end": 603
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorWithPublicParameterProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 656
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 674
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 685,
                          "end": 691
                        },
                        "start": 683,
                        "end": 691
                      },
                      "start": 682,
                      "end": 691
                    },
                    "readonly": false,
                    "static": false,
                    "start": 675,
                    "end": 691
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 693,
                  "end": 700
                },
                "expression": false,
                "start": 674,
                "end": 700
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 663,
              "end": 700
            }
          ],
          "start": 657,
          "end": 702
        },
        "abstract": false,
        "declare": false,
        "start": 612,
        "end": 702
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 605,
      "end": 702
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorWithPrivateParameterProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 717,
          "end": 756
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 763,
                "end": 774
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 786,
                          "end": 792
                        },
                        "start": 784,
                        "end": 792
                      },
                      "start": 783,
                      "end": 792
                    },
                    "readonly": false,
                    "static": false,
                    "start": 775,
                    "end": 792
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 794,
                  "end": 801
                },
                "expression": false,
                "start": 774,
                "end": 801
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 763,
              "end": 801
            }
          ],
          "start": 757,
          "end": 803
        },
        "abstract": false,
        "declare": false,
        "start": 711,
        "end": 803
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 704,
      "end": 803
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorWithOptionalParameterProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 818,
          "end": 858
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 865,
                "end": 876
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 888,
                          "end": 894
                        },
                        "start": 886,
                        "end": 894
                      },
                      "start": 884,
                      "end": 894
                    },
                    "readonly": false,
                    "static": false,
                    "start": 877,
                    "end": 894
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 896,
                  "end": 903
                },
                "expression": false,
                "start": 876,
                "end": 903
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 865,
              "end": 903
            }
          ],
          "start": 859,
          "end": 905
        },
        "abstract": false,
        "declare": false,
        "start": 812,
        "end": 905
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 805,
      "end": 905
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorWithParameterInitializer",
          "optional": false,
          "typeAnnotation": null,
          "start": 920,
          "end": 955
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 962,
                "end": 973
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 981,
                        "end": 982
                      },
                      "right": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 985,
                        "end": 992
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 981,
                      "end": 992
                    },
                    "readonly": false,
                    "static": false,
                    "start": 974,
                    "end": 992
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 994,
                  "end": 1001
                },
                "expression": false,
                "start": 973,
                "end": 1001
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 962,
              "end": 1001
            }
          ],
          "start": 956,
          "end": 1003
        },
        "abstract": false,
        "declare": false,
        "start": 914,
        "end": 1003
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 907,
      "end": 1003
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1004
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalSimpleConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 29
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 92
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 95,
                "end": 102
              },
              "expression": false,
              "start": 92,
              "end": 102
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 81,
            "end": 102
          }
        ],
        "start": 30,
        "end": 104
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 104
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalConstructorWithParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 142
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 209
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 242,
                      "end": 248
                    },
                    "start": 240,
                    "end": 248
                  },
                  "start": 239,
                  "end": 248
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 297,
                      "end": 303
                    },
                    "start": 295,
                    "end": 303
                  },
                  "start": 294,
                  "end": 303
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 320
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 324
                        },
                        "definite": false,
                        "start": 319,
                        "end": 324
                      }
                    ],
                    "declare": false,
                    "start": 315,
                    "end": 325
                  }
                ],
                "start": 305,
                "end": 331
              },
              "expression": false,
              "start": 209,
              "end": 331
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 198,
            "end": 331
          }
        ],
        "start": 143,
        "end": 333
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 333
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalConstructorWithRestParamters",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 375
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 393
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 397,
                      "end": 403
                    },
                    "start": 395,
                    "end": 403
                  },
                  "start": 394,
                  "end": 403
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 408,
                    "end": 413
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 415,
                        "end": 421
                      },
                      "start": 415,
                      "end": 423
                    },
                    "start": 413,
                    "end": 423
                  },
                  "value": null,
                  "start": 405,
                  "end": 423
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 442,
                        "end": 443
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rests",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 446,
                            "end": 451
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 452,
                            "end": 456
                          },
                          "optional": false,
                          "computed": false,
                          "start": 446,
                          "end": 456
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 457,
                            "end": 459
                          }
                        ],
                        "optional": false,
                        "start": 446,
                        "end": 460
                      },
                      "start": 442,
                      "end": 460
                    },
                    "start": 435,
                    "end": 461
                  }
                ],
                "start": 425,
                "end": 467
              },
              "expression": false,
              "start": 393,
              "end": 467
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 382,
            "end": 467
          }
        ],
        "start": 376,
        "end": 469
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 469
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalConstructorWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 507
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 525
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 529,
                      "end": 535
                    },
                    "start": 527,
                    "end": 535
                  },
                  "start": 526,
                  "end": 535
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 525,
              "end": 537
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 514,
            "end": 537
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 553
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 557,
                      "end": 563
                    },
                    "start": 555,
                    "end": 563
                  },
                  "start": 554,
                  "end": 563
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 553,
              "end": 565
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 542,
            "end": 565
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 581
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 585,
                      "end": 588
                    },
                    "start": 583,
                    "end": 588
                  },
                  "start": 582,
                  "end": 588
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 590,
                "end": 597
              },
              "expression": false,
              "start": 581,
              "end": 597
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 570,
            "end": 597
          }
        ],
        "start": 508,
        "end": 599
      },
      "abstract": false,
      "declare": false,
      "start": 471,
      "end": 599
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalConstructorWithPublicParameterProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 651
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 669
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 680,
                        "end": 686
                      },
                      "start": 678,
                      "end": 686
                    },
                    "start": 677,
                    "end": 686
                  },
                  "readonly": false,
                  "static": false,
                  "start": 670,
                  "end": 686
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 688,
                "end": 695
              },
              "expression": false,
              "start": 669,
              "end": 695
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 658,
            "end": 695
          }
        ],
        "start": 652,
        "end": 697
      },
      "abstract": false,
      "declare": false,
      "start": 601,
      "end": 697
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalConstructorWithPrivateParameterProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 705,
        "end": 750
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 757,
              "end": 768
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 780,
                        "end": 786
                      },
                      "start": 778,
                      "end": 786
                    },
                    "start": 777,
                    "end": 786
                  },
                  "readonly": false,
                  "static": false,
                  "start": 769,
                  "end": 786
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 788,
                "end": 795
              },
              "expression": false,
              "start": 768,
              "end": 795
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 757,
            "end": 795
          }
        ],
        "start": 751,
        "end": 797
      },
      "abstract": false,
      "declare": false,
      "start": 699,
      "end": 797
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalConstructorWithOptionalParameterProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 851
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 869
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 881,
                        "end": 887
                      },
                      "start": 879,
                      "end": 887
                    },
                    "start": 877,
                    "end": 887
                  },
                  "readonly": false,
                  "static": false,
                  "start": 870,
                  "end": 887
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 889,
                "end": 896
              },
              "expression": false,
              "start": 869,
              "end": 896
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 858,
            "end": 896
          }
        ],
        "start": 852,
        "end": 898
      },
      "abstract": false,
      "declare": false,
      "start": 799,
      "end": 898
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalConstructorWithParameterInitializer",
        "optional": false,
        "typeAnnotation": null,
        "start": 906,
        "end": 947
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 965
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 973,
                      "end": 974
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 977,
                      "end": 984
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 984
                  },
                  "readonly": false,
                  "static": false,
                  "start": 966,
                  "end": 984
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 986,
                "end": 993
              },
              "expression": false,
              "start": 965,
              "end": 993
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 954,
            "end": 993
          }
        ],
        "start": 948,
        "end": 995
      },
      "abstract": false,
      "declare": false,
      "start": 900,
      "end": 995
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 995
}
```
