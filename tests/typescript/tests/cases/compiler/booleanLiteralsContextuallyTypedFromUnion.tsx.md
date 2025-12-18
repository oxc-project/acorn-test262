__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 20,
                  "end": 24
                },
                "start": 20,
                "end": 24
              },
              "start": 18,
              "end": 24
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 25
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 39
          }
        ],
        "start": 12,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 62,
                  "end": 67
                },
                "start": 62,
                "end": 67
              },
              "start": 60,
              "end": 67
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 68
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 69,
            "end": 83
          }
        ],
        "start": 54,
        "end": 85
      },
      "declare": false,
      "start": 42,
      "end": 85
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 92
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "typeArguments": null,
            "start": 95,
            "end": 96
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "typeArguments": null,
            "start": 99,
            "end": 100
          }
        ],
        "start": 95,
        "end": 100
      },
      "declare": false,
      "start": 86,
      "end": 101
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
            "name": "isIt",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 112
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 119
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 126
                },
                "optional": false,
                "computed": false,
                "start": 115,
                "end": 126
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 115,
              "end": 128
            },
            "operator": ">",
            "right": {
              "type": "Literal",
              "value": 0.5,
              "raw": "0.5",
              "start": 131,
              "end": 134
            },
            "start": 115,
            "end": 134
          },
          "definite": false,
          "start": 108,
          "end": 134
        }
      ],
      "declare": false,
      "start": 102,
      "end": 135
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "typeArguments": null,
                "start": 145,
                "end": 146
              },
              "start": 143,
              "end": 146
            },
            "start": 142,
            "end": 146
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 153
            },
            "consequent": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 162
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 162
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 158,
                  "end": 162
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 168
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hey",
                    "raw": "'hey'",
                    "start": 170,
                    "end": 175
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 164,
                  "end": 175
                }
              ],
              "start": 156,
              "end": 177
            },
            "alternate": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 186
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 186
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 182,
                  "end": 186
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 193
                  },
                  "value": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 195,
                    "end": 198
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 188,
                  "end": 198
                }
              ],
              "start": 180,
              "end": 200
            },
            "start": 149,
            "end": 200
          },
          "definite": false,
          "start": 142,
          "end": 200
        }
      ],
      "declare": false,
      "start": 136,
      "end": 201
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
            "name": "cc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 213
                },
                "typeArguments": null,
                "start": 212,
                "end": 213
              },
              "start": 210,
              "end": 213
            },
            "start": 208,
            "end": 213
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 220
            },
            "consequent": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 225,
                    "end": 229
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 235
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 225,
                  "end": 235
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 241
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hey",
                    "raw": "'hey'",
                    "start": 243,
                    "end": 248
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 237,
                  "end": 248
                }
              ],
              "start": 223,
              "end": 250
            },
            "alternate": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 259
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 265
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 255,
                  "end": 265
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 272
                  },
                  "value": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 274,
                    "end": 277
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 267,
                  "end": 277
                }
              ],
              "start": 253,
              "end": 279
            },
            "start": 216,
            "end": 279
          },
          "definite": false,
          "start": 208,
          "end": 279
        }
      ],
      "declare": false,
      "start": 202,
      "end": 280
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 301
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 332
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 334,
                      "end": 338
                    },
                    "start": 334,
                    "end": 338
                  },
                  "start": 332,
                  "end": 338
                },
                "accessibility": null,
                "static": false,
                "start": 320,
                "end": 339
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mandatoryFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 359
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 367,
                        "end": 371
                      },
                      "start": 364,
                      "end": 371
                    },
                    "start": 361,
                    "end": 371
                  },
                  "start": 359,
                  "end": 371
                },
                "accessibility": null,
                "static": false,
                "start": 348,
                "end": 372
              }
            ],
            "start": 310,
            "end": 378
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 407
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 409,
                      "end": 414
                    },
                    "start": 409,
                    "end": 414
                  },
                  "start": 407,
                  "end": 414
                },
                "accessibility": null,
                "static": false,
                "start": 395,
                "end": 415
              }
            ],
            "start": 385,
            "end": 421
          }
        ],
        "start": 308,
        "end": 421
      },
      "declare": false,
      "start": 282,
      "end": 422
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Funk",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 432
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 458
                    },
                    "typeArguments": null,
                    "start": 444,
                    "end": 458
                  },
                  "start": 442,
                  "end": 458
                },
                "start": 436,
                "end": 458
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 464,
                  "end": 467
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 463,
                "end": 468
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hello",
                  "raw": "Hello",
                  "start": 468,
                  "end": 473
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 475,
                  "end": 478
                },
                "start": 473,
                "end": 479
              },
              "start": 463,
              "end": 479
            },
            "id": null,
            "generator": false,
            "start": 435,
            "end": 479
          },
          "definite": false,
          "start": 428,
          "end": 479
        }
      ],
      "declare": false,
      "start": 424,
      "end": 480
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fail1",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 491
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
                  "name": "Funk",
                  "start": 501,
                  "end": 505
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "mandatoryFn",
                      "start": 506,
                      "end": 517
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 525,
                          "end": 528
                        },
                        "id": null,
                        "generator": false,
                        "start": 519,
                        "end": 528
                      },
                      "start": 518,
                      "end": 529
                    },
                    "start": 506,
                    "end": 529
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "optionalBool",
                      "start": 530,
                      "end": 542
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 544,
                        "end": 548
                      },
                      "start": 543,
                      "end": 549
                    },
                    "start": 530,
                    "end": 549
                  }
                ],
                "selfClosing": true,
                "start": 500,
                "end": 552
              },
              "children": [],
              "closingElement": null,
              "start": 500,
              "end": 552
            },
            "id": null,
            "generator": false,
            "start": 494,
            "end": 552
          },
          "definite": false,
          "start": 486,
          "end": 552
        }
      ],
      "declare": false,
      "start": 482,
      "end": 552
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fail2",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 562
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
                  "name": "Funk",
                  "start": 572,
                  "end": 576
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "mandatoryFn",
                      "start": 577,
                      "end": 588
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 596,
                          "end": 599
                        },
                        "id": null,
                        "generator": false,
                        "start": 590,
                        "end": 599
                      },
                      "start": 589,
                      "end": 600
                    },
                    "start": 577,
                    "end": 600
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "optionalBool",
                      "start": 601,
                      "end": 613
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 615,
                          "end": 619
                        },
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 623,
                            "end": 627
                          },
                          "start": 623,
                          "end": 627
                        },
                        "start": 615,
                        "end": 627
                      },
                      "start": 614,
                      "end": 628
                    },
                    "start": 601,
                    "end": 628
                  }
                ],
                "selfClosing": true,
                "start": 571,
                "end": 631
              },
              "children": [],
              "closingElement": null,
              "start": 571,
              "end": 631
            },
            "id": null,
            "generator": false,
            "start": 565,
            "end": 631
          },
          "definite": false,
          "start": 557,
          "end": 631
        }
      ],
      "declare": false,
      "start": 553,
      "end": 631
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "True",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 640
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 643,
              "end": 647
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 651,
                "end": 655
              },
              "start": 651,
              "end": 655
            },
            "start": 643,
            "end": 655
          },
          "definite": false,
          "start": 636,
          "end": 655
        }
      ],
      "declare": false,
      "start": 632,
      "end": 656
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fail3",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 666
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
                  "name": "Funk",
                  "start": 676,
                  "end": 680
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "mandatoryFn",
                      "start": 681,
                      "end": 692
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 700,
                          "end": 703
                        },
                        "id": null,
                        "generator": false,
                        "start": 694,
                        "end": 703
                      },
                      "start": 693,
                      "end": 704
                    },
                    "start": 681,
                    "end": 704
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "optionalBool",
                      "start": 705,
                      "end": 717
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "True",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 723
                      },
                      "start": 718,
                      "end": 724
                    },
                    "start": 705,
                    "end": 724
                  }
                ],
                "selfClosing": true,
                "start": 675,
                "end": 727
              },
              "children": [],
              "closingElement": null,
              "start": 675,
              "end": 727
            },
            "id": null,
            "generator": false,
            "start": 669,
            "end": 727
          },
          "definite": false,
          "start": 661,
          "end": 727
        }
      ],
      "declare": false,
      "start": 657,
      "end": 727
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "attrs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 732,
            "end": 738
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 743,
                  "end": 755
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 757,
                    "end": 761
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 765,
                      "end": 769
                    },
                    "start": 765,
                    "end": 769
                  },
                  "start": 757,
                  "end": 769
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 743,
                "end": 769
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mandatoryFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 782
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 790,
                    "end": 793
                  },
                  "id": null,
                  "generator": false,
                  "start": 784,
                  "end": 793
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 771,
                "end": 793
              }
            ],
            "start": 741,
            "end": 795
          },
          "definite": false,
          "start": 732,
          "end": 795
        }
      ],
      "declare": false,
      "start": 728,
      "end": 795
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Success",
            "optional": false,
            "typeAnnotation": null,
            "start": 800,
            "end": 807
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
                  "name": "Funk",
                  "start": 817,
                  "end": 821
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attrs2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 826,
                      "end": 832
                    },
                    "start": 822,
                    "end": 833
                  }
                ],
                "selfClosing": true,
                "start": 816,
                "end": 836
              },
              "children": [],
              "closingElement": null,
              "start": 816,
              "end": 836
            },
            "id": null,
            "generator": false,
            "start": 810,
            "end": 836
          },
          "definite": false,
          "start": 800,
          "end": 836
        }
      ],
      "declare": false,
      "start": 796,
      "end": 836
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 836
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 62,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 86,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 136,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "String",
    "value": "'hey'",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "cc",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "'hey'",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 267,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 282,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 287,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "optionalBool",
    "start": 320,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "mandatoryFn",
    "start": 348,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 364,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "optionalBool",
    "start": 395,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 409,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 424,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "Funk",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "_props",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 444,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 467,
    "end": 468
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 468,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 474,
    "end": 475
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 482,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "Fail1",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 497,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 500,
    "end": 501
  },
  {
    "type": "JSXIdentifier",
    "value": "Funk",
    "start": 501,
    "end": 505
  },
  {
    "type": "JSXIdentifier",
    "value": "mandatoryFn",
    "start": 506,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "JSXIdentifier",
    "value": "optionalBool",
    "start": 530,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 553,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "Fail2",
    "start": 557,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 571,
    "end": 572
  },
  {
    "type": "JSXIdentifier",
    "value": "Funk",
    "start": 572,
    "end": 576
  },
  {
    "type": "JSXIdentifier",
    "value": "mandatoryFn",
    "start": 577,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 593,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "JSXIdentifier",
    "value": "optionalBool",
    "start": 601,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 615,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 620,
    "end": 622
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 623,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "True",
    "start": 636,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 643,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 648,
    "end": 650
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 657,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "Fail3",
    "start": 661,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 672,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 675,
    "end": 676
  },
  {
    "type": "JSXIdentifier",
    "value": "Funk",
    "start": 676,
    "end": 680
  },
  {
    "type": "JSXIdentifier",
    "value": "mandatoryFn",
    "start": 681,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "JSXIdentifier",
    "value": "optionalBool",
    "start": 705,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "True",
    "start": 719,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 728,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "attrs2",
    "start": 732,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "optionalBool",
    "start": 743,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 757,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 762,
    "end": 764
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 765,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "mandatoryFn",
    "start": 771,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 787,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 796,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "Success",
    "start": 800,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 813,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 816,
    "end": 817
  },
  {
    "type": "JSXIdentifier",
    "value": "Funk",
    "start": 817,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 823,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "attrs2",
    "start": 826,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836
  }
]
```
