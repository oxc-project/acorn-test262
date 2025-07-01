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
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 9,
              "end": 12
            },
            "start": 9,
            "end": 12
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 15,
              "end": 18
            },
            "start": 15,
            "end": 18
          }
        ],
        "start": 9,
        "end": 18
      },
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "typeArguments": null,
              "start": 29,
              "end": 30
            },
            "start": 29,
            "end": 32
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeArguments": null,
            "start": 35,
            "end": 36
          }
        ],
        "start": 29,
        "end": 36
      },
      "declare": false,
      "start": 20,
      "end": 37
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "typeArguments": null,
                "start": 48,
                "end": 49
              },
              "start": 46,
              "end": 49
            },
            "start": 43,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 43,
          "end": 49
        }
      ],
      "declare": false,
      "start": 39,
      "end": 50
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 62
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 75,
            "end": 78
          },
          "consequent": [],
          "start": 70,
          "end": 79
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 89,
            "end": 92
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 102,
              "end": 108
            }
          ],
          "start": 84,
          "end": 108
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 133
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 140
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 145
                        },
                        "typeArguments": null,
                        "start": 144,
                        "end": 145
                      },
                      "start": 144,
                      "end": 147
                    },
                    "start": 137,
                    "end": 147
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 149,
                    "end": 150
                  },
                  "optional": false,
                  "computed": true,
                  "start": 136,
                  "end": 151
                },
                "start": 130,
                "end": 151
              },
              "directive": null,
              "start": 130,
              "end": 152
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 161,
              "end": 167
            }
          ],
          "start": 113,
          "end": 167
        }
      ],
      "start": 51,
      "end": 169
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
