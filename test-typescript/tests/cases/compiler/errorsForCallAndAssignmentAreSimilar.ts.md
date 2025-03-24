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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 24,
        "name": "minimalExample1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 304,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 33,
            "end": 101,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "name": "Disc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 61,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "value": "hddvd",
                            "raw": "\"hddvd\""
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
                  "start": 83,
                  "end": 101,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 85,
                      "end": 99,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 89,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "value": "bluray",
                            "raw": "\"bluray\""
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
            "start": 107,
            "end": 138,
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 120,
                "end": 129,
                "name": "x",
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 127,
                        "name": "Disc",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 131,
              "end": 138,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExpressionStatement",
            "start": 144,
            "end": 213,
            "expression": {
              "type": "CallExpression",
              "start": 144,
              "end": 212,
              "callee": {
                "type": "Identifier",
                "start": 144,
                "end": 147,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 164,
                            "name": "kind",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 166,
                            "end": 174,
                            "value": "bluray",
                            "raw": "\"bluray\""
                          },
                          "kind": "init",
                          "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 193,
                            "name": "kind",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 195,
                            "end": 202,
                            "value": "hdpvd",
                            "raw": "\"hdpvd\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 235,
                  "name": "ds",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 233,
                          "name": "Disc",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 250,
                            "end": 254,
                            "name": "kind",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 256,
                            "end": 264,
                            "value": "bluray",
                            "raw": "\"bluray\""
                          },
                          "kind": "init",
                          "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 283,
                            "name": "kind",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 285,
                            "end": 292,
                            "value": "hdpvd",
                            "raw": "\"hdpvd\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
