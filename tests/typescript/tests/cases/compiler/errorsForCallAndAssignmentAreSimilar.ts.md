__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "minimalExample1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Disc",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 42
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 57,
                        "end": 61
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hddvd",
                            "raw": "\"hddvd\"",
                            "start": 63,
                            "end": 70
                          },
                          "start": 63,
                          "end": 70
                        },
                        "start": 61,
                        "end": 70
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 57,
                      "end": 70
                    }
                  ],
                  "start": 55,
                  "end": 72
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 89
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bluray",
                            "raw": "\"bluray\"",
                            "start": 91,
                            "end": 99
                          },
                          "start": 91,
                          "end": 99
                        },
                        "start": 89,
                        "end": 99
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 85,
                      "end": 99
                    }
                  ],
                  "start": 83,
                  "end": 101
                }
              ],
              "start": 53,
              "end": 101
            },
            "declare": false,
            "start": 33,
            "end": 101
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 119
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Disc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 127
                      },
                      "typeArguments": null,
                      "start": 123,
                      "end": 127
                    },
                    "start": 123,
                    "end": 129
                  },
                  "start": 121,
                  "end": 129
                },
                "start": 120,
                "end": 129
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 131,
              "end": 138
            },
            "expression": false,
            "start": 107,
            "end": 138
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 147
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 160,
                            "end": 164
                          },
                          "value": {
                            "type": "Literal",
                            "value": "bluray",
                            "raw": "\"bluray\"",
                            "start": 166,
                            "end": 174
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 160,
                          "end": 174
                        }
                      ],
                      "start": 158,
                      "end": 177
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 189,
                            "end": 193
                          },
                          "value": {
                            "type": "Literal",
                            "value": "hdpvd",
                            "raw": "\"hdpvd\"",
                            "start": 195,
                            "end": 202
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 189,
                          "end": 202
                        }
                      ],
                      "start": 187,
                      "end": 205
                    }
                  ],
                  "start": 148,
                  "end": 211
                }
              ],
              "optional": false,
              "start": 144,
              "end": 212
            },
            "directive": null,
            "start": 144,
            "end": 213
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ds",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Disc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 233
                        },
                        "typeArguments": null,
                        "start": 229,
                        "end": 233
                      },
                      "start": 229,
                      "end": 235
                    },
                    "start": 227,
                    "end": 235
                  },
                  "start": 225,
                  "end": 235
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 250,
                            "end": 254
                          },
                          "value": {
                            "type": "Literal",
                            "value": "bluray",
                            "raw": "\"bluray\"",
                            "start": 256,
                            "end": 264
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 250,
                          "end": 264
                        }
                      ],
                      "start": 248,
                      "end": 267
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 279,
                            "end": 283
                          },
                          "value": {
                            "type": "Literal",
                            "value": "hdpvd",
                            "raw": "\"hdpvd\"",
                            "start": 285,
                            "end": 292
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 279,
                          "end": 292
                        }
                      ],
                      "start": 277,
                      "end": 295
                    }
                  ],
                  "start": 238,
                  "end": 301
                },
                "definite": false,
                "start": 225,
                "end": 301
              }
            ],
            "declare": false,
            "start": 219,
            "end": 302
          }
        ],
        "start": 27,
        "end": 304
      },
      "expression": false,
      "start": 0,
      "end": 304
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 304
}
```
