__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 836,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 25,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 24,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 20,
                "end": 24,
                "literal": {
                  "type": "Literal",
                  "start": 20,
                  "end": 24,
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
            "start": 26,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 30,
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
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
      "start": 42,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 85,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 68,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 67,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 62,
                "end": 67,
                "literal": {
                  "type": "Literal",
                  "start": 62,
                  "end": 67,
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
            "start": 69,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 76,
                "end": 82
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
      "type": "TSTypeAliasDeclaration",
      "start": 86,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 95,
        "end": 100,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 96,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 99,
            "end": 100,
            "typeName": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 135,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "decorators": [],
            "name": "isIt",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 115,
            "end": 134,
            "left": {
              "type": "CallExpression",
              "start": 115,
              "end": 128,
              "callee": {
                "type": "MemberExpression",
                "start": 115,
                "end": 126,
                "object": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 119,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 126,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Literal",
              "start": 131,
              "end": 134,
              "value": 0.5,
              "raw": "0.5"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 201,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 149,
            "end": 200,
            "test": {
              "type": "Identifier",
              "start": 149,
              "end": 153,
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "ObjectExpression",
              "start": 156,
              "end": 177,
              "properties": [
                {
                  "type": "Property",
                  "start": 158,
                  "end": 162,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 162,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 162,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 164,
                  "end": 175,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 168,
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 170,
                    "end": 175,
                    "value": "hey",
                    "raw": "'hey'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "alternate": {
              "type": "ObjectExpression",
              "start": 180,
              "end": 200,
              "properties": [
                {
                  "type": "Property",
                  "start": 182,
                  "end": 186,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 186,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 186,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 188,
                  "end": 198,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 193,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 195,
                    "end": 198,
                    "value": 123,
                    "raw": "123"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 280,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 213,
            "decorators": [],
            "name": "cc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 216,
            "end": 279,
            "test": {
              "type": "Identifier",
              "start": 216,
              "end": 220,
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "ObjectExpression",
              "start": 223,
              "end": 250,
              "properties": [
                {
                  "type": "Property",
                  "start": 225,
                  "end": 235,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 229,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 235,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 237,
                  "end": 248,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 241,
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 243,
                    "end": 248,
                    "value": "hey",
                    "raw": "'hey'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "alternate": {
              "type": "ObjectExpression",
              "start": 253,
              "end": 279,
              "properties": [
                {
                  "type": "Property",
                  "start": 255,
                  "end": 265,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 259,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 265,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 267,
                  "end": 277,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 272,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 274,
                    "end": 277,
                    "value": 123,
                    "raw": "123"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 282,
      "end": 422,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 301,
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 308,
        "end": 421,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 310,
            "end": 378,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 320,
                "end": 339,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 332,
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 332,
                  "end": 338,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 334,
                    "end": 338,
                    "literal": {
                      "type": "Literal",
                      "start": 334,
                      "end": 338,
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
                "start": 348,
                "end": 372,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 359,
                  "decorators": [],
                  "name": "mandatoryFn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 359,
                  "end": 371,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 361,
                    "end": 371,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 364,
                      "end": 371,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 367,
                        "end": 371
                      }
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 385,
            "end": 421,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 395,
                "end": 415,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 407,
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 407,
                  "end": 414,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 409,
                    "end": 414,
                    "literal": {
                      "type": "Literal",
                      "start": 409,
                      "end": 414,
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 424,
      "end": 480,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 428,
          "end": 479,
          "id": {
            "type": "Identifier",
            "start": 428,
            "end": 432,
            "decorators": [],
            "name": "Funk",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 435,
            "end": 479,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 436,
                "end": 458,
                "decorators": [],
                "name": "_props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 442,
                  "end": 458,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 444,
                    "end": 458,
                    "typeName": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 458,
                      "decorators": [],
                      "name": "ComponentProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 463,
              "end": 479,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 463,
                "end": 468,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 464,
                  "end": 467,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 468,
                  "end": 473,
                  "value": "Hello",
                  "raw": "Hello"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 473,
                "end": 479,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 475,
                  "end": 478,
                  "name": "div"
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
      "start": 482,
      "end": 552,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 552,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 491,
            "decorators": [],
            "name": "Fail1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 494,
            "end": 552,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 500,
              "end": 552,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 500,
                "end": 552,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 501,
                  "end": 505,
                  "name": "Funk"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 506,
                    "end": 529,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 506,
                      "end": 517,
                      "name": "mandatoryFn"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 518,
                      "end": 529,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 519,
                        "end": 528,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 525,
                          "end": 528,
                          "body": []
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  },
                  {
                    "type": "JSXAttribute",
                    "start": 530,
                    "end": 549,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 530,
                      "end": 542,
                      "name": "optionalBool"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 543,
                      "end": 549,
                      "expression": {
                        "type": "Literal",
                        "start": 544,
                        "end": 548,
                        "value": true,
                        "raw": "true"
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
      "start": 553,
      "end": 631,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 557,
          "end": 631,
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 562,
            "decorators": [],
            "name": "Fail2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 565,
            "end": 631,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 571,
              "end": 631,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 571,
                "end": 631,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 572,
                  "end": 576,
                  "name": "Funk"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 577,
                    "end": 600,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 577,
                      "end": 588,
                      "name": "mandatoryFn"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 589,
                      "end": 600,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 590,
                        "end": 599,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 596,
                          "end": 599,
                          "body": []
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  },
                  {
                    "type": "JSXAttribute",
                    "start": 601,
                    "end": 628,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 601,
                      "end": 613,
                      "name": "optionalBool"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 614,
                      "end": 628,
                      "expression": {
                        "type": "TSAsExpression",
                        "start": 615,
                        "end": 627,
                        "expression": {
                          "type": "Literal",
                          "start": 615,
                          "end": 619,
                          "value": true,
                          "raw": "true"
                        },
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 623,
                          "end": 627,
                          "literal": {
                            "type": "Literal",
                            "start": 623,
                            "end": 627,
                            "value": true,
                            "raw": "true"
                          }
                        }
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
      "start": 632,
      "end": 656,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 655,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 640,
            "decorators": [],
            "name": "True",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 643,
            "end": 655,
            "expression": {
              "type": "Literal",
              "start": 643,
              "end": 647,
              "value": true,
              "raw": "true"
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 651,
              "end": 655,
              "literal": {
                "type": "Literal",
                "start": 651,
                "end": 655,
                "value": true,
                "raw": "true"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 657,
      "end": 727,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 727,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 666,
            "decorators": [],
            "name": "Fail3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 669,
            "end": 727,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 675,
              "end": 727,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 675,
                "end": 727,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 676,
                  "end": 680,
                  "name": "Funk"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 681,
                    "end": 704,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 681,
                      "end": 692,
                      "name": "mandatoryFn"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 693,
                      "end": 704,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 694,
                        "end": 703,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 700,
                          "end": 703,
                          "body": []
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  },
                  {
                    "type": "JSXAttribute",
                    "start": 705,
                    "end": 724,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 705,
                      "end": 717,
                      "name": "optionalBool"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 718,
                      "end": 724,
                      "expression": {
                        "type": "Identifier",
                        "start": 719,
                        "end": 723,
                        "decorators": [],
                        "name": "True",
                        "optional": false,
                        "typeAnnotation": null
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
      "start": 728,
      "end": 795,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 732,
          "end": 795,
          "id": {
            "type": "Identifier",
            "start": 732,
            "end": 738,
            "decorators": [],
            "name": "attrs2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 741,
            "end": 795,
            "properties": [
              {
                "type": "Property",
                "start": 743,
                "end": 769,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 743,
                  "end": 755,
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 757,
                  "end": 769,
                  "expression": {
                    "type": "Literal",
                    "start": 757,
                    "end": 761,
                    "value": true,
                    "raw": "true"
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 765,
                    "end": 769,
                    "literal": {
                      "type": "Literal",
                      "start": 765,
                      "end": 769,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 771,
                "end": 793,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 782,
                  "decorators": [],
                  "name": "mandatoryFn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 784,
                  "end": 793,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 790,
                    "end": 793,
                    "body": []
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 796,
      "end": 836,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 800,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 800,
            "end": 807,
            "decorators": [],
            "name": "Success",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 810,
            "end": 836,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 816,
              "end": 836,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 816,
                "end": 836,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 817,
                  "end": 821,
                  "name": "Funk"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 822,
                    "end": 833,
                    "argument": {
                      "type": "Identifier",
                      "start": 826,
                      "end": 832,
                      "decorators": [],
                      "name": "attrs2",
                      "optional": false,
                      "typeAnnotation": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
