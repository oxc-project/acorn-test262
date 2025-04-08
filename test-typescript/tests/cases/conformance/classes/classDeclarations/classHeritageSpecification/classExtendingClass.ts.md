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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 42,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 36,
              "name": "thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 42,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 42,
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
            "start": 47,
            "end": 65,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 59,
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 65,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 65,
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
      "type": "ClassDeclaration",
      "start": 69,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 107,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 105,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "start": 109,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "name": "d",
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
                  "name": "D",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 127,
            "end": 132,
            "object": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "name": "foo",
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
      "start": 134,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 140,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 143,
            "end": 148,
            "object": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "name": "bar",
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
      "start": 150,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 156,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 166,
                "name": "thing",
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
      "start": 170,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 176,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "name": "other",
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
      "type": "ClassDeclaration",
      "start": 191,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 268,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 216,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 236,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 226,
              "name": "thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 226,
              "end": 236,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 231,
                  "name": "x",
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
                "start": 233,
                "end": 236,
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
            "start": 241,
            "end": 266,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 253,
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 253,
              "end": 266,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 257,
                  "end": 261,
                  "name": "x",
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
                "start": 263,
                "end": 266,
                "body": []
              },
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 270,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 278,
        "name": "D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 290,
        "end": 292,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 296,
        "end": 316,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 302,
            "end": 314,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 302,
              "end": 305,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
      "implements": [],
      "abstract": false,
      "declare": false,
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
      "type": "VariableDeclaration",
      "start": 318,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 336,
            "name": "d2",
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
                  "name": "D2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 338,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 347,
            "end": 353,
            "object": {
              "type": "Identifier",
              "start": 347,
              "end": 349,
              "name": "d2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 350,
              "end": 353,
              "name": "foo",
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
      "start": 355,
      "end": 371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 364,
            "end": 370,
            "object": {
              "type": "Identifier",
              "start": 364,
              "end": 366,
              "name": "d2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 367,
              "end": 370,
              "name": "bar",
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
      "start": 372,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 393,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 378,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "d2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 384,
                "end": 389,
                "name": "thing",
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
                "start": 390,
                "end": 392,
                "value": "",
                "raw": "''"
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
      "start": 395,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 399,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 399,
            "end": 401,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "D2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 407,
                "end": 412,
                "name": "other",
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
                "start": 413,
                "end": 414,
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
