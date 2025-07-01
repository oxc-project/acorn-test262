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
        "name": "Square",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "sq",
                  "raw": "\"sq\"",
                  "start": 22,
                  "end": 26
                },
                "start": 22,
                "end": 26
              },
              "start": 20,
              "end": 26
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 27
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 40
          }
        ],
        "start": 14,
        "end": 42
      },
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 57
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "rt",
                  "raw": "\"rt\"",
                  "start": 68,
                  "end": 72
                },
                "start": 68,
                "end": 72
              },
              "start": 66,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 62,
            "end": 73
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 84
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 94
          }
        ],
        "start": 60,
        "end": 96
      },
      "declare": false,
      "start": 43,
      "end": 96
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 108
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "cr",
                  "raw": "\"cr\"",
                  "start": 119,
                  "end": 123
                },
                "start": 119,
                "end": 123
              },
              "start": 117,
              "end": 123
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 124
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 125,
            "end": 139
          }
        ],
        "start": 111,
        "end": 141
      },
      "declare": false,
      "start": 97,
      "end": 141
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Square",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 167
            },
            "typeArguments": null,
            "start": 161,
            "end": 167
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 183
            },
            "typeArguments": null,
            "start": 174,
            "end": 183
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 196
            },
            "typeArguments": null,
            "start": 190,
            "end": 196
          }
        ],
        "start": 159,
        "end": 196
      },
      "declare": false,
      "start": 142,
      "end": 197
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
            "name": "shape",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 214
                },
                "typeArguments": null,
                "start": 209,
                "end": 214
              },
              "start": 207,
              "end": 214
            },
            "start": 202,
            "end": 214
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 227
                },
                "value": {
                  "type": "Literal",
                  "value": "sq",
                  "raw": "\"sq\"",
                  "start": 229,
                  "end": 233
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 223,
                "end": 233
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
                  "start": 239,
                  "end": 240
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 242,
                  "end": 244
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 239,
                "end": 244
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 251
                },
                "value": {
                  "type": "Literal",
                  "value": 13,
                  "raw": "13",
                  "start": 253,
                  "end": 255
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 255
              }
            ],
            "start": 217,
            "end": 258
          },
          "definite": false,
          "start": 202,
          "end": 258
        }
      ],
      "declare": false,
      "start": 198,
      "end": 258
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 258
}
```
