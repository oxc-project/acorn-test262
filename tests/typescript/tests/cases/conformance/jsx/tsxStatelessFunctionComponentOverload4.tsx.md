__ESTREE_TEST__:PASS:
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
