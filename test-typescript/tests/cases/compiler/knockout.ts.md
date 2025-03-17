__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 447,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 2,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "ko",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 202,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 140,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 32,
              "end": 140,
              "id": {
                "type": "Identifier",
                "start": 42,
                "end": 52,
                "name": "Observable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 52,
                "end": 55,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 54,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
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
                "start": 56,
                "end": 140,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 63,
                    "end": 69,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 67,
                        "end": 68,
                        "typeName": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 68,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 75,
                    "end": 91,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 76,
                        "end": 84,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 81,
                          "end": 84,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 83,
                            "end": 84,
                            "typeName": {
                              "type": "Identifier",
                              "start": 83,
                              "end": 84,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 87,
                        "end": 90
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 97,
                    "end": 107,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "name": "N",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 98,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 100,
                        "end": 106
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 113,
                    "end": 124,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 114,
                      "end": 123,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 116,
                        "end": 123
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 130,
                    "end": 135,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "name": "r",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 131,
                      "end": 134,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 133,
                        "end": 134,
                        "typeName": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 144,
            "end": 199,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 151,
              "end": 199,
              "id": {
                "type": "Identifier",
                "start": 160,
                "end": 170,
                "name": "observable",
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
                  "start": 174,
                  "end": 182,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 179,
                    "end": 182,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 181,
                      "end": 182,
                      "typeName": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 182,
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
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 170,
                "end": 173,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 171,
                    "end": 172,
                    "name": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 183,
                "end": 198,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 185,
                  "end": 198,
                  "typeName": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 195,
                    "name": "Observable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 195,
                    "end": 198,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 196,
                        "end": 197,
                        "typeName": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 197,
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
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 212,
            "end": 277,
            "properties": [
              {
                "type": "Property",
                "start": 219,
                "end": 245,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 223,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "CallExpression",
                  "start": 225,
                  "end": 245,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 225,
                    "end": 238,
                    "object": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 227,
                      "name": "ko",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 238,
                      "name": "observable",
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
                      "start": 239,
                      "end": 244,
                      "value": "Bob",
                      "raw": "\"Bob\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 252,
                "end": 274,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 255,
                  "name": "age",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "CallExpression",
                  "start": 257,
                  "end": 274,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 257,
                    "end": 270,
                    "object": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 259,
                      "name": "ko",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 270,
                      "name": "observable",
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
                      "start": 271,
                      "end": 273,
                      "value": 37,
                      "raw": "37"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 279,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 286,
            "name": "x_v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 289,
            "end": 304,
            "object": {
              "type": "CallExpression",
              "start": 289,
              "end": 297,
              "callee": {
                "type": "MemberExpression",
                "start": 289,
                "end": 295,
                "object": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 295,
                  "name": "name",
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
            "property": {
              "type": "Identifier",
              "start": 298,
              "end": 304,
              "name": "length",
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
      "start": 306,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 325,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 315,
            "name": "age_v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 318,
            "end": 325,
            "callee": {
              "type": "MemberExpression",
              "start": 318,
              "end": 323,
              "object": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 320,
                "end": 323,
                "name": "age",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 338,
            "name": "name_v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 341,
            "end": 357,
            "callee": {
              "type": "MemberExpression",
              "start": 341,
              "end": 347,
              "object": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 343,
                "end": 347,
                "name": "name",
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
                "start": 348,
                "end": 356,
                "value": "Robert",
                "raw": "\"Robert\""
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
      "start": 360,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 368,
            "name": "zz_v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 371,
            "end": 379,
            "object": {
              "type": "MemberExpression",
              "start": 371,
              "end": 377,
              "object": {
                "type": "Identifier",
                "start": 371,
                "end": 372,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 373,
                "end": 377,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "name": "N",
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
      "start": 382,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 390,
            "name": "yy_v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 393,
            "end": 401,
            "object": {
              "type": "MemberExpression",
              "start": 393,
              "end": 399,
              "object": {
                "type": "Identifier",
                "start": 393,
                "end": 394,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 395,
                "end": 399,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "name": "g",
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
      "start": 404,
      "end": 424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 423,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 412,
            "name": "rr_v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 415,
            "end": 423,
            "object": {
              "type": "MemberExpression",
              "start": 415,
              "end": 421,
              "object": {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 417,
                "end": 421,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "name": "r",
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
      "start": 426,
      "end": 446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 445,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 434,
            "name": "dd_v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 437,
            "end": 445,
            "object": {
              "type": "MemberExpression",
              "start": 437,
              "end": 443,
              "object": {
                "type": "Identifier",
                "start": 437,
                "end": 438,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 439,
                "end": 443,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "name": "d",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
