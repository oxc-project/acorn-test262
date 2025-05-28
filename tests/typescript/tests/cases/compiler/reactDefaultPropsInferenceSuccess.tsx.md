__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 1568,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 73,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 92,
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 93,
        "end": 166,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 145,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 101,
              "decorators": [],
              "name": "when",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 144,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 104,
                "end": 144,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 105,
                    "end": 131,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 106,
                        "end": 119,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 111,
                          "end": 119,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 113,
                            "end": 119
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 121,
                      "end": 131,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 124,
                        "end": 131
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 135,
                    "end": 138,
                    "literal": {
                      "type": "Literal",
                      "start": 135,
                      "end": 138,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 141,
                    "end": 144,
                    "literal": {
                      "type": "Literal",
                      "start": 141,
                      "end": 144,
                      "value": "b",
                      "raw": "\"b\""
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 148,
            "end": 164,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 153,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 163,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
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
      "start": 168,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 183,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 192,
          "end": 201,
          "expression": {
            "type": "Identifier",
            "start": 192,
            "end": 201,
            "decorators": [],
            "name": "BaseProps",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 202,
        "end": 205,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 207,
      "end": 385,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 226,
        "decorators": [],
        "name": "FieldFeedback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 226,
        "end": 255,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 227,
            "end": 254,
            "name": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 237,
              "end": 242,
              "typeName": {
                "type": "Identifier",
                "start": 237,
                "end": 242,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 245,
              "end": 254,
              "typeName": {
                "type": "Identifier",
                "start": 245,
                "end": 254,
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 264,
        "end": 279,
        "object": {
          "type": "Identifier",
          "start": 264,
          "end": 269,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 270,
          "end": 279,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 279,
        "end": 282,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 280,
            "end": 281,
            "typeName": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 283,
        "end": 385,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 287,
            "end": 336,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 306,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 309,
              "end": 335,
              "properties": [
                {
                  "type": "Property",
                  "start": 315,
                  "end": 331,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 319,
                    "decorators": [],
                    "name": "when",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 321,
                    "end": 331,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "start": 327,
                      "end": 331,
                      "value": true,
                      "raw": "true"
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 340,
            "end": 383,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 346,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 346,
              "end": 383,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 349,
                "end": 383,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 355,
                    "end": 379,
                    "argument": {
                      "type": "JSXElement",
                      "start": 362,
                      "end": 378,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 362,
                        "end": 367,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 363,
                          "end": 366,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 367,
                          "end": 372,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 372,
                        "end": 378,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 374,
                          "end": 377,
                          "name": "div"
                        }
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
      "type": "VariableDeclaration",
      "start": 393,
      "end": 455,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 399,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 399,
            "end": 404,
            "decorators": [],
            "name": "Test1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 407,
            "end": 454,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 413,
              "end": 454,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 413,
                "end": 454,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 414,
                  "end": 427,
                  "name": "FieldFeedback"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 428,
                    "end": 451,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 428,
                      "end": 432,
                      "name": "when"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 433,
                      "end": 451,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 434,
                        "end": 450,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 434,
                            "end": 439,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "UnaryExpression",
                          "start": 443,
                          "end": 450,
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 444,
                            "end": 450,
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "start": 445,
                              "end": 450,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
                          },
                          "prefix": true
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  }
                ],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 498,
      "end": 571,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 570,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 509,
            "decorators": [],
            "name": "Test2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 512,
            "end": 570,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 518,
              "end": 570,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 518,
                "end": 570,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 519,
                  "end": 532,
                  "name": "FieldFeedback"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 533,
                    "end": 567,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 533,
                      "end": 537,
                      "name": "when"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 538,
                      "end": 567,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 539,
                        "end": 566,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 539,
                            "end": 544,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "start": 548,
                          "end": 566,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 548,
                            "end": 559,
                            "object": {
                              "type": "Identifier",
                              "start": 548,
                              "end": 555,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 556,
                              "end": 559,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 560,
                              "end": 565,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  }
                ],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 573,
      "end": 766,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 579,
        "end": 596,
        "decorators": [],
        "name": "FieldFeedbackBeta",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 596,
        "end": 625,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 597,
            "end": 624,
            "name": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 607,
              "end": 612,
              "typeName": {
                "type": "Identifier",
                "start": 607,
                "end": 612,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 615,
              "end": 624,
              "typeName": {
                "type": "Identifier",
                "start": 615,
                "end": 624,
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 634,
        "end": 649,
        "object": {
          "type": "Identifier",
          "start": 634,
          "end": 639,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 640,
          "end": 649,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 649,
        "end": 652,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 650,
            "end": 651,
            "typeName": {
              "type": "Identifier",
              "start": 650,
              "end": 651,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 653,
        "end": 766,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 657,
            "end": 717,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 664,
              "end": 676,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 676,
              "end": 687,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 678,
                "end": 687,
                "typeName": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 687,
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": {
              "type": "ObjectExpression",
              "start": 690,
              "end": 716,
              "properties": [
                {
                  "type": "Property",
                  "start": 696,
                  "end": 712,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 700,
                    "decorators": [],
                    "name": "when",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 702,
                    "end": 712,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "start": 708,
                      "end": 712,
                      "value": true,
                      "raw": "true"
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 721,
            "end": 764,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 721,
              "end": 727,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 727,
              "end": 764,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 730,
                "end": 764,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 736,
                    "end": 760,
                    "argument": {
                      "type": "JSXElement",
                      "start": 743,
                      "end": 759,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 743,
                        "end": 748,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 744,
                          "end": 747,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 748,
                          "end": 753,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 753,
                        "end": 759,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 755,
                          "end": 758,
                          "name": "div"
                        }
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
      "type": "VariableDeclaration",
      "start": 774,
      "end": 868,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 867,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 786,
            "decorators": [],
            "name": "Test1a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 789,
            "end": 867,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 795,
              "end": 867,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 795,
                "end": 844,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 796,
                  "end": 813,
                  "name": "FieldFeedbackBeta"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 814,
                    "end": 837,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 814,
                      "end": 818,
                      "name": "when"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 819,
                      "end": 837,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 820,
                        "end": 836,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 820,
                            "end": 825,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "UnaryExpression",
                          "start": 829,
                          "end": 836,
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 830,
                            "end": 836,
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "start": 831,
                              "end": 836,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
                          },
                          "prefix": true
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  },
                  {
                    "type": "JSXAttribute",
                    "start": 838,
                    "end": 843,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 838,
                      "end": 843,
                      "name": "error"
                    },
                    "value": null
                  }
                ],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 844,
                  "end": 847,
                  "value": "Hah",
                  "raw": "Hah"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 847,
                "end": 867,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 849,
                  "end": 866,
                  "name": "FieldFeedbackBeta"
                }
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 911,
      "end": 1016,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 917,
          "end": 1015,
          "id": {
            "type": "Identifier",
            "start": 917,
            "end": 923,
            "decorators": [],
            "name": "Test2a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 926,
            "end": 1015,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 932,
              "end": 1015,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 932,
                "end": 992,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 933,
                  "end": 950,
                  "name": "FieldFeedbackBeta"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 951,
                    "end": 985,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 951,
                      "end": 955,
                      "name": "when"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 956,
                      "end": 985,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 957,
                        "end": 984,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 957,
                            "end": 962,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "start": 966,
                          "end": 984,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 966,
                            "end": 977,
                            "object": {
                              "type": "Identifier",
                              "start": 966,
                              "end": 973,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 974,
                              "end": 977,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 978,
                              "end": 983,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  },
                  {
                    "type": "JSXAttribute",
                    "start": 986,
                    "end": 991,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 986,
                      "end": 991,
                      "name": "error"
                    },
                    "value": null
                  }
                ],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 992,
                  "end": 995,
                  "value": "Hah",
                  "raw": "Hah"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 995,
                "end": 1015,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 997,
                  "end": 1014,
                  "name": "FieldFeedbackBeta"
                }
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1018,
      "end": 1094,
      "id": {
        "type": "Identifier",
        "start": 1028,
        "end": 1040,
        "decorators": [],
        "name": "MyPropsProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1049,
          "end": 1054,
          "expression": {
            "type": "Identifier",
            "start": 1049,
            "end": 1054,
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1055,
        "end": 1094,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1059,
            "end": 1092,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1059,
              "end": 1063,
              "decorators": [],
              "name": "when",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1063,
              "end": 1091,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1065,
                "end": 1091,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1066,
                    "end": 1079,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1071,
                      "end": 1079,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1073,
                        "end": 1079
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1081,
                  "end": 1091,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1084,
                    "end": 1091
                  }
                }
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
      "start": 1096,
      "end": 1333,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1102,
        "end": 1116,
        "decorators": [],
        "name": "FieldFeedback2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1116,
        "end": 1155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1117,
            "end": 1154,
            "name": {
              "type": "Identifier",
              "start": 1117,
              "end": 1118,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1127,
              "end": 1139,
              "typeName": {
                "type": "Identifier",
                "start": 1127,
                "end": 1139,
                "decorators": [],
                "name": "MyPropsProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 1142,
              "end": 1154,
              "typeName": {
                "type": "Identifier",
                "start": 1142,
                "end": 1154,
                "decorators": [],
                "name": "MyPropsProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 1164,
        "end": 1177,
        "decorators": [],
        "name": "FieldFeedback",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1177,
        "end": 1180,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1178,
            "end": 1179,
            "typeName": {
              "type": "Identifier",
              "start": 1178,
              "end": 1179,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1181,
        "end": 1333,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1185,
            "end": 1234,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1192,
              "end": 1204,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 1207,
              "end": 1233,
              "properties": [
                {
                  "type": "Property",
                  "start": 1213,
                  "end": 1229,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1213,
                    "end": 1217,
                    "decorators": [],
                    "name": "when",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 1219,
                    "end": 1229,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "start": 1225,
                      "end": 1229,
                      "value": true,
                      "raw": "true"
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1238,
            "end": 1331,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1238,
              "end": 1244,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1244,
              "end": 1331,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1247,
                "end": 1331,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1253,
                    "end": 1276,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1253,
                      "end": 1275,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1253,
                        "end": 1268,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1253,
                          "end": 1263,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1253,
                            "end": 1257
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1258,
                            "end": 1263,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1264,
                          "end": 1268,
                          "decorators": [],
                          "name": "when",
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
                          "start": 1269,
                          "end": 1274,
                          "value": "now",
                          "raw": "\"now\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1303,
                    "end": 1327,
                    "argument": {
                      "type": "JSXElement",
                      "start": 1310,
                      "end": 1326,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 1310,
                        "end": 1315,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 1311,
                          "end": 1314,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 1315,
                          "end": 1320,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 1320,
                        "end": 1326,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 1322,
                          "end": 1325,
                          "name": "div"
                        }
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
      "type": "VariableDeclaration",
      "start": 1341,
      "end": 1404,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1347,
          "end": 1403,
          "id": {
            "type": "Identifier",
            "start": 1347,
            "end": 1352,
            "decorators": [],
            "name": "Test3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1355,
            "end": 1403,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 1361,
              "end": 1403,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 1361,
                "end": 1403,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1362,
                  "end": 1376,
                  "name": "FieldFeedback2"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 1377,
                    "end": 1400,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 1377,
                      "end": 1381,
                      "name": "when"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 1382,
                      "end": 1400,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 1383,
                        "end": 1399,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1383,
                            "end": 1388,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "UnaryExpression",
                          "start": 1392,
                          "end": 1399,
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 1393,
                            "end": 1399,
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "start": 1394,
                              "end": 1399,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
                          },
                          "prefix": true
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  }
                ],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1447,
      "end": 1521,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1453,
          "end": 1520,
          "id": {
            "type": "Identifier",
            "start": 1453,
            "end": 1458,
            "decorators": [],
            "name": "Test4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1461,
            "end": 1520,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 1467,
              "end": 1520,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 1467,
                "end": 1520,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1468,
                  "end": 1482,
                  "name": "FieldFeedback2"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 1483,
                    "end": 1517,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 1483,
                      "end": 1487,
                      "name": "when"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 1488,
                      "end": 1517,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 1489,
                        "end": 1516,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1489,
                            "end": 1494,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "start": 1498,
                          "end": 1516,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1498,
                            "end": 1509,
                            "object": {
                              "type": "Identifier",
                              "start": 1498,
                              "end": 1505,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1506,
                              "end": 1509,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1510,
                              "end": 1515,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  }
                ],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1529,
      "end": 1568,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1535,
          "end": 1567,
          "id": {
            "type": "Identifier",
            "start": 1535,
            "end": 1540,
            "decorators": [],
            "name": "Test5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1543,
            "end": 1567,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 1549,
              "end": 1567,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 1549,
                "end": 1567,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1550,
                  "end": 1564,
                  "name": "FieldFeedback2"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
