__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57,
    "range": [
      52,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62,
    "range": [
      58,
      62
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 63,
    "end": 70,
    "range": [
      63,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 73,
    "end": 82,
    "range": [
      73,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 83,
    "end": 92,
    "range": [
      83,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 97,
    "end": 101,
    "range": [
      97,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 106,
    "end": 111,
    "range": [
      106,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 121,
    "end": 123,
    "range": [
      121,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 124,
    "end": 131,
    "range": [
      124,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 135,
    "end": 138,
    "range": [
      135,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 141,
    "end": 144,
    "range": [
      141,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 148,
    "end": 153,
    "range": [
      148,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 156,
    "end": 163,
    "range": [
      156,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 168,
    "end": 177,
    "range": [
      168,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 178,
    "end": 183,
    "range": [
      178,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 184,
    "end": 191,
    "range": [
      184,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 192,
    "end": 201,
    "range": [
      192,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 207,
    "end": 212,
    "range": [
      207,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "FieldFeedback",
    "start": 213,
    "end": 226,
    "range": [
      213,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 229,
    "end": 236,
    "range": [
      229,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 237,
    "end": 242,
    "range": [
      237,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 245,
    "end": 254,
    "range": [
      245,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 256,
    "end": 263,
    "range": [
      256,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 264,
    "end": 269,
    "range": [
      264,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 270,
    "end": 279,
    "range": [
      270,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 287,
    "end": 293,
    "range": [
      287,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 294,
    "end": 306,
    "range": [
      294,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 315,
    "end": 319,
    "range": [
      315,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 324,
    "end": 326,
    "range": [
      324,
      326
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 327,
    "end": 331,
    "range": [
      327,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 340,
    "end": 346,
    "range": [
      340,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 355,
    "end": 361,
    "range": [
      355,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 363,
    "end": 366,
    "range": [
      363,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 367,
    "end": 372,
    "range": [
      367,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 374,
    "end": 377,
    "range": [
      374,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 393,
    "end": 398,
    "range": [
      393,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 399,
    "end": 404,
    "range": [
      399,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 410,
    "end": 412,
    "range": [
      410,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "FieldFeedback",
    "start": 414,
    "end": 427,
    "range": [
      414,
      427
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "when",
    "start": 428,
    "end": 432,
    "range": [
      428,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 434,
    "end": 439,
    "range": [
      434,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 440,
    "end": 442,
    "range": [
      440,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 445,
    "end": 450,
    "range": [
      445,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 498,
    "end": 503,
    "range": [
      498,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 504,
    "end": 509,
    "range": [
      504,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 515,
    "end": 517,
    "range": [
      515,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "FieldFeedback",
    "start": 519,
    "end": 532,
    "range": [
      519,
      532
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "when",
    "start": 533,
    "end": 537,
    "range": [
      533,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 539,
    "end": 544,
    "range": [
      539,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 545,
    "end": 547,
    "range": [
      545,
      547
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 548,
    "end": 555,
    "range": [
      548,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 556,
    "end": 559,
    "range": [
      556,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 560,
    "end": 565,
    "range": [
      560,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 573,
    "end": 578,
    "range": [
      573,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "FieldFeedbackBeta",
    "start": 579,
    "end": 596,
    "range": [
      579,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 599,
    "end": 606,
    "range": [
      599,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 607,
    "end": 612,
    "range": [
      607,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 615,
    "end": 624,
    "range": [
      615,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 626,
    "end": 633,
    "range": [
      626,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 634,
    "end": 639,
    "range": [
      634,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 640,
    "end": 649,
    "range": [
      640,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 657,
    "end": 663,
    "range": [
      657,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 664,
    "end": 676,
    "range": [
      664,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 678,
    "end": 687,
    "range": [
      678,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 696,
    "end": 700,
    "range": [
      696,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 705,
    "end": 707,
    "range": [
      705,
      707
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 708,
    "end": 712,
    "range": [
      708,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 721,
    "end": 727,
    "range": [
      721,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 736,
    "end": 742,
    "range": [
      736,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 744,
    "end": 747,
    "range": [
      744,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 748,
    "end": 753,
    "range": [
      748,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 755,
    "end": 758,
    "range": [
      755,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 774,
    "end": 779,
    "range": [
      774,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "Test1a",
    "start": 780,
    "end": 786,
    "range": [
      780,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 792,
    "end": 794,
    "range": [
      792,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "FieldFeedbackBeta",
    "start": 796,
    "end": 813,
    "range": [
      796,
      813
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "when",
    "start": 814,
    "end": 818,
    "range": [
      814,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 820,
    "end": 825,
    "range": [
      820,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 826,
    "end": 828,
    "range": [
      826,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 831,
    "end": 836,
    "range": [
      831,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "error",
    "start": 838,
    "end": 843,
    "range": [
      838,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "JSXText",
    "value": "Hah",
    "start": 844,
    "end": 847,
    "range": [
      844,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "FieldFeedbackBeta",
    "start": 849,
    "end": 866,
    "range": [
      849,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 911,
    "end": 916,
    "range": [
      911,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2a",
    "start": 917,
    "end": 923,
    "range": [
      917,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 929,
    "end": 931,
    "range": [
      929,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "FieldFeedbackBeta",
    "start": 933,
    "end": 950,
    "range": [
      933,
      950
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "when",
    "start": 951,
    "end": 955,
    "range": [
      951,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 957,
    "end": 962,
    "range": [
      957,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 963,
    "end": 965,
    "range": [
      963,
      965
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 966,
    "end": 973,
    "range": [
      966,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 974,
    "end": 977,
    "range": [
      974,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 978,
    "end": 983,
    "range": [
      978,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "error",
    "start": 986,
    "end": 991,
    "range": [
      986,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "JSXText",
    "value": "Hah",
    "start": 992,
    "end": 995,
    "range": [
      992,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "FieldFeedbackBeta",
    "start": 997,
    "end": 1014,
    "range": [
      997,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1018,
    "end": 1027,
    "range": [
      1018,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPropsProps",
    "start": 1028,
    "end": 1040,
    "range": [
      1028,
      1040
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1041,
    "end": 1048,
    "range": [
      1041,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 1049,
    "end": 1054,
    "range": [
      1049,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 1059,
    "end": 1063,
    "range": [
      1059,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1066,
    "end": 1071,
    "range": [
      1066,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1073,
    "end": 1079,
    "range": [
      1073,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1081,
    "end": 1083,
    "range": [
      1081,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1084,
    "end": 1091,
    "range": [
      1084,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1096,
    "end": 1101,
    "range": [
      1096,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "FieldFeedback2",
    "start": 1102,
    "end": 1116,
    "range": [
      1102,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1119,
    "end": 1126,
    "range": [
      1119,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPropsProps",
    "start": 1127,
    "end": 1139,
    "range": [
      1127,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPropsProps",
    "start": 1142,
    "end": 1154,
    "range": [
      1142,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1156,
    "end": 1163,
    "range": [
      1156,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "FieldFeedback",
    "start": 1164,
    "end": 1177,
    "range": [
      1164,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1185,
    "end": 1191,
    "range": [
      1185,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 1192,
    "end": 1204,
    "range": [
      1192,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 1213,
    "end": 1217,
    "range": [
      1213,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1222,
    "end": 1224,
    "range": [
      1222,
      1224
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1225,
    "end": 1229,
    "range": [
      1225,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 1238,
    "end": 1244,
    "range": [
      1238,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1253,
    "end": 1257,
    "range": [
      1253,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1258,
    "end": 1263,
    "range": [
      1258,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 1264,
    "end": 1268,
    "range": [
      1264,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "String",
    "value": "\"now\"",
    "start": 1269,
    "end": 1274,
    "range": [
      1269,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1303,
    "end": 1309,
    "range": [
      1303,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 1311,
    "end": 1314,
    "range": [
      1311,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 1315,
    "end": 1320,
    "range": [
      1315,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 1322,
    "end": 1325,
    "range": [
      1322,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1341,
    "end": 1346,
    "range": [
      1341,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "Test3",
    "start": 1347,
    "end": 1352,
    "range": [
      1347,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1358,
    "end": 1360,
    "range": [
      1358,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "FieldFeedback2",
    "start": 1362,
    "end": 1376,
    "range": [
      1362,
      1376
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "when",
    "start": 1377,
    "end": 1381,
    "range": [
      1377,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1383,
    "end": 1388,
    "range": [
      1383,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1389,
    "end": 1391,
    "range": [
      1389,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1394,
    "end": 1399,
    "range": [
      1394,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1447,
    "end": 1452,
    "range": [
      1447,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "Test4",
    "start": 1453,
    "end": 1458,
    "range": [
      1453,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1464,
    "end": 1466,
    "range": [
      1464,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "FieldFeedback2",
    "start": 1468,
    "end": 1482,
    "range": [
      1468,
      1482
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "when",
    "start": 1483,
    "end": 1487,
    "range": [
      1483,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1489,
    "end": 1494,
    "range": [
      1489,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1495,
    "end": 1497,
    "range": [
      1495,
      1497
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 1498,
    "end": 1505,
    "range": [
      1498,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 1506,
    "end": 1509,
    "range": [
      1506,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1510,
    "end": 1515,
    "range": [
      1510,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1529,
    "end": 1534,
    "range": [
      1529,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "Test5",
    "start": 1535,
    "end": 1540,
    "range": [
      1535,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1546,
    "end": 1548,
    "range": [
      1546,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "FieldFeedback2",
    "start": 1550,
    "end": 1564,
    "range": [
      1550,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  }
]
```
