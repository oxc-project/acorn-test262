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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 36,
        "decorators": [],
        "name": "Alignment",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "left",
              "raw": "\"left\""
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
              "value": "center",
              "raw": "\"center\""
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
              "value": "right",
              "raw": "\"right\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 84,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 99,
        "decorators": [],
        "name": "Alignments",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 102,
        "end": 127,
        "typeName": {
          "type": "Identifier",
          "start": 102,
          "end": 108,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 108,
          "end": 127,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 109,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 118,
                "decorators": [],
                "name": "Alignment",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 260,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 259,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 149,
                  "decorators": [],
                  "name": "Alignments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 162,
                  "decorators": [],
                  "name": "left",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 164,
                  "end": 176,
                  "value": "align-left",
                  "raw": "\"align-left\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 182,
                "end": 204,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 188,
                  "decorators": [],
                  "name": "center",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 190,
                  "end": 204,
                  "value": "align-center",
                  "raw": "\"align-center\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 210,
                "end": 230,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 215,
                  "decorators": [],
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 217,
                  "end": 230,
                  "value": "align-right",
                  "raw": "\"align-right\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 236,
                "end": 256,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 241,
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 243,
                  "end": 256,
                  "value": "align-other",
                  "raw": "\"align-other\""
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
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 276,
      "expression": {
        "type": "MemberExpression",
        "start": 262,
        "end": 275,
        "object": {
          "type": "MemberExpression",
          "start": 262,
          "end": 268,
          "object": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 264,
            "end": 268,
            "decorators": [],
            "name": "left",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 269,
          "end": 275,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 292,
      "expression": {
        "type": "MemberExpression",
        "start": 277,
        "end": 291,
        "object": {
          "type": "MemberExpression",
          "start": 277,
          "end": 284,
          "object": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 279,
            "end": 284,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 285,
          "end": 291,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
