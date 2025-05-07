__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 335,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 34,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 12,
        "end": 33,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 12,
            "end": 15,
            "literal": {
              "type": "Literal",
              "start": 12,
              "end": 15,
              "raw": "'a'",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 18,
            "end": 21,
            "literal": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "raw": "'b'",
              "value": "b",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 24,
            "end": 27,
            "literal": {
              "type": "Literal",
              "start": 24,
              "end": 27,
              "raw": "'c'",
              "value": "c",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 30,
            "end": 33,
            "literal": {
              "type": "Literal",
              "start": 30,
              "end": 33,
              "raw": "'d'",
              "value": "d",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 46,
            "end": 162,
            "expression": {
              "type": "ObjectExpression",
              "start": 46,
              "end": 121,
              "properties": [
                {
                  "type": "Property",
                  "start": 52,
                  "end": 56,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 55,
                    "end": 56,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 62,
                  "end": 72,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 65,
                    "end": 72,
                    "raw": "\"hello\"",
                    "value": "hello",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 78,
                  "end": 82,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 81,
                    "end": 82,
                    "raw": "8",
                    "value": 8,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 162,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 139,
                "end": 162,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 140,
                    "end": 161,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 146,
                      "end": 161,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 147,
                          "end": 151,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 151,
                            "decorators": [],
                            "name": "Keys",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 153,
                          "end": 160
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 146,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 139,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 250,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 237,
            "end": 250,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 237,
              "end": 248,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 237,
                "end": 240,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 248,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 276,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 260,
            "end": 276,
            "arguments": [
              {
                "type": "Literal",
                "start": 274,
                "end": 275,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 260,
              "end": 273,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 260,
                "end": 263,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 264,
                "end": 273,
                "decorators": [],
                "name": "substring",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 334,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 328,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 331,
            "end": 334,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
