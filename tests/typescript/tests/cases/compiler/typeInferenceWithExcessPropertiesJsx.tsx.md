__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 566,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 45,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 60,
        "end": 76,
        "expression": {
          "type": "Literal",
          "start": 68,
          "end": 75,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 79,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 100,
        "decorators": [],
        "name": "TranslationEntry",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 103,
        "end": 132,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 130,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 129,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 115,
                "end": 129,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 115,
                    "end": 117,
                    "elementTypes": []
                  },
                  {
                    "type": "TSTupleType",
                    "start": 120,
                    "end": 129,
                    "elementTypes": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 121,
                        "end": 128
                      }
                    ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 133,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 150,
        "decorators": [],
        "name": "Translations",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 153,
        "end": 203,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 159,
            "end": 181,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 162,
                "end": 180,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 164,
                    "end": 178,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 168,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 168,
                      "end": 178,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 170,
                        "end": 178,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 171,
                            "end": 177
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 186,
            "end": 201,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 189,
                "end": 201,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 191,
                    "end": 199,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 195,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 195,
                      "end": 199,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 197,
                        "end": 199,
                        "elementTypes": []
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 204,
      "end": 395,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 215,
        "decorators": [],
        "name": "TProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 215,
        "end": 247,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 246,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 221,
              "decorators": [],
              "name": "Entry",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 230,
              "end": 246,
              "typeName": {
                "type": "Identifier",
                "start": 230,
                "end": 246,
                "decorators": [],
                "name": "TranslationEntry",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 250,
        "end": 394,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 250,
            "end": 320,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 256,
                "end": 318,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 275,
                  "decorators": [],
                  "name": "getTranslationEntry",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 275,
                  "end": 317,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 277,
                    "end": 317,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 278,
                        "end": 307,
                        "decorators": [],
                        "name": "allTranslations",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 293,
                          "end": 307,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 295,
                            "end": 307,
                            "typeName": {
                              "type": "Identifier",
                              "start": 295,
                              "end": 307,
                              "decorators": [],
                              "name": "Translations",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 309,
                      "end": 317,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 312,
                        "end": 317,
                        "typeName": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 317,
                          "decorators": [],
                          "name": "Entry",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSConditionalType",
            "start": 324,
            "end": 393,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 324,
              "end": 337,
              "objectType": {
                "type": "TSTypeReference",
                "start": 324,
                "end": 329,
                "typeName": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 329,
                  "decorators": [],
                  "name": "Entry",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 330,
                "end": 336,
                "literal": {
                  "type": "Literal",
                  "start": 330,
                  "end": 336,
                  "value": "args",
                  "raw": "\"args\""
                }
              }
            },
            "extendsType": {
              "type": "TSTupleType",
              "start": 346,
              "end": 355,
              "elementTypes": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 347,
                  "end": 354
                }
              ]
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "start": 358,
              "end": 388,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 364,
                  "end": 386,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 368,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 368,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 370,
                      "end": 386,
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 370,
                        "end": 383,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 370,
                          "end": 375,
                          "typeName": {
                            "type": "Identifier",
                            "start": 370,
                            "end": 375,
                            "decorators": [],
                            "name": "Entry",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 376,
                          "end": 382,
                          "literal": {
                            "type": "Literal",
                            "start": 376,
                            "end": 382,
                            "value": "args",
                            "raw": "\"args\""
                          }
                        }
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 384,
                        "end": 385,
                        "literal": {
                          "type": "Literal",
                          "start": 384,
                          "end": 385,
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "start": 391,
              "end": 393,
              "members": []
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 397,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 415,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 415,
        "end": 447,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 416,
            "end": 446,
            "name": {
              "type": "Identifier",
              "start": 416,
              "end": 421,
              "decorators": [],
              "name": "Entry",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 430,
              "end": 446,
              "typeName": {
                "type": "Identifier",
                "start": 430,
                "end": 446,
                "decorators": [],
                "name": "TranslationEntry",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 453,
          "end": 473,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 458,
            "end": 473,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 460,
              "end": 473,
              "typeName": {
                "type": "Identifier",
                "start": 460,
                "end": 466,
                "decorators": [],
                "name": "TProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 466,
                "end": 473,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 467,
                    "end": 472,
                    "typeName": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 472,
                      "decorators": [],
                      "name": "Entry",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 475,
        "end": 488,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 477,
          "end": 488,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 477,
            "end": 488,
            "left": {
              "type": "Identifier",
              "start": 477,
              "end": 480,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 481,
              "end": 488,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 491,
      "end": 566,
      "expression": {
        "type": "JSXElement",
        "start": 491,
        "end": 566,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 491,
          "end": 566,
          "name": {
            "type": "JSXIdentifier",
            "start": 492,
            "end": 493,
            "name": "T"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 494,
              "end": 554,
              "name": {
                "type": "JSXIdentifier",
                "start": 494,
                "end": 513,
                "name": "getTranslationEntry"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 514,
                "end": 554,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 515,
                  "end": 553,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 516,
                      "end": 531,
                      "decorators": [],
                      "name": "allTranslations",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "start": 536,
                    "end": 553,
                    "object": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 551,
                      "decorators": [],
                      "name": "allTranslations",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 553,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "id": null,
                  "generator": false
                }
              }
            },
            {
              "type": "JSXAttribute",
              "start": 555,
              "end": 563,
              "name": {
                "type": "JSXIdentifier",
                "start": 555,
                "end": 559,
                "name": "args"
              },
              "value": {
                "type": "Literal",
                "start": 560,
                "end": 563,
                "value": "a",
                "raw": "\"a\""
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
