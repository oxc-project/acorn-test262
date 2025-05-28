__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 607,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "IData",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "MenuItemVariant",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 62,
              "end": 77,
              "typeName": {
                "type": "Identifier",
                "start": 62,
                "end": 77,
                "decorators": [],
                "name": "ListItemVariant",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "ListItemVariant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 103,
                  "decorators": [],
                  "name": "OneLine",
                  "optional": false,
                  "typeAnnotation": null
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
      "extends": [],
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
              "decorators": [],
              "name": "menuItemsVariant",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "MenuItemVariant",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "Menu",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "MenuItemVariant",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 203,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 203,
                "decorators": [],
                "name": "ListItemVariant",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "ListItemVariant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 229,
                  "decorators": [],
                  "name": "OneLine",
                  "optional": false,
                  "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 231,
          "end": 259,
          "decorators": [],
          "name": "data",
          "optional": false,
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
                "decorators": [],
                "name": "IData",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "MenuItemVariant",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 261,
        "end": 393,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 267,
            "end": 340,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 273,
                "end": 339,
                "id": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 288,
                  "decorators": [],
                  "name": "listItemVariant",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 312,
                      "decorators": [],
                      "name": "menuItemsVariant",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
                      "decorators": [],
                      "name": "ListItemVariant",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 339,
                      "decorators": [],
                      "name": "OneLine",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "definite": false
              }
            ],
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
                "name": {
                  "type": "JSXIdentifier",
                  "start": 353,
                  "end": 361,
                  "name": "ListItem"
                },
                "typeArguments": null,
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
                        "decorators": [],
                        "name": "listItemVariant",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 395,
      "end": 493,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 413,
        "decorators": [],
        "name": "IListItemData",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "ListItemVariant",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 443,
                        "end": 449,
                        "decorators": [],
                        "name": "Avatar",
                        "optional": false,
                        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "ListItemVariant",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 489,
                        "decorators": [],
                        "name": "OneLine",
                        "optional": false,
                        "typeAnnotation": null
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
        "decorators": [],
        "name": "ListItemVariant",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "OneLine",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Avatar",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 546,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 563,
        "decorators": [],
        "name": "ListItem",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 564,
          "end": 584,
          "decorators": [],
          "name": "_data",
          "optional": false,
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
                "decorators": [],
                "name": "IListItemData",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
