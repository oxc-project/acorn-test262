__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 47,
  "end": 570,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 47,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 61,
        "decorators": [],
        "name": "FooAndBaz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 64,
        "end": 99,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 64,
            "end": 80,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 66,
                "end": 78,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 69,
                  "end": 78,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 71,
                    "end": 78
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 83,
            "end": 99,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 85,
                "end": 97,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 88,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 90,
                    "end": 97
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
      "type": "TSTypeAliasDeclaration",
      "start": 102,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 115,
        "decorators": [],
        "name": "Disjoint",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 119,
        "end": 226,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 121,
            "end": 170,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 123,
                "end": 146,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 137,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 145,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 147,
                "end": 168,
                "computed": false,
                "optional": true,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 159,
                  "decorators": [],
                  "name": "err",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 160,
                  "end": 167,
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 162,
                    "end": 167
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 174,
            "end": 226,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 176,
                "end": 199,
                "computed": false,
                "optional": true,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 190,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 191,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 193,
                    "end": 198
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 200,
                "end": 224,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 212,
                  "decorators": [],
                  "name": "err",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 212,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 214,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 223,
                      "decorators": [],
                      "name": "FooAndBaz",
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 229,
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 243,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 244,
          "end": 260,
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 250,
            "end": 260,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 260,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 260,
                "decorators": [],
                "name": "Disjoint",
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
        "start": 261,
        "end": 269,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 263,
          "end": 269
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 270,
        "end": 376,
        "body": [
          {
            "type": "IfStatement",
            "start": 276,
            "end": 325,
            "test": {
              "type": "MemberExpression",
              "start": 280,
              "end": 290,
              "object": {
                "type": "Identifier",
                "start": 280,
                "end": 286,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 287,
                "end": 290,
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 292,
              "end": 325,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 302,
                  "end": 319,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 308,
                    "end": 318,
                    "object": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 314,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 318,
                      "decorators": [],
                      "name": "err",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 354,
            "end": 374,
            "argument": {
              "type": "MemberExpression",
              "start": 361,
              "end": 373,
              "object": {
                "type": "Identifier",
                "start": 361,
                "end": 367,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 368,
                "end": 373,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 378,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 402,
        "decorators": [],
        "name": "TrivialIntersection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 405,
        "end": 424,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 405,
            "end": 413,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 407,
                "end": 411,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 408,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 408,
                  "end": 411,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 410,
                    "end": 411,
                    "literal": {
                      "type": "Literal",
                      "start": 410,
                      "end": 411,
                      "value": 1,
                      "raw": "1"
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
            "start": 416,
            "end": 424,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 418,
                "end": 422,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 419,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 419,
                  "end": 422,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 421,
                    "end": 422,
                    "literal": {
                      "type": "Literal",
                      "start": 421,
                      "end": 422,
                      "value": 1,
                      "raw": "1"
                    }
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
      "type": "FunctionDeclaration",
      "start": 427,
      "end": 450,
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 441,
        "decorators": [],
        "name": "want0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 442,
          "end": 446,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 443,
            "end": 446,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 445,
              "end": 446,
              "literal": {
                "type": "Literal",
                "start": 445,
                "end": 446,
                "value": 0,
                "raw": "0"
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 448,
        "end": 450,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 452,
      "end": 570,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 466,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 467,
          "end": 493,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 468,
            "end": 493,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 470,
              "end": 493,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 470,
                  "end": 471,
                  "literal": {
                    "type": "Literal",
                    "start": 470,
                    "end": 471,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 474,
                  "end": 493,
                  "typeName": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 493,
                    "decorators": [],
                    "name": "TrivialIntersection",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 495,
        "end": 570,
        "body": [
          {
            "type": "IfStatement",
            "start": 501,
            "end": 568,
            "test": {
              "type": "BinaryExpression",
              "start": 505,
              "end": 512,
              "left": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 511,
                "end": 512,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 514,
              "end": 568,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 524,
                  "end": 533,
                  "expression": {
                    "type": "CallExpression",
                    "start": 524,
                    "end": 532,
                    "callee": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 529,
                      "decorators": [],
                      "name": "want0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 530,
                        "end": 531,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
