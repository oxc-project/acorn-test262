__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
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
      "start": 24,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 69,
            "decorators": [],
            "name": "nnnu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 44,
                "end": 69,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 45,
                    "end": 51
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 53,
                    "end": 59
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 61,
                    "end": 68,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    }
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
      "start": 70,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 136,
            "decorators": [],
            "name": "nntnnnt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 136,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 93,
                "end": 136,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 93,
                    "end": 109,
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 94,
                        "end": 100
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 102,
                        "end": 108
                      }
                    ]
                  },
                  {
                    "type": "TSTupleType",
                    "start": 112,
                    "end": 136,
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 113,
                        "end": 119
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 121,
                        "end": 127
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 129,
                        "end": 135
                      }
                    ]
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
      "type": "TSDeclareFunction",
      "start": 137,
      "end": 214,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 156,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 157,
          "end": 166,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 166,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 160,
              "end": 166
            }
          }
        },
        {
          "type": "Identifier",
          "start": 168,
          "end": 177,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 177,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 171,
              "end": 177
            }
          }
        },
        {
          "type": "Identifier",
          "start": 179,
          "end": 189,
          "decorators": [],
          "name": "bb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 189,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 183,
              "end": 189
            }
          }
        },
        {
          "type": "RestElement",
          "start": 191,
          "end": 205,
          "argument": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 195,
            "end": 205,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 197,
              "end": 205,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 197,
                "end": 203
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 206,
        "end": 214,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 208,
          "end": 214
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 230,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 230,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 219,
            "end": 226,
            "argument": {
              "type": "Identifier",
              "start": 222,
              "end": 226,
              "decorators": [],
              "name": "nnnu",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 218,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 248,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 231,
        "end": 248,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 234,
            "end": 244,
            "argument": {
              "type": "Identifier",
              "start": 237,
              "end": 244,
              "decorators": [],
              "name": "nntnnnt",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 231,
          "end": 233,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
