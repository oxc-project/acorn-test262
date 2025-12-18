__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Serializer",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 31
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 45
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 49,
                        "end": 55
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 58,
                        "end": 64
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 67,
                        "end": 74
                      }
                    ],
                    "start": 49,
                    "end": 74
                  },
                  "start": 47,
                  "end": 74
                },
                "start": 46,
                "end": 74
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 36,
            "end": 76
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 88
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 79,
            "end": 99
          }
        ],
        "start": 32,
        "end": 101
      },
      "declare": false,
      "start": 11,
      "end": 101
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
            "name": "box",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Serializer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 129
                },
                "typeArguments": null,
                "start": 119,
                "end": 129
              },
              "start": 117,
              "end": 129
            },
            "start": 114,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 114,
          "end": 129
        }
      ],
      "declare": true,
      "start": 102,
      "end": 130
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 138
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "property": {
              "type": "Literal",
              "value": "value",
              "raw": "'value'",
              "start": 145,
              "end": 152
            },
            "optional": false,
            "computed": true,
            "start": 141,
            "end": 153
          },
          "definite": false,
          "start": 137,
          "end": 153
        }
      ],
      "declare": false,
      "start": 131,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "box",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 157
          },
          "property": {
            "type": "Literal",
            "value": "value",
            "raw": "'value'",
            "start": 158,
            "end": 165
          },
          "optional": false,
          "computed": true,
          "start": 154,
          "end": 166
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 169,
          "end": 173
        },
        "start": 154,
        "end": 173
      },
      "directive": null,
      "start": 154,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "box",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 178
          },
          "property": {
            "type": "Literal",
            "value": "value",
            "raw": "'value'",
            "start": 179,
            "end": 186
          },
          "optional": false,
          "computed": true,
          "start": 175,
          "end": 187
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 190,
          "end": 192
        },
        "start": 175,
        "end": 192
      },
      "directive": null,
      "start": 175,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "box",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 197
          },
          "property": {
            "type": "Literal",
            "value": "value",
            "raw": "'value'",
            "start": 198,
            "end": 205
          },
          "optional": false,
          "computed": true,
          "start": 194,
          "end": 206
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 209,
          "end": 216
        },
        "start": 194,
        "end": 216
      },
      "directive": null,
      "start": 194,
      "end": 217
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Element",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 236
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
              "name": "style",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 252
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CSSStyleDeclaration",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 275
                },
                "typeArguments": null,
                "start": 256,
                "end": 275
              },
              "start": 254,
              "end": 275
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 243,
            "end": 276
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "style",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cssText",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 300,
                    "end": 306
                  },
                  "start": 298,
                  "end": 306
                },
                "start": 291,
                "end": 306
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 281,
            "end": 308
          }
        ],
        "start": 237,
        "end": 310
      },
      "declare": false,
      "start": 219,
      "end": 310
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
            "name": "element",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 342
                },
                "typeArguments": null,
                "start": 335,
                "end": 342
              },
              "start": 333,
              "end": 342
            },
            "start": 326,
            "end": 342
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 342
        }
      ],
      "declare": true,
      "start": 312,
      "end": 343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 351
          },
          "property": {
            "type": "Literal",
            "value": "style",
            "raw": "'style'",
            "start": 352,
            "end": 359
          },
          "optional": false,
          "computed": true,
          "start": 344,
          "end": 360
        },
        "right": {
          "type": "Literal",
          "value": "color: red",
          "raw": "\"color: red\"",
          "start": 363,
          "end": 375
        },
        "start": 344,
        "end": 375
      },
      "directive": null,
      "start": 344,
      "end": 376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 384
          },
          "property": {
            "type": "Literal",
            "value": "style",
            "raw": "'style'",
            "start": 385,
            "end": 392
          },
          "optional": false,
          "computed": true,
          "start": 377,
          "end": 393
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 403
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 409
          },
          "optional": false,
          "computed": false,
          "start": 396,
          "end": 409
        },
        "start": 377,
        "end": 409
      },
      "directive": null,
      "start": 377,
      "end": 410
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "One",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 421
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 435
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 439,
                  "end": 445
                },
                "start": 437,
                "end": 445
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 459,
                      "end": 461
                    },
                    "start": 452,
                    "end": 462
                  }
                ],
                "start": 446,
                "end": 466
              },
              "expression": false,
              "start": 435,
              "end": 466
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 426,
            "end": 466
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 478
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 482,
                          "end": 488
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 491,
                          "end": 497
                        }
                      ],
                      "start": 482,
                      "end": 497
                    },
                    "start": 480,
                    "end": 497
                  },
                  "start": 479,
                  "end": 497
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 499,
                "end": 501
              },
              "expression": false,
              "start": 478,
              "end": 501
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 469,
            "end": 501
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 514
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 518,
                  "end": 524
                },
                "start": 516,
                "end": 524
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 538,
                      "end": 540
                    },
                    "start": 531,
                    "end": 541
                  }
                ],
                "start": 525,
                "end": 545
              },
              "expression": false,
              "start": 514,
              "end": 545
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 505,
            "end": 545
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 557
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 561,
                          "end": 567
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 570,
                          "end": 576
                        }
                      ],
                      "start": 561,
                      "end": 576
                    },
                    "start": 559,
                    "end": 576
                  },
                  "start": 558,
                  "end": 576
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 578,
                "end": 580
              },
              "expression": false,
              "start": 557,
              "end": 580
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 548,
            "end": 580
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 589
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 591,
                "end": 597
              },
              "start": 589,
              "end": 597
            },
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 600,
              "end": 602
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 584,
            "end": 603
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 616
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 620,
                  "end": 626
                },
                "start": 618,
                "end": 626
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 640,
                      "end": 642
                    },
                    "start": 633,
                    "end": 643
                  }
                ],
                "start": 627,
                "end": 647
              },
              "expression": false,
              "start": 616,
              "end": 647
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 607,
            "end": 647
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 659
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 663,
                          "end": 669
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 672,
                          "end": 678
                        }
                      ],
                      "start": 663,
                      "end": 678
                    },
                    "start": 661,
                    "end": 678
                  },
                  "start": 660,
                  "end": 678
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 680,
                "end": 682
              },
              "expression": false,
              "start": 659,
              "end": 682
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 650,
            "end": 682
          }
        ],
        "start": 422,
        "end": 684
      },
      "abstract": false,
      "declare": false,
      "start": 412,
      "end": 684
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null,
        "start": 692,
        "end": 695
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 709
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 713,
                  "end": 719
                },
                "start": 711,
                "end": 719
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 733,
                      "end": 735
                    },
                    "start": 726,
                    "end": 736
                  }
                ],
                "start": 720,
                "end": 740
              },
              "expression": false,
              "start": 709,
              "end": 740
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 700,
            "end": 740
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 752
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 756,
                          "end": 762
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 765,
                          "end": 771
                        }
                      ],
                      "start": 756,
                      "end": 771
                    },
                    "start": 754,
                    "end": 771
                  },
                  "start": 753,
                  "end": 771
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 773,
                "end": 775
              },
              "expression": false,
              "start": 752,
              "end": 775
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 743,
            "end": 775
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 788
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 792,
                  "end": 798
                },
                "start": 790,
                "end": 798
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 812,
                      "end": 814
                    },
                    "start": 805,
                    "end": 815
                  }
                ],
                "start": 799,
                "end": 819
              },
              "expression": false,
              "start": 788,
              "end": 819
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 779,
            "end": 819
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 831
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 835,
                      "end": 841
                    },
                    "start": 833,
                    "end": 841
                  },
                  "start": 832,
                  "end": 841
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 843,
                "end": 845
              },
              "expression": false,
              "start": 831,
              "end": 845
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 822,
            "end": 845
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 858
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 862,
                  "end": 868
                },
                "start": 860,
                "end": 868
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 882,
                      "end": 884
                    },
                    "start": 875,
                    "end": 885
                  }
                ],
                "start": 869,
                "end": 889
              },
              "expression": false,
              "start": 858,
              "end": 889
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 849,
            "end": 889
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 896,
              "end": 901
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 905,
                          "end": 911
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 914,
                          "end": 921
                        }
                      ],
                      "start": 905,
                      "end": 921
                    },
                    "start": 903,
                    "end": 921
                  },
                  "start": 902,
                  "end": 921
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 923,
                "end": 925
              },
              "expression": false,
              "start": 901,
              "end": 925
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 892,
            "end": 925
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 938
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 942,
                  "end": 948
                },
                "start": 940,
                "end": 948
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 962,
                      "end": 964
                    },
                    "start": 955,
                    "end": 965
                  }
                ],
                "start": 949,
                "end": 969
              },
              "expression": false,
              "start": 938,
              "end": 969
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 929,
            "end": 969
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 981
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 985,
                          "end": 991
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 994,
                          "end": 1001
                        }
                      ],
                      "start": 985,
                      "end": 1001
                    },
                    "start": 983,
                    "end": 1001
                  },
                  "start": 982,
                  "end": 1001
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1003,
                "end": 1005
              },
              "expression": false,
              "start": 981,
              "end": 1005
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 972,
            "end": 1005
          }
        ],
        "start": 696,
        "end": 1007
      },
      "abstract": false,
      "declare": false,
      "start": 686,
      "end": 1007
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
            "name": "u1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1027,
                      "end": 1030
                    },
                    "typeArguments": null,
                    "start": 1027,
                    "end": 1030
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1033,
                      "end": 1036
                    },
                    "typeArguments": null,
                    "start": 1033,
                    "end": 1036
                  }
                ],
                "start": 1027,
                "end": 1036
              },
              "start": 1025,
              "end": 1036
            },
            "start": 1023,
            "end": 1036
          },
          "init": null,
          "definite": false,
          "start": 1023,
          "end": 1036
        }
      ],
      "declare": true,
      "start": 1009,
      "end": 1037
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1039,
            "end": 1041
          },
          "property": {
            "type": "Literal",
            "value": "prop1",
            "raw": "'prop1'",
            "start": 1042,
            "end": 1049
          },
          "optional": false,
          "computed": true,
          "start": 1039,
          "end": 1050
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1053,
          "end": 1055
        },
        "start": 1039,
        "end": 1055
      },
      "directive": null,
      "start": 1039,
      "end": 1056
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1057,
            "end": 1059
          },
          "property": {
            "type": "Literal",
            "value": "prop1",
            "raw": "'prop1'",
            "start": 1060,
            "end": 1067
          },
          "optional": false,
          "computed": true,
          "start": 1057,
          "end": 1068
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 1071,
          "end": 1078
        },
        "start": 1057,
        "end": 1078
      },
      "directive": null,
      "start": 1057,
      "end": 1079
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1081,
            "end": 1083
          },
          "property": {
            "type": "Literal",
            "value": "prop2",
            "raw": "'prop2'",
            "start": 1084,
            "end": 1091
          },
          "optional": false,
          "computed": true,
          "start": 1081,
          "end": 1092
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1095,
          "end": 1097
        },
        "start": 1081,
        "end": 1097
      },
      "directive": null,
      "start": 1081,
      "end": 1098
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1099,
            "end": 1101
          },
          "property": {
            "type": "Literal",
            "value": "prop2",
            "raw": "'prop2'",
            "start": 1102,
            "end": 1109
          },
          "optional": false,
          "computed": true,
          "start": 1099,
          "end": 1110
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 1113,
          "end": 1120
        },
        "start": 1099,
        "end": 1120
      },
      "directive": null,
      "start": 1099,
      "end": 1121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1123,
            "end": 1125
          },
          "property": {
            "type": "Literal",
            "value": "prop3",
            "raw": "'prop3'",
            "start": 1126,
            "end": 1133
          },
          "optional": false,
          "computed": true,
          "start": 1123,
          "end": 1134
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1137,
          "end": 1139
        },
        "start": 1123,
        "end": 1139
      },
      "directive": null,
      "start": 1123,
      "end": 1140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1141,
            "end": 1143
          },
          "property": {
            "type": "Literal",
            "value": "prop3",
            "raw": "'prop3'",
            "start": 1144,
            "end": 1151
          },
          "optional": false,
          "computed": true,
          "start": 1141,
          "end": 1152
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 1155,
          "end": 1162
        },
        "start": 1141,
        "end": 1162
      },
      "directive": null,
      "start": 1141,
      "end": 1163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1164,
            "end": 1166
          },
          "property": {
            "type": "Literal",
            "value": "prop3",
            "raw": "'prop3'",
            "start": 1167,
            "end": 1174
          },
          "optional": false,
          "computed": true,
          "start": 1164,
          "end": 1175
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 1178,
          "end": 1182
        },
        "start": 1164,
        "end": 1182
      },
      "directive": null,
      "start": 1164,
      "end": 1183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1187
          },
          "property": {
            "type": "Literal",
            "value": "prop4",
            "raw": "'prop4'",
            "start": 1188,
            "end": 1195
          },
          "optional": false,
          "computed": true,
          "start": 1185,
          "end": 1196
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1199,
          "end": 1201
        },
        "start": 1185,
        "end": 1201
      },
      "directive": null,
      "start": 1185,
      "end": 1202
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1203,
            "end": 1205
          },
          "property": {
            "type": "Literal",
            "value": "prop4",
            "raw": "'prop4'",
            "start": 1206,
            "end": 1213
          },
          "optional": false,
          "computed": true,
          "start": 1203,
          "end": 1214
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 1217,
          "end": 1224
        },
        "start": 1203,
        "end": 1224
      },
      "directive": null,
      "start": 1203,
      "end": 1225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1226,
            "end": 1228
          },
          "property": {
            "type": "Literal",
            "value": "prop4",
            "raw": "'prop4'",
            "start": 1229,
            "end": 1236
          },
          "optional": false,
          "computed": true,
          "start": 1226,
          "end": 1237
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 1240,
          "end": 1244
        },
        "start": 1226,
        "end": 1244
      },
      "directive": null,
      "start": 1226,
      "end": 1245
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1264,
                      "end": 1267
                    },
                    "typeArguments": null,
                    "start": 1264,
                    "end": 1267
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1270,
                      "end": 1273
                    },
                    "typeArguments": null,
                    "start": 1270,
                    "end": 1273
                  }
                ],
                "start": 1264,
                "end": 1273
              },
              "start": 1262,
              "end": 1273
            },
            "start": 1261,
            "end": 1273
          },
          "init": null,
          "definite": false,
          "start": 1261,
          "end": 1273
        }
      ],
      "declare": true,
      "start": 1247,
      "end": 1274
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
            "name": "iv1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1282,
            "end": 1285
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1288,
              "end": 1289
            },
            "property": {
              "type": "Literal",
              "value": "prop1",
              "raw": "'prop1'",
              "start": 1290,
              "end": 1297
            },
            "optional": false,
            "computed": true,
            "start": 1288,
            "end": 1298
          },
          "definite": false,
          "start": 1282,
          "end": 1298
        }
      ],
      "declare": false,
      "start": 1276,
      "end": 1299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1300,
            "end": 1301
          },
          "property": {
            "type": "Literal",
            "value": "prop1",
            "raw": "'prop1'",
            "start": 1302,
            "end": 1309
          },
          "optional": false,
          "computed": true,
          "start": 1300,
          "end": 1310
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1313,
          "end": 1315
        },
        "start": 1300,
        "end": 1315
      },
      "directive": null,
      "start": 1300,
      "end": 1316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1317,
            "end": 1318
          },
          "property": {
            "type": "Literal",
            "value": "prop1",
            "raw": "'prop1'",
            "start": 1319,
            "end": 1326
          },
          "optional": false,
          "computed": true,
          "start": 1317,
          "end": 1327
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 1330,
          "end": 1337
        },
        "start": 1317,
        "end": 1337
      },
      "directive": null,
      "start": 1317,
      "end": 1338
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
            "name": "iv2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1346,
            "end": 1349
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1352,
              "end": 1353
            },
            "property": {
              "type": "Literal",
              "value": "prop2",
              "raw": "'prop2'",
              "start": 1354,
              "end": 1361
            },
            "optional": false,
            "computed": true,
            "start": 1352,
            "end": 1362
          },
          "definite": false,
          "start": 1346,
          "end": 1362
        }
      ],
      "declare": false,
      "start": 1340,
      "end": 1363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1364,
            "end": 1365
          },
          "property": {
            "type": "Literal",
            "value": "prop2",
            "raw": "'prop2'",
            "start": 1366,
            "end": 1373
          },
          "optional": false,
          "computed": true,
          "start": 1364,
          "end": 1374
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1377,
          "end": 1379
        },
        "start": 1364,
        "end": 1379
      },
      "directive": null,
      "start": 1364,
      "end": 1380
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1381,
            "end": 1382
          },
          "property": {
            "type": "Literal",
            "value": "prop2",
            "raw": "'prop2'",
            "start": 1383,
            "end": 1390
          },
          "optional": false,
          "computed": true,
          "start": 1381,
          "end": 1391
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 1394,
          "end": 1401
        },
        "start": 1381,
        "end": 1401
      },
      "directive": null,
      "start": 1381,
      "end": 1402
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null,
        "start": 1410,
        "end": 1415
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1429
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1433,
                  "end": 1439
                },
                "start": 1431,
                "end": 1439
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 1453,
                      "end": 1455
                    },
                    "start": 1446,
                    "end": 1456
                  }
                ],
                "start": 1440,
                "end": 1460
              },
              "expression": false,
              "start": 1429,
              "end": 1460
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1420,
            "end": 1460
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1467,
              "end": 1472
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1476,
                          "end": 1482
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1485,
                          "end": 1491
                        }
                      ],
                      "start": 1476,
                      "end": 1491
                    },
                    "start": 1474,
                    "end": 1491
                  },
                  "start": 1473,
                  "end": 1491
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1493,
                "end": 1495
              },
              "expression": false,
              "start": 1472,
              "end": 1495
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1463,
            "end": 1495
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1499,
              "end": 1504
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1506,
                "end": 1512
              },
              "start": 1504,
              "end": 1512
            },
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 1515,
              "end": 1517
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1499,
            "end": 1518
          }
        ],
        "start": 1416,
        "end": 1520
      },
      "abstract": false,
      "declare": false,
      "start": 1404,
      "end": 1520
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Four",
        "optional": false,
        "typeAnnotation": null,
        "start": 1528,
        "end": 1532
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1541,
              "end": 1546
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1550,
                    "end": 1557
                  },
                  "start": 1550,
                  "end": 1557
                },
                "start": 1548,
                "end": 1557
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1571,
                      "end": 1578
                    },
                    "start": 1564,
                    "end": 1579
                  }
                ],
                "start": 1558,
                "end": 1583
              },
              "expression": false,
              "start": 1546,
              "end": 1583
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1537,
            "end": 1583
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1590,
              "end": 1595
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 1599,
                            "end": 1606
                          },
                          "start": 1599,
                          "end": 1606
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1609,
                          "end": 1615
                        }
                      ],
                      "start": 1599,
                      "end": 1615
                    },
                    "start": 1597,
                    "end": 1615
                  },
                  "start": 1596,
                  "end": 1615
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1617,
                "end": 1619
              },
              "expression": false,
              "start": 1595,
              "end": 1619
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1586,
            "end": 1619
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1627,
              "end": 1632
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1636,
                  "end": 1642
                },
                "start": 1634,
                "end": 1642
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 1656,
                      "end": 1658
                    },
                    "start": 1649,
                    "end": 1659
                  }
                ],
                "start": 1643,
                "end": 1663
              },
              "expression": false,
              "start": 1632,
              "end": 1663
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1623,
            "end": 1663
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1670,
              "end": 1675
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1679,
                          "end": 1685
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 1688,
                            "end": 1690
                          },
                          "start": 1688,
                          "end": 1690
                        }
                      ],
                      "start": 1679,
                      "end": 1690
                    },
                    "start": 1677,
                    "end": 1690
                  },
                  "start": 1676,
                  "end": 1690
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1692,
                "end": 1694
              },
              "expression": false,
              "start": 1675,
              "end": 1694
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1666,
            "end": 1694
          }
        ],
        "start": 1533,
        "end": 1696
      },
      "abstract": false,
      "declare": false,
      "start": 1522,
      "end": 1696
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Five",
        "optional": false,
        "typeAnnotation": null,
        "start": 1704,
        "end": 1708
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1717,
              "end": 1722
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1726,
                    "end": 1733
                  },
                  "start": 1726,
                  "end": 1733
                },
                "start": 1724,
                "end": 1733
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1747,
                      "end": 1754
                    },
                    "start": 1740,
                    "end": 1755
                  }
                ],
                "start": 1734,
                "end": 1759
              },
              "expression": false,
              "start": 1722,
              "end": 1759
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1713,
            "end": 1759
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1766,
              "end": 1771
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 1775,
                            "end": 1782
                          },
                          "start": 1775,
                          "end": 1782
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1785,
                          "end": 1792
                        }
                      ],
                      "start": 1775,
                      "end": 1792
                    },
                    "start": 1773,
                    "end": 1792
                  },
                  "start": 1772,
                  "end": 1792
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1794,
                "end": 1796
              },
              "expression": false,
              "start": 1771,
              "end": 1796
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1762,
            "end": 1796
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1804,
              "end": 1809
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1813,
                  "end": 1819
                },
                "start": 1811,
                "end": 1819
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 1833,
                      "end": 1835
                    },
                    "start": 1826,
                    "end": 1836
                  }
                ],
                "start": 1820,
                "end": 1840
              },
              "expression": false,
              "start": 1809,
              "end": 1840
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1800,
            "end": 1840
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1847,
              "end": 1852
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1856,
                          "end": 1862
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1865,
                          "end": 1871
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1874,
                          "end": 1881
                        }
                      ],
                      "start": 1856,
                      "end": 1881
                    },
                    "start": 1854,
                    "end": 1881
                  },
                  "start": 1853,
                  "end": 1881
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1883,
                "end": 1885
              },
              "expression": false,
              "start": 1852,
              "end": 1885
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1843,
            "end": 1885
          }
        ],
        "start": 1709,
        "end": 1887
      },
      "abstract": false,
      "declare": false,
      "start": 1698,
      "end": 1887
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1907,
                      "end": 1912
                    },
                    "typeArguments": null,
                    "start": 1907,
                    "end": 1912
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1915,
                      "end": 1919
                    },
                    "typeArguments": null,
                    "start": 1915,
                    "end": 1919
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1922,
                      "end": 1926
                    },
                    "typeArguments": null,
                    "start": 1922,
                    "end": 1926
                  }
                ],
                "start": 1907,
                "end": 1926
              },
              "start": 1905,
              "end": 1926
            },
            "start": 1903,
            "end": 1926
          },
          "init": null,
          "definite": false,
          "start": 1903,
          "end": 1926
        }
      ],
      "declare": true,
      "start": 1889,
      "end": 1927
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1929,
            "end": 1931
          },
          "property": {
            "type": "Literal",
            "value": "prop1",
            "raw": "'prop1'",
            "start": 1932,
            "end": 1939
          },
          "optional": false,
          "computed": true,
          "start": 1929,
          "end": 1940
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1943,
          "end": 1945
        },
        "start": 1929,
        "end": 1945
      },
      "directive": null,
      "start": 1929,
      "end": 1946
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1947,
            "end": 1949
          },
          "property": {
            "type": "Literal",
            "value": "prop1",
            "raw": "'prop1'",
            "start": 1950,
            "end": 1957
          },
          "optional": false,
          "computed": true,
          "start": 1947,
          "end": 1958
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 1961,
          "end": 1968
        },
        "start": 1947,
        "end": 1968
      },
      "directive": null,
      "start": 1947,
      "end": 1969
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1971,
            "end": 1973
          },
          "property": {
            "type": "Literal",
            "value": "prop2",
            "raw": "'prop2'",
            "start": 1974,
            "end": 1981
          },
          "optional": false,
          "computed": true,
          "start": 1971,
          "end": 1982
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1985,
          "end": 1987
        },
        "start": 1971,
        "end": 1987
      },
      "directive": null,
      "start": 1971,
      "end": 1988
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1989,
            "end": 1991
          },
          "property": {
            "type": "Literal",
            "value": "prop2",
            "raw": "'prop2'",
            "start": 1992,
            "end": 1999
          },
          "optional": false,
          "computed": true,
          "start": 1989,
          "end": 2000
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 2003,
          "end": 2010
        },
        "start": 1989,
        "end": 2010
      },
      "directive": null,
      "start": 1989,
      "end": 2011
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Six",
        "optional": false,
        "typeAnnotation": null,
        "start": 2019,
        "end": 2022
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2031,
              "end": 2036
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 2040,
                      "end": 2047
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 2050,
                      "end": 2056
                    }
                  ],
                  "start": 2040,
                  "end": 2056
                },
                "start": 2038,
                "end": 2056
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 2070,
                      "end": 2072
                    },
                    "start": 2063,
                    "end": 2073
                  }
                ],
                "start": 2057,
                "end": 2077
              },
              "expression": false,
              "start": 2036,
              "end": 2077
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2027,
            "end": 2077
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2084,
              "end": 2089
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2093,
                          "end": 2100
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2103,
                          "end": 2109
                        }
                      ],
                      "start": 2093,
                      "end": 2109
                    },
                    "start": 2091,
                    "end": 2109
                  },
                  "start": 2090,
                  "end": 2109
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2111,
                "end": 2113
              },
              "expression": false,
              "start": 2089,
              "end": 2113
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2080,
            "end": 2113
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2121,
              "end": 2126
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSBigIntKeyword",
                      "start": 2130,
                      "end": 2136
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 2139,
                      "end": 2145
                    }
                  ],
                  "start": 2130,
                  "end": 2145
                },
                "start": 2128,
                "end": 2145
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2159,
                      "end": 2161
                    },
                    "start": 2152,
                    "end": 2162
                  }
                ],
                "start": 2146,
                "end": 2166
              },
              "expression": false,
              "start": 2126,
              "end": 2166
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2117,
            "end": 2166
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2173,
              "end": 2178
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2182,
                          "end": 2189
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 2192,
                          "end": 2196
                        }
                      ],
                      "start": 2182,
                      "end": 2196
                    },
                    "start": 2180,
                    "end": 2196
                  },
                  "start": 2179,
                  "end": 2196
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2198,
                "end": 2200
              },
              "expression": false,
              "start": 2178,
              "end": 2200
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2169,
            "end": 2200
          }
        ],
        "start": 2023,
        "end": 2202
      },
      "abstract": false,
      "declare": false,
      "start": 2013,
      "end": 2202
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Six",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2222,
                  "end": 2225
                },
                "typeArguments": null,
                "start": 2222,
                "end": 2225
              },
              "start": 2220,
              "end": 2225
            },
            "start": 2218,
            "end": 2225
          },
          "init": null,
          "definite": false,
          "start": 2218,
          "end": 2225
        }
      ],
      "declare": true,
      "start": 2204,
      "end": 2225
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "prop1",
                      "raw": "'prop1'",
                      "start": 2244,
                      "end": 2251
                    },
                    "start": 2244,
                    "end": 2251
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "prop2",
                      "raw": "'prop2'",
                      "start": 2254,
                      "end": 2261
                    },
                    "start": 2254,
                    "end": 2261
                  }
                ],
                "start": 2244,
                "end": 2261
              },
              "start": 2242,
              "end": 2261
            },
            "start": 2240,
            "end": 2261
          },
          "init": null,
          "definite": false,
          "start": 2240,
          "end": 2261
        }
      ],
      "declare": true,
      "start": 2226,
      "end": 2261
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
            "name": "sv1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2269,
            "end": 2272
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2275,
              "end": 2277
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2278,
              "end": 2280
            },
            "optional": false,
            "computed": true,
            "start": 2275,
            "end": 2281
          },
          "definite": false,
          "start": 2269,
          "end": 2281
        }
      ],
      "declare": false,
      "start": 2263,
      "end": 2281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2282,
            "end": 2284
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2285,
            "end": 2287
          },
          "optional": false,
          "computed": true,
          "start": 2282,
          "end": 2288
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 2291,
          "end": 2293
        },
        "start": 2282,
        "end": 2293
      },
      "directive": null,
      "start": 2282,
      "end": 2293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2294,
            "end": 2296
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2297,
            "end": 2299
          },
          "optional": false,
          "computed": true,
          "start": 2294,
          "end": 2300
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 2303,
          "end": 2307
        },
        "start": 2294,
        "end": 2307
      },
      "directive": null,
      "start": 2294,
      "end": 2307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2308,
            "end": 2310
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2311,
            "end": 2313
          },
          "optional": false,
          "computed": true,
          "start": 2308,
          "end": 2314
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 2317,
          "end": 2319
        },
        "start": 2308,
        "end": 2319
      },
      "directive": null,
      "start": 2308,
      "end": 2319
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2320,
            "end": 2322
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2323,
            "end": 2325
          },
          "optional": false,
          "computed": true,
          "start": 2320,
          "end": 2326
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 2329,
          "end": 2333
        },
        "start": 2320,
        "end": 2333
      },
      "directive": null,
      "start": 2320,
      "end": 2333
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2333
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 11,
    "end": 20,
    "range": [
      11,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "Serializer",
    "start": 21,
    "end": 31,
    "range": [
      21,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 40,
    "end": 45,
    "range": [
      40,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64,
    "range": [
      58,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 67,
    "end": 74,
    "range": [
      67,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 83,
    "end": 88,
    "range": [
      83,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 92,
    "end": 98,
    "range": [
      92,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 102,
    "end": 109,
    "range": [
      102,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 110,
    "end": 113,
    "range": [
      110,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 114,
    "end": 117,
    "range": [
      114,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "Serializer",
    "start": 119,
    "end": 129,
    "range": [
      119,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136,
    "range": [
      131,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 141,
    "end": 144,
    "range": [
      141,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 145,
    "end": 152,
    "range": [
      145,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 154,
    "end": 157,
    "range": [
      154,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 158,
    "end": 165,
    "range": [
      158,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 169,
    "end": 173,
    "range": [
      169,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 179,
    "end": 186,
    "range": [
      179,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 190,
    "end": 192,
    "range": [
      190,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 194,
    "end": 197,
    "range": [
      194,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 198,
    "end": 205,
    "range": [
      198,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 209,
    "end": 216,
    "range": [
      209,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 219,
    "end": 228,
    "range": [
      219,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 229,
    "end": 236,
    "range": [
      229,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 247,
    "end": 252,
    "range": [
      247,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "CSSStyleDeclaration",
    "start": 256,
    "end": 275,
    "range": [
      256,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 281,
    "end": 284,
    "range": [
      281,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 285,
    "end": 290,
    "range": [
      285,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "cssText",
    "start": 291,
    "end": 298,
    "range": [
      291,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 300,
    "end": 306,
    "range": [
      300,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 312,
    "end": 319,
    "range": [
      312,
      319
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 320,
    "end": 325,
    "range": [
      320,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 326,
    "end": 333,
    "range": [
      326,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 335,
    "end": 342,
    "range": [
      335,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 344,
    "end": 351,
    "range": [
      344,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "String",
    "value": "'style'",
    "start": 352,
    "end": 359,
    "range": [
      352,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "String",
    "value": "\"color: red\"",
    "start": 363,
    "end": 375,
    "range": [
      363,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 377,
    "end": 384,
    "range": [
      377,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "String",
    "value": "'style'",
    "start": 385,
    "end": 392,
    "range": [
      385,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 396,
    "end": 403,
    "range": [
      396,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 404,
    "end": 409,
    "range": [
      404,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 412,
    "end": 417,
    "range": [
      412,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 418,
    "end": 421,
    "range": [
      418,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 426,
    "end": 429,
    "range": [
      426,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 430,
    "end": 435,
    "range": [
      430,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 439,
    "end": 445,
    "range": [
      439,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 452,
    "end": 458,
    "range": [
      452,
      458
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 459,
    "end": 461,
    "range": [
      459,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 469,
    "end": 472,
    "range": [
      469,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 473,
    "end": 478,
    "range": [
      473,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 482,
    "end": 488,
    "range": [
      482,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 491,
    "end": 497,
    "range": [
      491,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 505,
    "end": 508,
    "range": [
      505,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 509,
    "end": 514,
    "range": [
      509,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 518,
    "end": 524,
    "range": [
      518,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 531,
    "end": 537,
    "range": [
      531,
      537
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 538,
    "end": 540,
    "range": [
      538,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 548,
    "end": 551,
    "range": [
      548,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 552,
    "end": 557,
    "range": [
      552,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 561,
    "end": 567,
    "range": [
      561,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 570,
    "end": 576,
    "range": [
      570,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 584,
    "end": 589,
    "range": [
      584,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 591,
    "end": 597,
    "range": [
      591,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 600,
    "end": 602,
    "range": [
      600,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 607,
    "end": 610,
    "range": [
      607,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 611,
    "end": 616,
    "range": [
      611,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 620,
    "end": 626,
    "range": [
      620,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 633,
    "end": 639,
    "range": [
      633,
      639
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 640,
    "end": 642,
    "range": [
      640,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 650,
    "end": 653,
    "range": [
      650,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 654,
    "end": 659,
    "range": [
      654,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 663,
    "end": 669,
    "range": [
      663,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678,
    "range": [
      672,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 686,
    "end": 691,
    "range": [
      686,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 692,
    "end": 695,
    "range": [
      692,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 700,
    "end": 703,
    "range": [
      700,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 704,
    "end": 709,
    "range": [
      704,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 713,
    "end": 719,
    "range": [
      713,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 726,
    "end": 732,
    "range": [
      726,
      732
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 733,
    "end": 735,
    "range": [
      733,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 743,
    "end": 746,
    "range": [
      743,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 747,
    "end": 752,
    "range": [
      747,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 756,
    "end": 762,
    "range": [
      756,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 765,
    "end": 771,
    "range": [
      765,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 779,
    "end": 782,
    "range": [
      779,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 783,
    "end": 788,
    "range": [
      783,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 792,
    "end": 798,
    "range": [
      792,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 805,
    "end": 811,
    "range": [
      805,
      811
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 812,
    "end": 814,
    "range": [
      812,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 822,
    "end": 825,
    "range": [
      822,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 826,
    "end": 831,
    "range": [
      826,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 835,
    "end": 841,
    "range": [
      835,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 849,
    "end": 852,
    "range": [
      849,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 853,
    "end": 858,
    "range": [
      853,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 862,
    "end": 868,
    "range": [
      862,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 875,
    "end": 881,
    "range": [
      875,
      881
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 882,
    "end": 884,
    "range": [
      882,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 892,
    "end": 895,
    "range": [
      892,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 896,
    "end": 901,
    "range": [
      896,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 905,
    "end": 911,
    "range": [
      905,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 914,
    "end": 921,
    "range": [
      914,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 929,
    "end": 932,
    "range": [
      929,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 933,
    "end": 938,
    "range": [
      933,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 942,
    "end": 948,
    "range": [
      942,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 955,
    "end": 961,
    "range": [
      955,
      961
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 962,
    "end": 964,
    "range": [
      962,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 972,
    "end": 975,
    "range": [
      972,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 976,
    "end": 981,
    "range": [
      976,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 985,
    "end": 991,
    "range": [
      985,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 994,
    "end": 1001,
    "range": [
      994,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1009,
    "end": 1016,
    "range": [
      1009,
      1016
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1017,
    "end": 1022,
    "range": [
      1017,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1023,
    "end": 1025,
    "range": [
      1023,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 1027,
    "end": 1030,
    "range": [
      1027,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1033,
    "end": 1036,
    "range": [
      1033,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1039,
    "end": 1041,
    "range": [
      1039,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "String",
    "value": "'prop1'",
    "start": 1042,
    "end": 1049,
    "range": [
      1042,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1053,
    "end": 1055,
    "range": [
      1053,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1057,
    "end": 1059,
    "range": [
      1057,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "String",
    "value": "'prop1'",
    "start": 1060,
    "end": 1067,
    "range": [
      1060,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1071,
    "end": 1078,
    "range": [
      1071,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1081,
    "end": 1083,
    "range": [
      1081,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "String",
    "value": "'prop2'",
    "start": 1084,
    "end": 1091,
    "range": [
      1084,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1095,
    "end": 1097,
    "range": [
      1095,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1099,
    "end": 1101,
    "range": [
      1099,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "String",
    "value": "'prop2'",
    "start": 1102,
    "end": 1109,
    "range": [
      1102,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1113,
    "end": 1120,
    "range": [
      1113,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1123,
    "end": 1125,
    "range": [
      1123,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "String",
    "value": "'prop3'",
    "start": 1126,
    "end": 1133,
    "range": [
      1126,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1137,
    "end": 1139,
    "range": [
      1137,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1141,
    "end": 1143,
    "range": [
      1141,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "String",
    "value": "'prop3'",
    "start": 1144,
    "end": 1151,
    "range": [
      1144,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1155,
    "end": 1162,
    "range": [
      1155,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1164,
    "end": 1166,
    "range": [
      1164,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "String",
    "value": "'prop3'",
    "start": 1167,
    "end": 1174,
    "range": [
      1167,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1178,
    "end": 1182,
    "range": [
      1178,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1185,
    "end": 1187,
    "range": [
      1185,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "String",
    "value": "'prop4'",
    "start": 1188,
    "end": 1195,
    "range": [
      1188,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1199,
    "end": 1201,
    "range": [
      1199,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1203,
    "end": 1205,
    "range": [
      1203,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "String",
    "value": "'prop4'",
    "start": 1206,
    "end": 1213,
    "range": [
      1206,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1217,
    "end": 1224,
    "range": [
      1217,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 1226,
    "end": 1228,
    "range": [
      1226,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "String",
    "value": "'prop4'",
    "start": 1229,
    "end": 1236,
    "range": [
      1229,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1240,
    "end": 1244,
    "range": [
      1240,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1247,
    "end": 1254,
    "range": [
      1247,
      1254
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1255,
    "end": 1260,
    "range": [
      1255,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 1264,
    "end": 1267,
    "range": [
      1264,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1270,
    "end": 1273,
    "range": [
      1270,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1276,
    "end": 1281,
    "range": [
      1276,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "iv1",
    "start": 1282,
    "end": 1285,
    "range": [
      1282,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "String",
    "value": "'prop1'",
    "start": 1290,
    "end": 1297,
    "range": [
      1290,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "String",
    "value": "'prop1'",
    "start": 1302,
    "end": 1309,
    "range": [
      1302,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1313,
    "end": 1315,
    "range": [
      1313,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "String",
    "value": "'prop1'",
    "start": 1319,
    "end": 1326,
    "range": [
      1319,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1330,
    "end": 1337,
    "range": [
      1330,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1340,
    "end": 1345,
    "range": [
      1340,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "iv2",
    "start": 1346,
    "end": 1349,
    "range": [
      1346,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "String",
    "value": "'prop2'",
    "start": 1354,
    "end": 1361,
    "range": [
      1354,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "String",
    "value": "'prop2'",
    "start": 1366,
    "end": 1373,
    "range": [
      1366,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1377,
    "end": 1379,
    "range": [
      1377,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "String",
    "value": "'prop2'",
    "start": 1383,
    "end": 1390,
    "range": [
      1383,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1394,
    "end": 1401,
    "range": [
      1394,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1404,
    "end": 1409,
    "range": [
      1404,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1410,
    "end": 1415,
    "range": [
      1410,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1420,
    "end": 1423,
    "range": [
      1420,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1424,
    "end": 1429,
    "range": [
      1424,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1433,
    "end": 1439,
    "range": [
      1433,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1446,
    "end": 1452,
    "range": [
      1446,
      1452
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1453,
    "end": 1455,
    "range": [
      1453,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1463,
    "end": 1466,
    "range": [
      1463,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1467,
    "end": 1472,
    "range": [
      1467,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1476,
    "end": 1482,
    "range": [
      1476,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1485,
    "end": 1491,
    "range": [
      1485,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 1499,
    "end": 1504,
    "range": [
      1499,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1506,
    "end": 1512,
    "range": [
      1506,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1515,
    "end": 1517,
    "range": [
      1515,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1522,
    "end": 1527,
    "range": [
      1522,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 1528,
    "end": 1532,
    "range": [
      1528,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1537,
    "end": 1540,
    "range": [
      1537,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1541,
    "end": 1546,
    "range": [
      1541,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1550,
    "end": 1557,
    "range": [
      1550,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1564,
    "end": 1570,
    "range": [
      1564,
      1570
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1571,
    "end": 1578,
    "range": [
      1571,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1586,
    "end": 1589,
    "range": [
      1586,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1590,
    "end": 1595,
    "range": [
      1590,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1599,
    "end": 1606,
    "range": [
      1599,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1609,
    "end": 1615,
    "range": [
      1609,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1623,
    "end": 1626,
    "range": [
      1623,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 1627,
    "end": 1632,
    "range": [
      1627,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1636,
    "end": 1642,
    "range": [
      1636,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1649,
    "end": 1655,
    "range": [
      1649,
      1655
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1656,
    "end": 1658,
    "range": [
      1656,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1666,
    "end": 1669,
    "range": [
      1666,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 1670,
    "end": 1675,
    "range": [
      1670,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1679,
    "end": 1685,
    "range": [
      1679,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1688,
    "end": 1690,
    "range": [
      1688,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1698,
    "end": 1703,
    "range": [
      1698,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1704,
    "end": 1708,
    "range": [
      1704,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1713,
    "end": 1716,
    "range": [
      1713,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1717,
    "end": 1722,
    "range": [
      1717,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1726,
    "end": 1733,
    "range": [
      1726,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1740,
    "end": 1746,
    "range": [
      1740,
      1746
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1747,
    "end": 1754,
    "range": [
      1747,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1762,
    "end": 1765,
    "range": [
      1762,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1766,
    "end": 1771,
    "range": [
      1766,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1775,
    "end": 1782,
    "range": [
      1775,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1785,
    "end": 1792,
    "range": [
      1785,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1800,
    "end": 1803,
    "range": [
      1800,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 1804,
    "end": 1809,
    "range": [
      1804,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1813,
    "end": 1819,
    "range": [
      1813,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1826,
    "end": 1832,
    "range": [
      1826,
      1832
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1833,
    "end": 1835,
    "range": [
      1833,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1843,
    "end": 1846,
    "range": [
      1843,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 1847,
    "end": 1852,
    "range": [
      1847,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1856,
    "end": 1862,
    "range": [
      1856,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1865,
    "end": 1871,
    "range": [
      1865,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1874,
    "end": 1881,
    "range": [
      1874,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1889,
    "end": 1896,
    "range": [
      1889,
      1896
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1897,
    "end": 1902,
    "range": [
      1897,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1903,
    "end": 1905,
    "range": [
      1903,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1907,
    "end": 1912,
    "range": [
      1907,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 1915,
    "end": 1919,
    "range": [
      1915,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1922,
    "end": 1926,
    "range": [
      1922,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1929,
    "end": 1931,
    "range": [
      1929,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "String",
    "value": "'prop1'",
    "start": 1932,
    "end": 1939,
    "range": [
      1932,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1943,
    "end": 1945,
    "range": [
      1943,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1947,
    "end": 1949,
    "range": [
      1947,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "String",
    "value": "'prop1'",
    "start": 1950,
    "end": 1957,
    "range": [
      1950,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1961,
    "end": 1968,
    "range": [
      1961,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1971,
    "end": 1973,
    "range": [
      1971,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "String",
    "value": "'prop2'",
    "start": 1974,
    "end": 1981,
    "range": [
      1974,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1985,
    "end": 1987,
    "range": [
      1985,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1989,
    "end": 1991,
    "range": [
      1989,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "String",
    "value": "'prop2'",
    "start": 1992,
    "end": 1999,
    "range": [
      1992,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2003,
    "end": 2010,
    "range": [
      2003,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2013,
    "end": 2018,
    "range": [
      2013,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "Six",
    "start": 2019,
    "end": 2022,
    "range": [
      2019,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2027,
    "end": 2030,
    "range": [
      2027,
      2030
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 2031,
    "end": 2036,
    "range": [
      2031,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2040,
    "end": 2047,
    "range": [
      2040,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2050,
    "end": 2056,
    "range": [
      2050,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2063,
    "end": 2069,
    "range": [
      2063,
      2069
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2070,
    "end": 2072,
    "range": [
      2070,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2080,
    "end": 2083,
    "range": [
      2080,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 2084,
    "end": 2089,
    "range": [
      2084,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2093,
    "end": 2100,
    "range": [
      2093,
      2100
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2103,
    "end": 2109,
    "range": [
      2103,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2117,
    "end": 2120,
    "range": [
      2117,
      2120
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 2121,
    "end": 2126,
    "range": [
      2121,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 2130,
    "end": 2136,
    "range": [
      2130,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2139,
    "end": 2145,
    "range": [
      2139,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2152,
    "end": 2158,
    "range": [
      2152,
      2158
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2159,
    "end": 2161,
    "range": [
      2159,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2169,
    "end": 2172,
    "range": [
      2169,
      2172
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 2173,
    "end": 2178,
    "range": [
      2173,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2182,
    "end": 2189,
    "range": [
      2182,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2190,
    "end": 2191,
    "range": [
      2190,
      2191
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2192,
    "end": 2196,
    "range": [
      2192,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2204,
    "end": 2211,
    "range": [
      2204,
      2211
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2212,
    "end": 2217,
    "range": [
      2212,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2218,
    "end": 2220,
    "range": [
      2218,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Identifier",
    "value": "Six",
    "start": 2222,
    "end": 2225,
    "range": [
      2222,
      2225
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2226,
    "end": 2233,
    "range": [
      2226,
      2233
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2234,
    "end": 2239,
    "range": [
      2234,
      2239
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2240,
    "end": 2242,
    "range": [
      2240,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "String",
    "value": "'prop1'",
    "start": 2244,
    "end": 2251,
    "range": [
      2244,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "String",
    "value": "'prop2'",
    "start": 2254,
    "end": 2261,
    "range": [
      2254,
      2261
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2263,
    "end": 2268,
    "range": [
      2263,
      2268
    ]
  },
  {
    "type": "Identifier",
    "value": "sv1",
    "start": 2269,
    "end": 2272,
    "range": [
      2269,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2275,
    "end": 2277,
    "range": [
      2275,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2278,
    "end": 2280,
    "range": [
      2278,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2282,
    "end": 2284,
    "range": [
      2282,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2285,
    "end": 2287,
    "range": [
      2285,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2291,
    "end": 2293,
    "range": [
      2291,
      2293
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2294,
    "end": 2296,
    "range": [
      2294,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2297,
    "end": 2299,
    "range": [
      2297,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2303,
    "end": 2307,
    "range": [
      2303,
      2307
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2308,
    "end": 2310,
    "range": [
      2308,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2311,
    "end": 2313,
    "range": [
      2311,
      2313
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2317,
    "end": 2319,
    "range": [
      2317,
      2319
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2320,
    "end": 2322,
    "range": [
      2320,
      2322
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2323,
    "end": 2325,
    "range": [
      2323,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2327,
    "end": 2328,
    "range": [
      2327,
      2328
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2329,
    "end": 2333,
    "range": [
      2329,
      2333
    ]
  }
]
```
