__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 171,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 20,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 11,
            "end": 14,
            "literal": {
              "type": "Literal",
              "start": 11,
              "end": 14,
              "value": "a",
              "raw": "\"a\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 17,
            "end": 20,
            "literal": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "value": "b",
              "raw": "\"b\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 31,
        "end": 38,
        "types": [
          {
            "type": "TSArrayType",
            "start": 31,
            "end": 34,
            "elementType": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 37,
            "end": 38,
            "typeName": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 51,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "name": "T",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 53,
      "end": 171,
      "discriminant": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 72,
          "end": 81,
          "consequent": [],
          "test": {
            "type": "Literal",
            "start": 77,
            "end": 80,
            "value": "a",
            "raw": "\"a\""
          }
        },
        {
          "type": "SwitchCase",
          "start": 86,
          "end": 110,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 104,
              "end": 110,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 91,
            "end": 94,
            "value": "b",
            "raw": "\"b\""
          }
        },
        {
          "type": "SwitchCase",
          "start": 115,
          "end": 169,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 132,
              "end": 154,
              "expression": {
                "type": "AssignmentExpression",
                "start": 132,
                "end": 153,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 135,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 138,
                  "end": 153,
                  "object": {
                    "type": "TSAsExpression",
                    "start": 139,
                    "end": 149,
                    "expression": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 142,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 146,
                      "end": 149,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 146,
                        "end": 147,
                        "typeName": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 147,
                          "name": "S",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "property": {
                    "type": "Literal",
                    "start": 151,
                    "end": 152,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                }
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 163,
              "end": 169,
              "label": null
            }
          ],
          "test": null
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
