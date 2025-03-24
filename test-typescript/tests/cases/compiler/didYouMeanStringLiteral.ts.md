__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 42,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 10,
        "end": 41,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 10,
            "end": 18,
            "literal": {
              "type": "Literal",
              "start": 10,
              "end": 18,
              "raw": "\"string\"",
              "value": "string"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 21,
            "end": 29,
            "literal": {
              "type": "Literal",
              "start": 21,
              "end": 29,
              "raw": "\"number\"",
              "value": "number"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 32,
            "end": 41,
            "literal": {
              "type": "Literal",
              "start": 32,
              "end": 41,
              "raw": "\"boolean\"",
              "value": "boolean"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 43,
      "end": 81,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 50,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 53,
        "end": 80,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 53,
            "end": 55,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 53,
              "end": 55,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSUnionType",
            "start": 59,
            "end": 79,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 59,
                "end": 67,
                "literal": {
                  "type": "Literal",
                  "start": 59,
                  "end": 67,
                  "raw": "\"number\"",
                  "value": "number"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 70,
                "end": 79,
                "literal": {
                  "type": "Literal",
                  "start": 70,
                  "end": 79,
                  "raw": "\"boolean\"",
                  "value": "boolean"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 106,
      "end": 144,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 116,
        "end": 143,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 116,
            "end": 118,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 118,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSUnionType",
            "start": 122,
            "end": 142,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 122,
                "end": 130,
                "literal": {
                  "type": "Literal",
                  "start": 122,
                  "end": 130,
                  "raw": "\"string\"",
                  "value": "string"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 133,
                "end": 142,
                "literal": {
                  "type": "Literal",
                  "start": 133,
                  "end": 142,
                  "raw": "\"boolean\"",
                  "value": "boolean"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 193,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 182,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 182,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 182,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 185,
            "end": 193,
            "raw": "\"strong\"",
            "value": "strong"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 218,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 207,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 207,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 205,
                "end": 207,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 207,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 210,
            "end": 218,
            "raw": "\"strong\"",
            "value": "strong"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 232,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 230,
                "end": 232,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 235,
            "end": 243,
            "raw": "\"strong\"",
            "value": "strong"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
