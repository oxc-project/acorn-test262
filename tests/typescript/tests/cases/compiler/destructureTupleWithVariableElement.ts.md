__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 356,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 46,
        "decorators": [],
        "name": "NonEmptyStringArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 49,
        "end": 75,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 50,
            "end": 56
          },
          {
            "type": "TSRestType",
            "start": 58,
            "end": 74,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 74,
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 66,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 66,
                "end": 74,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 128,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 111,
            "decorators": [],
            "name": "strings",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 111,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 111,
                  "decorators": [],
                  "name": "NonEmptyStringArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 114,
            "end": 128,
            "elements": [
              {
                "type": "Literal",
                "start": 115,
                "end": 120,
                "value": "one",
                "raw": "'one'"
              },
              {
                "type": "Literal",
                "start": 122,
                "end": 127,
                "value": "two",
                "raw": "'two'"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 158,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 157,
          "id": {
            "type": "ArrayPattern",
            "start": 135,
            "end": 147,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "decorators": [],
                "name": "s0",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 140,
                "end": 142,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 144,
                "end": 146,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 150,
            "end": 157,
            "decorators": [],
            "name": "strings",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 176,
      "expression": {
        "type": "CallExpression",
        "start": 160,
        "end": 176,
        "callee": {
          "type": "MemberExpression",
          "start": 160,
          "end": 174,
          "object": {
            "type": "Identifier",
            "start": 160,
            "end": 162,
            "decorators": [],
            "name": "s0",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 163,
            "end": 174,
            "decorators": [],
            "name": "toUpperCase",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 193,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 193,
        "callee": {
          "type": "MemberExpression",
          "start": 177,
          "end": 191,
          "object": {
            "type": "Identifier",
            "start": 177,
            "end": 179,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 191,
            "decorators": [],
            "name": "toUpperCase",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 195,
      "end": 211,
      "expression": {
        "type": "CallExpression",
        "start": 195,
        "end": 211,
        "callee": {
          "type": "MemberExpression",
          "start": 195,
          "end": 209,
          "object": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 198,
            "end": 209,
            "decorators": [],
            "name": "toUpperCase",
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
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 271,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 271,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 271,
            "decorators": [],
            "name": "strings2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 271,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 237,
                "end": 271,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  },
                  {
                    "type": "TSRestType",
                    "start": 246,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 249,
                      "end": 262,
                      "typeName": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 254,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 254,
                        "end": 262,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 255,
                            "end": 261
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 264,
                    "end": 270
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 303,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 302,
          "id": {
            "type": "ArrayPattern",
            "start": 279,
            "end": 291,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 280,
                "end": 282,
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 284,
                "end": 286,
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 288,
                "end": 290,
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 294,
            "end": 302,
            "decorators": [],
            "name": "strings2",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 305,
      "end": 321,
      "expression": {
        "type": "CallExpression",
        "start": 305,
        "end": 321,
        "callee": {
          "type": "MemberExpression",
          "start": 305,
          "end": 319,
          "object": {
            "type": "Identifier",
            "start": 305,
            "end": 307,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 308,
            "end": 319,
            "decorators": [],
            "name": "toUpperCase",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 322,
      "end": 338,
      "expression": {
        "type": "CallExpression",
        "start": 322,
        "end": 338,
        "callee": {
          "type": "MemberExpression",
          "start": 322,
          "end": 336,
          "object": {
            "type": "Identifier",
            "start": 322,
            "end": 324,
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 325,
            "end": 336,
            "decorators": [],
            "name": "toUpperCase",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 356,
      "expression": {
        "type": "CallExpression",
        "start": 340,
        "end": 356,
        "callee": {
          "type": "MemberExpression",
          "start": 340,
          "end": 354,
          "object": {
            "type": "Identifier",
            "start": 340,
            "end": 342,
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 343,
            "end": 354,
            "decorators": [],
            "name": "toUpperCase",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
