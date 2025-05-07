__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 304,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 304,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 304,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 33,
            "end": 101,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "Disc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 53,
              "end": 101,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 55,
                  "end": 72,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 57,
                      "end": 70,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 61,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 61,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 63,
                          "end": 70,
                          "literal": {
                            "type": "Literal",
                            "start": 63,
                            "end": 70,
                            "raw": "\"hddvd\"",
                            "value": "hddvd",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 83,
                  "end": 101,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 85,
                      "end": 99,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 89,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 89,
                        "end": 99,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 91,
                          "end": 99,
                          "literal": {
                            "type": "Literal",
                            "start": 91,
                            "end": 99,
                            "raw": "\"bluray\"",
                            "value": "bluray",
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
            "start": 107,
            "end": 138,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 131,
              "end": 138,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 120,
                "end": 129,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 121,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 123,
                    "end": 129,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 123,
                      "end": 127,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 127,
                        "decorators": [],
                        "name": "Disc",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
            "start": 144,
            "end": 213,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 144,
              "end": 212,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 148,
                  "end": 211,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 158,
                      "end": 177,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 160,
                          "end": 174,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 164,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 166,
                            "end": 174,
                            "raw": "\"bluray\"",
                            "value": "bluray",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 187,
                      "end": 205,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 189,
                          "end": 202,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 193,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 195,
                            "end": 202,
                            "raw": "\"hdpvd\"",
                            "value": "hdpvd",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 144,
                "end": 147,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 219,
            "end": 302,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 225,
                "end": 301,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 235,
                  "decorators": [],
                  "name": "ds",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 235,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 229,
                      "end": 235,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 229,
                        "end": 233,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 233,
                          "decorators": [],
                          "name": "Disc",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 238,
                  "end": 301,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 248,
                      "end": 267,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 250,
                          "end": 264,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 250,
                            "end": 254,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 256,
                            "end": 264,
                            "raw": "\"bluray\"",
                            "value": "bluray",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 277,
                      "end": 295,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 279,
                          "end": 292,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 283,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 285,
                            "end": 292,
                            "raw": "\"hdpvd\"",
                            "value": "hdpvd",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 24,
        "decorators": [],
        "name": "minimalExample1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
