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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 63,
        "end": 88,
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
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 81,
                "decorators": [],
                "name": "type",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "raw": "'a'",
                    "value": "a"
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 89,
      "end": 121,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 96,
        "end": 121,
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
              "key": {
                "type": "Identifier",
                "start": 110,
                "end": 114,
                "decorators": [],
                "name": "type",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "raw": "'b'",
                    "value": "b"
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 122,
      "end": 144,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 129,
        "end": 144,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 136,
          "decorators": [],
          "name": "AB",
          "optional": false
        },
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
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 143,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "decorators": [],
            "name": "itemId",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 161,
            "end": 170,
            "raw": "'some-id'",
            "value": "some-id"
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 236,
            "decorators": [],
            "name": "items",
            "optional": false,
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
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 221,
                          "end": 229,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 223,
                            "end": 229
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "AB",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 239,
            "end": 241,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 248,
            "end": 269,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 250,
                "end": 267,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 257,
                  "decorators": [],
                  "name": "itemId",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 267,
                  "decorators": [],
                  "name": "itemOk1",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 272,
            "end": 277,
            "decorators": [],
            "name": "items",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 292,
      "expression": {
        "type": "UnaryExpression",
        "start": 278,
        "end": 292,
        "argument": {
          "type": "Identifier",
          "start": 285,
          "end": 292,
          "decorators": [],
          "name": "itemOk1",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 334,
      "end": 389,
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
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 368,
              "decorators": [],
              "name": "items",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 373,
                          "end": 381,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 375,
                            "end": 381
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "AB",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 356,
        "decorators": [],
        "name": "ObjWithItems",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 422,
            "decorators": [],
            "name": "objWithItems",
            "optional": false,
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
                  "decorators": [],
                  "name": "ObjWithItems",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 432,
                  "decorators": [],
                  "name": "items",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 434,
                  "end": 436,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 452,
            "decorators": [],
            "name": "itemOk2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 455,
            "end": 481,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 455,
              "end": 473,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 455,
                "end": 467,
                "decorators": [],
                "name": "objWithItems",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 468,
                "end": 473,
                "decorators": [],
                "name": "items",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 474,
              "end": 480,
              "decorators": [],
              "name": "itemId",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 482,
      "end": 496,
      "expression": {
        "type": "UnaryExpression",
        "start": 482,
        "end": 496,
        "argument": {
          "type": "Identifier",
          "start": 489,
          "end": 496,
          "decorators": [],
          "name": "itemOk2",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 512,
            "end": 604,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 518,
                "end": 559,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 523,
                  "decorators": [],
                  "name": "items",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 525,
                  "end": 559,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 525,
                    "end": 554,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 527,
                        "end": 552,
                        "computed": true,
                        "key": {
                          "type": "Identifier",
                          "start": 528,
                          "end": 534,
                          "decorators": [],
                          "name": "itemId",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 552,
                          "decorators": [],
                          "name": "itemWithTSError",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 557,
                    "end": 559,
                    "properties": []
                  }
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 607,
            "end": 619,
            "decorators": [],
            "name": "objWithItems",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 679,
      "end": 701,
      "expression": {
        "type": "UnaryExpression",
        "start": 679,
        "end": 701,
        "argument": {
          "type": "Identifier",
          "start": 686,
          "end": 701,
          "decorators": [],
          "name": "itemWithTSError",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
