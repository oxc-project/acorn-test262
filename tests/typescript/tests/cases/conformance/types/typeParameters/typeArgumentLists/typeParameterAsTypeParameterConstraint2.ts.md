__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 124,
  "end": 490,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 124,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 136,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 136,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 138,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 150,
              "end": 151,
              "typeName": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 153,
          "end": 157,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 154,
            "end": 157,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 156,
              "end": 157,
              "typeName": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 159,
          "end": 163,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 162,
              "end": 163,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 164,
        "end": 167,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 166,
          "end": 167,
          "typeName": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 181,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 170,
            "end": 179,
            "argument": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 218,
      "expression": {
        "type": "CallExpression",
        "start": 207,
        "end": 217,
        "callee": {
          "type": "Identifier",
          "start": 207,
          "end": 210,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 211,
            "end": 212,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 214,
            "end": 216,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 219,
        "end": 229,
        "callee": {
          "type": "Identifier",
          "start": 219,
          "end": 222,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 223,
            "end": 224,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ObjectExpression",
            "start": 226,
            "end": 228,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 232,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 255,
        "decorators": [],
        "name": "NumberVariant",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 264,
          "end": 270,
          "expression": {
            "type": "Identifier",
            "start": 264,
            "end": 270,
            "decorators": [],
            "name": "Number",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 271,
        "end": 289,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 277,
            "end": 287,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 280,
                "end": 286
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
      "start": 290,
      "end": 311,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 310,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 310,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 310,
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 310,
                  "decorators": [],
                  "name": "NumberVariant",
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
      "start": 312,
      "end": 331,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 330,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 321,
            "end": 330,
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 324,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 325,
                "end": 326,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 328,
                "end": 329,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
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
      "type": "FunctionDeclaration",
      "start": 333,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 346,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 346,
        "end": 374,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 347,
            "end": 348,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 350,
            "end": 373,
            "name": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 360,
              "end": 373,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 362,
                  "end": 371,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 368,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 368,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 370,
                      "end": 371,
                      "typeName": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 371,
                        "decorators": [],
                        "name": "T",
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
            },
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
          "start": 375,
          "end": 379,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 379,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 378,
              "end": 379,
              "typeName": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 381,
          "end": 385,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 382,
            "end": 385,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 384,
              "end": 385,
              "typeName": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
                "decorators": [],
                "name": "U",
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
        "start": 387,
        "end": 400,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 389,
            "end": 398,
            "argument": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 425,
      "end": 449,
      "expression": {
        "type": "CallExpression",
        "start": 425,
        "end": 448,
        "callee": {
          "type": "Identifier",
          "start": 425,
          "end": 429,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 430,
            "end": 431,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ObjectExpression",
            "start": 433,
            "end": 447,
            "properties": [
              {
                "type": "Property",
                "start": 435,
                "end": 445,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 441,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 443,
                  "end": 445,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 474,
      "expression": {
        "type": "CallExpression",
        "start": 450,
        "end": 473,
        "callee": {
          "type": "Identifier",
          "start": 450,
          "end": 454,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 455,
            "end": 456,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ObjectExpression",
            "start": 458,
            "end": 472,
            "properties": [
              {
                "type": "Property",
                "start": 460,
                "end": 470,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 466,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 468,
                  "end": 470,
                  "properties": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 475,
      "end": 490,
      "expression": {
        "type": "CallExpression",
        "start": 475,
        "end": 489,
        "callee": {
          "type": "Identifier",
          "start": 475,
          "end": 479,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 480,
            "end": 482,
            "elements": []
          },
          {
            "type": "ArrayExpression",
            "start": 484,
            "end": 488,
            "elements": [
              {
                "type": "Literal",
                "start": 485,
                "end": 487,
                "value": "",
                "raw": "''"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
