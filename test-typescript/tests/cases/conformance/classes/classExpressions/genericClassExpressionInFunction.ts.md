__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 567,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 32,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 30,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 27,
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
              "start": 27,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
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
        "start": 6,
        "end": 7,
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
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "start": 33,
      "end": 121,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 90,
            "end": 119,
            "argument": {
              "type": "ClassExpression",
              "start": 97,
              "end": 119,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 116,
                "end": 119,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 112,
                "end": 115,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 113,
                    "end": 114,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
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
        "start": 42,
        "end": 44,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 44,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 46,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
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
      "start": 122,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 171,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 140,
            "end": 169,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 144,
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
              "start": 147,
              "end": 169,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 166,
                "end": 169,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 162,
                "end": 165,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 163,
                    "end": 164,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
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
        "start": 128,
        "end": 130,
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
        "start": 130,
        "end": 133,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 132,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
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
      "start": 172,
      "end": 240,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 189,
        "end": 240,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 195,
            "end": 238,
            "argument": {
              "type": "ClassExpression",
              "start": 202,
              "end": 238,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 235,
                "end": 238,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 208,
                "end": 213,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 231,
                "end": 234,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 233,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 233,
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
                "start": 213,
                "end": 221,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 214,
                    "end": 220,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 220,
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
        "start": 181,
        "end": 183,
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 183,
        "end": 186,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 184,
            "end": 185,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
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
      "start": 263,
      "end": 314,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 292,
        "end": 314,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 298,
            "end": 312,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 303,
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
              "start": 303,
              "end": 311,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
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
        "start": 269,
        "end": 270,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 279,
        "end": 291,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 279,
          "end": 281,
          "decorators": [],
          "name": "B1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 281,
          "end": 289,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 282,
              "end": 288
            }
          ]
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 376,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 355,
        "end": 376,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 361,
            "end": 374,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 365,
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
              "start": 365,
              "end": 373,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 367,
                "end": 373
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
        "start": 321,
        "end": 322,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 332,
        "end": 353,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 332,
          "end": 348,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 336,
            "end": 338,
            "decorators": [],
            "name": "B2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 338,
            "end": 346,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 339,
                "end": 345
              }
            ]
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 349,
          "end": 353,
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
      "start": 377,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 404,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 389,
            "decorators": [],
            "name": "b3Number",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 392,
            "end": 404,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 392,
              "end": 394,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 394,
              "end": 402,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 395,
                  "end": 401
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
      "start": 406,
      "end": 459,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 439,
        "end": 459,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 445,
            "end": 457,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 448,
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
              "start": 448,
              "end": 456,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 450,
                "end": 456
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
        "start": 412,
        "end": 413,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 422,
        "end": 430,
        "decorators": [],
        "name": "b3Number",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 430,
        "end": 438,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 431,
            "end": 437
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 475,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 465,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 468,
            "end": 475,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 472,
              "end": 473,
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
      "start": 477,
      "end": 493,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 492,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 482,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 485,
            "end": 492,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
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
      "start": 494,
      "end": 510,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 509,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 499,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 502,
            "end": 509,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
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
      "start": 511,
      "end": 529,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 511,
        "end": 528,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 511,
          "end": 523,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 511,
            "end": 512,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 513,
            "end": 523,
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 526,
          "end": 528,
          "raw": "12",
          "value": 12,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 530,
      "end": 548,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 530,
        "end": 547,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 530,
          "end": 542,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 532,
            "end": 542,
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 545,
          "end": 547,
          "raw": "12",
          "value": 12,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 549,
      "end": 567,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 549,
        "end": 566,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 549,
          "end": 561,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 549,
            "end": 550,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 551,
            "end": 561,
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 564,
          "end": 566,
          "raw": "12",
          "value": 12,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
