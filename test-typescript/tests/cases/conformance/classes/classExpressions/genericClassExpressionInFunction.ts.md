__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 569,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 18,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 28,
              "decorators": [],
              "name": "genericVar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 122,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 122,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 91,
            "end": 120,
            "argument": {
              "type": "ClassExpression",
              "start": 98,
              "end": 120,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 117,
                "end": 120,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 113,
                "end": 116,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 114,
                    "end": 115,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 115,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
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
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "U",
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
      "start": 123,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 135,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 141,
            "end": 170,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 145,
              "decorators": [],
              "name": "anon",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 148,
              "end": 170,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 167,
                "end": 170,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 163,
                "end": 166,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 164,
                    "end": 165,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 165,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 131,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 131,
        "end": 134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 132,
            "end": 133,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 241,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 241,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 196,
            "end": 239,
            "argument": {
              "type": "ClassExpression",
              "start": 203,
              "end": 239,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 236,
                "end": 239,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 209,
                "end": 214,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 232,
                "end": 235,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 233,
                    "end": 234,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 234,
                      "decorators": [],
                      "name": "W",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 214,
                "end": 222,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 215,
                    "end": 221,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 221,
                      "decorators": [],
                      "name": "TInner",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
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
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 186,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "W",
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
      "start": 264,
      "end": 315,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 293,
        "end": 315,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 299,
            "end": 313,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 304,
              "decorators": [],
              "name": "namae",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 312,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 280,
        "end": 292,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 280,
          "end": 282,
          "decorators": [],
          "name": "B1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 282,
          "end": 290,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 283,
              "end": 289
            }
          ]
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 316,
      "end": 377,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 377,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 362,
            "end": 375,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 366,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 374,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 368,
                "end": 374
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 323,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 333,
        "end": 354,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 333,
          "end": 349,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 337,
            "end": 339,
            "decorators": [],
            "name": "B2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 339,
            "end": 347,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 340,
                "end": 346
              }
            ]
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 350,
          "end": 354,
          "decorators": [],
          "name": "anon",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 405,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 390,
            "decorators": [],
            "name": "b3Number",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 393,
            "end": 405,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 393,
              "end": 395,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 395,
              "end": 403,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 396,
                  "end": 402
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 407,
      "end": 460,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 440,
        "end": 460,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 446,
            "end": 458,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 449,
              "decorators": [],
              "name": "nom",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 449,
              "end": 457,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 451,
                "end": 457
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 414,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 423,
        "end": 431,
        "decorators": [],
        "name": "b3Number",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 431,
        "end": 439,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 432,
            "end": 438
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 461,
      "end": 477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 466,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 469,
            "end": 476,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 473,
              "end": 474,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 493,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 483,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 486,
            "end": 493,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 495,
      "end": 511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 510,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 503,
            "end": 510,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 530,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 512,
        "end": 529,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 512,
          "end": 524,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 512,
            "end": 513,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 514,
            "end": 524,
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 527,
          "end": 529,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 549,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 531,
        "end": 548,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 531,
          "end": 543,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 531,
            "end": 532,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 533,
            "end": 543,
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 546,
          "end": 548,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 550,
      "end": 568,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 550,
        "end": 567,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 550,
          "end": 562,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 550,
            "end": 551,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 552,
            "end": 562,
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 565,
          "end": 567,
          "raw": "12",
          "value": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
