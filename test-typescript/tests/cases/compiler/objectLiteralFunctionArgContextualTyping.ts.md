__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 480,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 71,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 71,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 32,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 23,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 69,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 45,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 68,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 47,
                "end": 68,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 57,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 59,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 97,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 97,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 85,
          "end": 92,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 92,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 92,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 115,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 99,
        "end": 115,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 102,
            "end": 114,
            "properties": [
              {
                "type": "Property",
                "start": 104,
                "end": 112,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 109,
                  "decorators": [],
                  "name": "hello",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 111,
                  "end": 112,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 99,
          "end": 101,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 143,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 143,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 129,
            "end": 142,
            "properties": [
              {
                "type": "Property",
                "start": 131,
                "end": 140,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 136,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 138,
                  "end": 140,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 126,
          "end": 128,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 219,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 193,
        "end": 219,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 196,
            "end": 218,
            "properties": [
              {
                "type": "Property",
                "start": 198,
                "end": 207,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 203,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 205,
                  "end": 207,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 209,
                "end": 216,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
                  "decorators": [],
                  "name": "what",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 215,
                  "end": 216,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 193,
          "end": 195,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 295,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 269,
        "end": 295,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 272,
            "end": 294,
            "properties": [
              {
                "type": "Property",
                "start": 274,
                "end": 292,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 282,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 284,
                  "end": 292,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 269,
          "end": 271,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 345,
      "end": 379,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 345,
        "end": 379,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 348,
            "end": 378,
            "properties": [
              {
                "type": "Property",
                "start": 350,
                "end": 376,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 358,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 360,
                  "end": 376,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 361,
                      "end": 370,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 362,
                        "end": 370,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 364,
                          "end": 370
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 345,
          "end": 347,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 471,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 429,
        "end": 471,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 432,
            "end": 470,
            "properties": [
              {
                "type": "Property",
                "start": 434,
                "end": 443,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 439,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 441,
                  "end": 443,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 445,
                "end": 468,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 453,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 455,
                  "end": 468,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 462,
                    "end": 468,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 463,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 468,
                      "decorators": [],
                      "name": "uhhh",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 456,
                      "end": 457,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 429,
          "end": 431,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
