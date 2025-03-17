__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 336,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Keys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "a",
              "raw": "'a'"
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
              "value": "b",
              "raw": "'b'"
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
              "value": "c",
              "raw": "'c'"
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
              "value": "d",
              "raw": "'d'"
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 55,
                    "end": 56,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 62,
                  "end": 72,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 65,
                    "end": 72,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 78,
                  "end": 82,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 81,
                    "end": 82,
                    "value": 8,
                    "raw": "8"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 162,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 139,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 139,
                "end": 162,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 140,
                    "end": 161,
                    "typeName": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 146,
                      "name": "Record",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 146,
                      "end": 161,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 147,
                          "end": 151,
                          "typeName": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 151,
                            "name": "Keys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 153,
                          "end": 160
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 237,
            "end": 250,
            "callee": {
              "type": "MemberExpression",
              "start": 237,
              "end": 248,
              "object": {
                "type": "MemberExpression",
                "start": 237,
                "end": 240,
                "object": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 248,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 260,
            "end": 276,
            "callee": {
              "type": "MemberExpression",
              "start": 260,
              "end": 273,
              "object": {
                "type": "MemberExpression",
                "start": 260,
                "end": 263,
                "object": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 264,
                "end": 273,
                "name": "substring",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 274,
                "end": 275,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 328,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 331,
            "end": 334,
            "object": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
