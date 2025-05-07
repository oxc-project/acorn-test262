__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 420,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 38,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Hash",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 12,
        "end": 37,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
          },
          {
            "type": "TSTypeLiteral",
            "start": 21,
            "end": 37,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 23,
                "end": 35,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 29,
                  "decorators": [],
                  "name": "__hash",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 31,
                    "end": 35,
                    "literal": {
                      "type": "Literal",
                      "start": 31,
                      "end": 35,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
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
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 210,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 210,
        "body": [
          {
            "type": "IfStatement",
            "start": 89,
            "end": 184,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 119,
              "end": 184,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 129,
                  "end": 178,
                  "argument": {
                    "type": "NewExpression",
                    "start": 135,
                    "end": 177,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 145,
                        "end": 176,
                        "raw": "\"This doesn't look like a hash\"",
                        "value": "This doesn't look like a hash",
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 144,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 93,
              "end": 117,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 93,
                "end": 104,
                "argument": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "hash",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 109,
                "end": 117,
                "raw": "\"string\"",
                "value": "string",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 189,
            "end": 208,
            "argument": {
              "type": "MemberExpression",
              "start": 196,
              "end": 207,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 196,
                "end": 200,
                "decorators": [],
                "name": "hash",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 201,
                "end": 207,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 62,
        "decorators": [],
        "name": "getHashLength",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 73,
          "decorators": [],
          "name": "hash",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 73,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 73,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 73,
                "decorators": [],
                "name": "Hash",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 74,
        "end": 82,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 76,
          "end": 82
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 420,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 293,
        "end": 420,
        "body": [
          {
            "type": "IfStatement",
            "start": 299,
            "end": 394,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 329,
              "end": 394,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 339,
                  "end": 388,
                  "argument": {
                    "type": "NewExpression",
                    "start": 345,
                    "end": 387,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 355,
                        "end": 386,
                        "raw": "\"This doesn't look like a hash\"",
                        "value": "This doesn't look like a hash",
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 354,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 303,
              "end": 327,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 303,
                "end": 314,
                "argument": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 314,
                  "decorators": [],
                  "name": "hash",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 319,
                "end": 327,
                "raw": "\"string\"",
                "value": "string",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 399,
            "end": 418,
            "argument": {
              "type": "MemberExpression",
              "start": 406,
              "end": 417,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 406,
                "end": 410,
                "decorators": [],
                "name": "hash",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 411,
                "end": 417,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 235,
        "decorators": [],
        "name": "getHashLength2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 267,
          "end": 283,
          "decorators": [],
          "name": "hash",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 271,
            "end": 283,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 273,
              "end": 283,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 273,
                  "end": 279
                },
                {
                  "type": "TSTypeReference",
                  "start": 282,
                  "end": 283,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 283,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 284,
        "end": 292,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 286,
          "end": 292
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 235,
        "end": 266,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 236,
            "end": 265,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 246,
              "end": 265,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 248,
                  "end": 264,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 255,
                    "decorators": [],
                    "name": "__tag__",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 264,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 257,
                      "end": 264
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
