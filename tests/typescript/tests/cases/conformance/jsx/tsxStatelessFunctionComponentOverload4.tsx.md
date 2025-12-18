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
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 32,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 40,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "OneThing",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 74,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "OneThing",
    "start": 91,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "yy",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "yy1",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 135,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "yy1",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 224,
    "end": 225
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 225,
    "end": 233
  },
  {
    "type": "JSXIdentifier",
    "value": "extraProp",
    "start": 234,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 268,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 280,
    "end": 288
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 322,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 334,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 347,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "JSXIdentifier",
    "value": "yy1",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 382,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 394,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "String",
    "value": "\"extra attr\"",
    "start": 424,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 492,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 503,
    "end": 504
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 504,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Numeric",
    "value": "10000",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 557,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 568,
    "end": 569
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 569,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 579,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 630,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 636,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 641,
    "end": 642
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 642,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 652,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 666,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "String",
    "value": "\"extra attr\"",
    "start": 673,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 779,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 790,
    "end": 791
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 791,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 801,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 810,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 905,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 913,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "TestingOneThing",
    "start": 922,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 941,
    "end": 942
  },
  {
    "type": "String",
    "value": "\"extra-data\"",
    "start": 942,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 970,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 979,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 987,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "TestingOneThing",
    "start": 996,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 1016,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 1028,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1054,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1073,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOneThing",
    "start": 1085,
    "end": 1100
  },
  {
    "type": "JSXIdentifier",
    "value": "extra-data",
    "start": 1101,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1115,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1121,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOneThing",
    "start": 1127,
    "end": 1142
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 1143,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1146,
    "end": 1153
  },
  {
    "type": "JSXIdentifier",
    "value": "direction",
    "start": 1154,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "JSXText",
    "value": "\"left\"",
    "start": 1164,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1175,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1183,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "TestingOptional",
    "start": 1192,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1217,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1230,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1240,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1244,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1253,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1261,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "TestingOptional",
    "start": 1270,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1290,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1295,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1303,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1308,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1316,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1326,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1330,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1341,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1345,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1354,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1362,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "TestingOptional",
    "start": 1371,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1391,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1395,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1404,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1409,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 1417,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1421,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1436,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1455,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1467,
    "end": 1482
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1483,
    "end": 1485
  },
  {
    "type": "JSXIdentifier",
    "value": "y3",
    "start": 1486,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1489,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1499,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 1505,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1511,
    "end": 1526
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1530,
    "end": 1537
  },
  {
    "type": "JSXIdentifier",
    "value": "y2",
    "start": 1538,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1542,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "JSXIdentifier",
    "value": "y3",
    "start": 1548,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1554,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 1560,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1566,
    "end": 1581
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1582,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1585,
    "end": 1592
  },
  {
    "type": "JSXIdentifier",
    "value": "y2",
    "start": 1593,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1597,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1603,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 1612,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1620,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 1626,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1632,
    "end": 1647
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1648,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1651,
    "end": 1658
  },
  {
    "type": "JSXIdentifier",
    "value": "y2",
    "start": 1659,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1663,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "JSXText",
    "value": "Hi",
    "start": 1669,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1673,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1688,
    "end": 1689
  }
]
```
