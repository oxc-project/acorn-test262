__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 110,
  "end": 915,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 110,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 122,
        "end": 149,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 128,
            "end": 147,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 130,
                "end": 139,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 131,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 133,
                    "end": 139
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 146,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 142,
                "end": 146
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 159,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 158,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 158,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 190,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 189,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 167,
                "end": 189,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 169,
                    "end": 187,
                    "key": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 171,
                        "end": 180,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 172,
                          "end": 180,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 174,
                            "end": 180
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 183,
                        "end": 187
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 198,
      "expression": {
        "type": "AssignmentExpression",
        "start": 192,
        "end": 197,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 205,
      "expression": {
        "type": "AssignmentExpression",
        "start": 199,
        "end": 204,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 199,
          "end": 200,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 203,
          "end": 204,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 207,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 219,
        "end": 248,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 225,
            "end": 246,
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 227,
                "end": 236,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 228,
                  "end": 236,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 230,
                    "end": 236
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 257,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 257,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 292,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 291,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 291,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 267,
                "end": 291,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 269,
                    "end": 289,
                    "key": {
                      "type": "Identifier",
                      "start": 269,
                      "end": 270,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 271,
                        "end": 280,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 272,
                          "end": 280,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 274,
                            "end": 280
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 281,
                      "end": 289,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 283,
                        "end": 289
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 299,
      "expression": {
        "type": "AssignmentExpression",
        "start": 293,
        "end": 298,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 293,
          "end": 294,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 297,
          "end": 298,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 307,
      "expression": {
        "type": "AssignmentExpression",
        "start": 300,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 300,
          "end": 301,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 304,
          "end": 306,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 314,
      "expression": {
        "type": "AssignmentExpression",
        "start": 308,
        "end": 313,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 308,
          "end": 309,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 322,
      "expression": {
        "type": "AssignmentExpression",
        "start": 315,
        "end": 321,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 315,
          "end": 316,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 319,
          "end": 321,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 343,
      "expression": {
        "type": "AssignmentExpression",
        "start": 324,
        "end": 342,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 324,
          "end": 325,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 328,
          "end": 342,
          "properties": [
            {
              "type": "Property",
              "start": 330,
              "end": 340,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 333,
                "end": 340,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 339,
                  "end": 340,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
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
      "type": "ExpressionStatement",
      "start": 344,
      "end": 369,
      "expression": {
        "type": "AssignmentExpression",
        "start": 344,
        "end": 368,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 344,
          "end": 345,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 348,
          "end": 368,
          "properties": [
            {
              "type": "Property",
              "start": 350,
              "end": 366,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 350,
                "end": 351,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 353,
                "end": 366,
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 353,
                  "end": 356,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 354,
                      "end": 355,
                      "name": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 357,
                    "end": 360,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 358,
                      "end": 360,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 359,
                        "end": 360,
                        "typeName": {
                          "type": "Identifier",
                          "start": 359,
                          "end": 360,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 365,
                  "end": 366,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
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
      "type": "ExpressionStatement",
      "start": 370,
      "end": 407,
      "expression": {
        "type": "AssignmentExpression",
        "start": 370,
        "end": 406,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 370,
          "end": 371,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 374,
          "end": 406,
          "properties": [
            {
              "type": "Property",
              "start": 376,
              "end": 404,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 376,
                "end": 377,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 379,
                "end": 404,
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 389,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 392,
                  "end": 404,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 394,
                      "end": 402,
                      "argument": {
                        "type": "Literal",
                        "start": 401,
                        "end": 402,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "expression": false
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
      "type": "ExpressionStatement",
      "start": 408,
      "end": 443,
      "expression": {
        "type": "AssignmentExpression",
        "start": 408,
        "end": 443,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 408,
          "end": 409,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 412,
          "end": 443,
          "properties": [
            {
              "type": "Property",
              "start": 414,
              "end": 441,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 414,
                "end": 415,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 415,
                "end": 441,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 416,
                    "end": 425,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 417,
                      "end": 425,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 419,
                        "end": 425
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 427,
                  "end": 441,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 429,
                      "end": 439,
                      "argument": {
                        "type": "Literal",
                        "start": 436,
                        "end": 438,
                        "value": "",
                        "raw": "''"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": true,
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
      "type": "ExpressionStatement",
      "start": 444,
      "end": 462,
      "expression": {
        "type": "AssignmentExpression",
        "start": 444,
        "end": 462,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 444,
          "end": 445,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 448,
          "end": 462,
          "properties": [
            {
              "type": "Property",
              "start": 450,
              "end": 460,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 450,
                "end": 451,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 453,
                "end": 460,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 459,
                  "end": 460,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
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
      "type": "ExpressionStatement",
      "start": 463,
      "end": 489,
      "expression": {
        "type": "AssignmentExpression",
        "start": 463,
        "end": 488,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 463,
          "end": 464,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 467,
          "end": 488,
          "properties": [
            {
              "type": "Property",
              "start": 469,
              "end": 486,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 469,
                "end": 470,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 472,
                "end": 486,
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 472,
                  "end": 475,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 473,
                      "end": 474,
                      "name": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 474,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 476,
                    "end": 480,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 477,
                      "end": 480,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 479,
                        "end": 480,
                        "typeName": {
                          "type": "Identifier",
                          "start": 479,
                          "end": 480,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 485,
                  "end": 486,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
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
      "type": "ExpressionStatement",
      "start": 490,
      "end": 536,
      "expression": {
        "type": "AssignmentExpression",
        "start": 490,
        "end": 536,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 490,
          "end": 491,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 494,
          "end": 536,
          "properties": [
            {
              "type": "Property",
              "start": 496,
              "end": 534,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 496,
                "end": 497,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 499,
                "end": 534,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 509,
                    "end": 518,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 510,
                      "end": 518,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 512,
                        "end": 518
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 520,
                  "end": 534,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 522,
                      "end": 532,
                      "argument": {
                        "type": "Literal",
                        "start": 529,
                        "end": 531,
                        "value": "",
                        "raw": "''"
                      }
                    }
                  ]
                },
                "expression": false
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
      "type": "ExpressionStatement",
      "start": 548,
      "end": 560,
      "expression": {
        "type": "AssignmentExpression",
        "start": 548,
        "end": 559,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 548,
          "end": 549,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 552,
          "end": 559,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 558,
            "end": 559,
            "value": 1,
            "raw": "1"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 561,
      "end": 600,
      "expression": {
        "type": "AssignmentExpression",
        "start": 561,
        "end": 600,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 561,
          "end": 562,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 565,
          "end": 600,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 575,
              "end": 584,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 576,
                "end": 584,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 578,
                  "end": 584
                }
              }
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 586,
            "end": 600,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 588,
                "end": 598,
                "argument": {
                  "type": "Literal",
                  "start": 595,
                  "end": 597,
                  "value": "",
                  "raw": "''"
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 601,
      "end": 613,
      "expression": {
        "type": "AssignmentExpression",
        "start": 601,
        "end": 612,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 601,
          "end": 602,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 605,
          "end": 612,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 611,
            "end": 612,
            "value": 1,
            "raw": "1"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 614,
      "end": 653,
      "expression": {
        "type": "AssignmentExpression",
        "start": 614,
        "end": 653,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 614,
          "end": 615,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 618,
          "end": 653,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 628,
              "end": 637,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 629,
                "end": 637,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 631,
                  "end": 637
                }
              }
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 639,
            "end": 653,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 641,
                "end": 651,
                "argument": {
                  "type": "Literal",
                  "start": 648,
                  "end": 650,
                  "value": "",
                  "raw": "''"
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 655,
      "end": 695,
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 667,
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 668,
        "end": 695,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 674,
            "end": 693,
            "key": {
              "type": "Identifier",
              "start": 674,
              "end": 675,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 676,
                "end": 685,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 677,
                  "end": 685,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 679,
                    "end": 685
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 686,
              "end": 692,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 688,
                "end": 692
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 696,
      "end": 707,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 700,
          "end": 706,
          "id": {
            "type": "Identifier",
            "start": 700,
            "end": 706,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 702,
              "end": 706,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 704,
                "end": 706,
                "typeName": {
                  "type": "Identifier",
                  "start": 704,
                  "end": 706,
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 708,
      "end": 739,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 712,
          "end": 738,
          "id": {
            "type": "Identifier",
            "start": 712,
            "end": 738,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 714,
              "end": 738,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 716,
                "end": 738,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 718,
                    "end": 736,
                    "key": {
                      "type": "Identifier",
                      "start": 718,
                      "end": 719,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 720,
                        "end": 729,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 721,
                          "end": 729,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 723,
                            "end": 729
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 730,
                      "end": 736,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 732,
                        "end": 736
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 760,
      "end": 767,
      "expression": {
        "type": "AssignmentExpression",
        "start": 760,
        "end": 766,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 760,
          "end": 761,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 764,
          "end": 766,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 768,
      "end": 775,
      "expression": {
        "type": "AssignmentExpression",
        "start": 768,
        "end": 774,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 768,
          "end": 769,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 772,
          "end": 774,
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 776,
      "end": 797,
      "expression": {
        "type": "AssignmentExpression",
        "start": 776,
        "end": 796,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 776,
          "end": 777,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 780,
          "end": 796,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 781,
              "end": 790,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 782,
                "end": 790,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 784,
                  "end": 790
                }
              }
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 795,
            "end": 796,
            "value": 1,
            "raw": "1"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 798,
      "end": 837,
      "expression": {
        "type": "AssignmentExpression",
        "start": 798,
        "end": 837,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 798,
          "end": 799,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 802,
          "end": 837,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 812,
              "end": 821,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 813,
                "end": 821,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 815,
                  "end": 821
                }
              }
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 823,
            "end": 837,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 825,
                "end": 835,
                "argument": {
                  "type": "Literal",
                  "start": 832,
                  "end": 834,
                  "value": "",
                  "raw": "''"
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 838,
      "end": 845,
      "expression": {
        "type": "AssignmentExpression",
        "start": 838,
        "end": 844,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 838,
          "end": 839,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 842,
          "end": 844,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 846,
      "end": 853,
      "expression": {
        "type": "AssignmentExpression",
        "start": 846,
        "end": 852,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 846,
          "end": 847,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 850,
          "end": 852,
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 854,
      "end": 875,
      "expression": {
        "type": "AssignmentExpression",
        "start": 854,
        "end": 874,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 854,
          "end": 855,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 858,
          "end": 874,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 859,
              "end": 868,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 860,
                "end": 868,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 862,
                  "end": 868
                }
              }
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 873,
            "end": 874,
            "value": 1,
            "raw": "1"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 876,
      "end": 915,
      "expression": {
        "type": "AssignmentExpression",
        "start": 876,
        "end": 915,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 876,
          "end": 877,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 880,
          "end": 915,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 890,
              "end": 899,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 891,
                "end": 899,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 893,
                  "end": 899
                }
              }
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 901,
            "end": 915,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 903,
                "end": 913,
                "argument": {
                  "type": "Literal",
                  "start": 910,
                  "end": 912,
                  "value": "",
                  "raw": "''"
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
