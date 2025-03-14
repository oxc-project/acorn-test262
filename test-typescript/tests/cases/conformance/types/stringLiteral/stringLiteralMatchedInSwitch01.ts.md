stringLiteralMatchedInSwitch01.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "S",
        "optional": false
      },
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
              "raw": "\"a\"",
              "value": "a"
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
              "raw": "\"b\"",
              "value": "b"
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 39,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "T",
        "optional": false
      },
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
                "decorators": [],
                "name": "S",
                "optional": false
              }
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
              "decorators": [],
              "name": "S",
              "optional": false
            }
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 51,
            "decorators": [],
            "name": "foo",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
      "start": 53,
      "end": 171,
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
            "raw": "\"a\"",
            "value": "a"
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
            "raw": "\"b\"",
            "value": "b"
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
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 138,
                  "end": 153,
                  "computed": true,
                  "object": {
                    "type": "TSAsExpression",
                    "start": 139,
                    "end": 149,
                    "expression": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 142,
                      "decorators": [],
                      "name": "foo",
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
                          "decorators": [],
                          "name": "S",
                          "optional": false
                        }
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 151,
                    "end": 152,
                    "raw": "0",
                    "value": 0
                  }
                }
              }
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
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
