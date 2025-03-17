__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 550,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 25,
        "name": "LiteralsAndWeakTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "A",
              "raw": "'A'"
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
              "value": "B",
              "raw": "'B'"
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
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 59,
                  "name": "optional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
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
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 86,
                  "name": "toLowerCase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
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
                "accessibility": null,
                "readonly": false,
                "static": false
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
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 117,
                  "name": "toUpperCase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
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
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 130,
                "end": 156,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 147,
                  "name": "otherOptionalProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 171,
            "end": 269,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 172,
                "end": 197,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 175,
                  "end": 197,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 177,
                    "end": 197,
                    "typeName": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 197,
                      "name": "LiteralsAndWeakTypes",
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
              "start": 202,
              "end": 269,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 208,
                  "end": 267,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 212,
                    "end": 223,
                    "left": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 215,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 220,
                      "end": 223,
                      "value": "A",
                      "raw": "'A'"
                    }
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
                        "expression": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 236,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 249,
                    "end": 267,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 257,
                        "end": 261,
                        "expression": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 260,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 271,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 298,
        "name": "PrimitivesAndWeakTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 337,
                  "name": "optional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
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
                "key": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 364,
                  "name": "toLowerCase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
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
                "accessibility": null,
                "readonly": false,
                "static": false
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
                "key": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 395,
                  "name": "toUpperCase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
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
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 408,
                "end": 434,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 425,
                  "name": "otherOptionalProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 426,
                  "end": 434,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 428,
                    "end": 434
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 446,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 449,
            "end": 549,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 450,
                "end": 477,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 453,
                  "end": 477,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 455,
                    "end": 477,
                    "typeName": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 477,
                      "name": "PrimitivesAndWeakTypes",
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
              "start": 482,
              "end": 549,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 488,
                  "end": 547,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 492,
                    "end": 503,
                    "left": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 495,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 500,
                      "end": 503,
                      "value": "A",
                      "raw": "'A'"
                    }
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
                        "expression": {
                          "type": "Identifier",
                          "start": 513,
                          "end": 516,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 529,
                    "end": 547,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 537,
                        "end": 541,
                        "expression": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 540,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
