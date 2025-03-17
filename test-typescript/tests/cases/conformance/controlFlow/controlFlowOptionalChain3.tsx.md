__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 640,
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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 180,
          "end": 200,
          "name": "foo",
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
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 218,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
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
    {
      "type": "FunctionDeclaration",
      "start": 255,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 269,
        "name": "test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 270,
          "end": 290,
          "name": "foo",
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
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 308,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 358,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 372,
        "name": "Test3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 373,
          "end": 406,
          "properties": [
            {
              "type": "Property",
              "start": 375,
              "end": 378,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 375,
                "end": 378,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 375,
                "end": 378,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 426,
                  "end": 429,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 443,
                            "end": 446,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": true
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
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 481,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 521,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 530,
        "end": 535,
        "name": "test4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 536,
          "end": 574,
          "name": "options",
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          },
          "decorators": [],
          "optional": true
        }
      ],
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
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 594,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
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
                  "name": "options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
