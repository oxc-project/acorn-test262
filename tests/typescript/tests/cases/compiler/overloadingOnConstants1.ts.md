__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 868,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 22,
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
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 22,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 19,
                "end": 22,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 66,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 64,
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
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 108,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 106,
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
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 106,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 150,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 148,
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
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 171,
        "decorators": [],
        "name": "Document2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 172,
        "end": 356,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 178,
            "end": 221,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 191,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 192,
                "end": 209,
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 199,
                  "end": 209,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 201,
                    "end": 209,
                    "literal": {
                      "type": "Literal",
                      "start": 201,
                      "end": 209,
                      "value": "canvas",
                      "raw": "'canvas'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 220,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 226,
            "end": 266,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 239,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 240,
                "end": 254,
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 247,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 249,
                    "end": 254,
                    "literal": {
                      "type": "Literal",
                      "start": 249,
                      "end": 254,
                      "value": "div",
                      "raw": "'div'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 265,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 265,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 271,
            "end": 312,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 284,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 285,
                "end": 300,
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 292,
                  "end": 300,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 294,
                    "end": 300,
                    "literal": {
                      "type": "Literal",
                      "start": 294,
                      "end": 300,
                      "value": "span",
                      "raw": "'span'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 301,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 303,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 311,
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 317,
            "end": 354,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 330,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 331,
                "end": 346,
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 338,
                  "end": 346,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 340,
                    "end": 346
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 353,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 349,
                "end": 353,
                "typeName": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 353,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 358,
      "end": 376,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 362,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 362,
            "end": 375,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 366,
                "end": 375,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 375,
                  "decorators": [],
                  "name": "Document2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 440,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 415,
            "decorators": [],
            "name": "htmlElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 409,
              "end": 415,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 411,
                "end": 415,
                "typeName": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 415,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 440,
            "callee": {
              "type": "MemberExpression",
              "start": 418,
              "end": 434,
              "object": {
                "type": "Identifier",
                "start": 418,
                "end": 420,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 421,
                "end": 434,
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 435,
                "end": 439,
                "value": "yo",
                "raw": "\"yo\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 502,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 501,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 472,
            "decorators": [],
            "name": "htmlCanvasElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 472,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 464,
                "end": 472,
                "typeName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 472,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 475,
            "end": 501,
            "callee": {
              "type": "MemberExpression",
              "start": 475,
              "end": 491,
              "object": {
                "type": "Identifier",
                "start": 475,
                "end": 477,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 478,
                "end": 491,
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 492,
                "end": 500,
                "value": "canvas",
                "raw": "\"canvas\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 503,
      "end": 558,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 557,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 531,
            "decorators": [],
            "name": "htmlDivElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 521,
              "end": 531,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 523,
                "end": 531,
                "typeName": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 531,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 534,
            "end": 557,
            "callee": {
              "type": "MemberExpression",
              "start": 534,
              "end": 550,
              "object": {
                "type": "Identifier",
                "start": 534,
                "end": 536,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 537,
                "end": 550,
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 551,
                "end": 556,
                "value": "div",
                "raw": "\"div\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 559,
      "end": 616,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 588,
            "decorators": [],
            "name": "htmlSpanElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 578,
              "end": 588,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 580,
                "end": 588,
                "typeName": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 588,
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 591,
            "end": 615,
            "callee": {
              "type": "MemberExpression",
              "start": 591,
              "end": 607,
              "object": {
                "type": "Identifier",
                "start": 591,
                "end": 593,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 594,
                "end": 607,
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 608,
                "end": 614,
                "value": "span",
                "raw": "\"span\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 638,
      "end": 689,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 642,
          "end": 689,
          "id": {
            "type": "Identifier",
            "start": 642,
            "end": 664,
            "decorators": [],
            "name": "htmlElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 654,
              "end": 664,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 656,
                "end": 664,
                "typeName": {
                  "type": "Identifier",
                  "start": 656,
                  "end": 664,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 667,
            "end": 689,
            "callee": {
              "type": "MemberExpression",
              "start": 667,
              "end": 683,
              "object": {
                "type": "Identifier",
                "start": 667,
                "end": 669,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 670,
                "end": 683,
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 684,
                "end": 688,
                "value": "yo",
                "raw": "\"yo\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 690,
      "end": 752,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 694,
          "end": 751,
          "id": {
            "type": "Identifier",
            "start": 694,
            "end": 722,
            "decorators": [],
            "name": "htmlCanvasElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 712,
              "end": 722,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 714,
                "end": 722,
                "typeName": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 722,
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 725,
            "end": 751,
            "callee": {
              "type": "MemberExpression",
              "start": 725,
              "end": 741,
              "object": {
                "type": "Identifier",
                "start": 725,
                "end": 727,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 728,
                "end": 741,
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 742,
                "end": 750,
                "value": "canvas",
                "raw": "\"canvas\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 753,
      "end": 809,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 757,
          "end": 808,
          "id": {
            "type": "Identifier",
            "start": 757,
            "end": 782,
            "decorators": [],
            "name": "htmlDivElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 772,
              "end": 782,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 774,
                "end": 782,
                "typeName": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 782,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 785,
            "end": 808,
            "callee": {
              "type": "MemberExpression",
              "start": 785,
              "end": 801,
              "object": {
                "type": "Identifier",
                "start": 785,
                "end": 787,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 788,
                "end": 801,
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 802,
                "end": 807,
                "value": "div",
                "raw": "\"div\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 810,
      "end": 868,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 814,
          "end": 867,
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 840,
            "decorators": [],
            "name": "htmlSpanElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 830,
              "end": 840,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 832,
                "end": 840,
                "typeName": {
                  "type": "Identifier",
                  "start": 832,
                  "end": 840,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 843,
            "end": 867,
            "callee": {
              "type": "MemberExpression",
              "start": 843,
              "end": 859,
              "object": {
                "type": "Identifier",
                "start": 843,
                "end": 845,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 846,
                "end": 859,
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 860,
                "end": 866,
                "value": "span",
                "raw": "\"span\""
              }
            ],
            "optional": false
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
