__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 871,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 88,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 63,
        "end": 88,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 75,
          "end": 88,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 77,
              "end": 86,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 81,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 83,
                  "end": 86,
                  "literal": {
                    "type": "Literal",
                    "start": 83,
                    "end": 86,
                    "value": "a",
                    "raw": "'a'"
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 89,
      "end": 121,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 96,
        "end": 121,
        "id": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 108,
          "end": 121,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 110,
              "end": 119,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 110,
                "end": 114,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 114,
                "end": 119,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 116,
                  "end": 119,
                  "literal": {
                    "type": "Literal",
                    "start": 116,
                    "end": 119,
                    "value": "b",
                    "raw": "'b'"
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 122,
      "end": 144,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 129,
        "end": 144,
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 136,
          "name": "AB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 139,
          "end": 144,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 139,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 143,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "name": "itemId",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 161,
            "end": 170,
            "value": "some-id",
            "raw": "'some-id'"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 236,
            "name": "items",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 236,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 216,
                "end": 236,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 218,
                    "end": 234,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 219,
                        "end": 229,
                        "name": "id",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 221,
                          "end": 229,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 223,
                            "end": 229
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 230,
                      "end": 234,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 232,
                        "end": 234,
                        "typeName": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 234,
                          "name": "AB",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 239,
            "end": 241,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 277,
          "id": {
            "type": "ObjectPattern",
            "start": 248,
            "end": 269,
            "properties": [
              {
                "type": "Property",
                "start": 250,
                "end": 267,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 257,
                  "name": "itemId",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 267,
                  "name": "itemOk1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 272,
            "end": 277,
            "name": "items",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 292,
      "expression": {
        "type": "UnaryExpression",
        "start": 278,
        "end": 292,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 285,
          "end": 292,
          "name": "itemOk1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 334,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 356,
        "name": "ObjWithItems",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 357,
        "end": 389,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 363,
            "end": 387,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 368,
              "name": "items",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 387,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 370,
                "end": 387,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 371,
                    "end": 386,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 372,
                        "end": 381,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 373,
                          "end": 381,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 375,
                            "end": 381
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 386,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 384,
                        "end": 386,
                        "typeName": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 386,
                          "name": "AB",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 422,
            "name": "objWithItems",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 422,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 410,
                "end": 422,
                "typeName": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 422,
                  "name": "ObjWithItems",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 425,
            "end": 437,
            "properties": [
              {
                "type": "Property",
                "start": 427,
                "end": 436,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 432,
                  "name": "items",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 434,
                  "end": 436,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 481,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 452,
            "name": "itemOk2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 455,
            "end": 481,
            "object": {
              "type": "MemberExpression",
              "start": 455,
              "end": 473,
              "object": {
                "type": "Identifier",
                "start": 455,
                "end": 467,
                "name": "objWithItems",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 468,
                "end": 473,
                "name": "items",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 474,
              "end": 480,
              "name": "itemId",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 482,
      "end": 496,
      "expression": {
        "type": "UnaryExpression",
        "start": 482,
        "end": 496,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 489,
          "end": 496,
          "name": "itemOk2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 506,
      "end": 619,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 619,
          "id": {
            "type": "ObjectPattern",
            "start": 512,
            "end": 604,
            "properties": [
              {
                "type": "Property",
                "start": 518,
                "end": 559,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 523,
                  "name": "items",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 525,
                  "end": 559,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 525,
                    "end": 554,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 527,
                        "end": 552,
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "key": {
                          "type": "Identifier",
                          "start": 528,
                          "end": 534,
                          "name": "itemId",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 552,
                          "name": "itemWithTSError",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 557,
                    "end": 559,
                    "properties": []
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 607,
            "end": 619,
            "name": "objWithItems",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 679,
      "end": 701,
      "expression": {
        "type": "UnaryExpression",
        "start": 679,
        "end": 701,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 686,
          "end": 701,
          "name": "itemWithTSError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
