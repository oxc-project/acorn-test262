__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 327,
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
              "value": "a"
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
              "value": "b"
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
              "value": "c"
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
              "value": "d"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 153,
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
            "end": 153,
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
                    "value": 0
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
                    "value": "hello"
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
                    "value": 8
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 153,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 138,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 139,
                    "end": 143,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 143,
                      "decorators": [],
                      "name": "Keys",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 145,
                    "end": 152
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "decorators": [],
                "name": "Record",
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
      "start": 220,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 228,
            "end": 241,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 228,
              "end": 239,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 228,
                "end": 231,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 232,
                "end": 239,
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
      "start": 243,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 267,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 251,
            "end": 267,
            "arguments": [
              {
                "type": "Literal",
                "start": 265,
                "end": 266,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 251,
              "end": 264,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 251,
                "end": 254,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 255,
                "end": 264,
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
      "start": 314,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 319,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 322,
            "end": 325,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
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
