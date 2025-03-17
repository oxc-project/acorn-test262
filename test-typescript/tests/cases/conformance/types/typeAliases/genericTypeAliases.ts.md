__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1127,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Tree",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 15,
        "end": 52,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 15,
            "end": 16,
            "typeName": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 19,
            "end": 52,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 21,
                "end": 35,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 25,
                  "name": "left",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 25,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 27,
                    "end": 34,
                    "typeName": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 31,
                      "name": "Tree",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 31,
                      "end": 34,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 32,
                          "end": 33,
                          "typeName": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 33,
                            "name": "T",
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
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 36,
                "end": 50,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 41,
                  "name": "right",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 43,
                    "end": 50,
                    "typeName": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 47,
                      "name": "Tree",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 47,
                      "end": 50,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 48,
                          "end": 49,
                          "typeName": {
                            "type": "Identifier",
                            "start": 48,
                            "end": 49,
                            "name": "T",
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
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 77,
            "name": "tree",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
                  "name": "Tree",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 69,
                  "end": 77,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 70,
                      "end": 76
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 80,
            "end": 202,
            "properties": [
              {
                "type": "Property",
                "start": 86,
                "end": 186,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 90,
                  "name": "left",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 92,
                  "end": 186,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 102,
                      "end": 109,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 106,
                        "name": "left",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 108,
                        "end": 109,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 119,
                      "end": 179,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 124,
                        "name": "right",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 126,
                        "end": 179,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 140,
                            "end": 147,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 144,
                              "name": "left",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 146,
                              "end": 147,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 161,
                            "end": 169,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 161,
                              "end": 166,
                              "name": "right",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 168,
                              "end": 169,
                              "value": 2,
                              "raw": "2"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 192,
                "end": 200,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 197,
                  "name": "right",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 199,
                  "end": 200,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 205,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 214,
        "name": "Lazy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 216,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
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
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 220,
        "end": 233,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 220,
            "end": 221,
            "typeName": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSFunctionType",
            "start": 225,
            "end": 232,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 256,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 256,
            "name": "ls",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 256,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 256,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 248,
                  "name": "Lazy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 248,
                  "end": 256,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 249,
                      "end": 255
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 271,
      "expression": {
        "type": "AssignmentExpression",
        "start": 258,
        "end": 270,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 258,
          "end": 260,
          "name": "ls",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 263,
          "end": 270,
          "value": "eager",
          "raw": "\"eager\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 290,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 289,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 272,
          "end": 274,
          "name": "ls",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 277,
          "end": 289,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "Literal",
            "start": 283,
            "end": 289,
            "value": "lazy",
            "raw": "\"lazy\""
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 292,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 300,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 300,
        "end": 303,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 301,
            "end": 302,
            "name": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
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
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 306,
        "end": 323,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 306,
            "end": 307,
            "typeName": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 310,
            "end": 323,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 312,
                "end": 321,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 313,
                  "end": 321,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 315,
                    "end": 321,
                    "typeName": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 318,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 318,
                      "end": 321,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 319,
                          "end": 320,
                          "typeName": {
                            "type": "Identifier",
                            "start": 319,
                            "end": 320,
                            "name": "T",
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
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 325,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 330,
        "end": 333,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 333,
        "end": 336,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 334,
            "end": 335,
            "name": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
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
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 339,
        "end": 356,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 339,
            "end": 340,
            "typeName": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 343,
            "end": 356,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 345,
                "end": 354,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 346,
                  "end": 354,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 348,
                    "end": 354,
                    "typeName": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 351,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 351,
                      "end": 354,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 352,
                          "end": 353,
                          "typeName": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 353,
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
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 409,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 398,
                "end": 409,
                "typeName": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 401,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 401,
                  "end": 409,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 402,
                      "end": 408
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 429,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 429,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 418,
                "end": 429,
                "typeName": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 421,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 421,
                  "end": 429,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 422,
                      "end": 428
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 431,
      "end": 437,
      "expression": {
        "type": "AssignmentExpression",
        "start": 431,
        "end": 436,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 431,
          "end": 432,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 435,
          "end": 436,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 438,
      "end": 444,
      "expression": {
        "type": "AssignmentExpression",
        "start": 438,
        "end": 443,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 438,
          "end": 439,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 442,
          "end": 443,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 446,
      "end": 459,
      "expression": {
        "type": "AssignmentExpression",
        "start": 446,
        "end": 458,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 446,
          "end": 447,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 450,
          "end": 458,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 479,
      "expression": {
        "type": "AssignmentExpression",
        "start": 460,
        "end": 478,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 460,
          "end": 461,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 464,
          "end": 478,
          "properties": [
            {
              "type": "Property",
              "start": 466,
              "end": 476,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 466,
                "end": 467,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 469,
                "end": 476,
                "value": "hello",
                "raw": "\"hello\""
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 480,
      "end": 506,
      "expression": {
        "type": "AssignmentExpression",
        "start": 480,
        "end": 505,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 480,
          "end": 481,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 484,
          "end": 505,
          "properties": [
            {
              "type": "Property",
              "start": 486,
              "end": 503,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 486,
                "end": 487,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectExpression",
                "start": 489,
                "end": 503,
                "properties": [
                  {
                    "type": "Property",
                    "start": 491,
                    "end": 501,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 492,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 494,
                      "end": 501,
                      "value": "world",
                      "raw": "\"world\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 508,
      "end": 527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 526,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 526,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 513,
              "end": 526,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 515,
                "end": 526,
                "typeName": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 518,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 518,
                  "end": 526,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 519,
                      "end": 525
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 528,
      "end": 535,
      "expression": {
        "type": "AssignmentExpression",
        "start": 528,
        "end": 534,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 528,
          "end": 529,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 532,
          "end": 534,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 536,
      "end": 550,
      "expression": {
        "type": "AssignmentExpression",
        "start": 536,
        "end": 549,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 536,
          "end": 537,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 540,
          "end": 549,
          "properties": [
            {
              "type": "Property",
              "start": 542,
              "end": 547,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 545,
                "end": 547,
                "value": 42,
                "raw": "42"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 551,
      "end": 572,
      "expression": {
        "type": "AssignmentExpression",
        "start": 551,
        "end": 571,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 551,
          "end": 552,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 555,
          "end": 571,
          "properties": [
            {
              "type": "Property",
              "start": 557,
              "end": 569,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 557,
                "end": 558,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectExpression",
                "start": 560,
                "end": 569,
                "properties": [
                  {
                    "type": "Property",
                    "start": 562,
                    "end": 567,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 563,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 565,
                      "end": 567,
                      "value": 42,
                      "raw": "42"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 574,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 579,
        "end": 586,
        "name": "Strange",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 586,
        "end": 589,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 587,
            "end": 588,
            "name": {
              "type": "Identifier",
              "start": 587,
              "end": 588,
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
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 592,
        "end": 598
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 628,
      "end": 651,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 650,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 650,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 633,
              "end": 650,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 635,
                "end": 650,
                "typeName": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 642,
                  "name": "Strange",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 642,
                  "end": 650,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 643,
                      "end": 649
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 652,
      "end": 664,
      "expression": {
        "type": "AssignmentExpression",
        "start": 652,
        "end": 663,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 652,
          "end": 653,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 656,
          "end": 663,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 666,
      "end": 708,
      "id": {
        "type": "Identifier",
        "start": 676,
        "end": 678,
        "name": "AB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 678,
        "end": 684,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 679,
            "end": 680,
            "name": {
              "type": "Identifier",
              "start": 679,
              "end": 680,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 682,
            "end": 683,
            "name": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "name": "B",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 685,
        "end": 708,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 691,
            "end": 696,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 691,
              "end": 692,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 692,
              "end": 695,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 694,
                "end": 695,
                "typeName": {
                  "type": "Identifier",
                  "start": 694,
                  "end": 695,
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
          },
          {
            "type": "TSPropertySignature",
            "start": 701,
            "end": 706,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 701,
              "end": 702,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 702,
              "end": 705,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 704,
                "end": 705,
                "typeName": {
                  "type": "Identifier",
                  "start": 704,
                  "end": 705,
                  "name": "B",
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
      "start": 710,
      "end": 734,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 719,
        "name": "Pair",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 719,
        "end": 722,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 720,
            "end": 721,
            "name": {
              "type": "Identifier",
              "start": 720,
              "end": 721,
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 725,
        "end": 733,
        "typeName": {
          "type": "Identifier",
          "start": 725,
          "end": 727,
          "name": "AB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 727,
          "end": 733,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 728,
              "end": 729,
              "typeName": {
                "type": "Identifier",
                "start": 728,
                "end": 729,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 731,
              "end": 732,
              "typeName": {
                "type": "Identifier",
                "start": 731,
                "end": 732,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 736,
      "end": 796,
      "id": {
        "type": "Identifier",
        "start": 746,
        "end": 756,
        "name": "TaggedPair",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 768,
          "end": 775,
          "expression": {
            "type": "Identifier",
            "start": 768,
            "end": 772,
            "name": "Pair",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 772,
            "end": 775,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 773,
                "end": 774,
                "typeName": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 774,
                  "name": "T",
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 756,
        "end": 759,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 757,
            "end": 758,
            "name": {
              "type": "Identifier",
              "start": 757,
              "end": 758,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 776,
        "end": 796,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 782,
            "end": 794,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 782,
              "end": 785,
              "name": "tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 785,
              "end": 793,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 787,
                "end": 793
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
      "start": 798,
      "end": 824,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 802,
          "end": 823,
          "id": {
            "type": "Identifier",
            "start": 802,
            "end": 823,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 803,
              "end": 823,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 805,
                "end": 823,
                "typeName": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 815,
                  "name": "TaggedPair",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 815,
                  "end": 823,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 816,
                      "end": 822
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 825,
      "end": 833,
      "expression": {
        "type": "AssignmentExpression",
        "start": 825,
        "end": 832,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 825,
          "end": 828,
          "object": {
            "type": "Identifier",
            "start": 825,
            "end": 826,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 827,
            "end": 828,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 831,
          "end": 832,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 834,
      "end": 842,
      "expression": {
        "type": "AssignmentExpression",
        "start": 834,
        "end": 841,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 834,
          "end": 837,
          "object": {
            "type": "Identifier",
            "start": 834,
            "end": 835,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 836,
            "end": 837,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 840,
          "end": 841,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 843,
      "end": 858,
      "expression": {
        "type": "AssignmentExpression",
        "start": 843,
        "end": 857,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 843,
          "end": 848,
          "object": {
            "type": "Identifier",
            "start": 843,
            "end": 844,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 845,
            "end": 848,
            "name": "tag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 851,
          "end": 857,
          "value": "test",
          "raw": "\"test\""
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 860,
      "end": 951,
      "id": {
        "type": "Identifier",
        "start": 869,
        "end": 870,
        "name": "f",
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
        "start": 876,
        "end": 951,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 882,
            "end": 914,
            "id": {
              "type": "Identifier",
              "start": 887,
              "end": 890,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 890,
              "end": 893,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 891,
                  "end": 892,
                  "name": {
                    "type": "Identifier",
                    "start": 891,
                    "end": 892,
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
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 896,
              "end": 913,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 896,
                  "end": 897,
                  "typeName": {
                    "type": "Identifier",
                    "start": 896,
                    "end": 897,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 900,
                  "end": 913,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 902,
                      "end": 911,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 902,
                        "end": 903,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 903,
                        "end": 911,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 905,
                          "end": 911,
                          "typeName": {
                            "type": "Identifier",
                            "start": 905,
                            "end": 908,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 908,
                            "end": 911,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 909,
                                "end": 910,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 909,
                                  "end": 910,
                                  "name": "T",
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
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 919,
            "end": 935,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 923,
                "end": 934,
                "id": {
                  "type": "Identifier",
                  "start": 923,
                  "end": 934,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 924,
                    "end": 934,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 926,
                      "end": 934,
                      "typeName": {
                        "type": "Identifier",
                        "start": 926,
                        "end": 929,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 929,
                        "end": 934,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 930,
                            "end": 933,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 930,
                              "end": 931,
                              "typeName": {
                                "type": "Identifier",
                                "start": 930,
                                "end": 931,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 940,
            "end": 949,
            "argument": {
              "type": "Identifier",
              "start": 947,
              "end": 948,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 870,
        "end": 873,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 871,
            "end": 872,
            "name": {
              "type": "Identifier",
              "start": 871,
              "end": 872,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 953,
      "end": 1044,
      "id": {
        "type": "Identifier",
        "start": 962,
        "end": 963,
        "name": "g",
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
        "start": 969,
        "end": 1044,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 975,
            "end": 1007,
            "id": {
              "type": "Identifier",
              "start": 980,
              "end": 983,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 983,
              "end": 986,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 984,
                  "end": 985,
                  "name": {
                    "type": "Identifier",
                    "start": 984,
                    "end": 985,
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
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 989,
              "end": 1006,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 989,
                  "end": 990,
                  "typeName": {
                    "type": "Identifier",
                    "start": 989,
                    "end": 990,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 993,
                  "end": 1006,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 995,
                      "end": 1004,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 995,
                        "end": 996,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 996,
                        "end": 1004,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 998,
                          "end": 1004,
                          "typeName": {
                            "type": "Identifier",
                            "start": 998,
                            "end": 1001,
                            "name": "Bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1001,
                            "end": 1004,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1002,
                                "end": 1003,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1002,
                                  "end": 1003,
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
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1012,
            "end": 1028,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1016,
                "end": 1027,
                "id": {
                  "type": "Identifier",
                  "start": 1016,
                  "end": 1027,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1017,
                    "end": 1027,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1019,
                      "end": 1027,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1022,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1022,
                        "end": 1027,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 1023,
                            "end": 1026,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 1023,
                              "end": 1024,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1023,
                                "end": 1024,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1033,
            "end": 1042,
            "argument": {
              "type": "Identifier",
              "start": 1040,
              "end": 1041,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 963,
        "end": 966,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 964,
            "end": 965,
            "name": {
              "type": "Identifier",
              "start": 964,
              "end": 965,
              "name": "B",
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
      "type": "VariableDeclaration",
      "start": 1078,
      "end": 1098,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1082,
          "end": 1097,
          "id": {
            "type": "Identifier",
            "start": 1082,
            "end": 1083,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1086,
            "end": 1097,
            "callee": {
              "type": "Identifier",
              "start": 1086,
              "end": 1087,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1087,
              "end": 1095,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1088,
                  "end": 1094
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1099,
      "end": 1119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1103,
          "end": 1118,
          "id": {
            "type": "Identifier",
            "start": 1103,
            "end": 1104,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1107,
            "end": 1118,
            "callee": {
              "type": "Identifier",
              "start": 1107,
              "end": 1108,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1108,
              "end": 1116,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1109,
                  "end": 1115
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1120,
      "end": 1126,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1120,
        "end": 1125,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1120,
          "end": 1121,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1124,
          "end": 1125,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
