__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 658,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 22,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 19,
                "end": 22,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 39,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 64,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 81,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 90,
        "end": 94,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 106,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 123,
        "name": "Derived3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 136,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "name": "biz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 167,
        "name": "MyDoc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 168,
        "end": 382,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 186,
            "end": 223,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 199,
              "name": "createElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 200,
                "end": 215,
                "name": "tagName",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 207,
                  "end": 215,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 209,
                    "end": 215
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 222,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 222,
                "typeName": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 222,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 228,
            "end": 271,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 241,
              "name": "createElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 242,
                "end": 259,
                "name": "tagName",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 249,
                  "end": 259,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 251,
                    "end": 259,
                    "literal": {
                      "type": "Literal",
                      "start": 251,
                      "end": 259,
                      "value": "canvas",
                      "raw": "'canvas'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 270,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 270,
                  "name": "Derived1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 276,
            "end": 316,
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 289,
              "name": "createElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 290,
                "end": 304,
                "name": "tagName",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 297,
                  "end": 304,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 299,
                    "end": 304,
                    "literal": {
                      "type": "Literal",
                      "start": 299,
                      "end": 304,
                      "value": "div",
                      "raw": "'div'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 307,
                "end": 315,
                "typeName": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 315,
                  "name": "Derived2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 321,
            "end": 362,
            "key": {
              "type": "Identifier",
              "start": 321,
              "end": 334,
              "name": "createElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 335,
                "end": 350,
                "name": "tagName",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 342,
                  "end": 350,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 344,
                    "end": 350,
                    "literal": {
                      "type": "Literal",
                      "start": 344,
                      "end": 350,
                      "value": "span",
                      "raw": "'span'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 351,
              "end": 361,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 353,
                "end": 361,
                "typeName": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 361,
                  "name": "Derived3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 384,
      "end": 658,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 391,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 658,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 415,
            "end": 451,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 415,
              "end": 428,
              "name": "createElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 428,
              "end": 451,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 429,
                  "end": 443,
                  "name": "tagName",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 436,
                    "end": 443,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 437,
                      "end": 443
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 444,
                "end": 450,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 446,
                  "end": 450,
                  "typeName": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 450,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 456,
            "end": 499,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 456,
              "end": 469,
              "name": "createElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 469,
              "end": 499,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 470,
                  "end": 487,
                  "name": "tagName",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 477,
                    "end": 487,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 479,
                      "end": 487,
                      "literal": {
                        "type": "Literal",
                        "start": 479,
                        "end": 487,
                        "value": "canvas",
                        "raw": "'canvas'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 488,
                "end": 498,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 490,
                  "end": 498,
                  "typeName": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 498,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 504,
            "end": 544,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 517,
              "name": "createElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 517,
              "end": 544,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 518,
                  "end": 532,
                  "name": "tagName",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 525,
                    "end": 532,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 527,
                      "end": 532,
                      "literal": {
                        "type": "Literal",
                        "start": 527,
                        "end": 532,
                        "value": "div",
                        "raw": "'div'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 533,
                "end": 543,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 535,
                  "end": 543,
                  "typeName": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 543,
                    "name": "Derived2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 549,
            "end": 590,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 549,
              "end": 562,
              "name": "createElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 562,
              "end": 590,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 563,
                  "end": 578,
                  "name": "tagName",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 570,
                    "end": 578,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 572,
                      "end": 578,
                      "literal": {
                        "type": "Literal",
                        "start": 572,
                        "end": 578,
                        "value": "span",
                        "raw": "'span'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 579,
                "end": 589,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 581,
                  "end": 589,
                  "typeName": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 589,
                    "name": "Derived3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 595,
            "end": 656,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 595,
              "end": 608,
              "name": "createElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 608,
              "end": 656,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 609,
                  "end": 620,
                  "name": "tagName",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 616,
                    "end": 620,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 617,
                      "end": 620
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 628,
                "end": 656,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 638,
                    "end": 650,
                    "argument": {
                      "type": "Literal",
                      "start": 645,
                      "end": 649,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 621,
                "end": 627,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 623,
                  "end": 627,
                  "typeName": {
                    "type": "Identifier",
                    "start": 623,
                    "end": 627,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 403,
          "end": 408,
          "expression": {
            "type": "Identifier",
            "start": 403,
            "end": 408,
            "name": "MyDoc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
