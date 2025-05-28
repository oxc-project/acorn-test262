__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 326,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null
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
      "end": 154,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 153,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 55,
                    "end": 56,
                    "value": 0,
                    "raw": "0"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 62,
                  "end": 72,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 65,
                    "end": 72,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 78,
                  "end": 82,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 81,
                    "end": 82,
                    "value": 8,
                    "raw": "8"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 153,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 138,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 139,
                    "end": 143,
                    "typeName": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 143,
                      "decorators": [],
                      "name": "Keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 145,
                    "end": 152
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 242,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 241,
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
            "callee": {
              "type": "MemberExpression",
              "start": 228,
              "end": 239,
              "object": {
                "type": "MemberExpression",
                "start": 228,
                "end": 231,
                "object": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 232,
                "end": 239,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 268,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 267,
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
            "callee": {
              "type": "MemberExpression",
              "start": 251,
              "end": 264,
              "object": {
                "type": "MemberExpression",
                "start": 251,
                "end": 254,
                "object": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 255,
                "end": 264,
                "decorators": [],
                "name": "substring",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 265,
                "end": 266,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 326,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 325,
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
            "object": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
