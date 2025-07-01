__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 74
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 81
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 83,
                    "end": 86
                  },
                  "start": 83,
                  "end": 86
                },
                "start": 81,
                "end": 86
              },
              "accessibility": null,
              "static": false,
              "start": 77,
              "end": 86
            }
          ],
          "start": 75,
          "end": 88
        },
        "declare": false,
        "start": 63,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 56,
      "end": 88
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 107
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 114
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 116,
                    "end": 119
                  },
                  "start": 116,
                  "end": 119
                },
                "start": 114,
                "end": 119
              },
              "accessibility": null,
              "static": false,
              "start": 110,
              "end": 119
            }
          ],
          "start": 108,
          "end": 121
        },
        "declare": false,
        "start": 96,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 89,
      "end": 121
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AB",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 136
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "typeArguments": null,
              "start": 139,
              "end": 140
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "typeArguments": null,
              "start": 143,
              "end": 144
            }
          ],
          "start": 139,
          "end": 144
        },
        "declare": false,
        "start": 129,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 122,
      "end": 144
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
            "name": "itemId",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 158
          },
          "init": {
            "type": "Literal",
            "value": "some-id",
            "raw": "'some-id'",
            "start": 161,
            "end": 170
          },
          "definite": false,
          "start": 152,
          "end": 170
        }
      ],
      "declare": false,
      "start": 146,
      "end": 170
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
            "name": "items",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 223,
                            "end": 229
                          },
                          "start": 221,
                          "end": 229
                        },
                        "start": 219,
                        "end": 229
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 232,
                          "end": 234
                        },
                        "typeArguments": null,
                        "start": 232,
                        "end": 234
                      },
                      "start": 230,
                      "end": 234
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 218,
                    "end": 234
                  }
                ],
                "start": 216,
                "end": 236
              },
              "start": 214,
              "end": 236
            },
            "start": 209,
            "end": 236
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 239,
            "end": 241
          },
          "definite": false,
          "start": 209,
          "end": 241
        }
      ],
      "declare": false,
      "start": 203,
      "end": 241
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itemId",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 257
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itemOk1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 267
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 250,
                "end": 267
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 269
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 277
          },
          "definite": false,
          "start": 248,
          "end": 277
        }
      ],
      "declare": false,
      "start": 242,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "itemOk1",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 292
        },
        "prefix": true,
        "start": 278,
        "end": 292
      },
      "directive": null,
      "start": 278,
      "end": 292
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjWithItems",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 356
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 368
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 375,
                            "end": 381
                          },
                          "start": 373,
                          "end": 381
                        },
                        "start": 372,
                        "end": 381
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 386
                        },
                        "typeArguments": null,
                        "start": 384,
                        "end": 386
                      },
                      "start": 382,
                      "end": 386
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 371,
                    "end": 386
                  }
                ],
                "start": 370,
                "end": 387
              },
              "start": 368,
              "end": 387
            },
            "accessibility": null,
            "static": false,
            "start": 363,
            "end": 387
          }
        ],
        "start": 357,
        "end": 389
      },
      "declare": false,
      "start": 334,
      "end": 389
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
            "name": "objWithItems",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjWithItems",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 422
                },
                "typeArguments": null,
                "start": 410,
                "end": 422
              },
              "start": 408,
              "end": 422
            },
            "start": 396,
            "end": 422
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
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 432
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 434,
                  "end": 436
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 427,
                "end": 436
              }
            ],
            "start": 425,
            "end": 437
          },
          "definite": false,
          "start": 396,
          "end": 437
        }
      ],
      "declare": false,
      "start": 390,
      "end": 437
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
            "name": "itemOk2",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 452
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithItems",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 467
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 473
              },
              "optional": false,
              "computed": false,
              "start": 455,
              "end": 473
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "itemId",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 480
            },
            "optional": false,
            "computed": true,
            "start": 455,
            "end": 481
          },
          "definite": false,
          "start": 445,
          "end": 481
        }
      ],
      "declare": false,
      "start": 439,
      "end": 481
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "itemOk2",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 496
        },
        "prefix": true,
        "start": 482,
        "end": 496
      },
      "directive": null,
      "start": 482,
      "end": 496
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 523
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "itemId",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 528,
                          "end": 534
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "itemWithTSError",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 537,
                          "end": 552
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 527,
                        "end": 552
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 554
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 557,
                    "end": 559
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 559
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 518,
                "end": 559
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 604
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithItems",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 619
          },
          "definite": false,
          "start": 512,
          "end": 619
        }
      ],
      "declare": false,
      "start": 506,
      "end": 619
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "itemWithTSError",
          "optional": false,
          "typeAnnotation": null,
          "start": 686,
          "end": 701
        },
        "prefix": true,
        "start": 679,
        "end": 701
      },
      "directive": null,
      "start": 679,
      "end": 701
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 871
}
```
