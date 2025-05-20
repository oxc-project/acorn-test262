__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 1593,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 56,
      "end": 95,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 67,
        "decorators": [],
        "name": "Either",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 76,
        "end": 94,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 76,
            "end": 83,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 80,
              "end": 83,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 82,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "decorators": [],
              "name": "Left",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 86,
            "end": 94,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 91,
              "end": 94,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 92,
                  "end": 93,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "decorators": [],
              "name": "Right",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 73,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 133,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 105,
        "decorators": [],
        "name": "Left",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 111,
        "end": 132,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 125,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 118,
                "end": 124,
                "literal": {
                  "type": "Literal",
                  "start": 118,
                  "end": 124,
                  "raw": "'Left'",
                  "value": "Left"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 126,
            "end": 130,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 130,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 134,
      "end": 173,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 144,
        "decorators": [],
        "name": "Right",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 150,
        "end": 172,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 152,
            "end": 165,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 164,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 157,
                "end": 164,
                "literal": {
                  "type": "Literal",
                  "start": 157,
                  "end": 164,
                  "raw": "'Right'",
                  "value": "Right"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 166,
            "end": 170,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 170,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 145,
            "end": 146,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 187,
            "decorators": [],
            "name": "mkLeft",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 190,
            "end": 241,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 222,
              "end": 240,
              "properties": [
                {
                  "type": "Property",
                  "start": 224,
                  "end": 235,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 227,
                    "decorators": [],
                    "name": "tag",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 229,
                    "end": 235,
                    "raw": "'Left'",
                    "value": "Left"
                  }
                },
                {
                  "type": "Property",
                  "start": 237,
                  "end": 238,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 194,
                "end": 198,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 195,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 197,
                    "end": 198,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 217,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 207,
                  "end": 217,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 208,
                      "end": 209,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 209,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 211,
                      "end": 216
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 207,
                  "decorators": [],
                  "name": "Either",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 190,
              "end": 193,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 191,
                  "end": 192,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 256,
            "decorators": [],
            "name": "mkRight",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 259,
            "end": 311,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 291,
              "end": 310,
              "properties": [
                {
                  "type": "Property",
                  "start": 293,
                  "end": 305,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 296,
                    "decorators": [],
                    "name": "tag",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 298,
                    "end": 305,
                    "raw": "'Right'",
                    "value": "Right"
                  }
                },
                {
                  "type": "Property",
                  "start": 307,
                  "end": 308,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 308,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 308,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 263,
                "end": 267,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 264,
                  "end": 267,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 266,
                    "end": 267,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 270,
                "end": 286,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 276,
                  "end": 286,
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 277,
                      "end": 282
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 284,
                      "end": 285,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 285,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 276,
                  "decorators": [],
                  "name": "Either",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 259,
              "end": 262,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 260,
                  "end": 261,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 261,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 314,
      "end": 1242,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 361,
        "end": 1242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 367,
            "end": 476,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 381,
              "decorators": [],
              "name": "succeed",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 381,
              "end": 476,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 411,
                "end": 476,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 421,
                    "end": 470,
                    "argument": {
                      "type": "NewExpression",
                      "start": 428,
                      "end": 469,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 441,
                          "end": 468,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 457,
                              "end": 467,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 465,
                                  "end": 466,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 457,
                                "end": 464,
                                "decorators": [],
                                "name": "mkRight",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 441,
                            "end": 456,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 441,
                              "end": 448,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 456,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 440,
                        "decorators": [],
                        "name": "EPromise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 385,
                  "end": 389,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 386,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 388,
                      "end": 389,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 389,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 390,
                "end": 410,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 392,
                  "end": 410,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 400,
                    "end": 410,
                    "params": [
                      {
                        "type": "TSNeverKeyword",
                        "start": 401,
                        "end": 406
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 408,
                        "end": 409,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 409,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 400,
                    "decorators": [],
                    "name": "EPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 381,
                "end": 384,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 382,
                    "end": 383,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 383,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 482,
            "end": 587,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 489,
              "end": 493,
              "decorators": [],
              "name": "fail",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 493,
              "end": 587,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 523,
                "end": 587,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 533,
                    "end": 581,
                    "argument": {
                      "type": "NewExpression",
                      "start": 540,
                      "end": 580,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 553,
                          "end": 579,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 569,
                              "end": 578,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 576,
                                  "end": 577,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 569,
                                "end": 575,
                                "decorators": [],
                                "name": "mkLeft",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 553,
                            "end": 568,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 553,
                              "end": 560,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 561,
                              "end": 568,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 552,
                        "decorators": [],
                        "name": "EPromise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 497,
                  "end": 501,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 498,
                    "end": 501,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 500,
                      "end": 501,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 501,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 502,
                "end": 522,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 504,
                  "end": 522,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 512,
                    "end": 522,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 513,
                        "end": 514,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 513,
                          "end": 514,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 516,
                        "end": 521
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 512,
                    "decorators": [],
                    "name": "EPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 493,
                "end": 496,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 494,
                    "end": 495,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 495,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 593,
            "end": 647,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 593,
              "end": 604,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 604,
              "end": 647,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 644,
                "end": 647,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 605,
                  "end": 642,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 614,
                    "end": 642,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 615,
                      "end": 642,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 617,
                        "end": 642,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 628,
                          "end": 642,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 629,
                              "end": 641,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 635,
                                "end": 641,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 636,
                                    "end": 637,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 636,
                                      "end": 637,
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 639,
                                    "end": 640,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 639,
                                      "end": 640,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 629,
                                "end": 635,
                                "decorators": [],
                                "name": "Either",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 617,
                          "end": 628,
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 653,
            "end": 1240,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 657,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 657,
              "end": 1240,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 964,
                "end": 1240,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 974,
                    "end": 1234,
                    "argument": {
                      "type": "CallExpression",
                      "start": 981,
                      "end": 1234,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 1111,
                          "end": 1200,
                          "async": false,
                          "body": {
                            "type": "LogicalExpression",
                            "start": 1121,
                            "end": 1200,
                            "operator": "??",
                            "left": {
                              "type": "ChainExpression",
                              "start": 1121,
                              "end": 1158,
                              "expression": {
                                "type": "CallExpression",
                                "start": 1121,
                                "end": 1158,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 1135,
                                    "end": 1157,
                                    "computed": false,
                                    "object": {
                                      "type": "TSAsExpression",
                                      "start": 1136,
                                      "end": 1154,
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 1136,
                                        "end": 1142,
                                        "decorators": [],
                                        "name": "either",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1146,
                                        "end": 1154,
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 1151,
                                          "end": 1154,
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "start": 1152,
                                              "end": 1153,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1152,
                                                "end": 1153,
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          ]
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1146,
                                          "end": 1151,
                                          "decorators": [],
                                          "name": "Right",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1156,
                                      "end": 1157,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1121,
                                  "end": 1132,
                                  "decorators": [],
                                  "name": "onfulfilled",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": true,
                                "typeArguments": null
                              }
                            },
                            "right": {
                              "type": "TSAsExpression",
                              "start": 1162,
                              "end": 1200,
                              "expression": {
                                "type": "TSAsExpression",
                                "start": 1162,
                                "end": 1195,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 1162,
                                  "end": 1184,
                                  "computed": false,
                                  "object": {
                                    "type": "TSAsExpression",
                                    "start": 1163,
                                    "end": 1181,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 1163,
                                      "end": 1169,
                                      "decorators": [],
                                      "name": "either",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1173,
                                      "end": 1181,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 1178,
                                        "end": 1181,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 1179,
                                            "end": 1180,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1179,
                                              "end": 1180,
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1173,
                                        "end": 1178,
                                        "decorators": [],
                                        "name": "Right",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1183,
                                    "end": 1184,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeAnnotation": {
                                  "type": "TSUnknownKeyword",
                                  "start": 1188,
                                  "end": 1195
                                }
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1199,
                                "end": 1200,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1199,
                                  "end": 1200,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1111,
                              "end": 1117,
                              "decorators": [],
                              "name": "either",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        },
                        {
                          "type": "Identifier",
                          "start": 1214,
                          "end": 1224,
                          "decorators": [],
                          "name": "onrejected",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 981,
                        "end": 992,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 981,
                          "end": 987,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 981,
                            "end": 985
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 986,
                            "end": 987,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 988,
                          "end": 992,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 778,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 758,
                    "end": 778,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 760,
                      "end": 778,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 768,
                        "end": 778,
                        "params": [
                          {
                            "type": "TSNeverKeyword",
                            "start": 769,
                            "end": 774
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 776,
                            "end": 777,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 776,
                              "end": 777,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 760,
                        "end": 768,
                        "decorators": [],
                        "name": "EPromise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 788,
                  "end": 855,
                  "decorators": [],
                  "name": "onfulfilled",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 800,
                    "end": 855,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 802,
                      "end": 855,
                      "types": [
                        {
                          "type": "TSFunctionType",
                          "start": 803,
                          "end": 835,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 804,
                              "end": 812,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 809,
                                "end": 812,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 811,
                                  "end": 812,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 811,
                                    "end": 812,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 814,
                            "end": 835,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 817,
                              "end": 835,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 817,
                                  "end": 818,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 817,
                                    "end": 818,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 821,
                                  "end": 835,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 832,
                                    "end": 835,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 833,
                                        "end": 834,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 833,
                                          "end": 834,
                                          "decorators": [],
                                          "name": "B",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 821,
                                    "end": 832,
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            }
                          },
                          "typeParameters": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 839,
                          "end": 843
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 846,
                          "end": 855
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 865,
                  "end": 936,
                  "decorators": [],
                  "name": "onrejected",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 876,
                    "end": 936,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 878,
                      "end": 936,
                      "types": [
                        {
                          "type": "TSFunctionType",
                          "start": 879,
                          "end": 916,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 880,
                              "end": 891,
                              "decorators": [],
                              "name": "reason",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 886,
                                "end": 891,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 888,
                                  "end": 891
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 893,
                            "end": 916,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 896,
                              "end": 916,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 896,
                                  "end": 898,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 896,
                                    "end": 898,
                                    "decorators": [],
                                    "name": "B1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 901,
                                  "end": 916,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 912,
                                    "end": 916,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 913,
                                        "end": 915,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 913,
                                          "end": 915,
                                          "decorators": [],
                                          "name": "B1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 901,
                                    "end": 912,
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            }
                          },
                          "typeParameters": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 920,
                          "end": 924
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 927,
                          "end": 936
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 942,
                "end": 963,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 944,
                  "end": 963,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 955,
                    "end": 963,
                    "params": [
                      {
                        "type": "TSUnionType",
                        "start": 956,
                        "end": 962,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 956,
                            "end": 957,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 956,
                              "end": 957,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 960,
                            "end": 962,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 960,
                              "end": 962,
                              "decorators": [],
                              "name": "B1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 944,
                    "end": 955,
                    "decorators": [],
                    "name": "PromiseLike",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 657,
                "end": 676,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 658,
                    "end": 663,
                    "const": false,
                    "constraint": null,
                    "default": {
                      "type": "TSTypeReference",
                      "start": 662,
                      "end": 663,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 662,
                        "end": 663,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 659,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 665,
                    "end": 675,
                    "const": false,
                    "constraint": null,
                    "default": {
                      "type": "TSNeverKeyword",
                      "start": 670,
                      "end": 675
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 665,
                      "end": 667,
                      "decorators": [],
                      "name": "B1",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 328,
        "decorators": [],
        "name": "EPromise",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 346,
          "end": 360,
          "expression": {
            "type": "Identifier",
            "start": 346,
            "end": 357,
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 357,
            "end": 360,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 358,
                "end": 359,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 328,
        "end": 334,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 329,
            "end": 330,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 333,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1244,
      "end": 1312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1250,
          "end": 1311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1250,
            "end": 1292,
            "decorators": [],
            "name": "withTypedFailure",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1266,
              "end": 1292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1268,
                "end": 1292,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1276,
                  "end": 1292,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1277,
                      "end": 1283
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 1285,
                      "end": 1291
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1268,
                  "end": 1276,
                  "decorators": [],
                  "name": "EPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 1295,
            "end": 1311,
            "arguments": [
              {
                "type": "Literal",
                "start": 1309,
                "end": 1310,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1295,
              "end": 1308,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1295,
                "end": 1303,
                "decorators": [],
                "name": "EPromise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1304,
                "end": 1308,
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1476,
      "end": 1538,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1476,
        "end": 1537,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 1525,
            "end": 1536,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1525,
              "end": 1532,
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1533,
              "end": 1536,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1476,
          "end": 1524,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 1476,
            "end": 1519,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1498,
                "end": 1518,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 1503,
                  "end": 1518,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1503,
                    "end": 1516,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1503,
                      "end": 1504,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1505,
                      "end": 1516,
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1498,
                    "end": 1499,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1476,
              "end": 1497,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1476,
                "end": 1492,
                "decorators": [],
                "name": "withTypedFailure",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1493,
                "end": 1497,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1520,
            "end": 1524,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1540,
      "end": 1593,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1562,
        "end": 1593,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1568,
            "end": 1591,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 1568,
              "end": 1590,
              "argument": {
                "type": "Identifier",
                "start": 1574,
                "end": 1590,
                "decorators": [],
                "name": "withTypedFailure",
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
        "start": 1555,
        "end": 1559,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
