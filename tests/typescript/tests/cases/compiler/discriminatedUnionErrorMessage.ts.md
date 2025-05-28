__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Square",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 42,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 27,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 20,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 26,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 22,
                "end": 26,
                "literal": {
                  "type": "Literal",
                  "start": 22,
                  "end": 26,
                  "value": "sq",
                  "raw": "\"sq\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 28,
            "end": 40,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 32,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 43,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 57,
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 60,
        "end": 96,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 62,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 66,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 72,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 68,
                "end": 72,
                "literal": {
                  "type": "Literal",
                  "start": 68,
                  "end": 72,
                  "value": "rt",
                  "raw": "\"rt\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 84,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 94,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 97,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 108,
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 111,
        "end": 141,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 124,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 117,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 123,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 119,
                "end": 123,
                "literal": {
                  "type": "Literal",
                  "start": 119,
                  "end": 123,
                  "value": "cr",
                  "raw": "\"cr\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 139,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 131,
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 142,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 152,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 159,
        "end": 196,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 161,
            "end": 167,
            "typeName": {
              "type": "Identifier",
              "start": 161,
              "end": 167,
              "decorators": [],
              "name": "Square",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 174,
            "end": 183,
            "typeName": {
              "type": "Identifier",
              "start": 174,
              "end": 183,
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 190,
            "end": 196,
            "typeName": {
              "type": "Identifier",
              "start": 190,
              "end": 196,
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 258,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 214,
            "decorators": [],
            "name": "shape",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 214,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 214,
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 217,
            "end": 258,
            "properties": [
              {
                "type": "Property",
                "start": 223,
                "end": 233,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 227,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 229,
                  "end": 233,
                  "value": "sq",
                  "raw": "\"sq\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 239,
                "end": 244,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 242,
                  "end": 244,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 250,
                "end": 255,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 253,
                  "end": 255,
                  "value": 13,
                  "raw": "13"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
