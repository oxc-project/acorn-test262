__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 608,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "IData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 103,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 53,
              "name": "MenuItemVariant",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 62,
              "end": 77,
              "typeName": {
                "type": "Identifier",
                "start": 62,
                "end": 77,
                "name": "ListItemVariant",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 80,
              "end": 103,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 80,
                "end": 103,
                "left": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 95,
                  "name": "ListItemVariant",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 103,
                  "name": "OneLine",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 105,
        "end": 148,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 111,
            "end": 146,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 127,
              "name": "menuItemsVariant",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 145,
                "typeName": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 145,
                  "name": "MenuItemVariant",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 393,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 163,
        "name": "Menu",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 231,
          "end": 259,
          "name": "data",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 259,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 237,
              "end": 259,
              "typeName": {
                "type": "Identifier",
                "start": 237,
                "end": 242,
                "name": "IData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 242,
                "end": 259,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 243,
                    "end": 258,
                    "typeName": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 258,
                      "name": "MenuItemVariant",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 261,
        "end": 393,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 267,
            "end": 340,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 273,
                "end": 339,
                "id": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 288,
                  "name": "listItemVariant",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 291,
                  "end": 339,
                  "left": {
                    "type": "MemberExpression",
                    "start": 291,
                    "end": 312,
                    "object": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 295,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 312,
                      "name": "menuItemsVariant",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "??",
                  "right": {
                    "type": "MemberExpression",
                    "start": 316,
                    "end": 339,
                    "object": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 331,
                      "name": "ListItemVariant",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 339,
                      "name": "OneLine",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 345,
            "end": 391,
            "argument": {
              "type": "JSXElement",
              "start": 352,
              "end": 390,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 352,
                "end": 390,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 362,
                    "end": 387,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 362,
                      "end": 369,
                      "name": "variant"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 370,
                      "end": 387,
                      "expression": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 386,
                        "name": "listItemVariant",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 353,
                  "end": 361,
                  "name": "ListItem"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 163,
        "end": 230,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 164,
            "end": 229,
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 179,
              "name": "MenuItemVariant",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 203,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 203,
                "name": "ListItemVariant",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 206,
              "end": 229,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 206,
                "end": 229,
                "left": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 221,
                  "name": "ListItemVariant",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 229,
                  "name": "OneLine",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 395,
      "end": 493,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 413,
        "name": "IListItemData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 416,
        "end": 492,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 416,
            "end": 452,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 418,
                "end": 450,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 425,
                  "name": "variant",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 425,
                  "end": 449,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 427,
                    "end": 449,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 427,
                      "end": 449,
                      "left": {
                        "type": "Identifier",
                        "start": 427,
                        "end": 442,
                        "name": "ListItemVariant",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 443,
                        "end": 449,
                        "name": "Avatar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 455,
            "end": 492,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 457,
                "end": 490,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 464,
                  "name": "variant",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 464,
                  "end": 489,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 466,
                    "end": 489,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 466,
                      "end": 489,
                      "left": {
                        "type": "Identifier",
                        "start": 466,
                        "end": 481,
                        "name": "ListItemVariant",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 489,
                        "name": "OneLine",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 495,
      "end": 544,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 515,
        "name": "ListItemVariant",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 522,
          "end": 529,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 529,
            "name": "OneLine",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 535,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 535,
            "end": 541,
            "name": "Avatar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 516,
        "end": 544,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 522,
            "end": 529,
            "id": {
              "type": "Identifier",
              "start": 522,
              "end": 529,
              "name": "OneLine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 535,
            "end": 541,
            "id": {
              "type": "Identifier",
              "start": 535,
              "end": 541,
              "name": "Avatar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 546,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 563,
        "name": "ListItem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 564,
          "end": 584,
          "name": "_data",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 569,
            "end": 584,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 571,
              "end": 584,
              "typeName": {
                "type": "Identifier",
                "start": 571,
                "end": 584,
                "name": "IListItemData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 586,
        "end": 607,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 592,
            "end": 604,
            "argument": {
              "type": "Literal",
              "start": 599,
              "end": 603,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
