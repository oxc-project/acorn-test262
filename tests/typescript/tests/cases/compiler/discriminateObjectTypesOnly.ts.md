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
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
        ],
        "start": 13,
        "end": 28
      },
      "declare": false,
      "start": 0,
      "end": 29
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 44
                },
                "typeArguments": null,
                "start": 39,
                "end": 44
              },
              "start": 37,
              "end": 44
            },
            "start": 36,
            "end": 44
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 56
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 58,
                  "end": 62
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 49,
                "end": 62
              }
            ],
            "start": 47,
            "end": 64
          },
          "definite": false,
          "start": 36,
          "end": 64
        }
      ],
      "declare": false,
      "start": 30,
      "end": 65
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 102
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 105,
            "end": 111
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 123
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 125,
                    "end": 129
                  },
                  "start": 123,
                  "end": 129
                },
                "accessibility": null,
                "static": false,
                "start": 116,
                "end": 129
              }
            ],
            "start": 114,
            "end": 131
          },
          {
            "type": "TSObjectKeyword",
            "start": 134,
            "end": 140
          }
        ],
        "start": 105,
        "end": 140
      },
      "declare": false,
      "start": 91,
      "end": 141
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 157
                },
                "typeArguments": null,
                "start": 151,
                "end": 157
              },
              "start": 149,
              "end": 157
            },
            "start": 148,
            "end": 157
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 169
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 171,
                  "end": 175
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 162,
                "end": 175
              }
            ],
            "start": 160,
            "end": 177
          },
          "definite": false,
          "start": 148,
          "end": 177
        }
      ],
      "declare": false,
      "start": 142,
      "end": 178
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 194
                },
                "typeArguments": null,
                "start": 188,
                "end": 194
              },
              "start": 186,
              "end": 194
            },
            "start": 185,
            "end": 194
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 207
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 209,
                  "end": 213
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 199,
                "end": 213
              }
            ],
            "start": 197,
            "end": 215
          },
          "definite": false,
          "start": 185,
          "end": 215
        }
      ],
      "declare": false,
      "start": 179,
      "end": 216
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 253
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 256,
            "end": 262
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 274
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 276,
                    "end": 280
                  },
                  "start": 274,
                  "end": 280
                },
                "accessibility": null,
                "static": false,
                "start": 267,
                "end": 281
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 290
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 292,
                    "end": 301
                  },
                  "start": 290,
                  "end": 301
                },
                "accessibility": null,
                "static": false,
                "start": 282,
                "end": 301
              }
            ],
            "start": 265,
            "end": 303
          },
          {
            "type": "TSObjectKeyword",
            "start": 306,
            "end": 312
          }
        ],
        "start": 256,
        "end": 312
      },
      "declare": false,
      "start": 242,
      "end": 313
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
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 329
                },
                "typeArguments": null,
                "start": 323,
                "end": 329
              },
              "start": 321,
              "end": 329
            },
            "start": 320,
            "end": 329
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 342
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 353
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 334,
                "end": 353
              }
            ],
            "start": 332,
            "end": 355
          },
          "definite": false,
          "start": 320,
          "end": 355
        }
      ],
      "declare": false,
      "start": 314,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 385
}
```
