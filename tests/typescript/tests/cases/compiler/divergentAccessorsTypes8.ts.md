__ESTREE_TEST__:PASS:
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
