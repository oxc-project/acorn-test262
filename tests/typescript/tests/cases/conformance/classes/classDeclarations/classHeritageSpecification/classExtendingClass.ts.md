__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 416,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 42,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 36,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 42,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 42,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 65,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 59,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 65,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 65,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 107,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 107,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 105,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              }
            },
            "value": null,
            "computed": false,
            "static": false,
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
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 118,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "D",
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
      "start": 119,
      "end": 133,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 127,
            "end": 132,
            "object": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 149,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 140,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 143,
            "end": 148,
            "object": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 156,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 159,
            "end": 168,
            "callee": {
              "type": "MemberExpression",
              "start": 159,
              "end": 166,
              "object": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 166,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 189,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 176,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 179,
            "end": 188,
            "callee": {
              "type": "MemberExpression",
              "start": 179,
              "end": 186,
              "object": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 191,
      "end": 268,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 199,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 268,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 216,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 215,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 214,
                "end": 215,
                "typeName": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 236,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 226,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 226,
              "end": 236,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 231,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 230,
                      "end": 231,
                      "typeName": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 231,
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
                "type": "BlockStatement",
                "start": 233,
                "end": 236,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 241,
            "end": 266,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 253,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 253,
              "end": 266,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 253,
                "end": 256,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 254,
                    "end": 255,
                    "name": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
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
                  "start": 257,
                  "end": 261,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 258,
                    "end": 261,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 260,
                      "end": 261,
                      "typeName": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
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
                "type": "BlockStatement",
                "start": 263,
                "end": 266,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 270,
      "end": 316,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 278,
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 278,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 279,
            "end": 280,
            "name": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
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
      "superClass": {
        "type": "Identifier",
        "start": 290,
        "end": 292,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 292,
        "end": 295,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 293,
            "end": 294,
            "typeName": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 296,
        "end": 316,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 302,
            "end": 314,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 302,
              "end": 305,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 313,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 307,
                "end": 313
              }
            },
            "value": null,
            "computed": false,
            "static": false,
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
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 337,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 336,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 326,
                "end": 336,
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 328,
                  "decorators": [],
                  "name": "D2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 328,
                  "end": 336,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 329,
                      "end": 335
                    }
                  ]
                }
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
      "start": 338,
      "end": 354,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 347,
            "end": 353,
            "object": {
              "type": "Identifier",
              "start": 347,
              "end": 349,
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 350,
              "end": 353,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 371,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 364,
            "end": 370,
            "object": {
              "type": "Identifier",
              "start": 364,
              "end": 366,
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 367,
              "end": 370,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 394,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 393,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 378,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 381,
            "end": 393,
            "callee": {
              "type": "MemberExpression",
              "start": 381,
              "end": 389,
              "object": {
                "type": "Identifier",
                "start": 381,
                "end": 383,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 384,
                "end": 389,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 390,
                "end": 392,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 395,
      "end": 416,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 399,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 399,
            "end": 401,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 404,
            "end": 415,
            "callee": {
              "type": "MemberExpression",
              "start": 404,
              "end": 412,
              "object": {
                "type": "Identifier",
                "start": 404,
                "end": 406,
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 407,
                "end": 412,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 413,
                "end": 414,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
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
