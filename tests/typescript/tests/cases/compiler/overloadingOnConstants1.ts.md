__ESTREE_TEST__:AST:
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
        "name": "Document2",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 171
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
              "start": 178,
              "end": 191
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
                      "start": 201,
                      "end": 209
                    },
                    "start": 201,
                    "end": 209
                  },
                  "start": 199,
                  "end": 209
                },
                "start": 192,
                "end": 209
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
                  "start": 212,
                  "end": 220
                },
                "typeArguments": null,
                "start": 212,
                "end": 220
              },
              "start": 210,
              "end": 220
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 178,
            "end": 221
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 239
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
                      "start": 249,
                      "end": 254
                    },
                    "start": 249,
                    "end": 254
                  },
                  "start": 247,
                  "end": 254
                },
                "start": 240,
                "end": 254
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
                  "start": 257,
                  "end": 265
                },
                "typeArguments": null,
                "start": 257,
                "end": 265
              },
              "start": 255,
              "end": 265
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 226,
            "end": 266
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 284
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
                      "start": 294,
                      "end": 300
                    },
                    "start": 294,
                    "end": 300
                  },
                  "start": 292,
                  "end": 300
                },
                "start": 285,
                "end": 300
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
                  "start": 303,
                  "end": 311
                },
                "typeArguments": null,
                "start": 303,
                "end": 311
              },
              "start": 301,
              "end": 311
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 271,
            "end": 312
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 330
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
                    "start": 340,
                    "end": 346
                  },
                  "start": 338,
                  "end": 346
                },
                "start": 331,
                "end": 346
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
                  "start": 349,
                  "end": 353
                },
                "typeArguments": null,
                "start": 349,
                "end": 353
              },
              "start": 347,
              "end": 353
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 317,
            "end": 354
          }
        ],
        "start": 172,
        "end": 356
      },
      "declare": false,
      "start": 152,
      "end": 356
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Document2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 375
                },
                "typeArguments": null,
                "start": 366,
                "end": 375
              },
              "start": 364,
              "end": 375
            },
            "start": 362,
            "end": 375
          },
          "init": null,
          "definite": false,
          "start": 362,
          "end": 375
        }
      ],
      "declare": false,
      "start": 358,
      "end": 376
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "htmlElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 415
                },
                "typeArguments": null,
                "start": 411,
                "end": 415
              },
              "start": 409,
              "end": 415
            },
            "start": 398,
            "end": 415
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 420
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 434
              },
              "optional": false,
              "computed": false,
              "start": 418,
              "end": 434
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "yo",
                "raw": "\"yo\"",
                "start": 435,
                "end": 439
              }
            ],
            "optional": false,
            "start": 418,
            "end": 440
          },
          "definite": false,
          "start": 398,
          "end": 440
        }
      ],
      "declare": false,
      "start": 394,
      "end": 440
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "htmlCanvasElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 472
                },
                "typeArguments": null,
                "start": 464,
                "end": 472
              },
              "start": 462,
              "end": 472
            },
            "start": 445,
            "end": 472
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 491
              },
              "optional": false,
              "computed": false,
              "start": 475,
              "end": 491
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "canvas",
                "raw": "\"canvas\"",
                "start": 492,
                "end": 500
              }
            ],
            "optional": false,
            "start": 475,
            "end": 501
          },
          "definite": false,
          "start": 445,
          "end": 501
        }
      ],
      "declare": false,
      "start": 441,
      "end": 502
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "htmlDivElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 531
                },
                "typeArguments": null,
                "start": 523,
                "end": 531
              },
              "start": 521,
              "end": 531
            },
            "start": 507,
            "end": 531
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 536
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 550
              },
              "optional": false,
              "computed": false,
              "start": 534,
              "end": 550
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "div",
                "raw": "\"div\"",
                "start": 551,
                "end": 556
              }
            ],
            "optional": false,
            "start": 534,
            "end": 557
          },
          "definite": false,
          "start": 507,
          "end": 557
        }
      ],
      "declare": false,
      "start": 503,
      "end": 558
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "htmlSpanElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 588
                },
                "typeArguments": null,
                "start": 580,
                "end": 588
              },
              "start": 578,
              "end": 588
            },
            "start": 563,
            "end": 588
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 593
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 607
              },
              "optional": false,
              "computed": false,
              "start": 591,
              "end": 607
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "span",
                "raw": "\"span\"",
                "start": 608,
                "end": 614
              }
            ],
            "optional": false,
            "start": 591,
            "end": 615
          },
          "definite": false,
          "start": 563,
          "end": 615
        }
      ],
      "declare": false,
      "start": 559,
      "end": 616
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "htmlElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 656,
                  "end": 664
                },
                "typeArguments": null,
                "start": 656,
                "end": 664
              },
              "start": 654,
              "end": 664
            },
            "start": 642,
            "end": 664
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 667,
                "end": 669
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 683
              },
              "optional": false,
              "computed": false,
              "start": 667,
              "end": 683
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "yo",
                "raw": "\"yo\"",
                "start": 684,
                "end": 688
              }
            ],
            "optional": false,
            "start": 667,
            "end": 689
          },
          "definite": false,
          "start": 642,
          "end": 689
        }
      ],
      "declare": false,
      "start": 638,
      "end": 689
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "htmlCanvasElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 722
                },
                "typeArguments": null,
                "start": 714,
                "end": 722
              },
              "start": 712,
              "end": 722
            },
            "start": 694,
            "end": 722
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 727
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 741
              },
              "optional": false,
              "computed": false,
              "start": 725,
              "end": 741
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "canvas",
                "raw": "\"canvas\"",
                "start": 742,
                "end": 750
              }
            ],
            "optional": false,
            "start": 725,
            "end": 751
          },
          "definite": false,
          "start": 694,
          "end": 751
        }
      ],
      "declare": false,
      "start": 690,
      "end": 752
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "htmlDivElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 782
                },
                "typeArguments": null,
                "start": 774,
                "end": 782
              },
              "start": 772,
              "end": 782
            },
            "start": 757,
            "end": 782
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 787
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 801
              },
              "optional": false,
              "computed": false,
              "start": 785,
              "end": 801
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "div",
                "raw": "\"div\"",
                "start": 802,
                "end": 807
              }
            ],
            "optional": false,
            "start": 785,
            "end": 808
          },
          "definite": false,
          "start": 757,
          "end": 808
        }
      ],
      "declare": false,
      "start": 753,
      "end": 809
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "htmlSpanElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 832,
                  "end": 840
                },
                "typeArguments": null,
                "start": 832,
                "end": 840
              },
              "start": 830,
              "end": 840
            },
            "start": 814,
            "end": 840
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 843,
                "end": 845
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 859
              },
              "optional": false,
              "computed": false,
              "start": 843,
              "end": 859
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "span",
                "raw": "\"span\"",
                "start": 860,
                "end": 866
              }
            ],
            "optional": false,
            "start": 843,
            "end": 867
          },
          "definite": false,
          "start": 814,
          "end": 867
        }
      ],
      "declare": false,
      "start": 810,
      "end": 868
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 868
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 31,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 40,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 73,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 82,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 115,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 124,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "biz",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 152,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "Document2",
    "start": 162,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 178,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "String",
    "value": "'canvas'",
    "start": 201,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
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
    "value": "Derived1",
    "start": 212,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 226,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 240,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "String",
    "value": "'div'",
    "start": 249,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 257,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 271,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "String",
    "value": "'span'",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 303,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 317,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 358,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 362,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "Document2",
    "start": 366,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "htmlElement",
    "start": 398,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 421,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "String",
    "value": "\"yo\"",
    "start": 435,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "htmlCanvasElement",
    "start": 445,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 464,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 475,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 478,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "String",
    "value": "\"canvas\"",
    "start": 492,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 503,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "htmlDivElement",
    "start": 507,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 523,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 537,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 551,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 559,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "htmlSpanElement",
    "start": 563,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 580,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 591,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 594,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "String",
    "value": "\"span\"",
    "start": 608,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 638,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "htmlElement2",
    "start": 642,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 656,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 670,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684
  },
  {
    "type": "String",
    "value": "\"yo\"",
    "start": 684,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 690,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "htmlCanvasElement2",
    "start": 694,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 714,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 728,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742
  },
  {
    "type": "String",
    "value": "\"canvas\"",
    "start": 742,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 753,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "htmlDivElement2",
    "start": 757,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 774,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 788,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 802,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 810,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "htmlSpanElement2",
    "start": 814,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 832,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 843,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 846,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "String",
    "value": "\"span\"",
    "start": 860,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  }
]
```
