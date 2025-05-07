__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 450,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 188,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 188,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 53,
            "end": 71,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 57,
                "end": 70,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 70,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 65,
                      "end": 70,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 65,
                          "end": 66,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 69,
                          "end": 70,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 70,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
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
            "start": 76,
            "end": 90,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 76,
              "end": 89,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 76,
                "end": 80,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 109,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 95,
              "end": 108,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 95,
                "end": 99,
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 102,
                "end": 108,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 128,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 114,
              "end": 127,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 114,
                "end": 120,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 127,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 143,
            "end": 157,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 143,
              "end": 156,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 143,
                "end": 149,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 152,
                "end": 156,
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 172,
            "end": 186,
            "argument": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "extend",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 29,
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 29,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 29,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
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
          "start": 31,
          "end": 38,
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 38,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 37,
              "end": 38,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 39,
        "end": 46,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 41,
          "end": 46,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 41,
              "end": 42,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 45,
              "end": 46,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "type": "VariableDeclaration",
      "start": 190,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 231,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 198,
            "end": 231,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 205,
                "end": 219,
                "properties": [
                  {
                    "type": "Property",
                    "start": 207,
                    "end": 217,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 210,
                      "end": 217,
                      "raw": "\"hello\"",
                      "value": "hello",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 221,
                "end": 230,
                "properties": [
                  {
                    "type": "Property",
                    "start": 223,
                    "end": 228,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 226,
                      "end": 228,
                      "raw": "42",
                      "value": 42,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 198,
              "end": 204,
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 244,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 238,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 241,
            "end": 244,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 254,
            "end": 257,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 260,
      "end": 288,
      "body": {
        "type": "TSInterfaceBody",
        "start": 275,
        "end": 288,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 281,
            "end": 286,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
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
              "start": 282,
              "end": 285,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 285,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 271,
        "end": 274,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 272,
            "end": 273,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
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
      "type": "TSInterfaceDeclaration",
      "start": 290,
      "end": 318,
      "body": {
        "type": "TSInterfaceBody",
        "start": 305,
        "end": 318,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 311,
            "end": 316,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 314,
                "end": 315,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 315,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 301,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 301,
        "end": 304,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 302,
            "end": 303,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
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
      "type": "FunctionDeclaration",
      "start": 320,
      "end": 389,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 389,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 370,
            "end": 387,
            "argument": {
              "type": "Identifier",
              "start": 377,
              "end": 386,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 332,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 339,
          "end": 355,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 355,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 344,
              "end": 355,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 344,
                  "end": 348,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 345,
                    "end": 348,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 346,
                        "end": 347,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 347,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 351,
                  "end": 355,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 352,
                    "end": 355,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 353,
                        "end": 354,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 353,
                          "end": 354,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 352,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 356,
        "end": 363,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 358,
          "end": 363,
          "types": [
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 362,
              "end": 363,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 362,
                "end": 363,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 332,
        "end": 338,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 333,
            "end": 334,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 336,
            "end": 337,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
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
      "type": "VariableDeclaration",
      "start": 391,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 425,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 399,
            "end": 425,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 403,
                "end": 424,
                "properties": [
                  {
                    "type": "Property",
                    "start": 405,
                    "end": 415,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 406,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 408,
                      "end": 415,
                      "raw": "\"hello\"",
                      "value": "hello",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 417,
                    "end": 422,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 418,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 420,
                      "end": 422,
                      "raw": "42",
                      "value": 42,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 399,
              "end": 402,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 449,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 449,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 432,
              "end": 449,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 434,
                "end": 449,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 434,
                    "end": 440
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 443,
                    "end": 449
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
