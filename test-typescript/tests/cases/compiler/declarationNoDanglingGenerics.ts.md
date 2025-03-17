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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 44,
            "name": "kindCache",
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
                        "name": "kind",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 24,
                          "end": 32,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 26,
                            "end": 32
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
        "name": "register",
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
          "start": 70,
          "end": 82,
          "name": "kind",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 82,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "kindCache",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 116,
                "end": 120,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
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
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "kind",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 145,
                            "end": 165,
                            "value": {
                              "cooked": "Class with kind \"",
                              "raw": "Class with kind \""
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 169,
                            "end": 195,
                            "value": {
                              "cooked": "\" is already registered.",
                              "raw": "\" is already registered."
                            },
                            "tail": true
                          }
                        ]
                      }
                    ],
                    "typeArguments": null
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
                  "name": "kindCache",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 218,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
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
      "declare": false,
      "typeParameters": null,
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 231,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 252,
        "name": "ClassFactory",
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
          "start": 275,
          "end": 286,
          "name": "kind",
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
                "name": "TKind",
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
                "name": "register",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 301,
                  "end": 305,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 324,
                "end": 406,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 330,
                    "end": 369,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 354,
                      "name": "THE_KIND",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 368,
                      "name": "kind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": true,
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
                          "name": "TKind",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 374,
                    "end": 402,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 387,
                      "name": "kind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 401,
                      "name": "kind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": true,
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
                          "name": "TKind",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          }
        ]
      },
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
              "name": "TKind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 411,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 422,
        "name": "Kinds",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 423,
        "end": 507,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 451,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 447,
              "end": 450,
              "value": "A",
              "raw": "\"A\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 454,
            "end": 478,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 474,
              "end": 477,
              "value": "B",
              "raw": "\"B\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 481,
            "end": 505,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 497,
              "end": 498,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 501,
              "end": 504,
              "value": "C",
              "raw": "\"C\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 509,
      "end": 561,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 516,
        "end": 561,
        "id": {
          "type": "Identifier",
          "start": 522,
          "end": 527,
          "name": "AKind",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 536,
          "end": 557,
          "callee": {
            "type": "Identifier",
            "start": 536,
            "end": 548,
            "name": "ClassFactory",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 549,
              "end": 556,
              "object": {
                "type": "Identifier",
                "start": 549,
                "end": 554,
                "name": "Kinds",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 558,
          "end": 561,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 563,
      "end": 615,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 570,
        "end": 615,
        "id": {
          "type": "Identifier",
          "start": 576,
          "end": 581,
          "name": "BKind",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 590,
          "end": 611,
          "callee": {
            "type": "Identifier",
            "start": 590,
            "end": 602,
            "name": "ClassFactory",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 603,
              "end": 610,
              "object": {
                "type": "Identifier",
                "start": 603,
                "end": 608,
                "name": "Kinds",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 609,
                "end": 610,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 612,
          "end": 615,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 617,
      "end": 669,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 624,
        "end": 669,
        "id": {
          "type": "Identifier",
          "start": 630,
          "end": 635,
          "name": "CKind",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 644,
          "end": 665,
          "callee": {
            "type": "Identifier",
            "start": 644,
            "end": 656,
            "name": "ClassFactory",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 657,
              "end": 664,
              "object": {
                "type": "Identifier",
                "start": 657,
                "end": 662,
                "name": "Kinds",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 663,
                "end": 664,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 666,
          "end": 669,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
