__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2333,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 11,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 31,
        "decorators": [],
        "name": "Serializer",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 32,
        "end": 101,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 36,
            "end": 76,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 45,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 74,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 49,
                    "end": 74,
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
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 79,
            "end": 99,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 88,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
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
      "start": 102,
      "end": 130,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 129,
            "decorators": [],
            "name": "box",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 129,
                  "decorators": [],
                  "name": "Serializer",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 153,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 141,
            "end": 153,
            "object": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 145,
              "end": 152,
              "value": "value",
              "raw": "'value'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 174,
      "expression": {
        "type": "AssignmentExpression",
        "start": 154,
        "end": 173,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 154,
          "end": 166,
          "object": {
            "type": "Identifier",
            "start": 154,
            "end": 157,
            "decorators": [],
            "name": "box",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 158,
            "end": 165,
            "value": "value",
            "raw": "'value'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 169,
          "end": 173,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 175,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 175,
          "end": 187,
          "object": {
            "type": "Identifier",
            "start": 175,
            "end": 178,
            "decorators": [],
            "name": "box",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 179,
            "end": 186,
            "value": "value",
            "raw": "'value'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 190,
          "end": 192,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 217,
      "expression": {
        "type": "AssignmentExpression",
        "start": 194,
        "end": 216,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 194,
          "end": 206,
          "object": {
            "type": "Identifier",
            "start": 194,
            "end": 197,
            "decorators": [],
            "name": "box",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 198,
            "end": 205,
            "value": "value",
            "raw": "'value'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 209,
          "end": 216,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 219,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 236,
        "decorators": [],
        "name": "Element",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 237,
        "end": 310,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 243,
            "end": 276,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 252,
              "decorators": [],
              "name": "style",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 275,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 275,
                  "decorators": [],
                  "name": "CSSStyleDeclaration",
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
            "start": 281,
            "end": 308,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "decorators": [],
              "name": "style",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 291,
                "end": 306,
                "decorators": [],
                "name": "cssText",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 298,
                  "end": 306,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 300,
                    "end": 306
                  }
                }
              }
            ],
            "returnType": null,
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
      "start": 312,
      "end": 343,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 342,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 335,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 342,
                  "decorators": [],
                  "name": "Element",
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 344,
      "end": 376,
      "expression": {
        "type": "AssignmentExpression",
        "start": 344,
        "end": 375,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 344,
          "end": 360,
          "object": {
            "type": "Identifier",
            "start": 344,
            "end": 351,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 352,
            "end": 359,
            "value": "style",
            "raw": "'style'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 363,
          "end": 375,
          "value": "color: red",
          "raw": "\"color: red\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 377,
      "end": 410,
      "expression": {
        "type": "AssignmentExpression",
        "start": 377,
        "end": 409,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 377,
          "end": 393,
          "object": {
            "type": "Identifier",
            "start": 377,
            "end": 384,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 385,
            "end": 392,
            "value": "style",
            "raw": "'style'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "MemberExpression",
          "start": 396,
          "end": 409,
          "object": {
            "type": "Identifier",
            "start": 396,
            "end": 403,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 404,
            "end": 409,
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 412,
      "end": 684,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 421,
        "decorators": [],
        "name": "One",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 422,
        "end": 684,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 426,
            "end": 466,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 430,
              "end": 435,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 435,
              "end": 466,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 437,
                "end": 445,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 439,
                  "end": 445
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 446,
                "end": 466,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 452,
                    "end": 462,
                    "argument": {
                      "type": "Literal",
                      "start": 459,
                      "end": 461,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 469,
            "end": 501,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 473,
              "end": 478,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 478,
              "end": 501,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 479,
                  "end": 497,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 480,
                    "end": 497,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 482,
                      "end": 497,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 499,
                "end": 501,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 505,
            "end": 545,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 509,
              "end": 514,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 514,
              "end": 545,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 516,
                "end": 524,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 518,
                  "end": 524
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 525,
                "end": 545,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 531,
                    "end": 541,
                    "argument": {
                      "type": "Literal",
                      "start": 538,
                      "end": 540,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 548,
            "end": 580,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 552,
              "end": 557,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 557,
              "end": 580,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 558,
                  "end": 576,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 559,
                    "end": 576,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 561,
                      "end": 576,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 578,
                "end": 580,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 584,
            "end": 603,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 584,
              "end": 589,
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 589,
              "end": 597,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 591,
                "end": 597
              }
            },
            "value": {
              "type": "Literal",
              "start": 600,
              "end": 602,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 607,
            "end": 647,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 611,
              "end": 616,
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 616,
              "end": 647,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 618,
                "end": 626,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 620,
                  "end": 626
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 627,
                "end": 647,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 633,
                    "end": 643,
                    "argument": {
                      "type": "Literal",
                      "start": 640,
                      "end": 642,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 650,
            "end": 682,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 654,
              "end": 659,
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 659,
              "end": 682,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 660,
                  "end": 678,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 661,
                    "end": 678,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 663,
                      "end": 678,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 680,
                "end": 682,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
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
      "start": 686,
      "end": 1007,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 692,
        "end": 695,
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 696,
        "end": 1007,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 700,
            "end": 740,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 704,
              "end": 709,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 709,
              "end": 740,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 711,
                "end": 719,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 713,
                  "end": 719
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 720,
                "end": 740,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 726,
                    "end": 736,
                    "argument": {
                      "type": "Literal",
                      "start": 733,
                      "end": 735,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 743,
            "end": 775,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 747,
              "end": 752,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 752,
              "end": 775,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 753,
                  "end": 771,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 754,
                    "end": 771,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 756,
                      "end": 771,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 773,
                "end": 775,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 779,
            "end": 819,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 783,
              "end": 788,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 788,
              "end": 819,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 790,
                "end": 798,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 792,
                  "end": 798
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 799,
                "end": 819,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 805,
                    "end": 815,
                    "argument": {
                      "type": "Literal",
                      "start": 812,
                      "end": 814,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 822,
            "end": 845,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 826,
              "end": 831,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 831,
              "end": 845,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 832,
                  "end": 841,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 833,
                    "end": 841,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 835,
                      "end": 841
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 843,
                "end": 845,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 849,
            "end": 889,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 853,
              "end": 858,
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 858,
              "end": 889,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 860,
                "end": 868,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 862,
                  "end": 868
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 869,
                "end": 889,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 875,
                    "end": 885,
                    "argument": {
                      "type": "Literal",
                      "start": 882,
                      "end": 884,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 892,
            "end": 925,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 896,
              "end": 901,
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 901,
              "end": 925,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 902,
                  "end": 921,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 903,
                    "end": 921,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 905,
                      "end": 921,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 923,
                "end": 925,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 929,
            "end": 969,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 933,
              "end": 938,
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 938,
              "end": 969,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 940,
                "end": 948,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 942,
                  "end": 948
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 949,
                "end": 969,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 955,
                    "end": 965,
                    "argument": {
                      "type": "Literal",
                      "start": 962,
                      "end": 964,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 972,
            "end": 1005,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 976,
              "end": 981,
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 981,
              "end": 1005,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 982,
                  "end": 1001,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 983,
                    "end": 1001,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 985,
                      "end": 1001,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1003,
                "end": 1005,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
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
      "type": "VariableDeclaration",
      "start": 1009,
      "end": 1037,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1023,
          "end": 1036,
          "id": {
            "type": "Identifier",
            "start": 1023,
            "end": 1036,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1025,
              "end": 1036,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1027,
                "end": 1036,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1027,
                    "end": 1030,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1027,
                      "end": 1030,
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1033,
                    "end": 1036,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1033,
                      "end": 1036,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1039,
      "end": 1056,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1039,
        "end": 1055,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1039,
          "end": 1050,
          "object": {
            "type": "Identifier",
            "start": 1039,
            "end": 1041,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1042,
            "end": 1049,
            "value": "prop1",
            "raw": "'prop1'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1053,
          "end": 1055,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1057,
      "end": 1079,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1057,
        "end": 1078,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1057,
          "end": 1068,
          "object": {
            "type": "Identifier",
            "start": 1057,
            "end": 1059,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1060,
            "end": 1067,
            "value": "prop1",
            "raw": "'prop1'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1071,
          "end": 1078,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1081,
      "end": 1098,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1081,
        "end": 1097,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1081,
          "end": 1092,
          "object": {
            "type": "Identifier",
            "start": 1081,
            "end": 1083,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1084,
            "end": 1091,
            "value": "prop2",
            "raw": "'prop2'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1095,
          "end": 1097,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1099,
      "end": 1121,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1099,
        "end": 1120,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1099,
          "end": 1110,
          "object": {
            "type": "Identifier",
            "start": 1099,
            "end": 1101,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1102,
            "end": 1109,
            "value": "prop2",
            "raw": "'prop2'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1113,
          "end": 1120,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1123,
      "end": 1140,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1123,
        "end": 1139,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1123,
          "end": 1134,
          "object": {
            "type": "Identifier",
            "start": 1123,
            "end": 1125,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1126,
            "end": 1133,
            "value": "prop3",
            "raw": "'prop3'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1137,
          "end": 1139,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1141,
      "end": 1163,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1141,
        "end": 1162,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1141,
          "end": 1152,
          "object": {
            "type": "Identifier",
            "start": 1141,
            "end": 1143,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1144,
            "end": 1151,
            "value": "prop3",
            "raw": "'prop3'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1155,
          "end": 1162,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1164,
      "end": 1183,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1164,
        "end": 1182,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1164,
          "end": 1175,
          "object": {
            "type": "Identifier",
            "start": 1164,
            "end": 1166,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1167,
            "end": 1174,
            "value": "prop3",
            "raw": "'prop3'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1178,
          "end": 1182,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1185,
      "end": 1202,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1185,
        "end": 1201,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1185,
          "end": 1196,
          "object": {
            "type": "Identifier",
            "start": 1185,
            "end": 1187,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1188,
            "end": 1195,
            "value": "prop4",
            "raw": "'prop4'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1199,
          "end": 1201,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1203,
      "end": 1225,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1203,
        "end": 1224,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1203,
          "end": 1214,
          "object": {
            "type": "Identifier",
            "start": 1203,
            "end": 1205,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1206,
            "end": 1213,
            "value": "prop4",
            "raw": "'prop4'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1217,
          "end": 1224,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1226,
      "end": 1245,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1226,
        "end": 1244,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1226,
          "end": 1237,
          "object": {
            "type": "Identifier",
            "start": 1226,
            "end": 1228,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1229,
            "end": 1236,
            "value": "prop4",
            "raw": "'prop4'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1240,
          "end": 1244,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1247,
      "end": 1274,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1261,
          "end": 1273,
          "id": {
            "type": "Identifier",
            "start": 1261,
            "end": 1273,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1262,
              "end": 1273,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1264,
                "end": 1273,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1264,
                    "end": 1267,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1264,
                      "end": 1267,
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1270,
                    "end": 1273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1270,
                      "end": 1273,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1276,
      "end": 1299,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1282,
          "end": 1298,
          "id": {
            "type": "Identifier",
            "start": 1282,
            "end": 1285,
            "decorators": [],
            "name": "iv1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1288,
            "end": 1298,
            "object": {
              "type": "Identifier",
              "start": 1288,
              "end": 1289,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1290,
              "end": 1297,
              "value": "prop1",
              "raw": "'prop1'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1300,
      "end": 1316,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1300,
        "end": 1315,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1300,
          "end": 1310,
          "object": {
            "type": "Identifier",
            "start": 1300,
            "end": 1301,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1302,
            "end": 1309,
            "value": "prop1",
            "raw": "'prop1'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1313,
          "end": 1315,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1317,
      "end": 1338,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1317,
        "end": 1337,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1317,
          "end": 1327,
          "object": {
            "type": "Identifier",
            "start": 1317,
            "end": 1318,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1319,
            "end": 1326,
            "value": "prop1",
            "raw": "'prop1'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1330,
          "end": 1337,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1340,
      "end": 1363,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1346,
          "end": 1362,
          "id": {
            "type": "Identifier",
            "start": 1346,
            "end": 1349,
            "decorators": [],
            "name": "iv2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1352,
            "end": 1362,
            "object": {
              "type": "Identifier",
              "start": 1352,
              "end": 1353,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1354,
              "end": 1361,
              "value": "prop2",
              "raw": "'prop2'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1364,
      "end": 1380,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1364,
        "end": 1379,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1364,
          "end": 1374,
          "object": {
            "type": "Identifier",
            "start": 1364,
            "end": 1365,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1366,
            "end": 1373,
            "value": "prop2",
            "raw": "'prop2'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1377,
          "end": 1379,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1381,
      "end": 1402,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1381,
        "end": 1401,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1381,
          "end": 1391,
          "object": {
            "type": "Identifier",
            "start": 1381,
            "end": 1382,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1383,
            "end": 1390,
            "value": "prop2",
            "raw": "'prop2'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1394,
          "end": 1401,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1404,
      "end": 1520,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1410,
        "end": 1415,
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1416,
        "end": 1520,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1420,
            "end": 1460,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1424,
              "end": 1429,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1429,
              "end": 1460,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1431,
                "end": 1439,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1433,
                  "end": 1439
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1440,
                "end": 1460,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1446,
                    "end": 1456,
                    "argument": {
                      "type": "Literal",
                      "start": 1453,
                      "end": 1455,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1463,
            "end": 1495,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1467,
              "end": 1472,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1472,
              "end": 1495,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1473,
                  "end": 1491,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1474,
                    "end": 1491,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1476,
                      "end": 1491,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1493,
                "end": 1495,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1499,
            "end": 1518,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1499,
              "end": 1504,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1504,
              "end": 1512,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1506,
                "end": 1512
              }
            },
            "value": {
              "type": "Literal",
              "start": 1515,
              "end": 1517,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1522,
      "end": 1696,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1528,
        "end": 1532,
        "decorators": [],
        "name": "Four",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1533,
        "end": 1696,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1537,
            "end": 1583,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1541,
              "end": 1546,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1546,
              "end": 1583,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1548,
                "end": 1557,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1550,
                  "end": 1557,
                  "literal": {
                    "type": "Literal",
                    "start": 1550,
                    "end": 1557,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1558,
                "end": 1583,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1564,
                    "end": 1579,
                    "argument": {
                      "type": "Literal",
                      "start": 1571,
                      "end": 1578,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1586,
            "end": 1619,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1590,
              "end": 1595,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1595,
              "end": 1619,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1596,
                  "end": 1615,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1597,
                    "end": 1615,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1599,
                      "end": 1615,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1599,
                          "end": 1606,
                          "literal": {
                            "type": "Literal",
                            "start": 1599,
                            "end": 1606,
                            "value": "hello",
                            "raw": "\"hello\""
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1609,
                          "end": 1615
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1617,
                "end": 1619,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1623,
            "end": 1663,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1627,
              "end": 1632,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1632,
              "end": 1663,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1634,
                "end": 1642,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1636,
                  "end": 1642
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1643,
                "end": 1663,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1649,
                    "end": 1659,
                    "argument": {
                      "type": "Literal",
                      "start": 1656,
                      "end": 1658,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1666,
            "end": 1694,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1670,
              "end": 1675,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1675,
              "end": 1694,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1676,
                  "end": 1690,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1677,
                    "end": 1690,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1679,
                      "end": 1690,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1679,
                          "end": 1685
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1688,
                          "end": 1690,
                          "literal": {
                            "type": "Literal",
                            "start": 1688,
                            "end": 1690,
                            "value": 42,
                            "raw": "42"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1692,
                "end": 1694,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
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
      "start": 1698,
      "end": 1887,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1704,
        "end": 1708,
        "decorators": [],
        "name": "Five",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1709,
        "end": 1887,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1713,
            "end": 1759,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1717,
              "end": 1722,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1722,
              "end": 1759,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1724,
                "end": 1733,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1726,
                  "end": 1733,
                  "literal": {
                    "type": "Literal",
                    "start": 1726,
                    "end": 1733,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1734,
                "end": 1759,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1740,
                    "end": 1755,
                    "argument": {
                      "type": "Literal",
                      "start": 1747,
                      "end": 1754,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1762,
            "end": 1796,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1766,
              "end": 1771,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1771,
              "end": 1796,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1772,
                  "end": 1792,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1773,
                    "end": 1792,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1775,
                      "end": 1792,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1775,
                          "end": 1782,
                          "literal": {
                            "type": "Literal",
                            "start": 1775,
                            "end": 1782,
                            "value": "hello",
                            "raw": "\"hello\""
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1785,
                          "end": 1792
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1794,
                "end": 1796,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1800,
            "end": 1840,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1804,
              "end": 1809,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1809,
              "end": 1840,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1811,
                "end": 1819,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1813,
                  "end": 1819
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1820,
                "end": 1840,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1826,
                    "end": 1836,
                    "argument": {
                      "type": "Literal",
                      "start": 1833,
                      "end": 1835,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1843,
            "end": 1885,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1847,
              "end": 1852,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1852,
              "end": 1885,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1853,
                  "end": 1881,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1854,
                    "end": 1881,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1856,
                      "end": 1881,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1883,
                "end": 1885,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
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
      "type": "VariableDeclaration",
      "start": 1889,
      "end": 1927,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1903,
          "end": 1926,
          "id": {
            "type": "Identifier",
            "start": 1903,
            "end": 1926,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1905,
              "end": 1926,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1907,
                "end": 1926,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1907,
                    "end": 1912,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1907,
                      "end": 1912,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1915,
                    "end": 1919,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1915,
                      "end": 1919,
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1922,
                    "end": 1926,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1922,
                      "end": 1926,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1929,
      "end": 1946,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1929,
        "end": 1945,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1929,
          "end": 1940,
          "object": {
            "type": "Identifier",
            "start": 1929,
            "end": 1931,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1932,
            "end": 1939,
            "value": "prop1",
            "raw": "'prop1'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1943,
          "end": 1945,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1947,
      "end": 1969,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1947,
        "end": 1968,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1947,
          "end": 1958,
          "object": {
            "type": "Identifier",
            "start": 1947,
            "end": 1949,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1950,
            "end": 1957,
            "value": "prop1",
            "raw": "'prop1'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1961,
          "end": 1968,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1971,
      "end": 1988,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1971,
        "end": 1987,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1971,
          "end": 1982,
          "object": {
            "type": "Identifier",
            "start": 1971,
            "end": 1973,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1974,
            "end": 1981,
            "value": "prop2",
            "raw": "'prop2'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1985,
          "end": 1987,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1989,
      "end": 2011,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1989,
        "end": 2010,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1989,
          "end": 2000,
          "object": {
            "type": "Identifier",
            "start": 1989,
            "end": 1991,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1992,
            "end": 1999,
            "value": "prop2",
            "raw": "'prop2'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 2003,
          "end": 2010,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2013,
      "end": 2202,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2019,
        "end": 2022,
        "decorators": [],
        "name": "Six",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2023,
        "end": 2202,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2027,
            "end": 2077,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2031,
              "end": 2036,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2036,
              "end": 2077,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2038,
                "end": 2056,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 2040,
                  "end": 2056,
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
                  ]
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 2057,
                "end": 2077,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2063,
                    "end": 2073,
                    "argument": {
                      "type": "Literal",
                      "start": 2070,
                      "end": 2072,
                      "value": 42,
                      "raw": "42"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2080,
            "end": 2113,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2084,
              "end": 2089,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2089,
              "end": 2113,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2090,
                  "end": 2109,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2091,
                    "end": 2109,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2093,
                      "end": 2109,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2111,
                "end": 2113,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2117,
            "end": 2166,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2121,
              "end": 2126,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2126,
              "end": 2166,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2128,
                "end": 2145,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 2130,
                  "end": 2145,
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
                  ]
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 2146,
                "end": 2166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2152,
                    "end": 2162,
                    "argument": {
                      "type": "Literal",
                      "start": 2159,
                      "end": 2161,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2169,
            "end": 2200,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2173,
              "end": 2178,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2178,
              "end": 2200,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2179,
                  "end": 2196,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2180,
                    "end": 2196,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2182,
                      "end": 2196,
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
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2198,
                "end": 2200,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
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
      "type": "VariableDeclaration",
      "start": 2204,
      "end": 2225,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2218,
          "end": 2225,
          "id": {
            "type": "Identifier",
            "start": 2218,
            "end": 2225,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2220,
              "end": 2225,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2222,
                "end": 2225,
                "typeName": {
                  "type": "Identifier",
                  "start": 2222,
                  "end": 2225,
                  "decorators": [],
                  "name": "Six",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2226,
      "end": 2261,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2240,
          "end": 2261,
          "id": {
            "type": "Identifier",
            "start": 2240,
            "end": 2261,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2242,
              "end": 2261,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2244,
                "end": 2261,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 2244,
                    "end": 2251,
                    "literal": {
                      "type": "Literal",
                      "start": 2244,
                      "end": 2251,
                      "value": "prop1",
                      "raw": "'prop1'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 2254,
                    "end": 2261,
                    "literal": {
                      "type": "Literal",
                      "start": 2254,
                      "end": 2261,
                      "value": "prop2",
                      "raw": "'prop2'"
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2263,
      "end": 2281,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2269,
          "end": 2281,
          "id": {
            "type": "Identifier",
            "start": 2269,
            "end": 2272,
            "decorators": [],
            "name": "sv1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 2275,
            "end": 2281,
            "object": {
              "type": "Identifier",
              "start": 2275,
              "end": 2277,
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2278,
              "end": 2280,
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2282,
      "end": 2293,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2282,
        "end": 2293,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2282,
          "end": 2288,
          "object": {
            "type": "Identifier",
            "start": 2282,
            "end": 2284,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2285,
            "end": 2287,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 2291,
          "end": 2293,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2294,
      "end": 2307,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2294,
        "end": 2307,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2294,
          "end": 2300,
          "object": {
            "type": "Identifier",
            "start": 2294,
            "end": 2296,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2297,
            "end": 2299,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 2303,
          "end": 2307,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2308,
      "end": 2319,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2308,
        "end": 2319,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2308,
          "end": 2314,
          "object": {
            "type": "Identifier",
            "start": 2308,
            "end": 2310,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2311,
            "end": 2313,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 2317,
          "end": 2319,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2320,
      "end": 2333,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2320,
        "end": 2333,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2320,
          "end": 2326,
          "object": {
            "type": "Identifier",
            "start": 2320,
            "end": 2322,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2323,
            "end": 2325,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 2329,
          "end": 2333,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
