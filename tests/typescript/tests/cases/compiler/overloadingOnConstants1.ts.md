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
