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
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 153,
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
              "end": 153,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Keys",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
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
                "start": 232,
                "end": 239,
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
      "start": 243,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 267,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
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
                "start": 255,
                "end": 264,
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
                "start": 265,
                "end": 266,
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
      "start": 314,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 325,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 319,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 322,
            "end": 325,
            "object": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
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
