__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 12,
              "end": 15
            },
            "start": 12,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 18,
              "end": 21
            },
            "start": 18,
            "end": 21
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "c",
              "raw": "'c'",
              "start": 24,
              "end": 27
            },
            "start": 24,
            "end": 27
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "d",
              "raw": "'d'",
              "start": 30,
              "end": 33
            },
            "start": 30,
            "end": 33
          }
        ],
        "start": 12,
        "end": 33
      },
      "declare": false,
      "start": 0,
      "end": 34
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 43
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 53
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 55,
                    "end": 56
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 52,
                  "end": 56
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 65,
                    "end": 72
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 62,
                  "end": 72
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "value": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 81,
                    "end": 82
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 78,
                  "end": 82
                }
              ],
              "start": 46,
              "end": 121
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 139
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 146
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 147,
                            "end": 151
                          },
                          "typeArguments": null,
                          "start": 147,
                          "end": 151
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 153,
                          "end": 160
                        }
                      ],
                      "start": 146,
                      "end": 161
                    },
                    "start": 140,
                    "end": 161
                  }
                ],
                "start": 139,
                "end": 162
              },
              "start": 132,
              "end": 162
            },
            "start": 46,
            "end": 162
          },
          "definite": false,
          "start": 42,
          "end": 162
        }
      ],
      "declare": false,
      "start": 36,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 234
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "optional": false,
                "computed": false,
                "start": 237,
                "end": 240
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 248
              },
              "optional": false,
              "computed": false,
              "start": 237,
              "end": 248
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 237,
            "end": 250
          },
          "definite": false,
          "start": 233,
          "end": 250
        }
      ],
      "declare": false,
      "start": 229,
      "end": 251
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 257
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 261
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 263
                },
                "optional": false,
                "computed": false,
                "start": 260,
                "end": 263
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substring",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 260,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 274,
                "end": 275
              }
            ],
            "optional": false,
            "start": 260,
            "end": 276
          },
          "definite": false,
          "start": 256,
          "end": 276
        }
      ],
      "declare": false,
      "start": 252,
      "end": 277
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 328
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 332
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 334
            },
            "optional": false,
            "computed": false,
            "start": 331,
            "end": 334
          },
          "definite": false,
          "start": 327,
          "end": 334
        }
      ],
      "declare": false,
      "start": 323,
      "end": 335
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 335
}
```
