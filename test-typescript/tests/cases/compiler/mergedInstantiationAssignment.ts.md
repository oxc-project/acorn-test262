__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 544,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 76,
        "name": "GenericObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 109,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 107,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 107,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 103,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 102,
                      "end": 103,
                      "typeName": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "name": "T",
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
                "start": 105,
                "end": 107,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 81,
              "end": 87
            },
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
      "type": "VariableDeclaration",
      "start": 111,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 119,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 122,
            "end": 196,
            "expression": {
              "type": "NewExpression",
              "start": 122,
              "end": 141,
              "callee": {
                "type": "Identifier",
                "start": 126,
                "end": 139,
                "name": "GenericObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 145,
              "end": 196,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 145,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 158,
                    "name": "GenericObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 164,
                  "end": 195,
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 164,
                      "end": 178,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 166,
                          "end": 176,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 167,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 168,
                            "end": 176,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 170,
                              "end": 176
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 181,
                      "end": 195,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 183,
                          "end": 193,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 184,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 185,
                            "end": 193,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 187,
                              "end": 193
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 209,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 208,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 198,
          "end": 202,
          "object": {
            "type": "Identifier",
            "start": 198,
            "end": 200,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 205,
          "end": 208,
          "value": 432,
          "raw": "432"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 211,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 243,
        "name": "GenericObjectWithoutSetter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 256,
        "end": 275,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 260,
            "end": 273,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
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
        "start": 243,
        "end": 255,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 244,
            "end": 254,
            "name": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 248,
              "end": 254
            },
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
      "type": "VariableDeclaration",
      "start": 277,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "name": "v2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 288,
            "end": 388,
            "expression": {
              "type": "NewExpression",
              "start": 288,
              "end": 320,
              "callee": {
                "type": "Identifier",
                "start": 292,
                "end": 318,
                "name": "GenericObjectWithoutSetter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 324,
              "end": 388,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 324,
                  "end": 350,
                  "typeName": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 350,
                    "name": "GenericObjectWithoutSetter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 356,
                  "end": 387,
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 356,
                      "end": 370,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 358,
                          "end": 368,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 358,
                            "end": 359,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 360,
                            "end": 368,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 362,
                              "end": 368
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 373,
                      "end": 387,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 375,
                          "end": 385,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 375,
                            "end": 376,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 377,
                            "end": 385,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 379,
                              "end": 385
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 400,
      "expression": {
        "type": "AssignmentExpression",
        "start": 390,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 390,
          "end": 394,
          "object": {
            "type": "Identifier",
            "start": 390,
            "end": 392,
            "name": "v2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 393,
            "end": 394,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 397,
          "end": 399,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 402,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 420,
        "name": "NormalObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 446,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 425,
            "end": 444,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 430,
              "end": 444,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 431,
                  "end": 440,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 442,
                "end": 444,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 448,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "name": "v3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 459,
            "end": 531,
            "expression": {
              "type": "NewExpression",
              "start": 459,
              "end": 477,
              "callee": {
                "type": "Identifier",
                "start": 463,
                "end": 475,
                "name": "NormalObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 481,
              "end": 531,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 481,
                  "end": 493,
                  "typeName": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 493,
                    "name": "NormalObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 499,
                  "end": 530,
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 499,
                      "end": 513,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 501,
                          "end": 511,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 501,
                            "end": 502,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 503,
                            "end": 511,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 505,
                              "end": 511
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 516,
                      "end": 530,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 518,
                          "end": 528,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 518,
                            "end": 519,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 520,
                            "end": 528,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 522,
                              "end": 528
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 533,
      "end": 543,
      "expression": {
        "type": "AssignmentExpression",
        "start": 533,
        "end": 542,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 533,
          "end": 537,
          "object": {
            "type": "Identifier",
            "start": 533,
            "end": 535,
            "name": "v3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 536,
            "end": 537,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 540,
          "end": 542,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
