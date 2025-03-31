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
          "start": 153,
          "end": 157,
          "name": "x",
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
          "start": 159,
          "end": 163,
          "name": "y",
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
              "name": "y",
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
            "start": 140,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 150,
              "end": 151,
              "typeName": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        "optional": false,
        "typeArguments": null
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        "optional": false,
        "typeArguments": null
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
        "name": "NumberVariant",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 264,
          "end": 270,
          "expression": {
            "type": "Identifier",
            "start": 264,
            "end": 270,
            "name": "Number",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 310,
            "name": "n",
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
                  "name": "NumberVariant",
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
      "start": 312,
      "end": 331,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 330,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 321,
            "end": 330,
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 324,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "type": "FunctionDeclaration",
      "start": 333,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 346,
        "name": "foo2",
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
          "start": 375,
          "end": 379,
          "name": "x",
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
          "start": 381,
          "end": 385,
          "name": "y",
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
              "name": "y",
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
            "start": 350,
            "end": 373,
            "name": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 441,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 443,
                  "end": 445,
                  "value": "",
                  "raw": "''"
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
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 466,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 468,
                  "end": 470,
                  "properties": []
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
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
