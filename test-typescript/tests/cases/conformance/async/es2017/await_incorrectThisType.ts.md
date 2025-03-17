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
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 67,
        "name": "Either",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "name": "A",
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
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 76,
        "end": 94,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 76,
            "end": 83,
            "typeName": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "name": "Left",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 80,
              "end": 83,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 82,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 86,
            "end": 94,
            "typeName": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "name": "Right",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 91,
              "end": 94,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 92,
                  "end": 93,
                  "typeName": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 105,
        "name": "Left",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "E",
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 111,
        "end": 132,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 125,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "name": "tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "Left",
                  "raw": "'Left'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 126,
            "end": 130,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 130,
                "typeName": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 134,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 144,
        "name": "Right",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "name": "A",
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 150,
        "end": 172,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 152,
            "end": 165,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "name": "tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "Right",
                  "raw": "'Right'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 166,
            "end": 170,
            "computed": false,
            "optional": false,
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
              "start": 167,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 170,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 187,
            "name": "mkLeft",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 190,
            "end": 241,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 194,
                "end": 198,
                "name": "e",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 195,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 197,
                    "end": 198,
                    "typeName": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "name": "E",
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
              "type": "ObjectExpression",
              "start": 222,
              "end": 240,
              "properties": [
                {
                  "type": "Property",
                  "start": 224,
                  "end": 235,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 227,
                    "name": "tag",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 229,
                    "end": 235,
                    "value": "Left",
                    "raw": "'Left'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 237,
                  "end": 238,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
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
                  "name": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "E",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 207,
                  "name": "Either",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 207,
                  "end": 217,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 208,
                      "end": 209,
                      "typeName": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 209,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 211,
                      "end": 216
                    }
                  ]
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 256,
            "name": "mkRight",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 259,
            "end": 311,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 263,
                "end": 267,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 264,
                  "end": 267,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 266,
                    "end": 267,
                    "typeName": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "name": "A",
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
              "type": "ObjectExpression",
              "start": 291,
              "end": 310,
              "properties": [
                {
                  "type": "Property",
                  "start": 293,
                  "end": 305,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 296,
                    "name": "tag",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 298,
                    "end": 305,
                    "value": "Right",
                    "raw": "'Right'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 307,
                  "end": 308,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 308,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 308,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
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
                  "name": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 261,
                    "name": "A",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 270,
                "end": 286,
                "typeName": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 276,
                  "name": "Either",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 285,
                        "name": "A",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 314,
      "end": 1242,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 328,
        "name": "EPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 361,
        "end": 1242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 367,
            "end": 476,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 381,
              "name": "succeed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 381,
              "end": 476,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 385,
                  "end": 389,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 386,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 388,
                      "end": 389,
                      "typeName": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 389,
                        "name": "A",
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
                      "callee": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 440,
                        "name": "EPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 441,
                          "end": 468,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 441,
                            "end": 456,
                            "object": {
                              "type": "Identifier",
                              "start": 441,
                              "end": 448,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 456,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 457,
                              "end": 467,
                              "callee": {
                                "type": "Identifier",
                                "start": 457,
                                "end": 464,
                                "name": "mkRight",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 465,
                                  "end": 466,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 381,
                "end": 384,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 382,
                    "end": 383,
                    "name": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 383,
                      "name": "A",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 390,
                "end": 410,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 392,
                  "end": 410,
                  "typeName": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 400,
                    "name": "EPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 409,
                          "name": "A",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 482,
            "end": 587,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 489,
              "end": 493,
              "name": "fail",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 493,
              "end": 587,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 497,
                  "end": 501,
                  "name": "e",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 498,
                    "end": 501,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 500,
                      "end": 501,
                      "typeName": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 501,
                        "name": "E",
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
                      "callee": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 552,
                        "name": "EPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 553,
                          "end": 579,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 553,
                            "end": 568,
                            "object": {
                              "type": "Identifier",
                              "start": 553,
                              "end": 560,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 561,
                              "end": 568,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 569,
                              "end": 578,
                              "callee": {
                                "type": "Identifier",
                                "start": 569,
                                "end": 575,
                                "name": "mkLeft",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 576,
                                  "end": 577,
                                  "name": "e",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 493,
                "end": 496,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 494,
                    "end": 495,
                    "name": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 495,
                      "name": "E",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 502,
                "end": 522,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 504,
                  "end": 522,
                  "typeName": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 512,
                    "name": "EPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 512,
                    "end": 522,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 513,
                        "end": 514,
                        "typeName": {
                          "type": "Identifier",
                          "start": 513,
                          "end": 514,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 516,
                        "end": 521
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 593,
            "end": 647,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 593,
              "end": 604,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 604,
              "end": 647,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 615,
                      "end": 642,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 617,
                        "end": 642,
                        "typeName": {
                          "type": "Identifier",
                          "start": 617,
                          "end": 628,
                          "name": "PromiseLike",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 628,
                          "end": 642,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 629,
                              "end": 641,
                              "typeName": {
                                "type": "Identifier",
                                "start": 629,
                                "end": 635,
                                "name": "Either",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 635,
                                "end": 641,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 636,
                                    "end": 637,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 636,
                                      "end": 637,
                                      "name": "E",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 639,
                                    "end": 640,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 639,
                                      "end": 640,
                                      "name": "A",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 644,
                "end": 647,
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
          },
          {
            "type": "MethodDefinition",
            "start": 653,
            "end": 1240,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 657,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 657,
              "end": 1240,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 778,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 758,
                    "end": 778,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 760,
                      "end": 778,
                      "typeName": {
                        "type": "Identifier",
                        "start": 760,
                        "end": 768,
                        "name": "EPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 776,
                              "end": 777,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 788,
                  "end": 855,
                  "name": "onfulfilled",
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
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 804,
                              "end": 812,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 809,
                                "end": 812,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 811,
                                  "end": 812,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 811,
                                    "end": 812,
                                    "name": "A",
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 817,
                                    "end": 818,
                                    "name": "B",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 821,
                                  "end": 835,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 821,
                                    "end": 832,
                                    "name": "PromiseLike",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 832,
                                    "end": 835,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 833,
                                        "end": 834,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 833,
                                          "end": 834,
                                          "name": "B",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
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
                  },
                  "decorators": [],
                  "optional": true
                },
                {
                  "type": "Identifier",
                  "start": 865,
                  "end": 936,
                  "name": "onrejected",
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
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 880,
                              "end": 891,
                              "name": "reason",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 886,
                                "end": 891,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 888,
                                  "end": 891
                                }
                              },
                              "decorators": [],
                              "optional": false
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 896,
                                    "end": 898,
                                    "name": "B1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 901,
                                  "end": 916,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 901,
                                    "end": 912,
                                    "name": "PromiseLike",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 912,
                                    "end": 916,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 913,
                                        "end": 915,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 913,
                                          "end": 915,
                                          "name": "B1",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
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
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 981,
                        "end": 992,
                        "object": {
                          "type": "MemberExpression",
                          "start": 981,
                          "end": 987,
                          "object": {
                            "type": "ThisExpression",
                            "start": 981,
                            "end": 985
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 986,
                            "end": 987,
                            "name": "p",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 988,
                          "end": 992,
                          "name": "then",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 1111,
                          "end": 1200,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1111,
                              "end": 1117,
                              "name": "either",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "LogicalExpression",
                            "start": 1121,
                            "end": 1200,
                            "left": {
                              "type": "ChainExpression",
                              "start": 1121,
                              "end": 1158,
                              "expression": {
                                "type": "CallExpression",
                                "start": 1121,
                                "end": 1158,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1121,
                                  "end": 1132,
                                  "name": "onfulfilled",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 1135,
                                    "end": 1157,
                                    "object": {
                                      "type": "TSAsExpression",
                                      "start": 1136,
                                      "end": 1154,
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 1136,
                                        "end": 1142,
                                        "name": "either",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1146,
                                        "end": 1154,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1146,
                                          "end": 1151,
                                          "name": "Right",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 1151,
                                          "end": 1154,
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "start": 1152,
                                              "end": 1153,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1152,
                                                "end": 1153,
                                                "name": "A",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": null
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1156,
                                      "end": 1157,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                ],
                                "optional": true,
                                "typeArguments": null
                              }
                            },
                            "operator": "??",
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
                                  "object": {
                                    "type": "TSAsExpression",
                                    "start": 1163,
                                    "end": 1181,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 1163,
                                      "end": 1169,
                                      "name": "either",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1173,
                                      "end": 1181,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1173,
                                        "end": 1178,
                                        "name": "Right",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 1178,
                                        "end": 1181,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 1179,
                                            "end": 1180,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1179,
                                              "end": 1180,
                                              "name": "A",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1183,
                                    "end": 1184,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1199,
                                  "end": 1200,
                                  "name": "B",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        {
                          "type": "Identifier",
                          "start": 1214,
                          "end": 1224,
                          "name": "onrejected",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 657,
                "end": 676,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 658,
                    "end": 663,
                    "name": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 659,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeReference",
                      "start": 662,
                      "end": 663,
                      "typeName": {
                        "type": "Identifier",
                        "start": 662,
                        "end": 663,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 665,
                    "end": 675,
                    "name": {
                      "type": "Identifier",
                      "start": 665,
                      "end": 667,
                      "name": "B1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSNeverKeyword",
                      "start": 670,
                      "end": 675
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 942,
                "end": 963,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 944,
                  "end": 963,
                  "typeName": {
                    "type": "Identifier",
                    "start": 944,
                    "end": 955,
                    "name": "PromiseLike",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 956,
                              "end": 957,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 960,
                            "end": 962,
                            "typeName": {
                              "type": "Identifier",
                              "start": 960,
                              "end": 962,
                              "name": "B1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    ]
                  }
                }
              }
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
        "start": 328,
        "end": 334,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 329,
            "end": 330,
            "name": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 333,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "name": "A",
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 346,
          "end": 360,
          "expression": {
            "type": "Identifier",
            "start": 346,
            "end": 357,
            "name": "PromiseLike",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 1250,
            "end": 1292,
            "name": "withTypedFailure",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1266,
              "end": 1292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1268,
                "end": 1292,
                "typeName": {
                  "type": "Identifier",
                  "start": 1268,
                  "end": 1276,
                  "name": "EPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1295,
            "end": 1311,
            "callee": {
              "type": "MemberExpression",
              "start": 1295,
              "end": 1308,
              "object": {
                "type": "Identifier",
                "start": 1295,
                "end": 1303,
                "name": "EPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1304,
                "end": 1308,
                "name": "fail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1309,
                "end": 1310,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1476,
      "end": 1538,
      "expression": {
        "type": "CallExpression",
        "start": 1476,
        "end": 1537,
        "callee": {
          "type": "MemberExpression",
          "start": 1476,
          "end": 1524,
          "object": {
            "type": "CallExpression",
            "start": 1476,
            "end": 1519,
            "callee": {
              "type": "MemberExpression",
              "start": 1476,
              "end": 1497,
              "object": {
                "type": "Identifier",
                "start": 1476,
                "end": 1492,
                "name": "withTypedFailure",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1493,
                "end": 1497,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1498,
                "end": 1518,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1498,
                    "end": 1499,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 1503,
                  "end": 1518,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1503,
                    "end": 1516,
                    "object": {
                      "type": "Identifier",
                      "start": 1503,
                      "end": 1504,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1505,
                      "end": 1516,
                      "name": "toUpperCase",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1520,
            "end": 1524,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 1525,
            "end": 1536,
            "object": {
              "type": "Identifier",
              "start": 1525,
              "end": 1532,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1533,
              "end": 1536,
              "name": "log",
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
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1540,
      "end": 1593,
      "id": {
        "type": "Identifier",
        "start": 1555,
        "end": 1559,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1562,
        "end": 1593,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1568,
            "end": 1591,
            "expression": {
              "type": "AwaitExpression",
              "start": 1568,
              "end": 1590,
              "argument": {
                "type": "Identifier",
                "start": 1574,
                "end": 1590,
                "name": "withTypedFailure",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
