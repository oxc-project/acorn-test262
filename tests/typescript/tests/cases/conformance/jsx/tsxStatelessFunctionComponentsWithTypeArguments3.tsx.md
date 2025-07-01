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
