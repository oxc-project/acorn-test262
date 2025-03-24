__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 549,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 159,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 25,
        "decorators": [],
        "name": "LiteralsAndWeakTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 31,
        "end": 158,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 33,
            "end": 36,
            "literal": {
              "type": "Literal",
              "start": 33,
              "end": 36,
              "raw": "'A'",
              "value": "A"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 41,
            "end": 44,
            "literal": {
              "type": "Literal",
              "start": 41,
              "end": 44,
              "raw": "'B'",
              "value": "B"
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 49,
            "end": 68,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 51,
                "end": 66,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 59,
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 62,
                    "end": 66,
                    "literal": {
                      "type": "Literal",
                      "start": 62,
                      "end": 66,
                      "raw": "true",
                      "value": true
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 73,
            "end": 99,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 75,
                "end": 97,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 86,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": true,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 89,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 91,
                    "end": 97
                  }
                },
                "static": false,
                "typeParameters": null
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 104,
            "end": 158,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 106,
                "end": 129,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 117,
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": true,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 120,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 122,
                    "end": 128
                  }
                },
                "static": false,
                "typeParameters": null
              },
              {
                "type": "TSPropertySignature",
                "start": 130,
                "end": 156,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 147,
                  "decorators": [],
                  "name": "otherOptionalProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 171,
            "end": 269,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 202,
              "end": 269,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 208,
                  "end": 267,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 249,
                    "end": 267,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 257,
                        "end": 261,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 260,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 225,
                    "end": 243,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 233,
                        "end": 237,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 236,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 212,
                    "end": 223,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 215,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 220,
                      "end": 223,
                      "raw": "'A'",
                      "value": "A"
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 172,
                "end": 197,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 175,
                  "end": 197,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 177,
                    "end": 197,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 197,
                      "decorators": [],
                      "name": "LiteralsAndWeakTypes",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 271,
      "end": 437,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 298,
        "decorators": [],
        "name": "PrimitivesAndWeakTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 303,
        "end": 436,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 305,
            "end": 311
          },
          {
            "type": "TSNumberKeyword",
            "start": 316,
            "end": 322
          },
          {
            "type": "TSTypeLiteral",
            "start": 327,
            "end": 346,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 329,
                "end": 344,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 337,
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 338,
                  "end": 344,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 340,
                    "end": 344,
                    "literal": {
                      "type": "Literal",
                      "start": 340,
                      "end": 344,
                      "raw": "true",
                      "value": true
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 351,
            "end": 377,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 353,
                "end": 375,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 364,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": true,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 367,
                  "end": 375,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 369,
                    "end": 375
                  }
                },
                "static": false,
                "typeParameters": null
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 382,
            "end": 436,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 384,
                "end": 407,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 395,
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": true,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 398,
                  "end": 406,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 400,
                    "end": 406
                  }
                },
                "static": false,
                "typeParameters": null
              },
              {
                "type": "TSPropertySignature",
                "start": 408,
                "end": 434,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 425,
                  "decorators": [],
                  "name": "otherOptionalProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 426,
                  "end": 434,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 428,
                    "end": 434
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 549,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 446,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 449,
            "end": 549,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 482,
              "end": 549,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 488,
                  "end": 547,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 529,
                    "end": 547,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 537,
                        "end": 541,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 540,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 505,
                    "end": 523,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 513,
                        "end": 517,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 513,
                          "end": 516,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 492,
                    "end": 503,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 495,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 500,
                      "end": 503,
                      "raw": "'A'",
                      "value": "A"
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 450,
                "end": 477,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 453,
                  "end": 477,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 455,
                    "end": 477,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 477,
                      "decorators": [],
                      "name": "PrimitivesAndWeakTypes",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
