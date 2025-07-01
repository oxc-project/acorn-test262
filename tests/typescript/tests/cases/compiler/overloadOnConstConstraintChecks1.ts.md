__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 19,
                "end": 22
              },
              "expression": false,
              "start": 16,
              "end": 22
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 13,
            "end": 22
          }
        ],
        "start": 11,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 39
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 52
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 58
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 61,
                "end": 64
              },
              "expression": false,
              "start": 58,
              "end": 64
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 55,
            "end": 64
          }
        ],
        "start": 53,
        "end": 66
      },
      "abstract": false,
      "declare": false,
      "start": 25,
      "end": 66
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 81
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 94
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 100
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 103,
                "end": 106
              },
              "expression": false,
              "start": 100,
              "end": 106
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 97,
            "end": 106
          }
        ],
        "start": 95,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 67,
      "end": 108
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 136
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "biz",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 142
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 145,
                "end": 148
              },
              "expression": false,
              "start": 142,
              "end": 148
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 139,
            "end": 148
          }
        ],
        "start": 137,
        "end": 150
      },
      "abstract": false,
      "declare": false,
      "start": 109,
      "end": 150
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDoc",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 167
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 199
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 209,
                    "end": 215
                  },
                  "start": 207,
                  "end": 215
                },
                "start": 200,
                "end": 215
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 222
                },
                "typeArguments": null,
                "start": 218,
                "end": 222
              },
              "start": 216,
              "end": 222
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 186,
            "end": 223
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 241
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "canvas",
                      "raw": "'canvas'",
                      "start": 251,
                      "end": 259
                    },
                    "start": 251,
                    "end": 259
                  },
                  "start": 249,
                  "end": 259
                },
                "start": 242,
                "end": 259
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 270
                },
                "typeArguments": null,
                "start": 262,
                "end": 270
              },
              "start": 260,
              "end": 270
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 228,
            "end": 271
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 289
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "div",
                      "raw": "'div'",
                      "start": 299,
                      "end": 304
                    },
                    "start": 299,
                    "end": 304
                  },
                  "start": 297,
                  "end": 304
                },
                "start": 290,
                "end": 304
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 315
                },
                "typeArguments": null,
                "start": 307,
                "end": 315
              },
              "start": 305,
              "end": 315
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 276,
            "end": 316
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 334
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "span",
                      "raw": "'span'",
                      "start": 344,
                      "end": 350
                    },
                    "start": 344,
                    "end": 350
                  },
                  "start": 342,
                  "end": 350
                },
                "start": 335,
                "end": 350
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 361
                },
                "typeArguments": null,
                "start": 353,
                "end": 361
              },
              "start": 351,
              "end": 361
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 321,
            "end": 362
          }
        ],
        "start": 168,
        "end": 382
      },
      "declare": false,
      "start": 152,
      "end": 382
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 390,
        "end": 391
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyDoc",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 408
          },
          "typeArguments": null,
          "start": 403,
          "end": 408
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 428
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 437,
                      "end": 443
                    },
                    "start": 436,
                    "end": 443
                  },
                  "start": 429,
                  "end": 443
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 450
                  },
                  "typeArguments": null,
                  "start": 446,
                  "end": 450
                },
                "start": 444,
                "end": 450
              },
              "body": null,
              "expression": false,
              "start": 428,
              "end": 451
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 415,
            "end": 451
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 469
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "canvas",
                        "raw": "'canvas'",
                        "start": 479,
                        "end": 487
                      },
                      "start": 479,
                      "end": 487
                    },
                    "start": 477,
                    "end": 487
                  },
                  "start": 470,
                  "end": 487
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 498
                  },
                  "typeArguments": null,
                  "start": 490,
                  "end": 498
                },
                "start": 488,
                "end": 498
              },
              "body": null,
              "expression": false,
              "start": 469,
              "end": 499
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 456,
            "end": 499
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 517
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "div",
                        "raw": "'div'",
                        "start": 527,
                        "end": 532
                      },
                      "start": 527,
                      "end": 532
                    },
                    "start": 525,
                    "end": 532
                  },
                  "start": 518,
                  "end": 532
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 543
                  },
                  "typeArguments": null,
                  "start": 535,
                  "end": 543
                },
                "start": 533,
                "end": 543
              },
              "body": null,
              "expression": false,
              "start": 517,
              "end": 544
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 504,
            "end": 544
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 562
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "span",
                        "raw": "'span'",
                        "start": 572,
                        "end": 578
                      },
                      "start": 572,
                      "end": 578
                    },
                    "start": 570,
                    "end": 578
                  },
                  "start": 563,
                  "end": 578
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 589
                  },
                  "typeArguments": null,
                  "start": 581,
                  "end": 589
                },
                "start": 579,
                "end": 589
              },
              "body": null,
              "expression": false,
              "start": 562,
              "end": 590
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 549,
            "end": 590
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 595,
              "end": 608
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 617,
                      "end": 620
                    },
                    "start": 616,
                    "end": 620
                  },
                  "start": 609,
                  "end": 620
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 623,
                    "end": 627
                  },
                  "typeArguments": null,
                  "start": 623,
                  "end": 627
                },
                "start": 621,
                "end": 627
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 645,
                      "end": 649
                    },
                    "start": 638,
                    "end": 650
                  }
                ],
                "start": 628,
                "end": 656
              },
              "expression": false,
              "start": 608,
              "end": 656
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 595,
            "end": 656
          }
        ],
        "start": 409,
        "end": 658
      },
      "abstract": false,
      "declare": false,
      "start": 384,
      "end": 658
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 658
}
```
