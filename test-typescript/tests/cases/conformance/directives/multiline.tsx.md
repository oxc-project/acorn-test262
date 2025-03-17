__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 34,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 33,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 28,
              "name": "texts",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 20,
                  "end": 28,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 20,
                    "end": 26
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrayExpression",
              "start": 31,
              "end": 33,
              "elements": []
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 71,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 70,
        "callee": {
          "type": "MemberExpression",
          "start": 55,
          "end": 65,
          "object": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "name": "texts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "name": "push",
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
            "start": 66,
            "end": 69,
            "value": 100,
            "raw": "100"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 114,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 113,
        "callee": {
          "type": "MemberExpression",
          "start": 98,
          "end": 108,
          "object": {
            "type": "Identifier",
            "start": 98,
            "end": 103,
            "name": "texts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 104,
            "end": 108,
            "name": "push",
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
            "start": 109,
            "end": 112,
            "value": 100,
            "raw": "100"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 159,
      "expression": {
        "type": "CallExpression",
        "start": 141,
        "end": 158,
        "callee": {
          "type": "MemberExpression",
          "start": 141,
          "end": 151,
          "object": {
            "type": "Identifier",
            "start": 141,
            "end": 146,
            "name": "texts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 147,
            "end": 151,
            "name": "push",
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
            "start": 152,
            "end": 157,
            "value": "100",
            "raw": "\"100\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
  "end": 566,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 106,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 40,
        "end": 106,
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 60,
          "name": "MyComponent",
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
            "start": 61,
            "end": 83,
            "name": "props",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 83,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 68,
                "end": 83,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 70,
                    "end": 81,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 73,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 73,
                      "end": 81,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 75,
                        "end": 81
                      }
                    },
                    "accessibility": null,
                    "static": false
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
          "start": 85,
          "end": 106,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 89,
              "end": 104,
              "argument": {
                "type": "JSXElement",
                "start": 96,
                "end": 103,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 96,
                  "end": 103,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 97,
                    "end": 100,
                    "name": "div"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 565,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 564,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 120,
            "end": 562,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 120,
              "end": 125,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 121,
                "end": 124,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 556,
              "end": 562,
              "name": {
                "type": "JSXIdentifier",
                "start": 558,
                "end": 561,
                "name": "div"
              }
            },
            "children": [
              {
                "type": "JSXText",
                "start": 125,
                "end": 130,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 130,
                "end": 151,
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 131,
                  "end": 150
                }
              },
              {
                "type": "JSXText",
                "start": 151,
                "end": 156,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 156,
                "end": 181,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 156,
                  "end": 181,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 169,
                      "end": 178,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 169,
                        "end": 172,
                        "name": "foo"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 173,
                        "end": 178,
                        "expression": {
                          "type": "Literal",
                          "start": 174,
                          "end": 177,
                          "value": 100,
                          "raw": "100"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 157,
                    "end": 168,
                    "name": "MyComponent"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 181,
                "end": 187,
                "value": "\n\n    ",
                "raw": "\n\n    "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 187,
                "end": 203,
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 188,
                  "end": 202
                }
              },
              {
                "type": "JSXText",
                "start": 203,
                "end": 208,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 208,
                "end": 233,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 208,
                  "end": 233,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 221,
                      "end": 230,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 221,
                        "end": 224,
                        "name": "foo"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 225,
                        "end": 230,
                        "expression": {
                          "type": "Literal",
                          "start": 226,
                          "end": 229,
                          "value": 100,
                          "raw": "100"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 209,
                    "end": 220,
                    "name": "MyComponent"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 233,
                "end": 239,
                "value": "\n\n    ",
                "raw": "\n\n    "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 239,
                "end": 266,
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 240,
                  "end": 265
                }
              },
              {
                "type": "JSXText",
                "start": 266,
                "end": 271,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 271,
                "end": 296,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 271,
                  "end": 296,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 284,
                      "end": 293,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 284,
                        "end": 287,
                        "name": "foo"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 288,
                        "end": 293,
                        "expression": {
                          "type": "Literal",
                          "start": 289,
                          "end": 292,
                          "value": 100,
                          "raw": "100"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 272,
                    "end": 283,
                    "name": "MyComponent"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 296,
                "end": 302,
                "value": "\n\n    ",
                "raw": "\n\n    "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 302,
                "end": 332,
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 303,
                  "end": 331
                }
              },
              {
                "type": "JSXText",
                "start": 332,
                "end": 337,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 337,
                "end": 362,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 337,
                  "end": 362,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 350,
                      "end": 359,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 350,
                        "end": 353,
                        "name": "foo"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 354,
                        "end": 359,
                        "expression": {
                          "type": "Literal",
                          "start": 355,
                          "end": 358,
                          "value": 100,
                          "raw": "100"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 338,
                    "end": 349,
                    "name": "MyComponent"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 362,
                "end": 368,
                "value": "\n\n    ",
                "raw": "\n\n    "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 368,
                "end": 397,
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 369,
                  "end": 396
                }
              },
              {
                "type": "JSXText",
                "start": 397,
                "end": 402,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 402,
                "end": 427,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 402,
                  "end": 427,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 415,
                      "end": 424,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 415,
                        "end": 418,
                        "name": "foo"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 419,
                        "end": 424,
                        "expression": {
                          "type": "Literal",
                          "start": 420,
                          "end": 423,
                          "value": 100,
                          "raw": "100"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 403,
                    "end": 414,
                    "name": "MyComponent"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 427,
                "end": 433,
                "value": "\n\n    ",
                "raw": "\n\n    "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 433,
                "end": 455,
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 434,
                  "end": 454
                }
              },
              {
                "type": "JSXText",
                "start": 455,
                "end": 460,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 460,
                "end": 485,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 460,
                  "end": 485,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 473,
                      "end": 482,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 473,
                        "end": 476,
                        "name": "foo"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 477,
                        "end": 482,
                        "expression": {
                          "type": "Literal",
                          "start": 478,
                          "end": 481,
                          "value": 100,
                          "raw": "100"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 461,
                    "end": 472,
                    "name": "MyComponent"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 485,
                "end": 491,
                "value": "\n\n    ",
                "raw": "\n\n    "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 491,
                "end": 518,
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 492,
                  "end": 517
                }
              },
              {
                "type": "JSXText",
                "start": 518,
                "end": 523,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 523,
                "end": 553,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 523,
                  "end": 553,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 536,
                      "end": 550,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 536,
                        "end": 539,
                        "name": "foo"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 540,
                        "end": 550,
                        "expression": {
                          "type": "Literal",
                          "start": 541,
                          "end": 549,
                          "value": "hooray",
                          "raw": "\"hooray\""
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 524,
                    "end": 535,
                    "name": "MyComponent"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 553,
                "end": 556,
                "value": "\n  ",
                "raw": "\n  "
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
