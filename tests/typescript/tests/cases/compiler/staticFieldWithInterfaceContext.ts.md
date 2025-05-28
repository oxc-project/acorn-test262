__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 922,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 34,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 31,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 23,
                    "end": 29,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 24,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 24,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 26,
                        "end": 29,
                        "literal": {
                          "type": "Literal",
                          "start": 26,
                          "end": 29,
                          "value": "a",
                          "raw": "\"a\""
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 35,
      "end": 133,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 43,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 43,
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ClassExpression",
            "start": 46,
            "end": 132,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 52,
              "end": 132,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 108,
                  "end": 130,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 119,
                    "end": 129,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 121,
                        "end": 127,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 124,
                          "end": 127,
                          "value": "a",
                          "raw": "\"a\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 134,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 134,
          "end": 137,
          "object": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 140,
          "end": 150,
          "properties": [
            {
              "type": "Property",
              "start": 142,
              "end": 148,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 145,
                "end": 148,
                "value": "a",
                "raw": "\"a\""
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 168,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 161,
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 164,
            "end": 167,
            "value": "x",
            "raw": "\"x\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 217,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 178,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ClassExpression",
            "start": 181,
            "end": 216,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 187,
              "end": 216,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 189,
                  "end": 214,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 199,
                    "decorators": [],
                    "name": "ex",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 203,
                    "end": 213,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 205,
                        "end": 211,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 208,
                          "end": 211,
                          "value": "a",
                          "raw": "\"a\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 237,
      "expression": {
        "type": "AssignmentExpression",
        "start": 218,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 218,
          "end": 223,
          "object": {
            "type": "Identifier",
            "start": 218,
            "end": 219,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 220,
            "end": 222,
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "ObjectExpression",
          "start": 226,
          "end": 236,
          "properties": [
            {
              "type": "Property",
              "start": 228,
              "end": 234,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 231,
                "end": 234,
                "value": "a",
                "raw": "\"a\""
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 249,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 250,
          "end": 288,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 250,
            "end": 254,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 254,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ClassExpression",
            "start": 257,
            "end": 288,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 263,
              "end": 288,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 265,
                  "end": 286,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 276,
                    "end": 286,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 278,
                        "end": 284,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 278,
                          "end": 279,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 281,
                          "end": 284,
                          "value": "a",
                          "raw": "\"a\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 290,
        "end": 293,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 295,
      "end": 360,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 359,
          "id": {
            "type": "ObjectPattern",
            "start": 299,
            "end": 318,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 301,
                "end": 306,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 302,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 310,
                "end": 318,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 312,
                    "end": 316,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 313,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 313,
                      "end": 316,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 315,
                        "end": 316,
                        "typeName": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 316,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 321,
            "end": 359,
            "properties": [
              {
                "type": "Property",
                "start": 323,
                "end": 357,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 324,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ClassExpression",
                  "start": 326,
                  "end": 357,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 332,
                    "end": 357,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 334,
                        "end": 355,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 341,
                          "end": 342,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "start": 345,
                          "end": 355,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 347,
                              "end": 353,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 347,
                                "end": 348,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 350,
                                "end": 353,
                                "value": "a",
                                "raw": "\"a\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 425,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 424,
          "id": {
            "type": "ObjectPattern",
            "start": 365,
            "end": 418,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 367,
                "end": 406,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 370,
                  "end": 406,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 372,
                    "decorators": [],
                    "name": "c4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ClassExpression",
                    "start": 375,
                    "end": 406,
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 381,
                      "end": 406,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 383,
                          "end": 404,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 390,
                            "end": 391,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 394,
                            "end": 404,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 396,
                                "end": 402,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 396,
                                  "end": 397,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 399,
                                  "end": 402,
                                  "value": "a",
                                  "raw": "\"a\""
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          },
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null
                        }
                      ]
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 418,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 409,
                "end": 418,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 411,
                    "end": 416,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 411,
                      "end": 412,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 413,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 415,
                        "end": 416,
                        "typeName": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 416,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 421,
            "end": 424,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 525,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 524,
          "id": {
            "type": "ObjectPattern",
            "start": 430,
            "end": 483,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 432,
                "end": 471,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 433,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 435,
                  "end": 471,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 437,
                    "decorators": [],
                    "name": "c5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ClassExpression",
                    "start": 440,
                    "end": 471,
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 446,
                      "end": 471,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 448,
                          "end": 469,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 455,
                            "end": 456,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 459,
                            "end": 469,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 461,
                                "end": 467,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 461,
                                  "end": 462,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 464,
                                  "end": 467,
                                  "value": "a",
                                  "raw": "\"a\""
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          },
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null
                        }
                      ]
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 483,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 474,
                "end": 483,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 476,
                    "end": 481,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 477,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 478,
                      "end": 481,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 480,
                        "end": 481,
                        "typeName": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 481,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 486,
            "end": 524,
            "properties": [
              {
                "type": "Property",
                "start": 488,
                "end": 522,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 489,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ClassExpression",
                  "start": 491,
                  "end": 522,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 497,
                    "end": 522,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 499,
                        "end": 520,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 506,
                          "end": 507,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "start": 510,
                          "end": 520,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 512,
                              "end": 518,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 512,
                                "end": 513,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 515,
                                "end": 518,
                                "value": "a",
                                "raw": "\"a\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 526,
      "end": 578,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 577,
          "id": {
            "type": "ArrayPattern",
            "start": 530,
            "end": 541,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 532,
                "end": 534,
                "decorators": [],
                "name": "c6",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 536,
              "end": 541,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 538,
                "end": 541,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 539,
                    "end": 540,
                    "typeName": {
                      "type": "Identifier",
                      "start": 539,
                      "end": 540,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 544,
            "end": 577,
            "elements": [
              {
                "type": "ClassExpression",
                "start": 545,
                "end": 576,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 551,
                  "end": 576,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 553,
                      "end": 574,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 560,
                        "end": 561,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 564,
                        "end": 574,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 566,
                            "end": 572,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 566,
                              "end": 567,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 569,
                              "end": 572,
                              "value": "a",
                              "raw": "\"a\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 579,
      "end": 631,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 583,
          "end": 630,
          "id": {
            "type": "ArrayPattern",
            "start": 583,
            "end": 594,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 585,
                "end": 587,
                "decorators": [],
                "name": "c7",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 589,
              "end": 594,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 591,
                "end": 594,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 591,
                  "end": 592,
                  "typeName": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 592,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 597,
            "end": 630,
            "elements": [
              {
                "type": "ClassExpression",
                "start": 598,
                "end": 629,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 604,
                  "end": 629,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 606,
                      "end": 627,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 613,
                        "end": 614,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 617,
                        "end": 627,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 619,
                            "end": 625,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 619,
                              "end": 620,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 622,
                              "end": 625,
                              "value": "a",
                              "raw": "\"a\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 633,
      "end": 689,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 637,
          "end": 688,
          "id": {
            "type": "ArrayPattern",
            "start": 637,
            "end": 683,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 639,
                "end": 675,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 641,
                  "decorators": [],
                  "name": "c8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 644,
                  "end": 675,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 650,
                    "end": 675,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 652,
                        "end": 673,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 659,
                          "end": 660,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "start": 663,
                          "end": 673,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 665,
                              "end": 671,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 665,
                                "end": 666,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 668,
                                "end": 671,
                                "value": "a",
                                "raw": "\"a\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 677,
              "end": 683,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 679,
                "end": 683,
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "start": 680,
                    "end": 682,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 680,
                      "end": 681,
                      "typeName": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 681,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 686,
            "end": 688,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 690,
      "end": 745,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 694,
          "end": 744,
          "id": {
            "type": "ArrayPattern",
            "start": 694,
            "end": 739,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 696,
                "end": 732,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 698,
                  "decorators": [],
                  "name": "c9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 701,
                  "end": 732,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 707,
                    "end": 732,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 709,
                        "end": 730,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 716,
                          "end": 717,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "start": 720,
                          "end": 730,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 722,
                              "end": 728,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 722,
                                "end": 723,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 725,
                                "end": 728,
                                "value": "a",
                                "raw": "\"a\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 734,
              "end": 739,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 736,
                "end": 739,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 736,
                  "end": 737,
                  "typeName": {
                    "type": "Identifier",
                    "start": 736,
                    "end": 737,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 742,
            "end": 744,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 746,
      "end": 834,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 750,
          "end": 833,
          "id": {
            "type": "ArrayPattern",
            "start": 750,
            "end": 797,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 752,
                "end": 789,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 755,
                  "decorators": [],
                  "name": "c10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 758,
                  "end": 789,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 764,
                    "end": 789,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 766,
                        "end": 787,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 773,
                          "end": 774,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "start": 777,
                          "end": 787,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 779,
                              "end": 785,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 779,
                                "end": 780,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 782,
                                "end": 785,
                                "value": "a",
                                "raw": "\"a\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 791,
              "end": 797,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 793,
                "end": 797,
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "start": 794,
                    "end": 796,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 794,
                      "end": 795,
                      "typeName": {
                        "type": "Identifier",
                        "start": 794,
                        "end": 795,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 800,
            "end": 833,
            "elements": [
              {
                "type": "ClassExpression",
                "start": 801,
                "end": 832,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 807,
                  "end": 832,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 809,
                      "end": 830,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 816,
                        "end": 817,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 820,
                        "end": 830,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 822,
                            "end": 828,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 822,
                              "end": 823,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 825,
                              "end": 828,
                              "value": "a",
                              "raw": "\"a\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 835,
      "end": 922,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 839,
          "end": 921,
          "id": {
            "type": "ArrayPattern",
            "start": 839,
            "end": 885,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 841,
                "end": 878,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 844,
                  "decorators": [],
                  "name": "c11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 847,
                  "end": 878,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 853,
                    "end": 878,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 855,
                        "end": 876,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 862,
                          "end": 863,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "start": 866,
                          "end": 876,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 868,
                              "end": 874,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 868,
                                "end": 869,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 871,
                                "end": 874,
                                "value": "a",
                                "raw": "\"a\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 880,
              "end": 885,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 882,
                "end": 885,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 882,
                  "end": 883,
                  "typeName": {
                    "type": "Identifier",
                    "start": 882,
                    "end": 883,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 888,
            "end": 921,
            "elements": [
              {
                "type": "ClassExpression",
                "start": 889,
                "end": 920,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 895,
                  "end": 920,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 897,
                      "end": 918,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 904,
                        "end": 905,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 908,
                        "end": 918,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 910,
                            "end": 916,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 910,
                              "end": 911,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 913,
                              "end": 916,
                              "value": "a",
                              "raw": "\"a\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
