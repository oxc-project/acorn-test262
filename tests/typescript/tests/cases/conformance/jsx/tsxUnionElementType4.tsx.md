__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 610,
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 131,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "RC1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 52,
        "end": 67,
        "object": {
          "type": "Identifier",
          "start": 52,
          "end": 57,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 58,
          "end": 67,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 67,
        "end": 85,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 68,
            "end": 80,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 69,
                "end": 79,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 79,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 73,
                    "end": 79
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 82,
            "end": 84,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 131,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 92,
            "end": 129,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 98,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 129,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 129,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 111,
                    "end": 123,
                    "argument": {
                      "type": "Literal",
                      "start": 118,
                      "end": 122,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 256,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 142,
        "decorators": [],
        "name": "RC2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 151,
        "end": 166,
        "object": {
          "type": "Identifier",
          "start": 151,
          "end": 156,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 157,
          "end": 166,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 166,
        "end": 185,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 167,
            "end": 180,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 169,
                "end": 178,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 170,
                  "end": 178,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 172,
                    "end": 178
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 182,
            "end": 184,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 186,
        "end": 256,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 229,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 198,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 198,
              "end": 229,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 201,
                "end": 229,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 211,
                    "end": 223,
                    "argument": {
                      "type": "Literal",
                      "start": 218,
                      "end": 222,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 234,
            "end": 254,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 248,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 248,
              "end": 254,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 251,
                "end": 254,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 345,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 267,
        "decorators": [],
        "name": "RC3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 276,
        "end": 291,
        "object": {
          "type": "Identifier",
          "start": 276,
          "end": 281,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 282,
          "end": 291,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 291,
        "end": 299,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 292,
            "end": 294,
            "members": []
          },
          {
            "type": "TSTypeLiteral",
            "start": 296,
            "end": 298,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 300,
        "end": 345,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 306,
            "end": 343,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 312,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 312,
              "end": 343,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 315,
                "end": 343,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 325,
                    "end": 337,
                    "argument": {
                      "type": "Literal",
                      "start": 332,
                      "end": 336,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 347,
      "end": 434,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 356,
        "decorators": [],
        "name": "RC4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 365,
        "end": 380,
        "object": {
          "type": "Identifier",
          "start": 365,
          "end": 370,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 371,
          "end": 380,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 380,
        "end": 388,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 381,
            "end": 383,
            "members": []
          },
          {
            "type": "TSTypeLiteral",
            "start": 385,
            "end": 387,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 389,
        "end": 434,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 395,
            "end": 432,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 401,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 401,
              "end": 432,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 404,
                "end": 432,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 414,
                    "end": 426,
                    "argument": {
                      "type": "Literal",
                      "start": 421,
                      "end": 425,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 436,
      "end": 460,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 440,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 440,
            "end": 446,
            "decorators": [],
            "name": "RCComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 449,
            "end": 459,
            "left": {
              "type": "Identifier",
              "start": 449,
              "end": 452,
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 456,
              "end": 459,
              "decorators": [],
              "name": "RC2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 461,
      "end": 490,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 489,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 476,
            "decorators": [],
            "name": "EmptyRCComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 479,
            "end": 489,
            "left": {
              "type": "Identifier",
              "start": 479,
              "end": 482,
              "decorators": [],
              "name": "RC3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 486,
              "end": 489,
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 519,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 505,
            "decorators": [],
            "name": "PartRCComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 508,
            "end": 518,
            "left": {
              "type": "Identifier",
              "start": 508,
              "end": 511,
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 515,
              "end": 518,
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 550,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 549,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 534,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 537,
            "end": 549,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 537,
              "end": 549,
              "name": {
                "type": "JSXIdentifier",
                "start": 538,
                "end": 544,
                "name": "RCComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 545,
                  "end": 546,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 545,
                    "end": 546,
                    "name": "x"
                  },
                  "value": null
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 551,
      "end": 580,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 580,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 556,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 559,
            "end": 580,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 559,
              "end": 580,
              "name": {
                "type": "JSXIdentifier",
                "start": 560,
                "end": 570,
                "name": "PartRCComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 571,
                  "end": 577,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 571,
                    "end": 572,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 573,
                    "end": 577,
                    "expression": {
                      "type": "Literal",
                      "start": 574,
                      "end": 576,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 581,
      "end": 610,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 609,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 586,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 589,
            "end": 609,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 589,
              "end": 609,
              "name": {
                "type": "JSXIdentifier",
                "start": 590,
                "end": 601,
                "name": "EmptyRCComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 602,
                  "end": 606,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 602,
                    "end": 606,
                    "name": "prop"
                  },
                  "value": null
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
