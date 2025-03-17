__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 591,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 191,
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
        "end": 191,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 40,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 40,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 40,
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
            "type": "PropertyDefinition",
            "start": 45,
            "end": 64,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
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
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 57,
                "end": 63
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 189,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 79,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 79,
              "end": 189,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 189,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 149,
                    "end": 162,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 153,
                        "end": 161,
                        "id": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 154,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 157,
                          "end": 161
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 171,
                    "end": 183,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 178,
                      "end": 182
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 193,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 198,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 201,
            "end": 208,
            "callee": {
              "type": "MemberExpression",
              "start": 201,
              "end": 206,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 206,
                "name": "bar",
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
      "start": 220,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 238,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 226,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 229,
            "end": 238,
            "left": {
              "type": "MemberExpression",
              "start": 229,
              "end": 234,
              "object": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 234,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 237,
              "end": 238,
              "value": 1,
              "raw": "1"
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
      "start": 240,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 256,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 246,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 249,
            "end": 256,
            "callee": {
              "type": "MemberExpression",
              "start": 249,
              "end": 254,
              "object": {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 251,
                "end": 254,
                "name": "bar",
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
      "start": 258,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 264,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 267,
            "end": 275,
            "callee": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 273,
                "end": 274,
                "value": 1,
                "raw": "1"
              }
            ],
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
      "start": 278,
      "end": 498,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 290,
        "end": 498,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 296,
            "end": 316,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "name": "test",
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
              "start": 307,
              "end": 315,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 309,
                "end": 315
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 321,
            "end": 347,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 321,
              "end": 332,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 347,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 333,
                  "end": 342,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 334,
                    "end": 342,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 336,
                      "end": 342
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 344,
                "end": 347,
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
            "type": "PropertyDefinition",
            "start": 352,
            "end": 371,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 359,
              "end": 362,
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
              "start": 362,
              "end": 370,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 364,
                "end": 370
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 376,
            "end": 496,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 386,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 386,
              "end": 496,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 389,
                "end": 496,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 456,
                    "end": 469,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 460,
                        "end": 468,
                        "id": {
                          "type": "Identifier",
                          "start": 460,
                          "end": 461,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 464,
                          "end": 468
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 478,
                    "end": 490,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 485,
                      "end": 489
                    }
                  }
                ]
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 286,
        "end": 289,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 287,
            "end": 288,
            "name": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
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
      "type": "VariableDeclaration",
      "start": 500,
      "end": 518,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 506,
            "name": "t2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 509,
            "end": 517,
            "callee": {
              "type": "MemberExpression",
              "start": 509,
              "end": 515,
              "object": {
                "type": "Identifier",
                "start": 509,
                "end": 511,
                "name": "C2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 512,
                "end": 515,
                "name": "bar",
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
      "start": 529,
      "end": 549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 548,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 535,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 538,
            "end": 548,
            "left": {
              "type": "MemberExpression",
              "start": 538,
              "end": 544,
              "object": {
                "type": "Identifier",
                "start": 538,
                "end": 540,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 541,
                "end": 544,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 547,
              "end": 548,
              "value": 1,
              "raw": "1"
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
      "start": 550,
      "end": 568,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 554,
          "end": 567,
          "id": {
            "type": "Identifier",
            "start": 554,
            "end": 556,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 559,
            "end": 567,
            "callee": {
              "type": "MemberExpression",
              "start": 559,
              "end": 565,
              "object": {
                "type": "Identifier",
                "start": 559,
                "end": 561,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 562,
                "end": 565,
                "name": "bar",
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
      "start": 569,
      "end": 589,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 588,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 575,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 578,
            "end": 588,
            "callee": {
              "type": "Identifier",
              "start": 582,
              "end": 584,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 585,
                "end": 587,
                "value": "",
                "raw": "''"
              }
            ],
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
