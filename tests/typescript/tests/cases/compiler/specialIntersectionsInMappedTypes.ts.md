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
        "name": "Alignment",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 36
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 49,
                "end": 51
              }
            ],
            "start": 40,
            "end": 51
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "left",
              "raw": "\"left\"",
              "start": 55,
              "end": 61
            },
            "start": 55,
            "end": 61
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "center",
              "raw": "\"center\"",
              "start": 64,
              "end": 72
            },
            "start": 64,
            "end": 72
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "right",
              "raw": "\"right\"",
              "start": 75,
              "end": 82
            },
            "start": 75,
            "end": 82
          }
        ],
        "start": 39,
        "end": 82
      },
      "declare": false,
      "start": 22,
      "end": 83
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Alignments",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 99
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 108
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Alignment",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 118
              },
              "typeArguments": null,
              "start": 109,
              "end": 118
            },
            {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            }
          ],
          "start": 108,
          "end": 127
        },
        "start": 102,
        "end": 127
      },
      "declare": false,
      "start": 84,
      "end": 128
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Alignments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 149
                },
                "typeArguments": null,
                "start": 139,
                "end": 149
              },
              "start": 137,
              "end": 149
            },
            "start": 136,
            "end": 149
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
                  "name": "left",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 162
                },
                "value": {
                  "type": "Literal",
                  "value": "align-left",
                  "raw": "\"align-left\"",
                  "start": 164,
                  "end": 176
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 158,
                "end": 176
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "center",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 188
                },
                "value": {
                  "type": "Literal",
                  "value": "align-center",
                  "raw": "\"align-center\"",
                  "start": 190,
                  "end": 204
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 182,
                "end": 204
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 215
                },
                "value": {
                  "type": "Literal",
                  "value": "align-right",
                  "raw": "\"align-right\"",
                  "start": 217,
                  "end": 230
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 210,
                "end": 230
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 241
                },
                "value": {
                  "type": "Literal",
                  "value": "align-other",
                  "raw": "\"align-other\"",
                  "start": 243,
                  "end": 256
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 236,
                "end": 256
              }
            ],
            "start": 152,
            "end": 259
          },
          "definite": false,
          "start": 136,
          "end": 259
        }
      ],
      "declare": false,
      "start": 130,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 263
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "left",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 268
          },
          "optional": false,
          "computed": false,
          "start": 262,
          "end": 268
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 275
        },
        "optional": false,
        "computed": false,
        "start": 262,
        "end": 275
      },
      "directive": null,
      "start": 262,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 278
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 284
          },
          "optional": false,
          "computed": false,
          "start": 277,
          "end": 284
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 291
        },
        "optional": false,
        "computed": false,
        "start": 277,
        "end": 291
      },
      "directive": null,
      "start": 277,
      "end": 292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 316
}
```
