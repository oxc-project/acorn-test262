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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 22,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 19,
                "end": 22,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 39,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 81,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 90,
        "end": 94,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "biz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 123,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 136,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 382,
      "body": {
        "type": "TSInterfaceBody",
        "start": 168,
        "end": 382,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 186,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 199,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 200,
                "end": 215,
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 207,
                  "end": 215,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 209,
                    "end": 215
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 222,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 222,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 222,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 228,
            "end": 271,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 241,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 242,
                "end": 259,
                "decorators": [],
                "name": "tagName",
                "optional": false,
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
                      "raw": "'canvas'",
                      "value": "canvas"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 270,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 270,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 276,
            "end": 316,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 289,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 290,
                "end": 304,
                "decorators": [],
                "name": "tagName",
                "optional": false,
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
                      "raw": "'div'",
                      "value": "div"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 307,
                "end": 315,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 315,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 321,
            "end": 362,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 321,
              "end": 334,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 335,
                "end": 350,
                "decorators": [],
                "name": "tagName",
                "optional": false,
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
                      "raw": "'span'",
                      "value": "span"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 351,
              "end": 361,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 353,
                "end": 361,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 361,
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 167,
        "decorators": [],
        "name": "MyDoc",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 384,
      "end": 658,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 658,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 415,
            "end": 451,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 415,
              "end": 428,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 428,
              "end": 451,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 429,
                  "end": 443,
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 436,
                    "end": 443,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 437,
                      "end": 443
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 444,
                "end": 450,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 446,
                  "end": 450,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 450,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 456,
            "end": 499,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 456,
              "end": 469,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 469,
              "end": 499,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 470,
                  "end": 487,
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
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
                        "raw": "'canvas'",
                        "value": "canvas"
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 488,
                "end": 498,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 490,
                  "end": 498,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 498,
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 504,
            "end": 544,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 517,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 517,
              "end": 544,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 518,
                  "end": 532,
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
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
                        "raw": "'div'",
                        "value": "div"
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 533,
                "end": 543,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 535,
                  "end": 543,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 543,
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 549,
            "end": 590,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 549,
              "end": 562,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 562,
              "end": 590,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 563,
                  "end": 578,
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
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
                        "raw": "'span'",
                        "value": "span"
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 579,
                "end": 589,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 581,
                  "end": 589,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 589,
                    "decorators": [],
                    "name": "Derived3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 595,
            "end": 656,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 595,
              "end": 608,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 608,
              "end": 656,
              "async": false,
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
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 609,
                  "end": 620,
                  "decorators": [],
                  "name": "tagName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 616,
                    "end": 620,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 617,
                      "end": 620
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 621,
                "end": 627,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 623,
                  "end": 627,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 623,
                    "end": 627,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 391,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 403,
          "end": 408,
          "expression": {
            "type": "Identifier",
            "start": 403,
            "end": 408,
            "decorators": [],
            "name": "MyDoc",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
