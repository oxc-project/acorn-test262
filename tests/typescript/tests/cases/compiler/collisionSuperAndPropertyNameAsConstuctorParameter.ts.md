__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 655,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "a",
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
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 111,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 21,
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 109,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 109,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 50,
                  "end": 64,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 58,
                      "end": 64
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 109,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 95,
                    "end": 103,
                    "expression": {
                      "type": "CallExpression",
                      "start": 95,
                      "end": 102,
                      "callee": {
                        "type": "Super",
                        "start": 95,
                        "end": 100
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
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
      "start": 113,
      "end": 219,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 121,
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 217,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 149,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 217,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 150,
                  "end": 172,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 172,
                    "decorators": [],
                    "name": "_super",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 164,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 166,
                        "end": 172
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 174,
                "end": 217,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 203,
                    "end": 211,
                    "expression": {
                      "type": "CallExpression",
                      "start": 203,
                      "end": 210,
                      "callee": {
                        "type": "Super",
                        "start": 203,
                        "end": 208
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
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
      "start": 221,
      "end": 433,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 229,
        "decorators": [],
        "name": "b3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 238,
        "end": 239,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 240,
        "end": 433,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 246,
            "end": 274,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 246,
              "end": 257,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 257,
              "end": 274,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 258,
                  "end": 272,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 264,
                    "end": 272,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 266,
                      "end": 272
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
            "type": "MethodDefinition",
            "start": 305,
            "end": 333,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 316,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 316,
              "end": 333,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 317,
                  "end": 331,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 323,
                    "end": 331,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 325,
                      "end": 331
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
            "type": "MethodDefinition",
            "start": 363,
            "end": 431,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 374,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 374,
              "end": 431,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 375,
                  "end": 386,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 381,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 383,
                      "end": 386
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 388,
                "end": 431,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 417,
                    "end": 425,
                    "expression": {
                      "type": "CallExpression",
                      "start": 417,
                      "end": 424,
                      "callee": {
                        "type": "Super",
                        "start": 417,
                        "end": 422
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
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
      "start": 435,
      "end": 655,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 443,
        "decorators": [],
        "name": "b4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 452,
        "end": 453,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 454,
        "end": 655,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 460,
            "end": 488,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 460,
              "end": 471,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 471,
              "end": 488,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 472,
                  "end": 486,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 478,
                    "end": 486,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 480,
                      "end": 486
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
            "type": "MethodDefinition",
            "start": 519,
            "end": 547,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 530,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 530,
              "end": 547,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 531,
                  "end": 545,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 537,
                    "end": 545,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 539,
                      "end": 545
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
            "type": "MethodDefinition",
            "start": 577,
            "end": 653,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 577,
              "end": 588,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 588,
              "end": 653,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 589,
                  "end": 608,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 608,
                    "decorators": [],
                    "name": "_super",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 603,
                      "end": 608,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 605,
                        "end": 608
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 610,
                "end": 653,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 639,
                    "end": 647,
                    "expression": {
                      "type": "CallExpression",
                      "start": 639,
                      "end": 646,
                      "callee": {
                        "type": "Super",
                        "start": 639,
                        "end": 644
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
