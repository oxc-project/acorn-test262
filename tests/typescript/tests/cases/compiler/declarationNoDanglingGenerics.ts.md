__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 669,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 44,
            "decorators": [],
            "name": "kindCache",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 17,
                "end": 44,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 19,
                    "end": 42,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 20,
                        "end": 32,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 24,
                          "end": 32,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 26,
                            "end": 32
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 35,
                        "end": 42
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 49,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 69,
        "decorators": [],
        "name": "register",
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
          "start": 70,
          "end": 82,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 82,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 83,
        "end": 97,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 85,
          "end": 97,
          "types": [
            {
              "type": "TSVoidKeyword",
              "start": 85,
              "end": 89
            },
            {
              "type": "TSNeverKeyword",
              "start": 92,
              "end": 97
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 229,
        "body": [
          {
            "type": "IfStatement",
            "start": 102,
            "end": 201,
            "test": {
              "type": "MemberExpression",
              "start": 106,
              "end": 121,
              "object": {
                "type": "Identifier",
                "start": 106,
                "end": 115,
                "decorators": [],
                "name": "kindCache",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 116,
                "end": 120,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 123,
              "end": 201,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 129,
                  "end": 197,
                  "argument": {
                    "type": "NewExpression",
                    "start": 135,
                    "end": 196,
                    "callee": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 144,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TemplateLiteral",
                        "start": 145,
                        "end": 195,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 145,
                            "end": 165,
                            "value": {
                              "raw": "Class with kind \"",
                              "cooked": "Class with kind \""
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 169,
                            "end": 195,
                            "value": {
                              "raw": "\" is already registered.",
                              "cooked": "\" is already registered."
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 165,
                            "end": 169,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 204,
            "end": 227,
            "expression": {
              "type": "AssignmentExpression",
              "start": 204,
              "end": 226,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 204,
                "end": 219,
                "object": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 213,
                  "decorators": [],
                  "name": "kindCache",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 218,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 222,
                "end": 226,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 231,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 252,
        "decorators": [],
        "name": "ClassFactory",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 252,
        "end": 274,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 253,
            "end": 273,
            "name": {
              "type": "Identifier",
              "start": 253,
              "end": 258,
              "decorators": [],
              "name": "TKind",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 267,
              "end": 273
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
          "start": 275,
          "end": 286,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 279,
            "end": 286,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 281,
              "end": 286,
              "typeName": {
                "type": "Identifier",
                "start": 281,
                "end": 286,
                "decorators": [],
                "name": "TKind",
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
        "start": 288,
        "end": 409,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 292,
            "end": 307,
            "expression": {
              "type": "CallExpression",
              "start": 292,
              "end": 306,
              "callee": {
                "type": "Identifier",
                "start": 292,
                "end": 300,
                "decorators": [],
                "name": "register",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 301,
                  "end": 305,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 311,
            "end": 407,
            "argument": {
              "type": "ClassExpression",
              "start": 318,
              "end": 406,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 324,
                "end": 406,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 330,
                    "end": 369,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 354,
                      "decorators": [],
                      "name": "THE_KIND",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 361,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 356,
                        "end": 361,
                        "typeName": {
                          "type": "Identifier",
                          "start": 356,
                          "end": 361,
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 368,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": true,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 374,
                    "end": 402,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 387,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 387,
                      "end": 394,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 389,
                        "end": 394,
                        "typeName": {
                          "type": "Identifier",
                          "start": 389,
                          "end": 394,
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 401,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": true,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 411,
      "end": 507,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 422,
        "decorators": [],
        "name": "Kinds",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 423,
        "end": 507,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 451,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 447,
              "end": 450,
              "value": "A",
              "raw": "\"A\""
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 454,
            "end": 478,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 474,
              "end": 477,
              "value": "B",
              "raw": "\"B\""
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 481,
            "end": 505,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 497,
              "end": 498,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 501,
              "end": 504,
              "value": "C",
              "raw": "\"C\""
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 509,
      "end": 561,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 516,
        "end": 561,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 522,
          "end": 527,
          "decorators": [],
          "name": "AKind",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "start": 536,
          "end": 557,
          "callee": {
            "type": "Identifier",
            "start": 536,
            "end": 548,
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 549,
              "end": 556,
              "object": {
                "type": "Identifier",
                "start": 549,
                "end": 554,
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          ],
          "optional": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 558,
          "end": 561,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 563,
      "end": 615,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 570,
        "end": 615,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 576,
          "end": 581,
          "decorators": [],
          "name": "BKind",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "start": 590,
          "end": 611,
          "callee": {
            "type": "Identifier",
            "start": 590,
            "end": 602,
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 603,
              "end": 610,
              "object": {
                "type": "Identifier",
                "start": 603,
                "end": 608,
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 609,
                "end": 610,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          ],
          "optional": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 612,
          "end": 615,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 617,
      "end": 669,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 624,
        "end": 669,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 630,
          "end": 635,
          "decorators": [],
          "name": "CKind",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "start": 644,
          "end": 665,
          "callee": {
            "type": "Identifier",
            "start": 644,
            "end": 656,
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 657,
              "end": 664,
              "object": {
                "type": "Identifier",
                "start": 657,
                "end": 662,
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 663,
                "end": 664,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          ],
          "optional": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 666,
          "end": 669,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
