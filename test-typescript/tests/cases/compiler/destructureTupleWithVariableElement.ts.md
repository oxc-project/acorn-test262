__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 357,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 75,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 46,
        "decorators": [],
        "name": "NonEmptyStringArray",
        "optional": false
      },
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 66,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 128,
          "definite": false,
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
                  "optional": false
                }
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
                "raw": "'one'",
                "value": "one"
              },
              {
                "type": "Literal",
                "start": 122,
                "end": 127,
                "raw": "'two'",
                "value": "two"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 157,
          "definite": false,
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
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 140,
                "end": 142,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 144,
                "end": 146,
                "decorators": [],
                "name": "s2",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 150,
            "end": 157,
            "decorators": [],
            "name": "strings",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 176,
      "expression": {
        "type": "CallExpression",
        "start": 160,
        "end": 176,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 160,
          "end": 174,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 160,
            "end": 162,
            "decorators": [],
            "name": "s0",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 163,
            "end": 174,
            "decorators": [],
            "name": "toUpperCase",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 193,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 193,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 177,
          "end": 191,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 177,
            "end": 179,
            "decorators": [],
            "name": "s1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 191,
            "decorators": [],
            "name": "toUpperCase",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 195,
      "end": 211,
      "expression": {
        "type": "CallExpression",
        "start": 195,
        "end": 211,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 195,
          "end": 209,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "decorators": [],
            "name": "s2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 198,
            "end": 209,
            "decorators": [],
            "name": "toUpperCase",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 271,
          "definite": false,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 254,
                        "decorators": [],
                        "name": "Array",
                        "optional": false
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 302,
          "definite": false,
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
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 284,
                "end": 286,
                "decorators": [],
                "name": "s4",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 288,
                "end": 290,
                "decorators": [],
                "name": "s5",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 294,
            "end": 302,
            "decorators": [],
            "name": "strings2",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 305,
      "end": 321,
      "expression": {
        "type": "CallExpression",
        "start": 305,
        "end": 321,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 305,
          "end": 319,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 305,
            "end": 307,
            "decorators": [],
            "name": "s3",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 308,
            "end": 319,
            "decorators": [],
            "name": "toUpperCase",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 322,
      "end": 338,
      "expression": {
        "type": "CallExpression",
        "start": 322,
        "end": 338,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 322,
          "end": 336,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 322,
            "end": 324,
            "decorators": [],
            "name": "s4",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 325,
            "end": 336,
            "decorators": [],
            "name": "toUpperCase",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 356,
      "expression": {
        "type": "CallExpression",
        "start": 340,
        "end": 356,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 340,
          "end": 354,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 340,
            "end": 342,
            "decorators": [],
            "name": "s5",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 343,
            "end": 354,
            "decorators": [],
            "name": "toUpperCase",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
