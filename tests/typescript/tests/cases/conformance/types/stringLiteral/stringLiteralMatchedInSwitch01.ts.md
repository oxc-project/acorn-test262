__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 19,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 18,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 9,
            "end": 12,
            "literal": {
              "type": "Literal",
              "start": 9,
              "end": 12,
              "raw": "\"a\"",
              "value": "a"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 15,
            "end": 18,
            "literal": {
              "type": "Literal",
              "start": 15,
              "end": 18,
              "raw": "\"b\"",
              "value": "b"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 20,
      "end": 37,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 29,
        "end": 36,
        "types": [
          {
            "type": "TSArrayType",
            "start": 29,
            "end": 32,
            "elementType": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSTypeReference",
            "start": 35,
            "end": 36,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 49,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "SwitchStatement",
      "start": 51,
      "end": 169,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 70,
          "end": 79,
          "consequent": [],
          "test": {
            "type": "Literal",
            "start": 75,
            "end": 78,
            "raw": "\"a\"",
            "value": "a"
          }
        },
        {
          "type": "SwitchCase",
          "start": 84,
          "end": 108,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 102,
              "end": 108,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 89,
            "end": 92,
            "raw": "\"b\"",
            "value": "b"
          }
        },
        {
          "type": "SwitchCase",
          "start": 113,
          "end": 167,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 130,
              "end": 152,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 130,
                "end": 151,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 133,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 136,
                  "end": 151,
                  "computed": true,
                  "object": {
                    "type": "TSAsExpression",
                    "start": 137,
                    "end": 147,
                    "expression": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 140,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 144,
                      "end": 147,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 144,
                        "end": 145,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 145,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 149,
                    "end": 150,
                    "raw": "0",
                    "value": 0
                  }
                }
              }
            },
            {
              "type": "BreakStatement",
              "start": 161,
              "end": 167,
              "label": null
            }
          ],
          "test": null
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
