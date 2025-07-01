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
        "name": "AObjOrBObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 24
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 26,
                      "end": 29
                    },
                    "start": 26,
                    "end": 29
                  },
                  "start": 24,
                  "end": 29
                },
                "accessibility": null,
                "static": false,
                "start": 20,
                "end": 29
              }
            ],
            "start": 18,
            "end": 31
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 40
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 42,
                      "end": 45
                    },
                    "start": 42,
                    "end": 45
                  },
                  "start": 40,
                  "end": 45
                },
                "accessibility": null,
                "static": false,
                "start": 36,
                "end": 45
              }
            ],
            "start": 34,
            "end": 47
          }
        ],
        "start": 18,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AOrBObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 61
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 70
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 72,
                      "end": 75
                    },
                    "start": 72,
                    "end": 75
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 78,
                      "end": 81
                    },
                    "start": 78,
                    "end": 81
                  }
                ],
                "start": 72,
                "end": 81
              },
              "start": 70,
              "end": 81
            },
            "accessibility": null,
            "static": false,
            "start": 66,
            "end": 81
          }
        ],
        "start": 64,
        "end": 83
      },
      "declare": false,
      "start": 49,
      "end": 84
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 97
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AObjOrBObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 118
              },
              "typeArguments": null,
              "start": 108,
              "end": 118
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 98,
            "end": 118
          }
        ],
        "start": 97,
        "end": 119
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 123
        },
        "typeArguments": null,
        "start": 122,
        "end": 123
      },
      "declare": false,
      "start": 85,
      "end": 124
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 132
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 142
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AOrBObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 150
              },
              "typeArguments": null,
              "start": 143,
              "end": 150
            }
          ],
          "start": 142,
          "end": 151
        },
        "start": 135,
        "end": 151
      },
      "declare": false,
      "start": 126,
      "end": 152
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AObjOrBObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 179
                },
                "typeArguments": null,
                "start": 169,
                "end": 179
              },
              "start": 167,
              "end": 179
            },
            "start": 166,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 166,
          "end": 179
        }
      ],
      "declare": true,
      "start": 154,
      "end": 180
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AOrBObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 203
                },
                "typeArguments": null,
                "start": 196,
                "end": 203
              },
              "start": 194,
              "end": 203
            },
            "start": 193,
            "end": 203
          },
          "init": null,
          "definite": false,
          "start": 193,
          "end": 203
        }
      ],
      "declare": true,
      "start": 181,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 206
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 209,
          "end": 210
        },
        "start": 205,
        "end": 210
      },
      "directive": null,
      "start": 205,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 213
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 217
        },
        "start": 212,
        "end": 217
      },
      "directive": null,
      "start": 212,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 218
}
```
