__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 609,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 41,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 99,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 99,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 99,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 93,
                    "argument": {
                      "type": "Literal",
                      "start": 90,
                      "end": 92,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 64,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 66,
                  "end": 72
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 140,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 140,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 140,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 138,
                    "argument": {
                      "type": "Literal",
                      "start": 136,
                      "end": 137,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 171,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 171,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 171,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 208,
      "end": 402,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 235,
        "end": 402,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 241,
            "end": 266,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 265,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 259,
                "end": 265
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 272,
            "end": 326,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 289,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 326,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 300,
                "end": 326,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 310,
                    "end": 320,
                    "argument": {
                      "type": "Literal",
                      "start": 317,
                      "end": 319,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 291,
                "end": 299,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 293,
                  "end": 299
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 332,
            "end": 368,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 368,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 355,
                "end": 368,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 357,
                    "end": 366,
                    "argument": {
                      "type": "Literal",
                      "start": 364,
                      "end": 365,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 373,
            "end": 400,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 393,
              "end": 400,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 397,
                "end": 400,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 221,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 230,
        "end": 234,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 409,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 412,
            "end": 418,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 412,
              "end": 416,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "decorators": [],
              "name": "x",
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
      "start": 426,
      "end": 445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 444,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 432,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 435,
            "end": 444,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 435,
              "end": 442,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "x",
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
      "start": 456,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 462,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 465,
            "end": 474,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 465,
              "end": 472,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 465,
                "end": 469,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 470,
                "end": 472,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 482,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 503,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 488,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 491,
            "end": 503,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 491,
              "end": 501,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 491,
                "end": 498,
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 499,
                "end": 501,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 515,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 530,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 521,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 524,
            "end": 530,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 524,
              "end": 528,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
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
      "type": "ExpressionStatement",
      "start": 538,
      "end": 549,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 538,
        "end": 548,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 538,
          "end": 544,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 538,
            "end": 542,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 547,
          "end": 548,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 557,
      "end": 576,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 575,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 563,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 566,
            "end": 575,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 566,
              "end": 573,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 574,
              "end": 575,
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
      "type": "ExpressionStatement",
      "start": 586,
      "end": 600,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 586,
        "end": 599,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 586,
          "end": 595,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 586,
            "end": 593,
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 594,
            "end": 595,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 598,
          "end": 599,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
