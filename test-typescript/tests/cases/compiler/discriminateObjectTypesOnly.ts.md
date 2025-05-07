__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 29,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 13,
        "end": 28,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 13,
            "end": 19
          },
          {
            "type": "TSObjectKeyword",
            "start": 22,
            "end": 28
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 44,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 64,
            "properties": [
              {
                "type": "Property",
                "start": 49,
                "end": 62,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 56,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 62,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 91,
      "end": 141,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 102,
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 105,
        "end": 140,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 105,
            "end": 111
          },
          {
            "type": "TSTypeLiteral",
            "start": 114,
            "end": 131,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 116,
                "end": 129,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 123,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 123,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 125,
                    "end": 129
                  }
                }
              }
            ]
          },
          {
            "type": "TSObjectKeyword",
            "start": 134,
            "end": 140
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 177,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 157,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 157,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 157,
                  "decorators": [],
                  "name": "Thing2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 160,
            "end": 177,
            "properties": [
              {
                "type": "Property",
                "start": 162,
                "end": 175,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 169,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 171,
                  "end": 175,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
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
      "start": 179,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 194,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 194,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 194,
                  "decorators": [],
                  "name": "Thing2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 197,
            "end": 215,
            "properties": [
              {
                "type": "Property",
                "start": 199,
                "end": 213,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 207,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 209,
                  "end": 213,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 242,
      "end": 313,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 253,
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 256,
        "end": 312,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 256,
            "end": 262
          },
          {
            "type": "TSTypeLiteral",
            "start": 265,
            "end": 303,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 267,
                "end": 281,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 274,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 274,
                  "end": 280,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 276,
                    "end": 280
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 282,
                "end": 301,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 290,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 290,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 292,
                    "end": 301
                  }
                }
              }
            ]
          },
          {
            "type": "TSObjectKeyword",
            "start": 306,
            "end": 312
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 329,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 321,
              "end": 329,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 323,
                "end": 329,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 329,
                  "decorators": [],
                  "name": "Thing3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 332,
            "end": 355,
            "properties": [
              {
                "type": "Property",
                "start": 334,
                "end": 353,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 342,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 353,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
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
