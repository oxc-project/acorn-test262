__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 316,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 83,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 36,
        "decorators": [],
        "name": "Alignment",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 39,
        "end": 82,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 40,
            "end": 51,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              },
              {
                "type": "TSTypeLiteral",
                "start": 49,
                "end": 51,
                "members": []
              }
            ]
          },
          {
            "type": "TSLiteralType",
            "start": 55,
            "end": 61,
            "literal": {
              "type": "Literal",
              "start": 55,
              "end": 61,
              "raw": "\"left\"",
              "value": "left"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 64,
            "end": 72,
            "literal": {
              "type": "Literal",
              "start": 64,
              "end": 72,
              "raw": "\"center\"",
              "value": "center"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 75,
            "end": 82,
            "literal": {
              "type": "Literal",
              "start": 75,
              "end": 82,
              "raw": "\"right\"",
              "value": "right"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 84,
      "end": 128,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 99,
        "decorators": [],
        "name": "Alignments",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 102,
        "end": 127,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 108,
          "end": 127,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 109,
              "end": 118,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 118,
                "decorators": [],
                "name": "Alignment",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 102,
          "end": 108,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 149,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 149,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 149,
                  "decorators": [],
                  "name": "Alignments",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 152,
            "end": 259,
            "properties": [
              {
                "type": "Property",
                "start": 158,
                "end": 176,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 162,
                  "decorators": [],
                  "name": "left",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 164,
                  "end": 176,
                  "raw": "\"align-left\"",
                  "value": "align-left"
                }
              },
              {
                "type": "Property",
                "start": 182,
                "end": 204,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 188,
                  "decorators": [],
                  "name": "center",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 190,
                  "end": 204,
                  "raw": "\"align-center\"",
                  "value": "align-center"
                }
              },
              {
                "type": "Property",
                "start": 210,
                "end": 230,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 215,
                  "decorators": [],
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 217,
                  "end": 230,
                  "raw": "\"align-right\"",
                  "value": "align-right"
                }
              },
              {
                "type": "Property",
                "start": 236,
                "end": 256,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 241,
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 243,
                  "end": 256,
                  "raw": "\"align-other\"",
                  "value": "align-other"
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
      "type": "ExpressionStatement",
      "start": 262,
      "end": 276,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 262,
        "end": 275,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 262,
          "end": 268,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 264,
            "end": 268,
            "decorators": [],
            "name": "left",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 269,
          "end": 275,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 292,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 277,
        "end": 291,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 277,
          "end": 284,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 279,
            "end": 284,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 285,
          "end": 291,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
