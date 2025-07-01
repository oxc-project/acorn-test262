__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "kindCache",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 26,
                            "end": 32
                          },
                          "start": 24,
                          "end": 32
                        },
                        "start": 20,
                        "end": 32
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 35,
                        "end": 42
                      },
                      "start": 33,
                      "end": 42
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 19,
                    "end": 42
                  }
                ],
                "start": 17,
                "end": 44
              },
              "start": 15,
              "end": 44
            },
            "start": 6,
            "end": 44
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 47,
            "end": 49
          },
          "definite": false,
          "start": 6,
          "end": 49
        }
      ],
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "register",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 69
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            },
            "start": 74,
            "end": 82
          },
          "start": 70,
          "end": 82
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
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
          ],
          "start": 85,
          "end": 97
        },
        "start": 83,
        "end": 97
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "kindCache",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 120
              },
              "optional": false,
              "computed": true,
              "start": 106,
              "end": 121
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 144
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "Class with kind \"",
                              "cooked": "Class with kind \""
                            },
                            "tail": false,
                            "start": 145,
                            "end": 165
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "\" is already registered.",
                              "cooked": "\" is already registered."
                            },
                            "tail": true,
                            "start": 169,
                            "end": 195
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 169
                          }
                        ],
                        "start": 145,
                        "end": 195
                      }
                    ],
                    "start": 135,
                    "end": 196
                  },
                  "start": 129,
                  "end": 197
                }
              ],
              "start": 123,
              "end": 201
            },
            "alternate": null,
            "start": 102,
            "end": 201
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kindCache",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 213
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 218
                },
                "optional": false,
                "computed": true,
                "start": 204,
                "end": 219
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 222,
                "end": 226
              },
              "start": 204,
              "end": 226
            },
            "directive": null,
            "start": 204,
            "end": 227
          }
        ],
        "start": 98,
        "end": 229
      },
      "expression": false,
      "start": 52,
      "end": 229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 252
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKind",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 258
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 267,
              "end": 273
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 253,
            "end": 273
          }
        ],
        "start": 252,
        "end": 274
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TKind",
                "optional": false,
                "typeAnnotation": null,
                "start": 281,
                "end": 286
              },
              "typeArguments": null,
              "start": 281,
              "end": 286
            },
            "start": 279,
            "end": 286
          },
          "start": 275,
          "end": 286
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "register",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 300
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 305
                }
              ],
              "optional": false,
              "start": 292,
              "end": 306
            },
            "directive": null,
            "start": 292,
            "end": 307
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "THE_KIND",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 354
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 356,
                          "end": 361
                        },
                        "typeArguments": null,
                        "start": 356,
                        "end": 361
                      },
                      "start": 354,
                      "end": 361
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 364,
                      "end": 368
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": true,
                    "accessibility": null,
                    "start": 330,
                    "end": 369
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 383,
                      "end": 387
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 389,
                          "end": 394
                        },
                        "typeArguments": null,
                        "start": 389,
                        "end": 394
                      },
                      "start": 387,
                      "end": 394
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 401
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": true,
                    "accessibility": null,
                    "start": 374,
                    "end": 402
                  }
                ],
                "start": 324,
                "end": 406
              },
              "abstract": false,
              "declare": false,
              "start": 318,
              "end": 406
            },
            "start": 311,
            "end": 407
          }
        ],
        "start": 288,
        "end": 409
      },
      "expression": false,
      "start": 231,
      "end": 409
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kinds",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 422
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 447,
              "end": 450
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 427,
            "end": 451
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 471
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 474,
              "end": 477
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 454,
            "end": 478
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 498
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "C",
              "raw": "\"C\"",
              "start": 501,
              "end": 504
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 481,
            "end": 505
          }
        ],
        "start": 423,
        "end": 507
      },
      "abstract": false,
      "declare": false,
      "start": 411,
      "end": 507
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 527
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 548
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 554
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "optional": false,
              "computed": false,
              "start": 549,
              "end": 556
            }
          ],
          "optional": false,
          "start": 536,
          "end": 557
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 558,
          "end": 561
        },
        "abstract": false,
        "declare": false,
        "start": 516,
        "end": 561
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 509,
      "end": 561
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 576,
          "end": 581
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 602
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 610
              },
              "optional": false,
              "computed": false,
              "start": 603,
              "end": 610
            }
          ],
          "optional": false,
          "start": 590,
          "end": 611
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 612,
          "end": 615
        },
        "abstract": false,
        "declare": false,
        "start": 570,
        "end": 615
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 563,
      "end": 615
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 630,
          "end": 635
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 656
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 662
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 664
              },
              "optional": false,
              "computed": false,
              "start": 657,
              "end": 664
            }
          ],
          "optional": false,
          "start": 644,
          "end": 665
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 666,
          "end": 669
        },
        "abstract": false,
        "declare": false,
        "start": 624,
        "end": 669
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 617,
      "end": 669
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 669
}
```
