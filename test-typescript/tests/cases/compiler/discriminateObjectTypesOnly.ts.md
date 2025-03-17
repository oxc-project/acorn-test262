__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 386,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 44,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
                  "name": "Thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 56,
                  "name": "toFixed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 62,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 91,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 102,
        "name": "Thing2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 123,
                  "name": "toFixed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 123,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 125,
                    "end": 129
                  }
                },
                "accessibility": null,
                "static": false
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 157,
            "name": "q",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 157,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 157,
                  "name": "Thing2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 169,
                  "name": "toFixed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 171,
                  "end": 175,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 194,
            "name": "h",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 194,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 194,
                  "name": "Thing2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 207,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 209,
                  "end": 213,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 242,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 253,
        "name": "Thing3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 274,
                  "name": "toFixed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 274,
                  "end": 280,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 276,
                    "end": 280
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 282,
                "end": 301,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 290,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 290,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 292,
                    "end": 301
                  }
                },
                "accessibility": null,
                "static": false
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 329,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 321,
              "end": 329,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 323,
                "end": 329,
                "typeName": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 329,
                  "name": "Thing3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 342,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 353,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
