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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 49,
          "definite": false,
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
                    "accessibility": null,
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
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 35,
                        "end": 42
                      }
                    }
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 229,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 229,
        "body": [
          {
            "type": "IfStatement",
            "start": 102,
            "end": 201,
            "alternate": null,
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
                    "arguments": [
                      {
                        "type": "TemplateLiteral",
                        "start": 145,
                        "end": 195,
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
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 145,
                            "end": 165,
                            "tail": false,
                            "value": {
                              "cooked": "Class with kind \"",
                              "raw": "Class with kind \""
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 169,
                            "end": 195,
                            "tail": true,
                            "value": {
                              "cooked": "\" is already registered.",
                              "raw": "\" is already registered."
                            }
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 144,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 106,
              "end": 121,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 106,
                "end": 115,
                "decorators": [],
                "name": "kindCache",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 116,
                "end": 120,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 204,
            "end": 227,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 204,
              "end": 226,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 204,
                "end": 219,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 213,
                  "decorators": [],
                  "name": "kindCache",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 218,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 222,
                "end": 226,
                "raw": "true",
                "value": true
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 69,
        "decorators": [],
        "name": "register",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 231,
      "end": 409,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 288,
        "end": 409,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 292,
            "end": 307,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 292,
              "end": 306,
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
              "callee": {
                "type": "Identifier",
                "start": 292,
                "end": 300,
                "decorators": [],
                "name": "register",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 311,
            "end": 407,
            "argument": {
              "type": "ClassExpression",
              "start": 318,
              "end": 406,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 324,
                "end": 406,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 330,
                    "end": 369,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 354,
                      "decorators": [],
                      "name": "THE_KIND",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": true,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 361,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 356,
                        "end": 361,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 356,
                          "end": 361,
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 374,
                    "end": 402,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 387,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 387,
                      "end": 394,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 389,
                        "end": 394,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 389,
                          "end": 394,
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 252,
        "decorators": [],
        "name": "ClassFactory",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 281,
                "end": 286,
                "decorators": [],
                "name": "TKind",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 252,
        "end": 274,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 253,
            "end": 273,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 267,
              "end": 273
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 253,
              "end": 258,
              "decorators": [],
              "name": "TKind",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 411,
      "end": 507,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 423,
        "end": 507,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 451,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 447,
              "end": 450,
              "raw": "\"A\"",
              "value": "A"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 454,
            "end": 478,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 474,
              "end": 477,
              "raw": "\"B\"",
              "value": "B"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 481,
            "end": 505,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 497,
              "end": 498,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 501,
              "end": 504,
              "raw": "\"C\"",
              "value": "C"
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 509,
      "end": 561,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 516,
        "end": 561,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 558,
          "end": 561,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 536,
          "end": 557,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 549,
              "end": 556,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 549,
                "end": 554,
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 536,
            "end": 548,
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 563,
      "end": 615,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 570,
        "end": 615,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 612,
          "end": 615,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 590,
          "end": 611,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 603,
              "end": 610,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 603,
                "end": 608,
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 609,
                "end": 610,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 590,
            "end": 602,
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 617,
      "end": 669,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 624,
        "end": 669,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 666,
          "end": 669,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 644,
          "end": 665,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 657,
              "end": 664,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 657,
                "end": 662,
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 663,
                "end": 664,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 644,
            "end": 656,
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
