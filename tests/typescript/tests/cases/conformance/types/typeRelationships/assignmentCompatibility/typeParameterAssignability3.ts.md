__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 488,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 111,
      "end": 137,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 137,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 123,
            "end": 135,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 126,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 134,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 128,
                "end": 134
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
        "start": 117,
        "end": 120,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 139,
      "end": 335,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 335,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 200,
            "end": 209,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 204,
                "end": 208,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 208,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 207,
                      "end": 208,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 214,
            "end": 223,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 218,
                "end": 222,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 222,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 219,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 221,
                      "end": 222,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 222,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 228,
            "end": 234,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 228,
              "end": 233,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 245,
            "end": 251,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 245,
              "end": 250,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 245,
                "end": 246,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 263,
            "end": 269,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 263,
              "end": 268,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 280,
            "end": 286,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 280,
              "end": 285,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 298,
            "end": 304,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 298,
              "end": 303,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 318,
            "end": 324,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 318,
              "end": 323,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
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
        "start": 148,
        "end": 151,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 182,
          "end": 186,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 186,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 186,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 188,
          "end": 192,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 192,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "U",
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
        "start": 151,
        "end": 181,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 165,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 162,
              "end": 165,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 165,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 180,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 180,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
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
      "start": 337,
      "end": 488,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 375,
        "end": 488,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 381,
            "end": 386,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 382,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 385,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 384,
                "end": 385,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 391,
            "end": 396,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 395,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 394,
                "end": 395,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 401,
            "end": 486,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 405,
              "end": 486,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 411,
                "end": 486,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 421,
                    "end": 437,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 421,
                      "end": 436,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 421,
                        "end": 427,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 421,
                          "end": 425
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 426,
                          "end": 427,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 430,
                        "end": 436,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 430,
                          "end": 434
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 435,
                          "end": 436,
                          "decorators": [],
                          "name": "u",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 455,
                    "end": 471,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 455,
                      "end": 470,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 455,
                        "end": 461,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 455,
                          "end": 459
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 460,
                          "end": 461,
                          "decorators": [],
                          "name": "u",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 464,
                        "end": 470,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 464,
                          "end": 468
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 469,
                          "end": 470,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 344,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 344,
        "end": 374,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 345,
            "end": 358,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 355,
              "end": 358,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 355,
                "end": 358,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 373,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 370,
              "end": 373,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 373,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
