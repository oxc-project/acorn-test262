__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 32,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 28,
                "end": 31,
                "literal": {
                  "type": "Literal",
                  "start": 28,
                  "end": 31,
                  "raw": "\"A\"",
                  "value": "A"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 51,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "param",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
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
        "end": 15,
        "decorators": [],
        "name": "TypeA",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 108,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 77,
            "end": 87,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 81,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 86,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 83,
                "end": 86,
                "literal": {
                  "type": "Literal",
                  "start": 83,
                  "end": 86,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 106,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "decorators": [],
              "name": "param",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 70,
        "decorators": [],
        "name": "TypeB",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 110,
      "end": 141,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 124,
        "decorators": [],
        "name": "ValidType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 127,
        "end": 140,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 127,
            "end": 132,
            "typeName": {
              "type": "Identifier",
              "start": 127,
              "end": 132,
              "decorators": [],
              "name": "TypeA",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 135,
            "end": 140,
            "typeName": {
              "type": "Identifier",
              "start": 135,
              "end": 140,
              "decorators": [],
              "name": "TypeB",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 143,
      "end": 188,
      "body": {
        "type": "TSInterfaceBody",
        "start": 161,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 167,
            "end": 186,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "decorators": [],
              "name": "types",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 185,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 174,
                "end": 185,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 174,
                  "end": 183,
                  "typeName": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 183,
                    "decorators": [],
                    "name": "ValidType",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 160,
        "decorators": [],
        "name": "Wrapper",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 210,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 210,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 201,
                "end": 210,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 201,
                  "end": 208,
                  "typeName": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 208,
                    "decorators": [],
                    "name": "Wrapper",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 213,
            "end": 215,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 271,
      "expression": {
        "type": "CallExpression",
        "start": 218,
        "end": 270,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 227,
            "end": 269,
            "properties": [
              {
                "type": "Property",
                "start": 233,
                "end": 267,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 238,
                  "decorators": [],
                  "name": "types",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 240,
                  "end": 267,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 241,
                      "end": 266,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 251,
                          "end": 260,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 251,
                            "end": 255,
                            "decorators": [],
                            "name": "type",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 257,
                            "end": 260,
                            "raw": "\"A\"",
                            "value": "A"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 218,
          "end": 226,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 218,
            "end": 221,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "push",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
