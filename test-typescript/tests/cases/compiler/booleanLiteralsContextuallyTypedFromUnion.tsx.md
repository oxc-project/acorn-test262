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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "isIt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "text",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "isIt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "name": "isIt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 126,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "name": "c",
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 149,
            "end": 200,
            "test": {
              "type": "Identifier",
              "start": 149,
              "end": 153,
              "name": "isIt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 162,
                    "name": "isIt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 162,
                    "name": "isIt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 164,
                  "end": 175,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 168,
                    "name": "text",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 170,
                    "end": 175,
                    "value": "hey",
                    "raw": "'hey'"
                  },
                  "kind": "init",
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
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 186,
                    "name": "isIt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 186,
                    "name": "isIt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 188,
                  "end": 198,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 193,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 195,
                    "end": 198,
                    "value": 123,
                    "raw": "123"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 213,
            "name": "cc",
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 216,
            "end": 279,
            "test": {
              "type": "Identifier",
              "start": 216,
              "end": 220,
              "name": "isIt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 229,
                    "name": "isIt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 235,
                    "name": "isIt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 237,
                  "end": 248,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 241,
                    "name": "text",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 243,
                    "end": 248,
                    "value": "hey",
                    "raw": "'hey'"
                  },
                  "kind": "init",
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 259,
                    "name": "isIt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 265,
                    "name": "isIt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 267,
                  "end": 277,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 272,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 274,
                    "end": 277,
                    "value": 123,
                    "raw": "123"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "ComponentProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "optionalBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "mandatoryFn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "optionalBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 428,
          "end": 479,
          "id": {
            "type": "Identifier",
            "start": 428,
            "end": 432,
            "name": "Funk",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 435,
            "end": 479,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 436,
                "end": 458,
                "name": "_props",
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
                      "name": "ComponentProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 463,
              "end": 479,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 463,
                "end": 468,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 464,
                  "end": 467,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 468,
                  "end": 473,
                  "value": "Hello",
                  "raw": "Hello"
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 482,
      "end": 552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 552,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 491,
            "name": "Fail1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 494,
            "end": 552,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "JSXElement",
              "start": 500,
              "end": 552,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 500,
                "end": 552,
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
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 525,
                          "end": 528,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
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
                "name": {
                  "type": "JSXIdentifier",
                  "start": 501,
                  "end": 505,
                  "name": "Funk"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 553,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 557,
          "end": 631,
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 562,
            "name": "Fail2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 565,
            "end": 631,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "JSXElement",
              "start": 571,
              "end": 631,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 571,
                "end": 631,
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
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 596,
                          "end": 599,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
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
                "name": {
                  "type": "JSXIdentifier",
                  "start": 572,
                  "end": 576,
                  "name": "Funk"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 632,
      "end": 656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 655,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 640,
            "name": "True",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 657,
      "end": 727,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 727,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 666,
            "name": "Fail3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 669,
            "end": 727,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "JSXElement",
              "start": 675,
              "end": 727,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 675,
                "end": 727,
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
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 700,
                          "end": 703,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
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
                        "name": "True",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 676,
                  "end": 680,
                  "name": "Funk"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 728,
      "end": 795,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 732,
          "end": 795,
          "id": {
            "type": "Identifier",
            "start": 732,
            "end": 738,
            "name": "attrs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 743,
                  "end": 755,
                  "name": "optionalBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 771,
                "end": 793,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 782,
                  "name": "mandatoryFn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 784,
                  "end": 793,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 790,
                    "end": 793,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 796,
      "end": 836,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 800,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 800,
            "end": 807,
            "name": "Success",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 810,
            "end": 836,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "JSXElement",
              "start": 816,
              "end": 836,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 816,
                "end": 836,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 822,
                    "end": 833,
                    "argument": {
                      "type": "Identifier",
                      "start": 826,
                      "end": 832,
                      "name": "attrs2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 817,
                  "end": 821,
                  "name": "Funk"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
