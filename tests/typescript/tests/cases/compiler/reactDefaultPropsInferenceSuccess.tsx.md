__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 92
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "when",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 101
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 113,
                            "end": 119
                          },
                          "start": 111,
                          "end": 119
                        },
                        "start": 106,
                        "end": 119
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 124,
                        "end": 131
                      },
                      "start": 121,
                      "end": 131
                    },
                    "start": 105,
                    "end": 131
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 135,
                      "end": 138
                    },
                    "start": 135,
                    "end": 138
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 141,
                      "end": 144
                    },
                    "start": 141,
                    "end": 144
                  }
                ],
                "start": 104,
                "end": 144
              },
              "start": 102,
              "end": 144
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 145
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 153
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              },
              "start": 154,
              "end": 163
            },
            "accessibility": null,
            "static": false,
            "start": 148,
            "end": 164
          }
        ],
        "start": 93,
        "end": 166
      },
      "declare": false,
      "start": 73,
      "end": 166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 183
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 201
          },
          "typeArguments": null,
          "start": 192,
          "end": 201
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 202,
        "end": 205
      },
      "declare": false,
      "start": 168,
      "end": 205
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldFeedback",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 226
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 242
              },
              "typeArguments": null,
              "start": 237,
              "end": 242
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 254
              },
              "typeArguments": null,
              "start": 245,
              "end": 254
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 227,
            "end": 254
          }
        ],
        "start": 226,
        "end": 255
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 269
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 279
        },
        "optional": false,
        "computed": false,
        "start": 264,
        "end": 279
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 281
            },
            "typeArguments": null,
            "start": 280,
            "end": 281
          }
        ],
        "start": 279,
        "end": 282
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 306
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "when",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 319
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 327,
                      "end": 331
                    },
                    "id": null,
                    "generator": false,
                    "start": 321,
                    "end": 331
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 315,
                  "end": 331
                }
              ],
              "start": 309,
              "end": 335
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 287,
            "end": 336
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 346
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 363,
                          "end": 366
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 362,
                        "end": 367
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 367,
                          "end": 372
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 374,
                          "end": 377
                        },
                        "start": 372,
                        "end": 378
                      },
                      "start": 362,
                      "end": 378
                    },
                    "start": 355,
                    "end": 379
                  }
                ],
                "start": 349,
                "end": 383
              },
              "expression": false,
              "start": 346,
              "end": 383
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 340,
            "end": 383
          }
        ],
        "start": 283,
        "end": 385
      },
      "abstract": false,
      "declare": false,
      "start": 207,
      "end": 385
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 404
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FieldFeedback",
                  "start": 414,
                  "end": 427
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "when",
                      "start": 428,
                      "end": 432
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 434,
                            "end": 439
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 445,
                              "end": 450
                            },
                            "prefix": true,
                            "start": 444,
                            "end": 450
                          },
                          "prefix": true,
                          "start": 443,
                          "end": 450
                        },
                        "id": null,
                        "generator": false,
                        "start": 434,
                        "end": 450
                      },
                      "start": 433,
                      "end": 451
                    },
                    "start": 428,
                    "end": 451
                  }
                ],
                "selfClosing": true,
                "start": 413,
                "end": 454
              },
              "children": [],
              "closingElement": null,
              "start": 413,
              "end": 454
            },
            "id": null,
            "generator": false,
            "start": 407,
            "end": 454
          },
          "definite": false,
          "start": 399,
          "end": 454
        }
      ],
      "declare": false,
      "start": 393,
      "end": 455
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test2",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 509
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FieldFeedback",
                  "start": 519,
                  "end": 532
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "when",
                      "start": 533,
                      "end": 537
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 539,
                            "end": 544
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 548,
                              "end": 555
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 556,
                              "end": 559
                            },
                            "optional": false,
                            "computed": false,
                            "start": 548,
                            "end": 559
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 560,
                              "end": 565
                            }
                          ],
                          "optional": false,
                          "start": 548,
                          "end": 566
                        },
                        "id": null,
                        "generator": false,
                        "start": 539,
                        "end": 566
                      },
                      "start": 538,
                      "end": 567
                    },
                    "start": 533,
                    "end": 567
                  }
                ],
                "selfClosing": true,
                "start": 518,
                "end": 570
              },
              "children": [],
              "closingElement": null,
              "start": 518,
              "end": 570
            },
            "id": null,
            "generator": false,
            "start": 512,
            "end": 570
          },
          "definite": false,
          "start": 504,
          "end": 570
        }
      ],
      "declare": false,
      "start": 498,
      "end": 571
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldFeedbackBeta",
        "optional": false,
        "typeAnnotation": null,
        "start": 579,
        "end": 596
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 598
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 612
              },
              "typeArguments": null,
              "start": 607,
              "end": 612
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 624
              },
              "typeArguments": null,
              "start": 615,
              "end": 624
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 597,
            "end": 624
          }
        ],
        "start": 596,
        "end": 625
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 634,
          "end": 639
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 640,
          "end": 649
        },
        "optional": false,
        "computed": false,
        "start": 634,
        "end": 649
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 651
            },
            "typeArguments": null,
            "start": 650,
            "end": 651
          }
        ],
        "start": 649,
        "end": 652
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 676
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 687
                },
                "typeArguments": null,
                "start": 678,
                "end": 687
              },
              "start": 676,
              "end": 687
            },
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "when",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 700
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 708,
                      "end": 712
                    },
                    "id": null,
                    "generator": false,
                    "start": 702,
                    "end": 712
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 696,
                  "end": 712
                }
              ],
              "start": 690,
              "end": 716
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 657,
            "end": 717
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 727
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 744,
                          "end": 747
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 743,
                        "end": 748
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 748,
                          "end": 753
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 755,
                          "end": 758
                        },
                        "start": 753,
                        "end": 759
                      },
                      "start": 743,
                      "end": 759
                    },
                    "start": 736,
                    "end": 760
                  }
                ],
                "start": 730,
                "end": 764
              },
              "expression": false,
              "start": 727,
              "end": 764
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 721,
            "end": 764
          }
        ],
        "start": 653,
        "end": 766
      },
      "abstract": false,
      "declare": false,
      "start": 573,
      "end": 766
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 786
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FieldFeedbackBeta",
                  "start": 796,
                  "end": 813
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "when",
                      "start": 814,
                      "end": 818
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 820,
                            "end": 825
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 831,
                              "end": 836
                            },
                            "prefix": true,
                            "start": 830,
                            "end": 836
                          },
                          "prefix": true,
                          "start": 829,
                          "end": 836
                        },
                        "id": null,
                        "generator": false,
                        "start": 820,
                        "end": 836
                      },
                      "start": 819,
                      "end": 837
                    },
                    "start": 814,
                    "end": 837
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "error",
                      "start": 838,
                      "end": 843
                    },
                    "value": null,
                    "start": 838,
                    "end": 843
                  }
                ],
                "selfClosing": false,
                "start": 795,
                "end": 844
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hah",
                  "raw": "Hah",
                  "start": 844,
                  "end": 847
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FieldFeedbackBeta",
                  "start": 849,
                  "end": 866
                },
                "start": 847,
                "end": 867
              },
              "start": 795,
              "end": 867
            },
            "id": null,
            "generator": false,
            "start": 789,
            "end": 867
          },
          "definite": false,
          "start": 780,
          "end": 867
        }
      ],
      "declare": false,
      "start": 774,
      "end": 868
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 917,
            "end": 923
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FieldFeedbackBeta",
                  "start": 933,
                  "end": 950
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "when",
                      "start": 951,
                      "end": 955
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 957,
                            "end": 962
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 966,
                              "end": 973
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 974,
                              "end": 977
                            },
                            "optional": false,
                            "computed": false,
                            "start": 966,
                            "end": 977
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 978,
                              "end": 983
                            }
                          ],
                          "optional": false,
                          "start": 966,
                          "end": 984
                        },
                        "id": null,
                        "generator": false,
                        "start": 957,
                        "end": 984
                      },
                      "start": 956,
                      "end": 985
                    },
                    "start": 951,
                    "end": 985
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "error",
                      "start": 986,
                      "end": 991
                    },
                    "value": null,
                    "start": 986,
                    "end": 991
                  }
                ],
                "selfClosing": false,
                "start": 932,
                "end": 992
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hah",
                  "raw": "Hah",
                  "start": 992,
                  "end": 995
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FieldFeedbackBeta",
                  "start": 997,
                  "end": 1014
                },
                "start": 995,
                "end": 1015
              },
              "start": 932,
              "end": 1015
            },
            "id": null,
            "generator": false,
            "start": 926,
            "end": 1015
          },
          "definite": false,
          "start": 917,
          "end": 1015
        }
      ],
      "declare": false,
      "start": 911,
      "end": 1016
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyPropsProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1028,
        "end": 1040
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 1049,
            "end": 1054
          },
          "typeArguments": null,
          "start": 1049,
          "end": 1054
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "when",
              "optional": false,
              "typeAnnotation": null,
              "start": 1059,
              "end": 1063
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1073,
                        "end": 1079
                      },
                      "start": 1071,
                      "end": 1079
                    },
                    "start": 1066,
                    "end": 1079
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1084,
                    "end": 1091
                  },
                  "start": 1081,
                  "end": 1091
                },
                "start": 1065,
                "end": 1091
              },
              "start": 1063,
              "end": 1091
            },
            "accessibility": null,
            "static": false,
            "start": 1059,
            "end": 1092
          }
        ],
        "start": 1055,
        "end": 1094
      },
      "declare": false,
      "start": 1018,
      "end": 1094
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldFeedback2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1102,
        "end": 1116
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1117,
              "end": 1118
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyPropsProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1127,
                "end": 1139
              },
              "typeArguments": null,
              "start": 1127,
              "end": 1139
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyPropsProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1142,
                "end": 1154
              },
              "typeArguments": null,
              "start": 1142,
              "end": 1154
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1117,
            "end": 1154
          }
        ],
        "start": 1116,
        "end": 1155
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldFeedback",
        "optional": false,
        "typeAnnotation": null,
        "start": 1164,
        "end": 1177
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1179
            },
            "typeArguments": null,
            "start": 1178,
            "end": 1179
          }
        ],
        "start": 1177,
        "end": 1180
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1192,
              "end": 1204
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "when",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1213,
                    "end": 1217
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1225,
                      "end": 1229
                    },
                    "id": null,
                    "generator": false,
                    "start": 1219,
                    "end": 1229
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1213,
                  "end": 1229
                }
              ],
              "start": 1207,
              "end": 1233
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1185,
            "end": 1234
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1244
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
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1253,
                            "end": 1257
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1258,
                            "end": 1263
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1253,
                          "end": 1263
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "when",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1264,
                          "end": 1268
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1253,
                        "end": 1268
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "now",
                          "raw": "\"now\"",
                          "start": 1269,
                          "end": 1274
                        }
                      ],
                      "optional": false,
                      "start": 1253,
                      "end": 1275
                    },
                    "directive": null,
                    "start": 1253,
                    "end": 1276
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 1311,
                          "end": 1314
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 1310,
                        "end": 1315
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 1315,
                          "end": 1320
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 1322,
                          "end": 1325
                        },
                        "start": 1320,
                        "end": 1326
                      },
                      "start": 1310,
                      "end": 1326
                    },
                    "start": 1303,
                    "end": 1327
                  }
                ],
                "start": 1247,
                "end": 1331
              },
              "expression": false,
              "start": 1244,
              "end": 1331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1238,
            "end": 1331
          }
        ],
        "start": 1181,
        "end": 1333
      },
      "abstract": false,
      "declare": false,
      "start": 1096,
      "end": 1333
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1347,
            "end": 1352
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FieldFeedback2",
                  "start": 1362,
                  "end": 1376
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "when",
                      "start": 1377,
                      "end": 1381
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1383,
                            "end": 1388
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1394,
                              "end": 1399
                            },
                            "prefix": true,
                            "start": 1393,
                            "end": 1399
                          },
                          "prefix": true,
                          "start": 1392,
                          "end": 1399
                        },
                        "id": null,
                        "generator": false,
                        "start": 1383,
                        "end": 1399
                      },
                      "start": 1382,
                      "end": 1400
                    },
                    "start": 1377,
                    "end": 1400
                  }
                ],
                "selfClosing": true,
                "start": 1361,
                "end": 1403
              },
              "children": [],
              "closingElement": null,
              "start": 1361,
              "end": 1403
            },
            "id": null,
            "generator": false,
            "start": 1355,
            "end": 1403
          },
          "definite": false,
          "start": 1347,
          "end": 1403
        }
      ],
      "declare": false,
      "start": 1341,
      "end": 1404
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1453,
            "end": 1458
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FieldFeedback2",
                  "start": 1468,
                  "end": 1482
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "when",
                      "start": 1483,
                      "end": 1487
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1489,
                            "end": 1494
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1498,
                              "end": 1505
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1506,
                              "end": 1509
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1498,
                            "end": 1509
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1510,
                              "end": 1515
                            }
                          ],
                          "optional": false,
                          "start": 1498,
                          "end": 1516
                        },
                        "id": null,
                        "generator": false,
                        "start": 1489,
                        "end": 1516
                      },
                      "start": 1488,
                      "end": 1517
                    },
                    "start": 1483,
                    "end": 1517
                  }
                ],
                "selfClosing": true,
                "start": 1467,
                "end": 1520
              },
              "children": [],
              "closingElement": null,
              "start": 1467,
              "end": 1520
            },
            "id": null,
            "generator": false,
            "start": 1461,
            "end": 1520
          },
          "definite": false,
          "start": 1453,
          "end": 1520
        }
      ],
      "declare": false,
      "start": 1447,
      "end": 1521
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1535,
            "end": 1540
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FieldFeedback2",
                  "start": 1550,
                  "end": 1564
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 1549,
                "end": 1567
              },
              "children": [],
              "closingElement": null,
              "start": 1549,
              "end": 1567
            },
            "id": null,
            "generator": false,
            "start": 1543,
            "end": 1567
          },
          "definite": false,
          "start": 1535,
          "end": 1567
        }
      ],
      "declare": false,
      "start": 1529,
      "end": 1568
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 1568
}
```
