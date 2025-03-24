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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
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
      "start": 13,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 21,
        "name": "b1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 109,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 109,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 50,
                  "end": 64,
                  "name": "_super",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 58,
                      "end": 64
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 113,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 121,
        "name": "b2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 217,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 149,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 217,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "_super",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 164,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 166,
                        "end": 172
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 221,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 229,
        "name": "b3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 238,
        "end": 239,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 240,
        "end": 433,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 246,
            "end": 274,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 246,
              "end": 257,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 257,
              "end": 274,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 258,
                  "end": 272,
                  "name": "_super",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 264,
                    "end": 272,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 266,
                      "end": 272
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 305,
            "end": 333,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 316,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 316,
              "end": 333,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 317,
                  "end": 331,
                  "name": "_super",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 323,
                    "end": 331,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 325,
                      "end": 331
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 363,
            "end": 431,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 374,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 374,
              "end": 431,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 375,
                  "end": 386,
                  "name": "_super",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 381,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 383,
                      "end": 386
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 435,
      "end": 655,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 443,
        "name": "b4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 452,
        "end": 453,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 454,
        "end": 655,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 460,
            "end": 488,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 460,
              "end": 471,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 471,
              "end": 488,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 472,
                  "end": 486,
                  "name": "_super",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 478,
                    "end": 486,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 480,
                      "end": 486
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 519,
            "end": 547,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 530,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 530,
              "end": 547,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 531,
                  "end": 545,
                  "name": "_super",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 537,
                    "end": 545,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 539,
                      "end": 545
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 577,
            "end": 653,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 577,
              "end": 588,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 588,
              "end": 653,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "_super",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 603,
                      "end": 608,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 605,
                        "end": 608
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
