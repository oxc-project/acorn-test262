__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 48
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              },
              "start": 56,
              "end": 64
            },
            "accessibility": null,
            "static": false,
            "start": 55,
            "end": 65
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 79
          }
        ],
        "start": 49,
        "end": 81
      },
      "declare": false,
      "start": 34,
      "end": 81
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 103
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
              "start": 104,
              "end": 105
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 104,
            "end": 105
          }
        ],
        "start": 103,
        "end": 106
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 120
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 130
        },
        "optional": false,
        "computed": false,
        "start": 115,
        "end": 130
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
              "start": 131,
              "end": 132
            },
            "typeArguments": null,
            "start": 131,
            "end": 132
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 134,
            "end": 136
          }
        ],
        "start": 130,
        "end": 137
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
              "name": "internalProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "typeArguments": null,
                "start": 158,
                "end": 159
              },
              "start": 156,
              "end": 159
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 144,
            "end": 160
          }
        ],
        "start": 138,
        "end": 162
      },
      "abstract": false,
      "declare": true,
      "start": 83,
      "end": 162
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp",
                "start": 173,
                "end": 179
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 184
                    },
                    "typeArguments": null,
                    "start": 180,
                    "end": 184
                  }
                ],
                "start": 179,
                "end": 185
              },
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 186,
                    "end": 187
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 189,
                      "end": 191
                    },
                    "start": 188,
                    "end": 192
                  },
                  "start": 186,
                  "end": 192
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 193,
                    "end": 194
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 195,
                    "end": 199
                  },
                  "start": 193,
                  "end": 199
                }
              ],
              "selfClosing": true,
              "start": 172,
              "end": 202
            },
            "children": [],
            "closingElement": null,
            "start": 172,
            "end": 202
          },
          "definite": false,
          "start": 168,
          "end": 202
        }
      ],
      "declare": false,
      "start": 164,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 212
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 216,
              "end": 222
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 227
                  },
                  "typeArguments": null,
                  "start": 223,
                  "end": 227
                }
              ],
              "start": 222,
              "end": 228
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 229,
                  "end": 230
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 232,
                    "end": 234
                  },
                  "start": 231,
                  "end": 235
                },
                "start": 229,
                "end": 235
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 236,
                  "end": 237
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 238,
                  "end": 242
                },
                "start": 236,
                "end": 242
              }
            ],
            "selfClosing": false,
            "start": 215,
            "end": 243
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 245,
              "end": 251
            },
            "start": 243,
            "end": 252
          },
          "start": 215,
          "end": 252
        },
        "start": 211,
        "end": 252
      },
      "directive": null,
      "start": 211,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 262
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 266,
              "end": 272
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 277
                  },
                  "typeArguments": null,
                  "start": 273,
                  "end": 277
                }
              ],
              "start": 272,
              "end": 278
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 279,
                  "end": 280
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 282,
                    "end": 284
                  },
                  "start": 281,
                  "end": 285
                },
                "start": 279,
                "end": 285
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 286,
                  "end": 287
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 289,
                    "end": 291
                  },
                  "start": 288,
                  "end": 292
                },
                "start": 286,
                "end": 292
              }
            ],
            "selfClosing": true,
            "start": 265,
            "end": 295
          },
          "children": [],
          "closingElement": null,
          "start": 265,
          "end": 295
        },
        "start": 261,
        "end": 295
      },
      "directive": null,
      "start": 261,
      "end": 296
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 307,
          "end": 308
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 312,
              "end": 318
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 323
                  },
                  "typeArguments": null,
                  "start": 319,
                  "end": 323
                }
              ],
              "start": 318,
              "end": 324
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 325,
                  "end": 326
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 328,
                    "end": 330
                  },
                  "start": 327,
                  "end": 331
                },
                "start": 325,
                "end": 331
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 332,
                  "end": 333
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 335,
                    "end": 337
                  },
                  "start": 334,
                  "end": 338
                },
                "start": 332,
                "end": 338
              }
            ],
            "selfClosing": false,
            "start": 311,
            "end": 339
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 341,
              "end": 347
            },
            "start": 339,
            "end": 348
          },
          "start": 311,
          "end": 348
        },
        "start": 307,
        "end": 348
      },
      "directive": null,
      "start": 307,
      "end": 349
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 361
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 365,
              "end": 371
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 376
                  },
                  "typeArguments": null,
                  "start": 372,
                  "end": 376
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 382
                  },
                  "typeArguments": null,
                  "start": 378,
                  "end": 382
                }
              ],
              "start": 371,
              "end": 383
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 384,
                  "end": 385
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 387,
                    "end": 389
                  },
                  "start": 386,
                  "end": 390
                },
                "start": 384,
                "end": 390
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 391,
                  "end": 392
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 393,
                  "end": 397
                },
                "start": 391,
                "end": 397
              }
            ],
            "selfClosing": true,
            "start": 364,
            "end": 400
          },
          "children": [],
          "closingElement": null,
          "start": 364,
          "end": 400
        },
        "start": 360,
        "end": 400
      },
      "directive": null,
      "start": 360,
      "end": 401
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 413
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 417,
              "end": 423
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 428
                  },
                  "typeArguments": null,
                  "start": 424,
                  "end": 428
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 434
                  },
                  "typeArguments": null,
                  "start": 430,
                  "end": 434
                }
              ],
              "start": 423,
              "end": 435
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 436,
                  "end": 437
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 439,
                    "end": 441
                  },
                  "start": 438,
                  "end": 442
                },
                "start": 436,
                "end": 442
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 443,
                  "end": 444
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 445,
                  "end": 449
                },
                "start": 443,
                "end": 449
              }
            ],
            "selfClosing": false,
            "start": 416,
            "end": 450
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 452,
              "end": 458
            },
            "start": 450,
            "end": 459
          },
          "start": 416,
          "end": 459
        },
        "start": 412,
        "end": 459
      },
      "directive": null,
      "start": 412,
      "end": 460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 471,
          "end": 472
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 476,
              "end": 482
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [],
              "start": 482,
              "end": 484
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 485,
                  "end": 486
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 488,
                    "end": 490
                  },
                  "start": 487,
                  "end": 491
                },
                "start": 485,
                "end": 491
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 492,
                  "end": 493
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 494,
                  "end": 498
                },
                "start": 492,
                "end": 498
              }
            ],
            "selfClosing": true,
            "start": 475,
            "end": 501
          },
          "children": [],
          "closingElement": null,
          "start": 475,
          "end": 501
        },
        "start": 471,
        "end": 501
      },
      "directive": null,
      "start": 471,
      "end": 502
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 514
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 518,
              "end": 524
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [],
              "start": 524,
              "end": 526
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 527,
                  "end": 528
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 530,
                    "end": 532
                  },
                  "start": 529,
                  "end": 533
                },
                "start": 527,
                "end": 533
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 534,
                  "end": 535
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 536,
                  "end": 540
                },
                "start": 534,
                "end": 540
              }
            ],
            "selfClosing": false,
            "start": 517,
            "end": 541
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 543,
              "end": 549
            },
            "start": 541,
            "end": 550
          },
          "start": 517,
          "end": 550
        },
        "start": 513,
        "end": 550
      },
      "directive": null,
      "start": 513,
      "end": 551
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 562,
          "end": 563
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 566,
              "end": 572
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 573,
                  "end": 575
                }
              ],
              "start": 572,
              "end": 576
            },
            "attributes": [],
            "selfClosing": true,
            "start": 565,
            "end": 579
          },
          "children": [],
          "closingElement": null,
          "start": 565,
          "end": 579
        },
        "start": 562,
        "end": 579
      },
      "directive": null,
      "start": 562,
      "end": 579
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 587,
          "end": 588
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 591,
              "end": 597
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 598,
                  "end": 600
                }
              ],
              "start": 597,
              "end": 601
            },
            "attributes": [],
            "selfClosing": false,
            "start": 590,
            "end": 602
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "start": 604,
              "end": 610
            },
            "start": 602,
            "end": 611
          },
          "start": 590,
          "end": 611
        },
        "start": 587,
        "end": 611
      },
      "directive": null,
      "start": 587,
      "end": 611
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp2",
        "optional": false,
        "typeAnnotation": null,
        "start": 633,
        "end": 640
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
              "start": 641,
              "end": 642
            },
            "constraint": {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 653,
                    "end": 654
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 656,
                      "end": 662
                    },
                    "start": 654,
                    "end": 662
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 653,
                  "end": 662
                }
              ],
              "start": 651,
              "end": 664
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 641,
            "end": 664
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null,
              "start": 666,
              "end": 668
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 671,
              "end": 673
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 666,
            "end": 673
          }
        ],
        "start": 640,
        "end": 674
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 688
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 689,
          "end": 698
        },
        "optional": false,
        "computed": false,
        "start": 683,
        "end": 698
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 700
                },
                "typeArguments": null,
                "start": 699,
                "end": 700
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 705
                },
                "typeArguments": null,
                "start": 703,
                "end": 705
              }
            ],
            "start": 699,
            "end": 705
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 707,
            "end": 709
          }
        ],
        "start": 698,
        "end": 710
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
              "name": "internalProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 729
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 732,
                      "end": 733
                    },
                    "typeArguments": null,
                    "start": 732,
                    "end": 733
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 737
                    },
                    "typeArguments": null,
                    "start": 735,
                    "end": 737
                  }
                ],
                "start": 731,
                "end": 738
              },
              "start": 729,
              "end": 738
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 717,
            "end": 739
          }
        ],
        "start": 711,
        "end": 741
      },
      "abstract": false,
      "declare": true,
      "start": 619,
      "end": 741
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 742,
          "end": 743
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 747,
              "end": 754
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 756,
                        "end": 757
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 759,
                          "end": 765
                        },
                        "start": 757,
                        "end": 765
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 756,
                      "end": 766
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 767,
                        "end": 768
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 770,
                          "end": 776
                        },
                        "start": 768,
                        "end": 776
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 767,
                      "end": 776
                    }
                  ],
                  "start": 755,
                  "end": 777
                }
              ],
              "start": 754,
              "end": 778
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 779,
                  "end": 780
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 781,
                  "end": 784
                },
                "start": 779,
                "end": 784
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 785,
                  "end": 786
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 787,
                  "end": 790
                },
                "start": 785,
                "end": 790
              }
            ],
            "selfClosing": true,
            "start": 746,
            "end": 793
          },
          "children": [],
          "closingElement": null,
          "start": 746,
          "end": 793
        },
        "start": 742,
        "end": 793
      },
      "directive": null,
      "start": 742,
      "end": 794
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 802,
          "end": 803
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 807,
              "end": 814
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 816,
                        "end": 817
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 819,
                          "end": 825
                        },
                        "start": 817,
                        "end": 825
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 816,
                      "end": 826
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 828
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 830,
                          "end": 836
                        },
                        "start": 828,
                        "end": 836
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 827,
                      "end": 836
                    }
                  ],
                  "start": 815,
                  "end": 837
                }
              ],
              "start": 814,
              "end": 838
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 839,
                  "end": 840
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 841,
                  "end": 844
                },
                "start": 839,
                "end": 844
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 845,
                  "end": 846
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 847,
                  "end": 850
                },
                "start": 845,
                "end": 850
              }
            ],
            "selfClosing": false,
            "start": 806,
            "end": 851
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 853,
              "end": 860
            },
            "start": 851,
            "end": 861
          },
          "start": 806,
          "end": 861
        },
        "start": 802,
        "end": 861
      },
      "directive": null,
      "start": 802,
      "end": 862
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 870,
          "end": 871
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 875,
              "end": 882
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 883,
                    "end": 887
                  },
                  "typeArguments": null,
                  "start": 883,
                  "end": 887
                }
              ],
              "start": 882,
              "end": 888
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 889,
                  "end": 890
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 892,
                    "end": 894
                  },
                  "start": 891,
                  "end": 895
                },
                "start": 889,
                "end": 895
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 896,
                  "end": 897
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 898,
                  "end": 902
                },
                "start": 896,
                "end": 902
              }
            ],
            "selfClosing": true,
            "start": 874,
            "end": 905
          },
          "children": [],
          "closingElement": null,
          "start": 874,
          "end": 905
        },
        "start": 870,
        "end": 905
      },
      "directive": null,
      "start": 870,
      "end": 906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 917,
          "end": 918
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 922,
              "end": 929
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 930,
                    "end": 934
                  },
                  "typeArguments": null,
                  "start": 930,
                  "end": 934
                }
              ],
              "start": 929,
              "end": 935
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 936,
                  "end": 937
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 939,
                    "end": 941
                  },
                  "start": 938,
                  "end": 942
                },
                "start": 936,
                "end": 942
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 943,
                  "end": 944
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 945,
                  "end": 949
                },
                "start": 943,
                "end": 949
              }
            ],
            "selfClosing": false,
            "start": 921,
            "end": 950
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 952,
              "end": 959
            },
            "start": 950,
            "end": 960
          },
          "start": 921,
          "end": 960
        },
        "start": 917,
        "end": 960
      },
      "directive": null,
      "start": 917,
      "end": 961
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 972,
          "end": 973
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 977,
              "end": 984
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 986,
                        "end": 987
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 989,
                          "end": 995
                        },
                        "start": 987,
                        "end": 995
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 986,
                      "end": 995
                    }
                  ],
                  "start": 985,
                  "end": 996
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 999,
                        "end": 1000
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1002,
                          "end": 1008
                        },
                        "start": 1000,
                        "end": 1008
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 999,
                      "end": 1008
                    }
                  ],
                  "start": 998,
                  "end": 1009
                }
              ],
              "start": 984,
              "end": 1010
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 1011,
                  "end": 1012
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1013,
                  "end": 1017
                },
                "start": 1011,
                "end": 1017
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 1018,
                  "end": 1019
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1020,
                  "end": 1024
                },
                "start": 1018,
                "end": 1024
              }
            ],
            "selfClosing": true,
            "start": 976,
            "end": 1027
          },
          "children": [],
          "closingElement": null,
          "start": 976,
          "end": 1027
        },
        "start": 972,
        "end": 1027
      },
      "directive": null,
      "start": 972,
      "end": 1028
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1036,
          "end": 1037
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 1041,
              "end": 1048
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1050,
                        "end": 1051
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1053,
                          "end": 1059
                        },
                        "start": 1051,
                        "end": 1059
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1050,
                      "end": 1059
                    }
                  ],
                  "start": 1049,
                  "end": 1060
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1063,
                        "end": 1064
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1066,
                          "end": 1072
                        },
                        "start": 1064,
                        "end": 1072
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1063,
                      "end": 1072
                    }
                  ],
                  "start": 1062,
                  "end": 1073
                }
              ],
              "start": 1048,
              "end": 1074
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 1075,
                  "end": 1076
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1077,
                  "end": 1081
                },
                "start": 1075,
                "end": 1081
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 1082,
                  "end": 1083
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1084,
                  "end": 1088
                },
                "start": 1082,
                "end": 1088
              }
            ],
            "selfClosing": false,
            "start": 1040,
            "end": 1089
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 1091,
              "end": 1098
            },
            "start": 1089,
            "end": 1099
          },
          "start": 1040,
          "end": 1099
        },
        "start": 1036,
        "end": 1099
      },
      "directive": null,
      "start": 1036,
      "end": 1100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1108,
          "end": 1109
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 1113,
              "end": 1120
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1122,
                        "end": 1123
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1125,
                          "end": 1131
                        },
                        "start": 1123,
                        "end": 1131
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1122,
                      "end": 1131
                    }
                  ],
                  "start": 1121,
                  "end": 1132
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1135,
                        "end": 1136
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1138,
                          "end": 1144
                        },
                        "start": 1136,
                        "end": 1144
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1135,
                      "end": 1144
                    }
                  ],
                  "start": 1134,
                  "end": 1145
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1147,
                    "end": 1151
                  },
                  "typeArguments": null,
                  "start": 1147,
                  "end": 1151
                }
              ],
              "start": 1120,
              "end": 1152
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 1153,
                  "end": 1154
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1155,
                  "end": 1159
                },
                "start": 1153,
                "end": 1159
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 1160,
                  "end": 1161
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1162,
                  "end": 1166
                },
                "start": 1160,
                "end": 1166
              }
            ],
            "selfClosing": true,
            "start": 1112,
            "end": 1169
          },
          "children": [],
          "closingElement": null,
          "start": 1112,
          "end": 1169
        },
        "start": 1108,
        "end": 1169
      },
      "directive": null,
      "start": 1108,
      "end": 1170
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1181,
          "end": 1182
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 1186,
              "end": 1193
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1195,
                        "end": 1196
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1198,
                          "end": 1204
                        },
                        "start": 1196,
                        "end": 1204
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1195,
                      "end": 1204
                    }
                  ],
                  "start": 1194,
                  "end": 1205
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1208,
                        "end": 1209
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1211,
                          "end": 1217
                        },
                        "start": 1209,
                        "end": 1217
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1208,
                      "end": 1217
                    }
                  ],
                  "start": 1207,
                  "end": 1218
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1220,
                    "end": 1224
                  },
                  "typeArguments": null,
                  "start": 1220,
                  "end": 1224
                }
              ],
              "start": 1193,
              "end": 1225
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 1226,
                  "end": 1227
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1228,
                  "end": 1232
                },
                "start": 1226,
                "end": 1232
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 1233,
                  "end": 1234
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1235,
                  "end": 1239
                },
                "start": 1233,
                "end": 1239
              }
            ],
            "selfClosing": false,
            "start": 1185,
            "end": 1240
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 1242,
              "end": 1249
            },
            "start": 1240,
            "end": 1250
          },
          "start": 1185,
          "end": 1250
        },
        "start": 1181,
        "end": 1250
      },
      "directive": null,
      "start": 1181,
      "end": 1251
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1262,
          "end": 1263
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 1267,
              "end": 1274
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1276,
                        "end": 1277
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1279,
                          "end": 1285
                        },
                        "start": 1277,
                        "end": 1285
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1276,
                      "end": 1285
                    }
                  ],
                  "start": 1275,
                  "end": 1286
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1289,
                        "end": 1290
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1292,
                          "end": 1298
                        },
                        "start": 1290,
                        "end": 1298
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1289,
                      "end": 1298
                    }
                  ],
                  "start": 1288,
                  "end": 1299
                }
              ],
              "start": 1274,
              "end": 1300
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 1301,
                  "end": 1302
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1303,
                  "end": 1307
                },
                "start": 1301,
                "end": 1307
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 1308,
                  "end": 1309
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1310,
                  "end": 1314
                },
                "start": 1308,
                "end": 1314
              }
            ],
            "selfClosing": true,
            "start": 1266,
            "end": 1317
          },
          "children": [],
          "closingElement": null,
          "start": 1266,
          "end": 1317
        },
        "start": 1262,
        "end": 1317
      },
      "directive": null,
      "start": 1262,
      "end": 1318
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1329,
          "end": 1330
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 1334,
              "end": 1341
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1343,
                        "end": 1344
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1346,
                          "end": 1352
                        },
                        "start": 1344,
                        "end": 1352
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1343,
                      "end": 1352
                    }
                  ],
                  "start": 1342,
                  "end": 1353
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1356,
                        "end": 1357
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1359,
                          "end": 1365
                        },
                        "start": 1357,
                        "end": 1365
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1356,
                      "end": 1365
                    }
                  ],
                  "start": 1355,
                  "end": 1366
                }
              ],
              "start": 1341,
              "end": 1367
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 1368,
                  "end": 1369
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1370,
                  "end": 1374
                },
                "start": 1368,
                "end": 1374
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "start": 1375,
                  "end": 1376
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1377,
                  "end": 1381
                },
                "start": 1375,
                "end": 1381
              }
            ],
            "selfClosing": false,
            "start": 1333,
            "end": 1382
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "start": 1384,
              "end": 1391
            },
            "start": 1382,
            "end": 1392
          },
          "start": 1333,
          "end": 1392
        },
        "start": 1329,
        "end": 1392
      },
      "directive": null,
      "start": 1329,
      "end": 1393
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1402
}
```
