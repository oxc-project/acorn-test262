__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 687,
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
      "end": 465,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 440,
          "end": 464,
          "id": {
            "type": "Identifier",
            "start": 440,
            "end": 451,
            "decorators": [],
            "name": "EmptyRCComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 454,
            "end": 464,
            "left": {
              "type": "Identifier",
              "start": 454,
              "end": 457,
              "decorators": [],
              "name": "RC3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 461,
              "end": 464,
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
      "start": 466,
      "end": 494,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 493,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 480,
            "decorators": [],
            "name": "PartRCComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 483,
            "end": 493,
            "left": {
              "type": "Identifier",
              "start": 483,
              "end": 486,
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 490,
              "end": 493,
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
      "start": 495,
      "end": 519,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 505,
            "decorators": [],
            "name": "RCComp",
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
      "start": 526,
      "end": 552,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 551,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 534,
            "end": 551,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 534,
              "end": 551,
              "name": {
                "type": "JSXIdentifier",
                "start": 535,
                "end": 541,
                "name": "RCComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 542,
                  "end": 548,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 542,
                    "end": 543,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 544,
                    "end": 548,
                    "value": "Hi",
                    "raw": "\"Hi\""
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
      "start": 553,
      "end": 578,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 557,
          "end": 577,
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 559,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 562,
            "end": 577,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 562,
              "end": 577,
              "name": {
                "type": "JSXIdentifier",
                "start": 563,
                "end": 574,
                "name": "EmptyRCComp"
              },
              "typeArguments": null,
              "attributes": [],
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
      "start": 579,
      "end": 622,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 583,
          "end": 621,
          "id": {
            "type": "Identifier",
            "start": 583,
            "end": 585,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 588,
            "end": 621,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 588,
              "end": 621,
              "name": {
                "type": "JSXIdentifier",
                "start": 589,
                "end": 600,
                "name": "EmptyRCComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 601,
                  "end": 618,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 601,
                    "end": 610,
                    "name": "data-prop"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 611,
                    "end": 618,
                    "value": "hello",
                    "raw": "\"hello\""
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
      "start": 623,
      "end": 645,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 627,
          "end": 645,
          "id": {
            "type": "Identifier",
            "start": 627,
            "end": 628,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 631,
            "end": 645,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 631,
              "end": 645,
              "name": {
                "type": "JSXIdentifier",
                "start": 632,
                "end": 642,
                "name": "PartRCComp"
              },
              "typeArguments": null,
              "attributes": [],
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
      "start": 646,
      "end": 687,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 650,
          "end": 687,
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 651,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 654,
            "end": 687,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 654,
              "end": 687,
              "name": {
                "type": "JSXIdentifier",
                "start": 655,
                "end": 665,
                "name": "PartRCComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 666,
                  "end": 684,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 666,
                    "end": 676,
                    "name": "data-extra"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 677,
                    "end": 684,
                    "value": "hello",
                    "raw": "\"hello\""
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
