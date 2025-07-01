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
        "name": "NonEmptyStringArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 46
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 50,
            "end": 56
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 66
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  }
                ],
                "start": 66,
                "end": 74
              },
              "start": 61,
              "end": 74
            },
            "start": 58,
            "end": 74
          }
        ],
        "start": 49,
        "end": 75
      },
      "declare": false,
      "start": 22,
      "end": 75
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
            "name": "strings",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonEmptyStringArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 111
                },
                "typeArguments": null,
                "start": 92,
                "end": 111
              },
              "start": 90,
              "end": 111
            },
            "start": 83,
            "end": 111
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "one",
                "raw": "'one'",
                "start": 115,
                "end": 120
              },
              {
                "type": "Literal",
                "value": "two",
                "raw": "'two'",
                "start": 122,
                "end": 127
              }
            ],
            "start": 114,
            "end": 128
          },
          "definite": false,
          "start": 83,
          "end": 128
        }
      ],
      "declare": false,
      "start": 77,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s0",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 138
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 142
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 146
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 147
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 157
          },
          "definite": false,
          "start": 135,
          "end": 157
        }
      ],
      "declare": false,
      "start": 129,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s0",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 162
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 174
          },
          "optional": false,
          "computed": false,
          "start": 160,
          "end": 174
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 160,
        "end": 176
      },
      "directive": null,
      "start": 160,
      "end": 176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 191
          },
          "optional": false,
          "computed": false,
          "start": 177,
          "end": 191
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 177,
        "end": 193
      },
      "directive": null,
      "start": 177,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 197
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 209
          },
          "optional": false,
          "computed": false,
          "start": 195,
          "end": 209
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 195,
        "end": 211
      },
      "directive": null,
      "start": 195,
      "end": 211
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
            "name": "strings2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 254
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 255,
                            "end": 261
                          }
                        ],
                        "start": 254,
                        "end": 262
                      },
                      "start": 249,
                      "end": 262
                    },
                    "start": 246,
                    "end": 262
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 264,
                    "end": 270
                  }
                ],
                "start": 237,
                "end": 271
              },
              "start": 235,
              "end": 271
            },
            "start": 227,
            "end": 271
          },
          "init": null,
          "definite": false,
          "start": 227,
          "end": 271
        }
      ],
      "declare": true,
      "start": 213,
      "end": 271
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 282
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 286
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 290
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 291
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strings2",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 302
          },
          "definite": false,
          "start": 279,
          "end": 302
        }
      ],
      "declare": false,
      "start": 273,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 307
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 319
          },
          "optional": false,
          "computed": false,
          "start": 305,
          "end": 319
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 305,
        "end": 321
      },
      "directive": null,
      "start": 305,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 324
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 336
          },
          "optional": false,
          "computed": false,
          "start": 322,
          "end": 336
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 322,
        "end": 338
      },
      "directive": null,
      "start": 322,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 342
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 354
          },
          "optional": false,
          "computed": false,
          "start": 340,
          "end": 354
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 340,
        "end": 356
      },
      "directive": null,
      "start": 340,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 356
}
```
