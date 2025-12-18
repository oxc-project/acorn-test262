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
        "name": "OverloadComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 69
          }
        ],
        "start": 67,
        "end": 70
      },
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
              "start": 74,
              "end": 77
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 85
            },
            "start": 74,
            "end": 85
          },
          "typeArguments": null,
          "start": 74,
          "end": 85
        },
        "start": 72,
        "end": 85
      },
      "body": null,
      "expression": false,
      "start": 33,
      "end": 86
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 121
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 123
          }
        ],
        "start": 121,
        "end": 124
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 133
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 136
                    },
                    "start": 133,
                    "end": 136
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 132,
                  "end": 137
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 139
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 142,
                      "end": 148
                    },
                    "start": 140,
                    "end": 148
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 138,
                  "end": 149
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "ignore-prop",
                    "raw": "\"ignore-prop\"",
                    "start": 150,
                    "end": 163
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 165,
                      "end": 172
                    },
                    "start": 163,
                    "end": 172
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 150,
                  "end": 172
                }
              ],
              "start": 131,
              "end": 173
            },
            "start": 129,
            "end": 173
          },
          "start": 125,
          "end": 173
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
              "start": 176,
              "end": 179
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 187
            },
            "start": 176,
            "end": 187
          },
          "typeArguments": null,
          "start": 176,
          "end": 187
        },
        "start": 174,
        "end": 187
      },
      "body": null,
      "expression": false,
      "start": 87,
      "end": 188
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 223
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 225
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 224,
            "end": 225
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 227,
            "end": 228
          }
        ],
        "start": 223,
        "end": 229
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 238
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 241
                      },
                      "typeArguments": null,
                      "start": 240,
                      "end": 241
                    },
                    "start": 238,
                    "end": 241
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 237,
                  "end": 242
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 246,
                        "end": 247
                      },
                      "typeArguments": null,
                      "start": 246,
                      "end": 247
                    },
                    "start": 244,
                    "end": 247
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 243,
                  "end": 247
                }
              ],
              "start": 236,
              "end": 248
            },
            "start": 234,
            "end": 248
          },
          "start": 230,
          "end": 248
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
              "start": 251,
              "end": 254
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 262
            },
            "start": 251,
            "end": 262
          },
          "typeArguments": null,
          "start": 251,
          "end": 262
        },
        "start": 249,
        "end": 262
      },
      "body": null,
      "expression": false,
      "start": 189,
      "end": 263
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 283
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 285
            },
            "constraint": {
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 296
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 298,
                      "end": 304
                    },
                    "start": 296,
                    "end": 304
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 295,
                  "end": 304
                }
              ],
              "start": 294,
              "end": 305
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 284,
            "end": 305
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "constraint": {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 319
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 321,
                      "end": 328
                    },
                    "start": 319,
                    "end": 328
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 318,
                  "end": 329
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 331
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 332,
                      "end": 338
                    },
                    "start": 331,
                    "end": 338
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 330,
                  "end": 338
                }
              ],
              "start": 317,
              "end": 339
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 307,
            "end": 339
          }
        ],
        "start": 283,
        "end": 340
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 348
              },
              "typeArguments": null,
              "start": 347,
              "end": 348
            },
            "start": 345,
            "end": 348
          },
          "start": 341,
          "end": 348
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 357
              },
              "typeArguments": null,
              "start": 356,
              "end": 357
            },
            "start": 354,
            "end": 357
          },
          "start": 350,
          "end": 357
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 371
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 375,
                      "end": 392
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 397,
                          "end": 401
                        },
                        "start": 393,
                        "end": 402
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "a",
                          "start": 403,
                          "end": 404
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 405,
                          "end": 412
                        },
                        "start": 403,
                        "end": 412
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 413,
                          "end": 424
                        },
                        "value": null,
                        "start": 413,
                        "end": 424
                      }
                    ],
                    "selfClosing": true,
                    "start": 374,
                    "end": 427
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 374,
                  "end": 427
                },
                "definite": false,
                "start": 369,
                "end": 427
              }
            ],
            "declare": false,
            "start": 365,
            "end": 428
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 439
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 443,
                      "end": 460
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 465,
                          "end": 469
                        },
                        "start": 461,
                        "end": 470
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-pro",
                          "start": 471,
                          "end": 481
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello world",
                          "raw": "\"hello world\"",
                          "start": 482,
                          "end": 495
                        },
                        "start": 471,
                        "end": 495
                      }
                    ],
                    "selfClosing": true,
                    "start": 442,
                    "end": 498
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 442,
                  "end": 498
                },
                "definite": false,
                "start": 437,
                "end": 498
              }
            ],
            "declare": false,
            "start": 433,
            "end": 499
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 510
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 514,
                      "end": 531
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 536,
                          "end": 540
                        },
                        "start": 532,
                        "end": 541
                      }
                    ],
                    "selfClosing": true,
                    "start": 513,
                    "end": 544
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 513,
                  "end": 544
                },
                "definite": false,
                "start": 508,
                "end": 544
              }
            ],
            "declare": false,
            "start": 504,
            "end": 545
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 556
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 560,
                      "end": 577
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 582,
                          "end": 586
                        },
                        "start": 578,
                        "end": 587
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 588,
                          "end": 599
                        },
                        "value": null,
                        "start": 588,
                        "end": 599
                      }
                    ],
                    "selfClosing": true,
                    "start": 559,
                    "end": 602
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 559,
                  "end": 602
                },
                "definite": false,
                "start": 554,
                "end": 602
              }
            ],
            "declare": false,
            "start": 550,
            "end": 603
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
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 614
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 618,
                      "end": 635
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 617,
                    "end": 638
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 617,
                  "end": 638
                },
                "definite": false,
                "start": 612,
                "end": 638
              }
            ],
            "declare": false,
            "start": 608,
            "end": 639
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
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 650
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 654,
                      "end": 671
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 680
                        },
                        "start": 672,
                        "end": 681
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 682,
                          "end": 693
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 694,
                          "end": 701
                        },
                        "start": 682,
                        "end": 701
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 706,
                          "end": 710
                        },
                        "start": 702,
                        "end": 711
                      }
                    ],
                    "selfClosing": true,
                    "start": 653,
                    "end": 714
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 653,
                  "end": 714
                },
                "definite": false,
                "start": 648,
                "end": 714
              }
            ],
            "declare": false,
            "start": 644,
            "end": 715
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
                  "name": "a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 726
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 730,
                      "end": 747
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 752,
                          "end": 756
                        },
                        "start": 748,
                        "end": 757
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 758,
                          "end": 769
                        },
                        "value": null,
                        "start": 758,
                        "end": 769
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 774,
                          "end": 778
                        },
                        "start": 770,
                        "end": 779
                      }
                    ],
                    "selfClosing": true,
                    "start": 729,
                    "end": 782
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 729,
                  "end": 782
                },
                "definite": false,
                "start": 724,
                "end": 782
              }
            ],
            "declare": false,
            "start": 720,
            "end": 783
          }
        ],
        "start": 359,
        "end": 785
      },
      "expression": false,
      "start": 271,
      "end": 785
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Link",
        "optional": false,
        "typeAnnotation": null,
        "start": 804,
        "end": 808
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 810
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 809,
            "end": 810
          }
        ],
        "start": 808,
        "end": 811
      },
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
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 820
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 828,
                                "end": 829
                              },
                              "typeArguments": null,
                              "start": 828,
                              "end": 829
                            },
                            "start": 826,
                            "end": 829
                          },
                          "start": 823,
                          "end": 829
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 832,
                          "end": 836
                        },
                        "start": 830,
                        "end": 836
                      },
                      "start": 822,
                      "end": 836
                    },
                    "start": 820,
                    "end": 836
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 816,
                  "end": 836
                }
              ],
              "start": 815,
              "end": 837
            },
            "start": 813,
            "end": 837
          },
          "start": 812,
          "end": 837
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
              "start": 840,
              "end": 843
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 851
            },
            "start": 840,
            "end": 851
          },
          "typeArguments": null,
          "start": 840,
          "end": 851
        },
        "start": 838,
        "end": 851
      },
      "body": null,
      "expression": false,
      "start": 787,
      "end": 852
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Link",
        "optional": false,
        "typeAnnotation": null,
        "start": 870,
        "end": 874
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 875,
              "end": 876
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 875,
            "end": 876
          }
        ],
        "start": 874,
        "end": 877
      },
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
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 882,
                    "end": 886
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 894,
                                "end": 895
                              },
                              "typeArguments": null,
                              "start": 894,
                              "end": 895
                            },
                            "start": 893,
                            "end": 895
                          },
                          "start": 889,
                          "end": 895
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 903,
                              "end": 909
                            },
                            "start": 901,
                            "end": 909
                          },
                          "start": 897,
                          "end": 909
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 912,
                          "end": 916
                        },
                        "start": 910,
                        "end": 916
                      },
                      "start": 888,
                      "end": 916
                    },
                    "start": 886,
                    "end": 916
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 882,
                  "end": 916
                }
              ],
              "start": 881,
              "end": 917
            },
            "start": 879,
            "end": 917
          },
          "start": 878,
          "end": 917
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
              "start": 920,
              "end": 923
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 931
            },
            "start": 920,
            "end": 931
          },
          "typeArguments": null,
          "start": 920,
          "end": 931
        },
        "start": 918,
        "end": 931
      },
      "body": null,
      "expression": false,
      "start": 853,
      "end": 932
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createLink",
        "optional": false,
        "typeAnnotation": null,
        "start": 942,
        "end": 952
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSNumberKeyword",
                      "start": 963,
                      "end": 969
                    },
                    "start": 961,
                    "end": 969
                  },
                  "start": 960,
                  "end": 969
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 972,
                  "end": 976
                },
                "start": 970,
                "end": 976
              },
              "start": 959,
              "end": 976
            },
            "start": 957,
            "end": 976
          },
          "start": 953,
          "end": 976
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 988,
                  "end": 989
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "start": 993,
                      "end": 997
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "start": 998,
                          "end": 1002
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1004,
                            "end": 1008
                          },
                          "start": 1003,
                          "end": 1009
                        },
                        "start": 998,
                        "end": 1009
                      }
                    ],
                    "selfClosing": true,
                    "start": 992,
                    "end": 1012
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 992,
                  "end": 1012
                },
                "definite": false,
                "start": 988,
                "end": 1012
              }
            ],
            "declare": false,
            "start": 984,
            "end": 1012
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
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1023
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "start": 1027,
                      "end": 1031
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "start": 1032,
                          "end": 1036
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
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
                                    "type": "TSNumberKeyword",
                                    "start": 1041,
                                    "end": 1047
                                  },
                                  "start": 1040,
                                  "end": 1047
                                },
                                "start": 1039,
                                "end": 1047
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1051,
                                    "end": 1057
                                  },
                                  "start": 1050,
                                  "end": 1057
                                },
                                "start": 1049,
                                "end": 1057
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 1060,
                              "end": 1062
                            },
                            "id": null,
                            "generator": false,
                            "start": 1038,
                            "end": 1062
                          },
                          "start": 1037,
                          "end": 1063
                        },
                        "start": 1032,
                        "end": 1063
                      }
                    ],
                    "selfClosing": true,
                    "start": 1026,
                    "end": 1066
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 1026,
                  "end": 1066
                },
                "definite": false,
                "start": 1021,
                "end": 1066
              }
            ],
            "declare": false,
            "start": 1017,
            "end": 1067
          }
        ],
        "start": 978,
        "end": 1069
      },
      "expression": false,
      "start": 933,
      "end": 1069
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1069
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
    "start": 33,
    "end": 40,
    "range": [
      33,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49,
    "range": [
      41,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "OverloadComponent",
    "start": 50,
    "end": 67,
    "range": [
      50,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 74,
    "end": 77,
    "range": [
      74,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 78,
    "end": 85,
    "range": [
      78,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 87,
    "end": 94,
    "range": [
      87,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 95,
    "end": 103,
    "range": [
      95,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "OverloadComponent",
    "start": 104,
    "end": 121,
    "range": [
      104,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 125,
    "end": 129,
    "range": [
      125,
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
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 142,
    "end": 148,
    "range": [
      142,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "String",
    "value": "\"ignore-prop\"",
    "start": 150,
    "end": 163,
    "range": [
      150,
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
    "type": "Identifier",
    "value": "boolean",
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 176,
    "end": 179,
    "range": [
      176,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 180,
    "end": 187,
    "range": [
      180,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 189,
    "end": 196,
    "range": [
      189,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 197,
    "end": 205,
    "range": [
      197,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "OverloadComponent",
    "start": 206,
    "end": 223,
    "range": [
      206,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 230,
    "end": 234,
    "range": [
      230,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 251,
    "end": 254,
    "range": [
      251,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 255,
    "end": 262,
    "range": [
      255,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 271,
    "end": 279,
    "range": [
      271,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 280,
    "end": 283,
    "range": [
      280,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 286,
    "end": 293,
    "range": [
      286,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 298,
    "end": 304,
    "range": [
      298,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 309,
    "end": 316,
    "range": [
      309,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 321,
    "end": 328,
    "range": [
      321,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 332,
    "end": 338,
    "range": [
      332,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 341,
    "end": 345,
    "range": [
      341,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 350,
    "end": 354,
    "range": [
      350,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 365,
    "end": 368,
    "range": [
      365,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 369,
    "end": 371,
    "range": [
      369,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 375,
    "end": 392,
    "range": [
      375,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 394,
    "end": 397,
    "range": [
      394,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 397,
    "end": 401,
    "range": [
      397,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 405,
    "end": 412,
    "range": [
      405,
      412
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 413,
    "end": 424,
    "range": [
      413,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 433,
    "end": 436,
    "range": [
      433,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 437,
    "end": 439,
    "range": [
      437,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 443,
    "end": 460,
    "range": [
      443,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 462,
    "end": 465,
    "range": [
      462,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 465,
    "end": 469,
    "range": [
      465,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-pro",
    "start": 471,
    "end": 481,
    "range": [
      471,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hello world\"",
    "start": 482,
    "end": 495,
    "range": [
      482,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 504,
    "end": 507,
    "range": [
      504,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 508,
    "end": 510,
    "range": [
      508,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 514,
    "end": 531,
    "range": [
      514,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 533,
    "end": 536,
    "range": [
      533,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 536,
    "end": 540,
    "range": [
      536,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 550,
    "end": 553,
    "range": [
      550,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 554,
    "end": 556,
    "range": [
      554,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 560,
    "end": 577,
    "range": [
      560,
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
    "value": "arg1",
    "start": 582,
    "end": 586,
    "range": [
      582,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 588,
    "end": 599,
    "range": [
      588,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
    "end": 602,
    "range": [
      601,
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
    "type": "Keyword",
    "value": "let",
    "start": 608,
    "end": 611,
    "range": [
      608,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 612,
    "end": 614,
    "range": [
      612,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 618,
    "end": 635,
    "range": [
      618,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 644,
    "end": 647,
    "range": [
      644,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 648,
    "end": 650,
    "range": [
      648,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 654,
    "end": 671,
    "range": [
      654,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 673,
    "end": 676,
    "range": [
      673,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 676,
    "end": 680,
    "range": [
      676,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 682,
    "end": 693,
    "range": [
      682,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 694,
    "end": 701,
    "range": [
      694,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 703,
    "end": 706,
    "range": [
      703,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 706,
    "end": 710,
    "range": [
      706,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 720,
    "end": 723,
    "range": [
      720,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 724,
    "end": 726,
    "range": [
      724,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 730,
    "end": 747,
    "range": [
      730,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 749,
    "end": 752,
    "range": [
      749,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 752,
    "end": 756,
    "range": [
      752,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 758,
    "end": 769,
    "range": [
      758,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 771,
    "end": 774,
    "range": [
      771,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 774,
    "end": 778,
    "range": [
      774,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 787,
    "end": 794,
    "range": [
      787,
      794
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 795,
    "end": 803,
    "range": [
      795,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "Link",
    "start": 804,
    "end": 808,
    "range": [
      804,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 816,
    "end": 820,
    "range": [
      816,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 823,
    "end": 826,
    "range": [
      823,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 830,
    "end": 832,
    "range": [
      830,
      832
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 832,
    "end": 836,
    "range": [
      832,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 840,
    "end": 843,
    "range": [
      840,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 844,
    "end": 851,
    "range": [
      844,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 853,
    "end": 860,
    "range": [
      853,
      860
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 861,
    "end": 869,
    "range": [
      861,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "Link",
    "start": 870,
    "end": 874,
    "range": [
      870,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 882,
    "end": 886,
    "range": [
      882,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 889,
    "end": 893,
    "range": [
      889,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 897,
    "end": 901,
    "range": [
      897,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 903,
    "end": 909,
    "range": [
      903,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 910,
    "end": 912,
    "range": [
      910,
      912
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 912,
    "end": 916,
    "range": [
      912,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 920,
    "end": 923,
    "range": [
      920,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 924,
    "end": 931,
    "range": [
      924,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 933,
    "end": 941,
    "range": [
      933,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "createLink",
    "start": 942,
    "end": 952,
    "range": [
      942,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 953,
    "end": 957,
    "range": [
      953,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 963,
    "end": 969,
    "range": [
      963,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 970,
    "end": 972,
    "range": [
      970,
      972
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 972,
    "end": 976,
    "range": [
      972,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 984,
    "end": 987,
    "range": [
      984,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 993,
    "end": 997,
    "range": [
      993,
      997
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 998,
    "end": 1002,
    "range": [
      998,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
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
    "type": "Identifier",
    "value": "func",
    "start": 1004,
    "end": 1008,
    "range": [
      1004,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1017,
    "end": 1020,
    "range": [
      1017,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 1021,
    "end": 1023,
    "range": [
      1021,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 1027,
    "end": 1031,
    "range": [
      1027,
      1031
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 1032,
    "end": 1036,
    "range": [
      1032,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1041,
    "end": 1047,
    "range": [
      1041,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1051,
    "end": 1057,
    "range": [
      1051,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1058,
    "end": 1060,
    "range": [
      1058,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  }
]
```
