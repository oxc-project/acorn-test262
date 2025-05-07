__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 19,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 18,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 9,
            "end": 12,
            "literal": {
              "type": "Literal",
              "start": 9,
              "end": 12,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 15,
            "end": 18,
            "literal": {
              "type": "Literal",
              "start": 15,
              "end": 18,
              "raw": "\"b\"",
              "value": "b",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 20,
      "end": 37,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 29,
        "end": 36,
        "types": [
          {
            "type": "TSArrayType",
            "start": 29,
            "end": 32,
            "elementType": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSTypeReference",
            "start": 35,
            "end": 36,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 214,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 214,
        "body": [
          {
            "type": "IfStatement",
            "start": 64,
            "end": 212,
            "alternate": {
              "type": "IfStatement",
              "start": 118,
              "end": 212,
              "alternate": {
                "type": "BlockStatement",
                "start": 172,
                "end": 212,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 183,
                    "end": 206,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 190,
                      "end": 205,
                      "computed": true,
                      "object": {
                        "type": "TSAsExpression",
                        "start": 191,
                        "end": 201,
                        "expression": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 194,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 198,
                          "end": 201,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 198,
                            "end": 199,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 198,
                              "end": 199,
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 203,
                        "end": 204,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 135,
                "end": 162,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 145,
                    "end": 156,
                    "argument": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 122,
                "end": 133,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 125,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 130,
                  "end": 133,
                  "raw": "\"b\"",
                  "value": "b",
                  "regex": null,
                  "bigint": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 81,
              "end": 108,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 91,
                  "end": 102,
                  "argument": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 101,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 68,
              "end": 79,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 76,
                "end": 79,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
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
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 56,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 56,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "T",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
