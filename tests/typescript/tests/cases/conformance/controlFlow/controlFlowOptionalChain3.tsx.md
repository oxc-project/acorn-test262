__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 639,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 102,
      "end": 128,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 109,
          "end": 114,
          "local": {
            "type": "Identifier",
            "start": 109,
            "end": 114,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 120,
        "end": 127,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 130,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 143,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 144,
        "end": 163,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 148,
            "end": 161,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 151,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 160,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 153,
                "end": 160
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
      "type": "FunctionDeclaration",
      "start": 165,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 179,
        "decorators": [],
        "name": "test1",
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
          "start": 180,
          "end": 200,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 200,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 185,
              "end": 200,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 185,
                  "end": 188,
                  "typeName": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 188,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 191,
                  "end": 200
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 253,
        "body": [
          {
            "type": "IfStatement",
            "start": 206,
            "end": 244,
            "test": {
              "type": "BinaryExpression",
              "start": 210,
              "end": 228,
              "left": {
                "type": "ChainExpression",
                "start": 210,
                "end": 218,
                "expression": {
                  "type": "MemberExpression",
                  "start": 210,
                  "end": 218,
                  "object": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 213,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 218,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "computed": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 223,
                "end": 228,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 230,
              "end": 244,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 236,
                  "end": 240,
                  "expression": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 239,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 247,
            "end": 251,
            "expression": {
              "type": "Identifier",
              "start": 247,
              "end": 250,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 255,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 269,
        "decorators": [],
        "name": "test2",
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
          "start": 270,
          "end": 290,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 273,
            "end": 290,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 275,
              "end": 290,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 275,
                  "end": 278,
                  "typeName": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 278,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 281,
                  "end": 290
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 292,
        "end": 356,
        "body": [
          {
            "type": "IfStatement",
            "start": 296,
            "end": 354,
            "test": {
              "type": "BinaryExpression",
              "start": 300,
              "end": 318,
              "left": {
                "type": "ChainExpression",
                "start": 300,
                "end": 308,
                "expression": {
                  "type": "MemberExpression",
                  "start": 300,
                  "end": 308,
                  "object": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 303,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 308,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "computed": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 318,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 320,
              "end": 334,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 326,
                  "end": 330,
                  "expression": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 329,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 340,
              "end": 354,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 346,
                  "end": 350,
                  "expression": {
                    "type": "Identifier",
                    "start": 346,
                    "end": 349,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
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
      "start": 358,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 372,
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 373,
          "end": 406,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 375,
              "end": 378,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 375,
                "end": 378,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 375,
                "end": 378,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 380,
            "end": 406,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 382,
              "end": 406,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 384,
                  "end": 404,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 387,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 387,
                    "end": 404,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 389,
                      "end": 404,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 389,
                          "end": 392,
                          "typeName": {
                            "type": "Identifier",
                            "start": 389,
                            "end": 392,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 395,
                          "end": 404
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 408,
        "end": 519,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 412,
            "end": 517,
            "argument": {
              "type": "JSXElement",
              "start": 425,
              "end": 512,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 425,
                "end": 430,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 426,
                  "end": 429,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 430,
                  "end": 437,
                  "value": "\n      ",
                  "raw": "\n      "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 437,
                  "end": 466,
                  "expression": {
                    "type": "LogicalExpression",
                    "start": 438,
                    "end": 465,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 438,
                      "end": 456,
                      "left": {
                        "type": "ChainExpression",
                        "start": 438,
                        "end": 446,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 438,
                          "end": 446,
                          "object": {
                            "type": "Identifier",
                            "start": 438,
                            "end": 441,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 443,
                            "end": 446,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "computed": false
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 451,
                        "end": 456,
                        "value": false,
                        "raw": "false"
                      }
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Literal",
                      "start": 460,
                      "end": 465,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "start": 466,
                  "end": 473,
                  "value": "\n      ",
                  "raw": "\n      "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 473,
                  "end": 501,
                  "expression": {
                    "type": "ConditionalExpression",
                    "start": 474,
                    "end": 500,
                    "test": {
                      "type": "MemberExpression",
                      "start": 474,
                      "end": 481,
                      "object": {
                        "type": "Identifier",
                        "start": 474,
                        "end": 477,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 481,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 484,
                      "end": 490,
                      "value": "true",
                      "raw": "\"true\""
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 493,
                      "end": 500,
                      "value": "false",
                      "raw": "\"false\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "start": 501,
                  "end": 506,
                  "value": "\n    ",
                  "raw": "\n    "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 506,
                "end": 512,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 508,
                  "end": 511,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 521,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 530,
        "end": 535,
        "decorators": [],
        "name": "test4",
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
          "start": 536,
          "end": 574,
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 544,
            "end": 574,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 546,
              "end": 574,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 548,
                  "end": 560,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 549,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 550,
                    "end": 559,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 552,
                      "end": 559
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 561,
                  "end": 572,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 572,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 565,
                      "end": 572
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 576,
        "end": 639,
        "body": [
          {
            "type": "IfStatement",
            "start": 580,
            "end": 637,
            "test": {
              "type": "LogicalExpression",
              "start": 584,
              "end": 617,
              "left": {
                "type": "BinaryExpression",
                "start": 584,
                "end": 604,
                "left": {
                  "type": "ChainExpression",
                  "start": 584,
                  "end": 594,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 584,
                    "end": 594,
                    "object": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 591,
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 594,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "computed": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 599,
                  "end": 604,
                  "value": false,
                  "raw": "false"
                }
              },
              "operator": "||",
              "right": {
                "type": "MemberExpression",
                "start": 608,
                "end": 617,
                "object": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 615,
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 619,
              "end": 637,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 625,
                  "end": 633,
                  "expression": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 632,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
