__ESTREE_TEST__:AST:
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
      "end": 31
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 57
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 72
            },
            "start": 61,
            "end": 72
          },
          "typeArguments": null,
          "start": 61,
          "end": 72
        },
        "start": 59,
        "end": 72
      },
      "body": null,
      "expression": false,
      "start": 32,
      "end": 73
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 106
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 108,
                      "end": 114
                    },
                    "start": 106,
                    "end": 114
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 104,
                  "end": 115
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "yy1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 119
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 121,
                      "end": 127
                    },
                    "start": 119,
                    "end": 127
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 116,
                  "end": 127
                }
              ],
              "start": 103,
              "end": 128
            },
            "start": 101,
            "end": 128
          },
          "start": 100,
          "end": 128
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 134
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 142
            },
            "start": 131,
            "end": 142
          },
          "typeArguments": null,
          "start": 131,
          "end": 142
        },
        "start": 129,
        "end": 142
      },
      "body": null,
      "expression": false,
      "start": 74,
      "end": 143
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 152
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 163
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 165,
                  "end": 167
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 161,
                "end": 167
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yy1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 176
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 178,
                  "end": 185
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 173,
                "end": 185
              }
            ],
            "start": 155,
            "end": 187
          },
          "definite": false,
          "start": 149,
          "end": 187
        }
      ],
      "declare": false,
      "start": 145,
      "end": 187
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 198,
                "end": 201
              },
              "start": 196,
              "end": 201
            },
            "start": 192,
            "end": 201
          },
          "init": null,
          "definite": false,
          "start": 192,
          "end": 201
        }
      ],
      "declare": false,
      "start": 188,
      "end": 202
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
            "name": "c0",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 221
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 225,
                "end": 233
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extraProp",
                    "start": 234,
                    "end": 243
                  },
                  "value": null,
                  "start": 234,
                  "end": 243
                }
              ],
              "selfClosing": true,
              "start": 224,
              "end": 246
            },
            "children": [],
            "closingElement": null,
            "start": 224,
            "end": 246
          },
          "definite": false,
          "start": 219,
          "end": 246
        }
      ],
      "declare": false,
      "start": 213,
      "end": 247
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 276
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 280,
                "end": 288
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 289,
                    "end": 291
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 293,
                      "end": 295
                    },
                    "start": 292,
                    "end": 296
                  },
                  "start": 289,
                  "end": 296
                }
              ],
              "selfClosing": true,
              "start": 279,
              "end": 298
            },
            "children": [],
            "closingElement": null,
            "start": 279,
            "end": 298
          },
          "definite": false,
          "start": 274,
          "end": 298
        }
      ],
      "declare": false,
      "start": 268,
      "end": 299
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 330
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 334,
                "end": 342
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 350
                  },
                  "start": 343,
                  "end": 351
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy1",
                    "start": 352,
                    "end": 355
                  },
                  "value": null,
                  "start": 352,
                  "end": 355
                }
              ],
              "selfClosing": true,
              "start": 333,
              "end": 358
            },
            "children": [],
            "closingElement": null,
            "start": 333,
            "end": 358
          },
          "definite": false,
          "start": 328,
          "end": 358
        }
      ],
      "declare": false,
      "start": 322,
      "end": 359
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 388,
            "end": 390
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 394,
                "end": 402
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 410
                  },
                  "start": 403,
                  "end": 411
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "extra",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 417,
                          "end": 422
                        },
                        "value": {
                          "type": "Literal",
                          "value": "extra attr",
                          "raw": "\"extra attr\"",
                          "start": 424,
                          "end": 436
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 417,
                        "end": 436
                      }
                    ],
                    "start": 416,
                    "end": 437
                  },
                  "start": 412,
                  "end": 438
                }
              ],
              "selfClosing": true,
              "start": 393,
              "end": 441
            },
            "children": [],
            "closingElement": null,
            "start": 393,
            "end": 441
          },
          "definite": false,
          "start": 388,
          "end": 441
        }
      ],
      "declare": false,
      "start": 382,
      "end": 442
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 500
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 504,
                "end": 512
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 520
                  },
                  "start": 513,
                  "end": 521
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 522,
                    "end": 524
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10000,
                      "raw": "10000",
                      "start": 526,
                      "end": 531
                    },
                    "start": 525,
                    "end": 532
                  },
                  "start": 522,
                  "end": 532
                }
              ],
              "selfClosing": true,
              "start": 503,
              "end": 535
            },
            "children": [],
            "closingElement": null,
            "start": 503,
            "end": 535
          },
          "definite": false,
          "start": 498,
          "end": 535
        }
      ],
      "declare": false,
      "start": 492,
      "end": 536
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
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 565
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 569,
                "end": 577
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 585
                  },
                  "start": 578,
                  "end": 586
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 592,
                          "end": 594
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 596,
                          "end": 600
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 592,
                        "end": 600
                      }
                    ],
                    "start": 591,
                    "end": 601
                  },
                  "start": 587,
                  "end": 602
                }
              ],
              "selfClosing": true,
              "start": 568,
              "end": 605
            },
            "children": [],
            "closingElement": null,
            "start": 568,
            "end": 605
          },
          "definite": false,
          "start": 563,
          "end": 605
        }
      ],
      "declare": false,
      "start": 557,
      "end": 606
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
            "name": "c6",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 638
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 642,
                "end": 650
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 655,
                    "end": 659
                  },
                  "start": 651,
                  "end": 660
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "extra",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 666,
                          "end": 671
                        },
                        "value": {
                          "type": "Literal",
                          "value": "extra attr",
                          "raw": "\"extra attr\"",
                          "start": 673,
                          "end": 685
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 666,
                        "end": 685
                      }
                    ],
                    "start": 665,
                    "end": 686
                  },
                  "start": 661,
                  "end": 687
                }
              ],
              "selfClosing": true,
              "start": 641,
              "end": 690
            },
            "children": [],
            "closingElement": null,
            "start": 641,
            "end": 690
          },
          "definite": false,
          "start": 636,
          "end": 690
        }
      ],
      "declare": false,
      "start": 630,
      "end": 691
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
            "name": "c7",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 787
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 791,
                "end": 799
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 808
                  },
                  "start": 800,
                  "end": 809
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 810,
                    "end": 812
                  },
                  "value": null,
                  "start": 810,
                  "end": 812
                }
              ],
              "selfClosing": true,
              "start": 790,
              "end": 815
            },
            "children": [],
            "closingElement": null,
            "start": 790,
            "end": 815
          },
          "definite": false,
          "start": 785,
          "end": 815
        }
      ],
      "declare": false,
      "start": 779,
      "end": 816
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 922,
        "end": 937
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "extra-data",
                    "raw": "\"extra-data\"",
                    "start": 942,
                    "end": 954
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 956,
                      "end": 962
                    },
                    "start": 954,
                    "end": 962
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 942,
                  "end": 962
                }
              ],
              "start": 941,
              "end": 963
            },
            "start": 939,
            "end": 963
          },
          "start": 938,
          "end": 963
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 969
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 977
            },
            "start": 966,
            "end": 977
          },
          "typeArguments": null,
          "start": 966,
          "end": 977
        },
        "start": 964,
        "end": 977
      },
      "body": null,
      "expression": false,
      "start": 905,
      "end": 978
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 996,
        "end": 1011
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1016,
                    "end": 1018
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1020,
                      "end": 1026
                    },
                    "start": 1018,
                    "end": 1026
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1016,
                  "end": 1027
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "direction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1028,
                    "end": 1037
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1040,
                      "end": 1046
                    },
                    "start": 1038,
                    "end": 1046
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1028,
                  "end": 1046
                }
              ],
              "start": 1015,
              "end": 1047
            },
            "start": 1013,
            "end": 1047
          },
          "start": 1012,
          "end": 1047
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1053
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1054,
              "end": 1061
            },
            "start": 1050,
            "end": 1061
          },
          "typeArguments": null,
          "start": 1050,
          "end": 1061
        },
        "start": 1048,
        "end": 1061
      },
      "body": null,
      "expression": false,
      "start": 979,
      "end": 1062
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1079,
            "end": 1081
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOneThing",
                "start": 1085,
                "end": 1100
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra-data",
                    "start": 1101,
                    "end": 1111
                  },
                  "value": null,
                  "start": 1101,
                  "end": 1111
                }
              ],
              "selfClosing": true,
              "start": 1084,
              "end": 1114
            },
            "children": [],
            "closingElement": null,
            "start": 1084,
            "end": 1114
          },
          "definite": false,
          "start": 1079,
          "end": 1114
        }
      ],
      "declare": false,
      "start": 1073,
      "end": 1114
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1121,
            "end": 1123
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOneThing",
                "start": 1127,
                "end": 1142
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 1143,
                    "end": 1145
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1146,
                    "end": 1153
                  },
                  "start": 1143,
                  "end": 1153
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "direction",
                    "start": 1154,
                    "end": 1163
                  },
                  "value": {
                    "type": "Literal",
                    "value": "left",
                    "raw": "\"left\"",
                    "start": 1164,
                    "end": 1170
                  },
                  "start": 1154,
                  "end": 1170
                }
              ],
              "selfClosing": true,
              "start": 1126,
              "end": 1173
            },
            "children": [],
            "closingElement": null,
            "start": 1126,
            "end": 1173
          },
          "definite": false,
          "start": 1121,
          "end": 1173
        }
      ],
      "declare": false,
      "start": 1115,
      "end": 1173
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1192,
        "end": 1207
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1212,
                    "end": 1214
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1217,
                      "end": 1223
                    },
                    "start": 1215,
                    "end": 1223
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1212,
                  "end": 1224
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1225,
                    "end": 1227
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1230,
                      "end": 1236
                    },
                    "start": 1228,
                    "end": 1236
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1225,
                  "end": 1236
                }
              ],
              "start": 1211,
              "end": 1237
            },
            "start": 1209,
            "end": 1237
          },
          "start": 1208,
          "end": 1237
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 1240,
              "end": 1243
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1244,
              "end": 1251
            },
            "start": 1240,
            "end": 1251
          },
          "typeArguments": null,
          "start": 1240,
          "end": 1251
        },
        "start": 1238,
        "end": 1251
      },
      "body": null,
      "expression": false,
      "start": 1175,
      "end": 1252
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1270,
        "end": 1285
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1290,
                    "end": 1292
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1295,
                      "end": 1301
                    },
                    "start": 1293,
                    "end": 1301
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1290,
                  "end": 1302
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1303,
                    "end": 1305
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1308,
                      "end": 1314
                    },
                    "start": 1306,
                    "end": 1314
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1303,
                  "end": 1315
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1316,
                    "end": 1324
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1326,
                          "end": 1329
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1330,
                          "end": 1337
                        },
                        "start": 1326,
                        "end": 1337
                      },
                      "typeArguments": null,
                      "start": 1326,
                      "end": 1337
                    },
                    "start": 1324,
                    "end": 1337
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1316,
                  "end": 1337
                }
              ],
              "start": 1289,
              "end": 1338
            },
            "start": 1287,
            "end": 1338
          },
          "start": 1286,
          "end": 1338
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 1341,
              "end": 1344
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1345,
              "end": 1352
            },
            "start": 1341,
            "end": 1352
          },
          "typeArguments": null,
          "start": 1341,
          "end": 1352
        },
        "start": 1339,
        "end": 1352
      },
      "body": null,
      "expression": false,
      "start": 1253,
      "end": 1353
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1371,
        "end": 1386
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1391,
                    "end": 1393
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1395,
                      "end": 1402
                    },
                    "start": 1393,
                    "end": 1402
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1391,
                  "end": 1403
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1404,
                    "end": 1406
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1409,
                      "end": 1415
                    },
                    "start": 1407,
                    "end": 1415
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1404,
                  "end": 1416
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1417,
                    "end": 1419
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1421,
                      "end": 1428
                    },
                    "start": 1419,
                    "end": 1428
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1417,
                  "end": 1428
                }
              ],
              "start": 1390,
              "end": 1429
            },
            "start": 1388,
            "end": 1429
          },
          "start": 1387,
          "end": 1429
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 1432,
              "end": 1435
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1436,
              "end": 1443
            },
            "start": 1432,
            "end": 1443
          },
          "typeArguments": null,
          "start": 1432,
          "end": 1443
        },
        "start": 1430,
        "end": 1443
      },
      "body": null,
      "expression": false,
      "start": 1354,
      "end": 1444
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1461,
            "end": 1463
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1467,
                "end": 1482
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 1483,
                    "end": 1485
                  },
                  "value": null,
                  "start": 1483,
                  "end": 1485
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y3",
                    "start": 1486,
                    "end": 1488
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1489,
                    "end": 1496
                  },
                  "start": 1486,
                  "end": 1496
                }
              ],
              "selfClosing": true,
              "start": 1466,
              "end": 1498
            },
            "children": [],
            "closingElement": null,
            "start": 1466,
            "end": 1498
          },
          "definite": false,
          "start": 1461,
          "end": 1498
        }
      ],
      "declare": false,
      "start": 1455,
      "end": 1498
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1505,
            "end": 1507
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1511,
                "end": 1526
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 1527,
                    "end": 1529
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1530,
                    "end": 1537
                  },
                  "start": 1527,
                  "end": 1537
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y2",
                    "start": 1538,
                    "end": 1540
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000",
                      "start": 1542,
                      "end": 1546
                    },
                    "start": 1541,
                    "end": 1547
                  },
                  "start": 1538,
                  "end": 1547
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y3",
                    "start": 1548,
                    "end": 1550
                  },
                  "value": null,
                  "start": 1548,
                  "end": 1550
                }
              ],
              "selfClosing": true,
              "start": 1510,
              "end": 1553
            },
            "children": [],
            "closingElement": null,
            "start": 1510,
            "end": 1553
          },
          "definite": false,
          "start": 1505,
          "end": 1553
        }
      ],
      "declare": false,
      "start": 1499,
      "end": 1553
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1560,
            "end": 1562
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1566,
                "end": 1581
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 1582,
                    "end": 1584
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1585,
                    "end": 1592
                  },
                  "start": 1582,
                  "end": 1592
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y2",
                    "start": 1593,
                    "end": 1595
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000",
                      "start": 1597,
                      "end": 1601
                    },
                    "start": 1596,
                    "end": 1602
                  },
                  "start": 1593,
                  "end": 1602
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 1603,
                    "end": 1611
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 1612,
                    "end": 1616
                  },
                  "start": 1603,
                  "end": 1616
                }
              ],
              "selfClosing": true,
              "start": 1565,
              "end": 1619
            },
            "children": [],
            "closingElement": null,
            "start": 1565,
            "end": 1619
          },
          "definite": false,
          "start": 1560,
          "end": 1619
        }
      ],
      "declare": false,
      "start": 1554,
      "end": 1619
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
            "name": "e4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1626,
            "end": 1628
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1632,
                "end": 1647
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 1648,
                    "end": 1650
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1651,
                    "end": 1658
                  },
                  "start": 1648,
                  "end": 1658
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y2",
                    "start": 1659,
                    "end": 1661
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000",
                      "start": 1663,
                      "end": 1667
                    },
                    "start": 1662,
                    "end": 1668
                  },
                  "start": 1659,
                  "end": 1668
                }
              ],
              "selfClosing": false,
              "start": 1631,
              "end": 1669
            },
            "children": [
              {
                "type": "JSXText",
                "value": "Hi",
                "raw": "Hi",
                "start": 1669,
                "end": 1671
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1673,
                "end": 1688
              },
              "start": 1671,
              "end": 1689
            },
            "start": 1631,
            "end": 1689
          },
          "definite": false,
          "start": 1626,
          "end": 1689
        }
      ],
      "declare": false,
      "start": 1620,
      "end": 1689
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1689
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 32,
    "end": 39,
    "range": [
      32,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 40,
    "end": 48,
    "range": [
      40,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "OneThing",
    "start": 49,
    "end": 57,
    "range": [
      49,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 65,
    "end": 72,
    "range": [
      65,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 74,
    "end": 81,
    "range": [
      74,
      81
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90,
    "range": [
      82,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "OneThing",
    "start": 91,
    "end": 99,
    "range": [
      91,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 104,
    "end": 106,
    "range": [
      104,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 108,
    "end": 114,
    "range": [
      108,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "yy1",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 131,
    "end": 134,
    "range": [
      131,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 135,
    "end": 142,
    "range": [
      135,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 145,
    "end": 148,
    "range": [
      145,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 161,
    "end": 163,
    "range": [
      161,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 165,
    "end": 167,
    "range": [
      165,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "yy1",
    "start": 173,
    "end": 176,
    "range": [
      173,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 178,
    "end": 185,
    "range": [
      178,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 192,
    "end": 196,
    "range": [
      192,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218,
    "range": [
      213,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 219,
    "end": 221,
    "range": [
      219,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 225,
    "end": 233,
    "range": [
      225,
      233
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "extraProp",
    "start": 234,
    "end": 243,
    "range": [
      234,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 268,
    "end": 273,
    "range": [
      268,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 274,
    "end": 276,
    "range": [
      274,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 280,
    "end": 288,
    "range": [
      280,
      288
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 289,
    "end": 291,
    "range": [
      289,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 293,
    "end": 295,
    "range": [
      293,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 322,
    "end": 327,
    "range": [
      322,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 328,
    "end": 330,
    "range": [
      328,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 334,
    "end": 342,
    "range": [
      334,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 344,
    "end": 347,
    "range": [
      344,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 347,
    "end": 350,
    "range": [
      347,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "yy1",
    "start": 352,
    "end": 355,
    "range": [
      352,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 382,
    "end": 387,
    "range": [
      382,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 388,
    "end": 390,
    "range": [
      388,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 394,
    "end": 402,
    "range": [
      394,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 404,
    "end": 407,
    "range": [
      404,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 407,
    "end": 410,
    "range": [
      407,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 413,
    "end": 416,
    "range": [
      413,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 417,
    "end": 422,
    "range": [
      417,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "String",
    "value": "\"extra attr\"",
    "start": 424,
    "end": 436,
    "range": [
      424,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 492,
    "end": 497,
    "range": [
      492,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 498,
    "end": 500,
    "range": [
      498,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 504,
    "end": 512,
    "range": [
      504,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 514,
    "end": 517,
    "range": [
      514,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 517,
    "end": 520,
    "range": [
      517,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 522,
    "end": 524,
    "range": [
      522,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
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
    "type": "Numeric",
    "value": "10000",
    "start": 526,
    "end": 531,
    "range": [
      526,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 557,
    "end": 562,
    "range": [
      557,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 563,
    "end": 565,
    "range": [
      563,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 569,
    "end": 577,
    "range": [
      569,
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
    "value": "...",
    "start": 579,
    "end": 582,
    "range": [
      579,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 582,
    "end": 585,
    "range": [
      582,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 588,
    "end": 591,
    "range": [
      588,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 592,
    "end": 594,
    "range": [
      592,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 596,
    "end": 600,
    "range": [
      596,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 630,
    "end": 635,
    "range": [
      630,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 636,
    "end": 638,
    "range": [
      636,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 642,
    "end": 650,
    "range": [
      642,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 652,
    "end": 655,
    "range": [
      652,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 655,
    "end": 659,
    "range": [
      655,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 662,
    "end": 665,
    "range": [
      662,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 666,
    "end": 671,
    "range": [
      666,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "String",
    "value": "\"extra attr\"",
    "start": 673,
    "end": 685,
    "range": [
      673,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 779,
    "end": 784,
    "range": [
      779,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 785,
    "end": 787,
    "range": [
      785,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 791,
    "end": 799,
    "range": [
      791,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 801,
    "end": 804,
    "range": [
      801,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 804,
    "end": 808,
    "range": [
      804,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 810,
    "end": 812,
    "range": [
      810,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 905,
    "end": 912,
    "range": [
      905,
      912
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 913,
    "end": 921,
    "range": [
      913,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "TestingOneThing",
    "start": 922,
    "end": 937,
    "range": [
      922,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "String",
    "value": "\"extra-data\"",
    "start": 942,
    "end": 954,
    "range": [
      942,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 956,
    "end": 962,
    "range": [
      956,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 966,
    "end": 969,
    "range": [
      966,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 970,
    "end": 977,
    "range": [
      970,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 979,
    "end": 986,
    "range": [
      979,
      986
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 987,
    "end": 995,
    "range": [
      987,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "TestingOneThing",
    "start": 996,
    "end": 1011,
    "range": [
      996,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 1016,
    "end": 1018,
    "range": [
      1016,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1020,
    "end": 1026,
    "range": [
      1020,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 1028,
    "end": 1037,
    "range": [
      1028,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1040,
    "end": 1046,
    "range": [
      1040,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1050,
    "end": 1053,
    "range": [
      1050,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1054,
    "end": 1061,
    "range": [
      1054,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1073,
    "end": 1078,
    "range": [
      1073,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1079,
    "end": 1081,
    "range": [
      1079,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOneThing",
    "start": 1085,
    "end": 1100,
    "range": [
      1085,
      1100
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "extra-data",
    "start": 1101,
    "end": 1111,
    "range": [
      1101,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1115,
    "end": 1120,
    "range": [
      1115,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1121,
    "end": 1123,
    "range": [
      1121,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOneThing",
    "start": 1127,
    "end": 1142,
    "range": [
      1127,
      1142
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 1143,
    "end": 1145,
    "range": [
      1143,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1146,
    "end": 1153,
    "range": [
      1146,
      1153
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "direction",
    "start": 1154,
    "end": 1163,
    "range": [
      1154,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "JSXText",
    "value": "\"left\"",
    "start": 1164,
    "end": 1170,
    "range": [
      1164,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1175,
    "end": 1182,
    "range": [
      1175,
      1182
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1183,
    "end": 1191,
    "range": [
      1183,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "TestingOptional",
    "start": 1192,
    "end": 1207,
    "range": [
      1192,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1212,
    "end": 1214,
    "range": [
      1212,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1217,
    "end": 1223,
    "range": [
      1217,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1225,
    "end": 1227,
    "range": [
      1225,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1230,
    "end": 1236,
    "range": [
      1230,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1240,
    "end": 1243,
    "range": [
      1240,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1244,
    "end": 1251,
    "range": [
      1244,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1253,
    "end": 1260,
    "range": [
      1253,
      1260
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1261,
    "end": 1269,
    "range": [
      1261,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "TestingOptional",
    "start": 1270,
    "end": 1285,
    "range": [
      1270,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1290,
    "end": 1292,
    "range": [
      1290,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1295,
    "end": 1301,
    "range": [
      1295,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1303,
    "end": 1305,
    "range": [
      1303,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1308,
    "end": 1314,
    "range": [
      1308,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1316,
    "end": 1324,
    "range": [
      1316,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1326,
    "end": 1329,
    "range": [
      1326,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1330,
    "end": 1337,
    "range": [
      1330,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1341,
    "end": 1344,
    "range": [
      1341,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1345,
    "end": 1352,
    "range": [
      1345,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1354,
    "end": 1361,
    "range": [
      1354,
      1361
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1362,
    "end": 1370,
    "range": [
      1362,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "TestingOptional",
    "start": 1371,
    "end": 1386,
    "range": [
      1371,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1391,
    "end": 1393,
    "range": [
      1391,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1395,
    "end": 1402,
    "range": [
      1395,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1404,
    "end": 1406,
    "range": [
      1404,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1409,
    "end": 1415,
    "range": [
      1409,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 1417,
    "end": 1419,
    "range": [
      1417,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1421,
    "end": 1428,
    "range": [
      1421,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1432,
    "end": 1435,
    "range": [
      1432,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1436,
    "end": 1443,
    "range": [
      1436,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1455,
    "end": 1460,
    "range": [
      1455,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1461,
    "end": 1463,
    "range": [
      1461,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1467,
    "end": 1482,
    "range": [
      1467,
      1482
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1483,
    "end": 1485,
    "range": [
      1483,
      1485
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y3",
    "start": 1486,
    "end": 1488,
    "range": [
      1486,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1489,
    "end": 1496,
    "range": [
      1489,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1499,
    "end": 1504,
    "range": [
      1499,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 1505,
    "end": 1507,
    "range": [
      1505,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1511,
    "end": 1526,
    "range": [
      1511,
      1526
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1527,
    "end": 1529,
    "range": [
      1527,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1530,
    "end": 1537,
    "range": [
      1530,
      1537
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y2",
    "start": 1538,
    "end": 1540,
    "range": [
      1538,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1542,
    "end": 1546,
    "range": [
      1542,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y3",
    "start": 1548,
    "end": 1550,
    "range": [
      1548,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1554,
    "end": 1559,
    "range": [
      1554,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 1560,
    "end": 1562,
    "range": [
      1560,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1566,
    "end": 1581,
    "range": [
      1566,
      1581
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1582,
    "end": 1584,
    "range": [
      1582,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1585,
    "end": 1592,
    "range": [
      1585,
      1592
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y2",
    "start": 1593,
    "end": 1595,
    "range": [
      1593,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1597,
    "end": 1601,
    "range": [
      1597,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1603,
    "end": 1611,
    "range": [
      1603,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 1612,
    "end": 1616,
    "range": [
      1612,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1620,
    "end": 1625,
    "range": [
      1620,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 1626,
    "end": 1628,
    "range": [
      1626,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1632,
    "end": 1647,
    "range": [
      1632,
      1647
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1648,
    "end": 1650,
    "range": [
      1648,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1651,
    "end": 1658,
    "range": [
      1651,
      1658
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "y2",
    "start": 1659,
    "end": 1661,
    "range": [
      1659,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1663,
    "end": 1667,
    "range": [
      1663,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "JSXText",
    "value": "Hi",
    "start": 1669,
    "end": 1671,
    "range": [
      1669,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1673,
    "end": 1688,
    "range": [
      1673,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  }
]
```
