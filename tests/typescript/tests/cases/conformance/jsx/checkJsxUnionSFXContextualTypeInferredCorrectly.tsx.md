__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 761,
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
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 85,
        "decorators": [],
        "name": "PS",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 190,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "decorators": [],
              "name": "multi",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 104,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 99,
                "end": 104,
                "literal": {
                  "type": "Literal",
                  "start": 99,
                  "end": 104,
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 134,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 134,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 116,
                "end": 134,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 116,
                    "end": 122
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 125,
                    "end": 134
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 139,
            "end": 188,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 147,
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 188,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 149,
                "end": 188,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 150,
                    "end": 179,
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 159,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 161,
                        "end": 179,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 161,
                            "end": 167
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 170,
                            "end": 179
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 181,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 184,
                    "end": 188
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
      "type": "TSInterfaceDeclaration",
      "start": 192,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 204,
        "decorators": [],
        "name": "PM",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 205,
        "end": 288,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 211,
            "end": 222,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 216,
              "decorators": [],
              "name": "multi",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 222,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 218,
                "end": 222,
                "literal": {
                  "type": "Literal",
                  "start": 218,
                  "end": 222,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 227,
            "end": 242,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 232,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 242,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 234,
                "end": 242,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 234,
                  "end": 240
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 247,
            "end": 286,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 255,
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 286,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 257,
                "end": 286,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 258,
                    "end": 277,
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 267,
                      "end": 277,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 269,
                        "end": 277,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 269,
                          "end": 275
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 279,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 282,
                    "end": 286
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
      "type": "ExportNamedDeclaration",
      "start": 290,
      "end": 366,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 297,
        "end": 366,
        "id": {
          "type": "Identifier",
          "start": 306,
          "end": 324,
          "decorators": [],
          "name": "ComponentWithUnion",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 325,
            "end": 339,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 330,
              "end": 339,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 332,
                "end": 339,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 332,
                    "end": 334,
                    "typeName": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 334,
                      "decorators": [],
                      "name": "PM",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 337,
                    "end": 339,
                    "typeName": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 339,
                      "decorators": [],
                      "name": "PS",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 341,
          "end": 366,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 347,
              "end": 364,
              "argument": {
                "type": "JSXElement",
                "start": 354,
                "end": 363,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 354,
                  "end": 358,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 355,
                    "end": 357,
                    "name": "h1"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 358,
                  "end": 363,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 360,
                    "end": 362,
                    "name": "h1"
                  }
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 392,
      "end": 611,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 399,
        "end": 611,
        "id": {
          "type": "Identifier",
          "start": 408,
          "end": 422,
          "decorators": [],
          "name": "HereIsTheError",
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
          "start": 425,
          "end": 611,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 431,
              "end": 609,
              "argument": {
                "type": "JSXElement",
                "start": 448,
                "end": 602,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 448,
                  "end": 602,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 449,
                    "end": 467,
                    "name": "ComponentWithUnion"
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 480,
                      "end": 493,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 480,
                        "end": 485,
                        "name": "multi"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 486,
                        "end": 493,
                        "expression": {
                          "type": "Literal",
                          "start": 487,
                          "end": 492,
                          "value": false,
                          "raw": "false"
                        }
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "start": 506,
                      "end": 517,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 506,
                        "end": 511,
                        "name": "value"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 512,
                        "end": 517,
                        "expression": {
                          "type": "Literal",
                          "start": 513,
                          "end": 516,
                          "value": "s",
                          "raw": "'s'"
                        }
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "start": 530,
                      "end": 564,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 530,
                        "end": 538,
                        "name": "onChange"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 539,
                        "end": 564,
                        "expression": {
                          "type": "ArrowFunctionExpression",
                          "start": 540,
                          "end": 563,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 540,
                              "end": 543,
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "start": 547,
                            "end": 563,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 547,
                              "end": 558,
                              "object": {
                                "type": "Identifier",
                                "start": 547,
                                "end": 554,
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 555,
                                "end": 558,
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
                                "start": 559,
                                "end": 562,
                                "decorators": [],
                                "name": "val",
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
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 643,
      "end": 761,
      "expression": {
        "type": "CallExpression",
        "start": 643,
        "end": 760,
        "callee": {
          "type": "Identifier",
          "start": 643,
          "end": 661,
          "decorators": [],
          "name": "ComponentWithUnion",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 662,
            "end": 759,
            "properties": [
              {
                "type": "Property",
                "start": 668,
                "end": 680,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 673,
                  "decorators": [],
                  "name": "multi",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 675,
                  "end": 680,
                  "value": false,
                  "raw": "false"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 686,
                "end": 696,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 691,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 693,
                  "end": 696,
                  "value": "s",
                  "raw": "'s'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 702,
                "end": 735,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 710,
                  "decorators": [],
                  "name": "onChange",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 712,
                  "end": 735,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 712,
                      "end": 715,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "start": 719,
                    "end": 735,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 719,
                      "end": 730,
                      "object": {
                        "type": "Identifier",
                        "start": 719,
                        "end": 726,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 727,
                        "end": 730,
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
                        "start": 731,
                        "end": 734,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
