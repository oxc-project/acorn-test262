__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1402,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 81,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 81,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 65,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 79,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 162,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 138,
        "end": 162,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 144,
            "end": 160,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 156,
              "decorators": [],
              "name": "internalProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 159,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 103,
        "decorators": [],
        "name": "MyComp",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 115,
        "end": 130,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 115,
          "end": 120,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 121,
          "end": 130,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 130,
        "end": 137,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 131,
            "end": 132,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 134,
            "end": 136,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 105,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 172,
            "end": 202,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 172,
              "end": 202,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 186,
                  "end": 192,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 186,
                    "end": 187,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 188,
                    "end": 192,
                    "expression": {
                      "type": "Literal",
                      "start": 189,
                      "end": 191,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 193,
                  "end": 199,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 193,
                    "end": 194,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 195,
                    "end": 199,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 173,
                "end": 179,
                "name": "MyComp"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 179,
                "end": 185,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 180,
                    "end": 184,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 184,
                      "decorators": [],
                      "name": "Prop",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 211,
      "end": 253,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 211,
        "end": 252,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 215,
          "end": 252,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 243,
            "end": 252,
            "name": {
              "type": "JSXIdentifier",
              "start": 245,
              "end": 251,
              "name": "MyComp"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 215,
            "end": 243,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 229,
                "end": 235,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 229,
                  "end": 230,
                  "name": "a"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 231,
                  "end": 235,
                  "expression": {
                    "type": "Literal",
                    "start": 232,
                    "end": 234,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 236,
                "end": 242,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 236,
                  "end": 237,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 242,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 216,
              "end": 222,
              "name": "MyComp"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 222,
              "end": 228,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 223,
                  "end": 227,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 227,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 296,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 261,
        "end": 295,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 261,
          "end": 262,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 265,
          "end": 295,
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 265,
            "end": 295,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 279,
                "end": 285,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 279,
                  "end": 280,
                  "name": "a"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 281,
                  "end": 285,
                  "expression": {
                    "type": "Literal",
                    "start": 282,
                    "end": 284,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 286,
                "end": 292,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 286,
                  "end": 287,
                  "name": "b"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 288,
                  "end": 292,
                  "expression": {
                    "type": "Literal",
                    "start": 289,
                    "end": 291,
                    "raw": "20",
                    "value": 20,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 266,
              "end": 272,
              "name": "MyComp"
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 272,
              "end": 278,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 273,
                  "end": 277,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 277,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 307,
      "end": 349,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 307,
        "end": 348,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 307,
          "end": 308,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 311,
          "end": 348,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 339,
            "end": 348,
            "name": {
              "type": "JSXIdentifier",
              "start": 341,
              "end": 347,
              "name": "MyComp"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 311,
            "end": 339,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 325,
                "end": 331,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 325,
                  "end": 326,
                  "name": "a"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 327,
                  "end": 331,
                  "expression": {
                    "type": "Literal",
                    "start": 328,
                    "end": 330,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 332,
                "end": 338,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 332,
                  "end": 333,
                  "name": "b"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 334,
                  "end": 338,
                  "expression": {
                    "type": "Literal",
                    "start": 335,
                    "end": 337,
                    "raw": "20",
                    "value": 20,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 312,
              "end": 318,
              "name": "MyComp"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 318,
              "end": 324,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 319,
                  "end": 323,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 323,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 360,
      "end": 401,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 360,
        "end": 400,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 364,
          "end": 400,
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 364,
            "end": 400,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 384,
                "end": 390,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 384,
                  "end": 385,
                  "name": "a"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 386,
                  "end": 390,
                  "expression": {
                    "type": "Literal",
                    "start": 387,
                    "end": 389,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 391,
                "end": 397,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 391,
                  "end": 392,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 393,
                  "end": 397,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 365,
              "end": 371,
              "name": "MyComp"
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 371,
              "end": 383,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 372,
                  "end": 376,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 376,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 378,
                  "end": 382,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 382,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 460,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 412,
        "end": 459,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 412,
          "end": 413,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 416,
          "end": 459,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 450,
            "end": 459,
            "name": {
              "type": "JSXIdentifier",
              "start": 452,
              "end": 458,
              "name": "MyComp"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 416,
            "end": 450,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 436,
                "end": 442,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 436,
                  "end": 437,
                  "name": "a"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 438,
                  "end": 442,
                  "expression": {
                    "type": "Literal",
                    "start": 439,
                    "end": 441,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 443,
                "end": 449,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 443,
                  "end": 444,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 445,
                  "end": 449,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 417,
              "end": 423,
              "name": "MyComp"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 423,
              "end": 435,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 424,
                  "end": 428,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 428,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 430,
                  "end": 434,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 434,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 471,
      "end": 502,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 471,
        "end": 501,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 471,
          "end": 472,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 475,
          "end": 501,
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 475,
            "end": 501,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 485,
                "end": 491,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 485,
                  "end": 486,
                  "name": "a"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 487,
                  "end": 491,
                  "expression": {
                    "type": "Literal",
                    "start": 488,
                    "end": 490,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 492,
                "end": 498,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 492,
                  "end": 493,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 494,
                  "end": 498,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 476,
              "end": 482,
              "name": "MyComp"
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 482,
              "end": 484,
              "params": []
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 551,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 513,
        "end": 550,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 517,
          "end": 550,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 541,
            "end": 550,
            "name": {
              "type": "JSXIdentifier",
              "start": 543,
              "end": 549,
              "name": "MyComp"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 517,
            "end": 541,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 527,
                "end": 533,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 527,
                  "end": 528,
                  "name": "a"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 529,
                  "end": 533,
                  "expression": {
                    "type": "Literal",
                    "start": 530,
                    "end": 532,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 534,
                "end": 540,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 534,
                  "end": 535,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 536,
                  "end": 540,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 518,
              "end": 524,
              "name": "MyComp"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 524,
              "end": 526,
              "params": []
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 562,
      "end": 579,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 562,
        "end": 579,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 562,
          "end": 563,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 565,
          "end": 579,
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 565,
            "end": 579,
            "attributes": [],
            "name": {
              "type": "JSXIdentifier",
              "start": 566,
              "end": 572,
              "name": "MyComp"
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 572,
              "end": 576,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 573,
                  "end": 575,
                  "members": []
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 587,
      "end": 611,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 587,
        "end": 611,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 587,
          "end": 588,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 590,
          "end": 611,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 602,
            "end": 611,
            "name": {
              "type": "JSXIdentifier",
              "start": 604,
              "end": 610,
              "name": "MyComp"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 590,
            "end": 602,
            "attributes": [],
            "name": {
              "type": "JSXIdentifier",
              "start": 591,
              "end": 597,
              "name": "MyComp"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 597,
              "end": 601,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 598,
                  "end": 600,
                  "members": []
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 619,
      "end": 741,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 711,
        "end": 741,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 717,
            "end": 739,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 717,
              "end": 729,
              "decorators": [],
              "name": "internalProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 729,
              "end": 738,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 731,
                "end": 738,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 732,
                    "end": 733,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 732,
                      "end": 733,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 735,
                    "end": 737,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 735,
                      "end": 737,
                      "decorators": [],
                      "name": "P2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 633,
        "end": 640,
        "decorators": [],
        "name": "MyComp2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 683,
        "end": 698,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 683,
          "end": 688,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 689,
          "end": 698,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 698,
        "end": 710,
        "params": [
          {
            "type": "TSIntersectionType",
            "start": 699,
            "end": 705,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 699,
                "end": 700,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 700,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 703,
                "end": 705,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 705,
                  "decorators": [],
                  "name": "P2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 707,
            "end": 709,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 640,
        "end": 674,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 641,
            "end": 664,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 651,
              "end": 664,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 653,
                  "end": 662,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 653,
                    "end": 654,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 654,
                    "end": 662,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 656,
                      "end": 662
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 641,
              "end": 642,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 666,
            "end": 673,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 671,
              "end": 673,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 666,
              "end": 668,
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 742,
      "end": 794,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 742,
        "end": 793,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 742,
          "end": 743,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 746,
          "end": 793,
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 746,
            "end": 793,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 779,
                "end": 784,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 779,
                  "end": 780,
                  "name": "a"
                },
                "value": {
                  "type": "Literal",
                  "start": 781,
                  "end": 784,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "JSXAttribute",
                "start": 785,
                "end": 790,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 785,
                  "end": 786,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 787,
                  "end": 790,
                  "raw": "\"b\"",
                  "value": "b",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 747,
              "end": 754,
              "name": "MyComp2"
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 754,
              "end": 778,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 755,
                  "end": 777,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 756,
                      "end": 766,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 756,
                        "end": 757,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 757,
                        "end": 765,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 759,
                          "end": 765
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 767,
                      "end": 776,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 767,
                        "end": 768,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 768,
                        "end": 776,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 770,
                          "end": 776
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 802,
      "end": 862,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 802,
        "end": 861,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 802,
          "end": 803,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 806,
          "end": 861,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 851,
            "end": 861,
            "name": {
              "type": "JSXIdentifier",
              "start": 853,
              "end": 860,
              "name": "MyComp2"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 806,
            "end": 851,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 839,
                "end": 844,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 839,
                  "end": 840,
                  "name": "a"
                },
                "value": {
                  "type": "Literal",
                  "start": 841,
                  "end": 844,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "JSXAttribute",
                "start": 845,
                "end": 850,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 845,
                  "end": 846,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 847,
                  "end": 850,
                  "raw": "\"b\"",
                  "value": "b",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 807,
              "end": 814,
              "name": "MyComp2"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 814,
              "end": 838,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 815,
                  "end": 837,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 816,
                      "end": 826,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 816,
                        "end": 817,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 817,
                        "end": 825,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 819,
                          "end": 825
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 827,
                      "end": 836,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 828,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 828,
                        "end": 836,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 830,
                          "end": 836
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 870,
      "end": 906,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 870,
        "end": 905,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 870,
          "end": 871,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 874,
          "end": 905,
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 874,
            "end": 905,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 889,
                "end": 895,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 889,
                  "end": 890,
                  "name": "a"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 891,
                  "end": 895,
                  "expression": {
                    "type": "Literal",
                    "start": 892,
                    "end": 894,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 896,
                "end": 902,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 896,
                  "end": 897,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 898,
                  "end": 902,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 875,
              "end": 882,
              "name": "MyComp2"
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 882,
              "end": 888,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 883,
                  "end": 887,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 887,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 917,
      "end": 961,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 917,
        "end": 960,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 917,
          "end": 918,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 921,
          "end": 960,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 950,
            "end": 960,
            "name": {
              "type": "JSXIdentifier",
              "start": 952,
              "end": 959,
              "name": "MyComp2"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 921,
            "end": 950,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 936,
                "end": 942,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 936,
                  "end": 937,
                  "name": "a"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 938,
                  "end": 942,
                  "expression": {
                    "type": "Literal",
                    "start": 939,
                    "end": 941,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 943,
                "end": 949,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 943,
                  "end": 944,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 945,
                  "end": 949,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 922,
              "end": 929,
              "name": "MyComp2"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 929,
              "end": 935,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 930,
                  "end": 934,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 930,
                    "end": 934,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 972,
      "end": 1028,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 972,
        "end": 1027,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 972,
          "end": 973,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 976,
          "end": 1027,
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 976,
            "end": 1027,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 1011,
                "end": 1017,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1011,
                  "end": 1012,
                  "name": "a"
                },
                "value": {
                  "type": "Literal",
                  "start": 1013,
                  "end": 1017,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "JSXAttribute",
                "start": 1018,
                "end": 1024,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1018,
                  "end": 1019,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 1020,
                  "end": 1024,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 977,
              "end": 984,
              "name": "MyComp2"
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 984,
              "end": 1010,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 985,
                  "end": 996,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 986,
                      "end": 995,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 986,
                        "end": 987,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 987,
                        "end": 995,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 989,
                          "end": 995
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 998,
                  "end": 1009,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 999,
                      "end": 1008,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 999,
                        "end": 1000,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1000,
                        "end": 1008,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1002,
                          "end": 1008
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1036,
      "end": 1100,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1036,
        "end": 1099,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1036,
          "end": 1037,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 1040,
          "end": 1099,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 1089,
            "end": 1099,
            "name": {
              "type": "JSXIdentifier",
              "start": 1091,
              "end": 1098,
              "name": "MyComp2"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 1040,
            "end": 1089,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 1075,
                "end": 1081,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1075,
                  "end": 1076,
                  "name": "a"
                },
                "value": {
                  "type": "Literal",
                  "start": 1077,
                  "end": 1081,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "JSXAttribute",
                "start": 1082,
                "end": 1088,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1082,
                  "end": 1083,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 1084,
                  "end": 1088,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 1041,
              "end": 1048,
              "name": "MyComp2"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1048,
              "end": 1074,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 1049,
                  "end": 1060,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1050,
                      "end": 1059,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1051,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1051,
                        "end": 1059,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1053,
                          "end": 1059
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1062,
                  "end": 1073,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1063,
                      "end": 1072,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1063,
                        "end": 1064,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1064,
                        "end": 1072,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1066,
                          "end": 1072
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1108,
      "end": 1170,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1108,
        "end": 1169,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1108,
          "end": 1109,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 1112,
          "end": 1169,
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 1112,
            "end": 1169,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 1153,
                "end": 1159,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1153,
                  "end": 1154,
                  "name": "a"
                },
                "value": {
                  "type": "Literal",
                  "start": 1155,
                  "end": 1159,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "JSXAttribute",
                "start": 1160,
                "end": 1166,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1160,
                  "end": 1161,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 1162,
                  "end": 1166,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 1113,
              "end": 1120,
              "name": "MyComp2"
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1120,
              "end": 1152,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 1121,
                  "end": 1132,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1122,
                      "end": 1131,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1122,
                        "end": 1123,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1123,
                        "end": 1131,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1125,
                          "end": 1131
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1134,
                  "end": 1145,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1135,
                      "end": 1144,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1135,
                        "end": 1136,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1136,
                        "end": 1144,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1138,
                          "end": 1144
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 1147,
                  "end": 1151,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1147,
                    "end": 1151,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1181,
      "end": 1251,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1181,
        "end": 1250,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1181,
          "end": 1182,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 1185,
          "end": 1250,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 1240,
            "end": 1250,
            "name": {
              "type": "JSXIdentifier",
              "start": 1242,
              "end": 1249,
              "name": "MyComp2"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 1185,
            "end": 1240,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 1226,
                "end": 1232,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1226,
                  "end": 1227,
                  "name": "a"
                },
                "value": {
                  "type": "Literal",
                  "start": 1228,
                  "end": 1232,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "JSXAttribute",
                "start": 1233,
                "end": 1239,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1233,
                  "end": 1234,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 1235,
                  "end": 1239,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 1186,
              "end": 1193,
              "name": "MyComp2"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1193,
              "end": 1225,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 1194,
                  "end": 1205,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1195,
                      "end": 1204,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1195,
                        "end": 1196,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1196,
                        "end": 1204,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1198,
                          "end": 1204
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1207,
                  "end": 1218,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1208,
                      "end": 1217,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1208,
                        "end": 1209,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1209,
                        "end": 1217,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1211,
                          "end": 1217
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 1220,
                  "end": 1224,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1220,
                    "end": 1224,
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1262,
      "end": 1318,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1262,
        "end": 1317,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1262,
          "end": 1263,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 1266,
          "end": 1317,
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 1266,
            "end": 1317,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 1301,
                "end": 1307,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1301,
                  "end": 1302,
                  "name": "a"
                },
                "value": {
                  "type": "Literal",
                  "start": 1303,
                  "end": 1307,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "JSXAttribute",
                "start": 1308,
                "end": 1314,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1308,
                  "end": 1309,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 1310,
                  "end": 1314,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 1267,
              "end": 1274,
              "name": "MyComp2"
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1274,
              "end": 1300,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 1275,
                  "end": 1286,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1276,
                      "end": 1285,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1276,
                        "end": 1277,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1277,
                        "end": 1285,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1279,
                          "end": 1285
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1288,
                  "end": 1299,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1289,
                      "end": 1298,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1289,
                        "end": 1290,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1290,
                        "end": 1298,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1292,
                          "end": 1298
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1329,
      "end": 1393,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1329,
        "end": 1392,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1329,
          "end": 1330,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 1333,
          "end": 1392,
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 1382,
            "end": 1392,
            "name": {
              "type": "JSXIdentifier",
              "start": 1384,
              "end": 1391,
              "name": "MyComp2"
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 1333,
            "end": 1382,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 1368,
                "end": 1374,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1368,
                  "end": 1369,
                  "name": "a"
                },
                "value": {
                  "type": "Literal",
                  "start": 1370,
                  "end": 1374,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "JSXAttribute",
                "start": 1375,
                "end": 1381,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1375,
                  "end": 1376,
                  "name": "b"
                },
                "value": {
                  "type": "Literal",
                  "start": 1377,
                  "end": 1381,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 1334,
              "end": 1341,
              "name": "MyComp2"
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1341,
              "end": 1367,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 1342,
                  "end": 1353,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1343,
                      "end": 1352,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1343,
                        "end": 1344,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1344,
                        "end": 1352,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1346,
                          "end": 1352
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1355,
                  "end": 1366,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1356,
                      "end": 1365,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1356,
                        "end": 1357,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1357,
                        "end": 1365,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1359,
                          "end": 1365
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
