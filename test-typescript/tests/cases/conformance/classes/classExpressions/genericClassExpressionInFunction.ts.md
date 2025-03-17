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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 18,
            "end": 31,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 28,
              "name": "genericVar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "name": "T",
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 117,
                "end": 120,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 113,
                "end": 116,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 114,
                    "end": 115,
                    "typeName": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 115,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
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
      "start": 123,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 131,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 135,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 141,
            "end": 170,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 145,
              "name": "anon",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ClassExpression",
              "start": 148,
              "end": 170,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 167,
                "end": 170,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 163,
                "end": 166,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 164,
                    "end": 165,
                    "typeName": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 165,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 131,
        "end": 134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 132,
            "end": 133,
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "name": "B3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "id": {
                "type": "Identifier",
                "start": 209,
                "end": 214,
                "name": "Inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 236,
                "end": 239,
                "body": []
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 214,
                "end": 222,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 215,
                    "end": 221,
                    "name": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 221,
                      "name": "TInner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 232,
                "end": 235,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 233,
                    "end": 234,
                    "typeName": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 234,
                      "name": "W",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 186,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "W",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
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
      "start": 264,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "name": "K",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 280,
        "end": 292,
        "callee": {
          "type": "Identifier",
          "start": 280,
          "end": 282,
          "name": "B1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
      "body": {
        "type": "ClassBody",
        "start": 293,
        "end": 315,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 299,
            "end": 313,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 304,
              "name": "namae",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "type": "ClassDeclaration",
      "start": 316,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 323,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 333,
        "end": 354,
        "object": {
          "type": "NewExpression",
          "start": 333,
          "end": 349,
          "callee": {
            "type": "Identifier",
            "start": 337,
            "end": 339,
            "name": "B2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
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
        "property": {
          "type": "Identifier",
          "start": 350,
          "end": 354,
          "name": "anon",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 377,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 362,
            "end": 375,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 366,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "type": "VariableDeclaration",
      "start": 378,
      "end": 406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 405,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 390,
            "name": "b3Number",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 393,
            "end": 405,
            "callee": {
              "type": "Identifier",
              "start": 393,
              "end": 395,
              "name": "B3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 407,
      "end": 460,
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 414,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 423,
        "end": 431,
        "name": "b3Number",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 440,
        "end": 460,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 446,
            "end": 458,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 449,
              "name": "nom",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      }
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
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 466,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 469,
            "end": 476,
            "callee": {
              "type": "Identifier",
              "start": 473,
              "end": 474,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 483,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 486,
            "end": 493,
            "callee": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 503,
            "end": 510,
            "callee": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 530,
      "expression": {
        "type": "AssignmentExpression",
        "start": 512,
        "end": 529,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 512,
          "end": 524,
          "object": {
            "type": "Identifier",
            "start": 512,
            "end": 513,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 514,
            "end": 524,
            "name": "genericVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 527,
          "end": 529,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 549,
      "expression": {
        "type": "AssignmentExpression",
        "start": 531,
        "end": 548,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 531,
          "end": 543,
          "object": {
            "type": "Identifier",
            "start": 531,
            "end": 532,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 533,
            "end": 543,
            "name": "genericVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 546,
          "end": 548,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 550,
      "end": 568,
      "expression": {
        "type": "AssignmentExpression",
        "start": 550,
        "end": 567,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 550,
          "end": 562,
          "object": {
            "type": "Identifier",
            "start": 550,
            "end": 551,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 552,
            "end": 562,
            "name": "genericVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 565,
          "end": 567,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
