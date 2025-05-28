__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 590,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 191,
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
        "end": 191,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 40,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 40,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 40,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 64,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 189,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 79,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 79,
              "end": 189,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 189,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 149,
                    "end": 162,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 153,
                        "end": 161,
                        "id": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 154,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 157,
                          "end": 161
                        },
                        "definite": false
                      }
                    ],
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
      "type": "VariableDeclaration",
      "start": 193,
      "end": 209,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 198,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 206,
                "decorators": [],
                "name": "bar",
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
      "start": 220,
      "end": 239,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 238,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 226,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 234,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 257,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 256,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 246,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 251,
                "end": 254,
                "decorators": [],
                "name": "bar",
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
      "start": 258,
      "end": 276,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 264,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 267,
            "end": 275,
            "callee": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 273,
                "end": 274,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 278,
      "end": 498,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
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
        "start": 290,
        "end": 498,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 296,
            "end": 316,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 321,
            "end": 347,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 321,
              "end": 332,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 347,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 333,
                  "end": 342,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 334,
                    "end": 342,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 336,
                      "end": 342
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 344,
                "end": 347,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 352,
            "end": 371,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 359,
              "end": 362,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 376,
            "end": 496,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 386,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 386,
              "end": 496,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 389,
                "end": 496,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 456,
                    "end": 469,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 460,
                        "end": 468,
                        "id": {
                          "type": "Identifier",
                          "start": 460,
                          "end": 461,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 464,
                          "end": 468
                        },
                        "definite": false
                      }
                    ],
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
      "type": "VariableDeclaration",
      "start": 500,
      "end": 518,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 506,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 512,
                "end": 515,
                "decorators": [],
                "name": "bar",
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
      "start": 529,
      "end": 549,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 548,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 535,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 541,
                "end": 544,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 550,
      "end": 568,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 554,
          "end": 567,
          "id": {
            "type": "Identifier",
            "start": 554,
            "end": 556,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 562,
                "end": 565,
                "decorators": [],
                "name": "bar",
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
      "start": 569,
      "end": 589,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 588,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 575,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 578,
            "end": 588,
            "callee": {
              "type": "Identifier",
              "start": 582,
              "end": 584,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 585,
                "end": 587,
                "value": "",
                "raw": "''"
              }
            ]
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
