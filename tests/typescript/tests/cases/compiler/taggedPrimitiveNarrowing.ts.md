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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Hash",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 29,
                  "decorators": [],
                  "name": "__hash",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "value": true,
                      "raw": "true"
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
      "start": 40,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 62,
        "decorators": [],
        "name": "getHashLength",
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
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 73,
                "decorators": [],
                "name": "Hash",
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
        "start": 74,
        "end": 82,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 76,
          "end": 82
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 210,
        "body": [
          {
            "type": "IfStatement",
            "start": 89,
            "end": 184,
            "test": {
              "type": "BinaryExpression",
              "start": 93,
              "end": 117,
              "left": {
                "type": "UnaryExpression",
                "start": 93,
                "end": 104,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "hash",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 109,
                "end": 117,
                "value": "string",
                "raw": "\"string\""
              }
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 144,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 145,
                        "end": 176,
                        "value": "This doesn't look like a hash",
                        "raw": "\"This doesn't look like a hash\""
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 189,
            "end": 208,
            "argument": {
              "type": "MemberExpression",
              "start": 196,
              "end": 207,
              "object": {
                "type": "Identifier",
                "start": 196,
                "end": 200,
                "decorators": [],
                "name": "hash",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 201,
                "end": 207,
                "decorators": [],
                "name": "length",
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
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 235,
        "decorators": [],
        "name": "getHashLength2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 235,
        "end": 266,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 236,
            "end": 265,
            "name": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 246,
              "end": 265,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 248,
                  "end": 264,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 255,
                    "decorators": [],
                    "name": "__tag__",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 264,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 257,
                      "end": 264
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 283,
                    "decorators": [],
                    "name": "T",
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
      "body": {
        "type": "BlockStatement",
        "start": 293,
        "end": 420,
        "body": [
          {
            "type": "IfStatement",
            "start": 299,
            "end": 394,
            "test": {
              "type": "BinaryExpression",
              "start": 303,
              "end": 327,
              "left": {
                "type": "UnaryExpression",
                "start": 303,
                "end": 314,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 314,
                  "decorators": [],
                  "name": "hash",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 319,
                "end": 327,
                "value": "string",
                "raw": "\"string\""
              }
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 354,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 355,
                        "end": 386,
                        "value": "This doesn't look like a hash",
                        "raw": "\"This doesn't look like a hash\""
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 399,
            "end": 418,
            "argument": {
              "type": "MemberExpression",
              "start": 406,
              "end": 417,
              "object": {
                "type": "Identifier",
                "start": 406,
                "end": 410,
                "decorators": [],
                "name": "hash",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 411,
                "end": 417,
                "decorators": [],
                "name": "length",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
