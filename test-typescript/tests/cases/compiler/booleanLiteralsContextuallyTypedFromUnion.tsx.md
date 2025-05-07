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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 30,
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 85,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 85,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 68,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "false",
                  "value": false,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 76,
                "end": 82
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 86,
      "end": 101,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 95,
        "end": 100,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 96,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 99,
            "end": 100,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
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
            "operator": ">",
            "left": {
              "type": "CallExpression",
              "start": 115,
              "end": 128,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 115,
                "end": 126,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 119,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 126,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "right": {
              "type": "Literal",
              "start": 131,
              "end": 134,
              "raw": "0.5",
              "value": 0.5,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 149,
            "end": 200,
            "alternate": {
              "type": "ObjectExpression",
              "start": 180,
              "end": 200,
              "properties": [
                {
                  "type": "Property",
                  "start": 182,
                  "end": 186,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 186,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 186,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 188,
                  "end": 198,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 193,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 195,
                    "end": 198,
                    "raw": "123",
                    "value": 123,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 162,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 162,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 164,
                  "end": 175,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 168,
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 170,
                    "end": 175,
                    "raw": "'hey'",
                    "value": "hey",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 149,
              "end": 153,
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 216,
            "end": 279,
            "alternate": {
              "type": "ObjectExpression",
              "start": 253,
              "end": 279,
              "properties": [
                {
                  "type": "Property",
                  "start": 255,
                  "end": 265,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 259,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 265,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 267,
                  "end": 277,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 272,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 274,
                    "end": 277,
                    "raw": "123",
                    "value": 123,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 229,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 235,
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 237,
                  "end": 248,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 241,
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 243,
                    "end": 248,
                    "raw": "'hey'",
                    "value": "hey",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 216,
              "end": 220,
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 282,
      "end": 422,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 301,
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 332,
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 348,
                "end": 372,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 359,
                  "decorators": [],
                  "name": "mandatoryFn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 359,
                  "end": 371,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 361,
                    "end": 371,
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
                    },
                    "typeParameters": null
                  }
                }
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 407,
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "false",
                      "value": false,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
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
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 463,
              "end": 479,
              "children": [
                {
                  "type": "JSXText",
                  "start": 468,
                  "end": 473,
                  "raw": "Hello",
                  "value": "Hello"
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
              },
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
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 458,
                      "decorators": [],
                      "name": "ComponentProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 500,
              "end": 552,
              "children": [],
              "closingElement": null,
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
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 525,
                          "end": 528,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
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
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
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
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 571,
              "end": 631,
              "children": [],
              "closingElement": null,
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
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 596,
                          "end": 599,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
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
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 623,
                          "end": 627,
                          "literal": {
                            "type": "Literal",
                            "start": 623,
                            "end": 627,
                            "raw": "true",
                            "value": true,
                            "regex": null,
                            "bigint": null
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
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 651,
              "end": 655,
              "literal": {
                "type": "Literal",
                "start": 651,
                "end": 655,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 675,
              "end": 727,
              "children": [],
              "closingElement": null,
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
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 700,
                          "end": 703,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
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
                "name": {
                  "type": "JSXIdentifier",
                  "start": 676,
                  "end": 680,
                  "name": "Funk"
                },
                "selfClosing": true,
                "typeArguments": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 743,
                  "end": 755,
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 757,
                  "end": 769,
                  "expression": {
                    "type": "Literal",
                    "start": 757,
                    "end": 761,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 765,
                    "end": 769,
                    "literal": {
                      "type": "Literal",
                      "start": 765,
                      "end": 769,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 771,
                "end": 793,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 782,
                  "decorators": [],
                  "name": "mandatoryFn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 784,
                  "end": 793,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 790,
                    "end": 793,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 816,
              "end": 836,
              "children": [],
              "closingElement": null,
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
                      "decorators": [],
                      "name": "attrs2",
                      "optional": false,
                      "typeAnnotation": null
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
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
