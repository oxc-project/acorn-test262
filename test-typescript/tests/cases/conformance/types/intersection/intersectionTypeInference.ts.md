__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 451,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "extend",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 29,
          "name": "obj1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 29,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 29,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
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
        },
        {
          "type": "Identifier",
          "start": 31,
          "end": 38,
          "name": "obj2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 38,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 37,
              "end": 38,
              "typeName": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "U",
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
                "id": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 70,
                  "name": "result",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 69,
                          "end": 70,
                          "typeName": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 70,
                            "name": "U",
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
            "start": 76,
            "end": 90,
            "expression": {
              "type": "AssignmentExpression",
              "start": 76,
              "end": 89,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 76,
                "end": 80,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 109,
            "expression": {
              "type": "AssignmentExpression",
              "start": 95,
              "end": 108,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 95,
                "end": 99,
                "name": "obj2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 102,
                "end": 108,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 128,
            "expression": {
              "type": "AssignmentExpression",
              "start": 114,
              "end": 127,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 114,
                "end": 120,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 127,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 143,
            "end": 157,
            "expression": {
              "type": "AssignmentExpression",
              "start": 143,
              "end": 156,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 143,
                "end": 149,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 152,
                "end": 156,
                "name": "obj2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 172,
            "end": 186,
            "argument": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "name": "result",
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
        "start": 15,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 45,
              "end": 46,
              "typeName": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
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
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 198,
            "end": 231,
            "callee": {
              "type": "Identifier",
              "start": 198,
              "end": 204,
              "name": "extend",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 210,
                      "end": 217,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 226,
                      "end": 228,
                      "value": 42,
                      "raw": "42"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
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
      "start": 233,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 244,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 238,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 241,
            "end": 244,
            "object": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 254,
            "end": 257,
            "object": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 260,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 271,
        "end": 274,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 272,
            "end": 273,
            "name": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
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
        "start": 275,
        "end": 288,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 281,
            "end": 286,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 285,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 285,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "name": "T",
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
      "type": "TSInterfaceDeclaration",
      "start": 290,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 301,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 301,
        "end": 304,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 302,
            "end": 303,
            "name": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 305,
        "end": 318,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 311,
            "end": 316,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 314,
                "end": 315,
                "typeName": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 315,
                  "name": "U",
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
      "type": "FunctionDeclaration",
      "start": 320,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 332,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 339,
          "end": 355,
          "name": "obj",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 345,
                    "end": 348,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 346,
                        "end": 347,
                        "typeName": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 347,
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
                {
                  "type": "TSTypeReference",
                  "start": 351,
                  "end": 355,
                  "typeName": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 352,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 352,
                    "end": 355,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 353,
                        "end": 354,
                        "typeName": {
                          "type": "Identifier",
                          "start": 353,
                          "end": 354,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "undefined",
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
        "start": 332,
        "end": 338,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 333,
            "end": 334,
            "name": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 336,
            "end": 337,
            "name": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
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
              "typeName": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 362,
              "end": 363,
              "typeName": {
                "type": "Identifier",
                "start": 362,
                "end": 363,
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
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 399,
            "end": 425,
            "callee": {
              "type": "Identifier",
              "start": 399,
              "end": 402,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 406,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 408,
                      "end": 415,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 417,
                    "end": 422,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 418,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 420,
                      "end": 422,
                      "value": 42,
                      "raw": "42"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
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
      "start": 427,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 449,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 449,
            "name": "z",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
