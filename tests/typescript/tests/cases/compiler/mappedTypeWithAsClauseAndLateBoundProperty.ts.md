__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tgt2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 18,
                  "end": 24
                },
                "start": 18,
                "end": 26
              },
              "start": 16,
              "end": 26
            },
            "start": 12,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 26
        }
      ],
      "declare": true,
      "start": 0,
      "end": 27
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
            "name": "src2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 50
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "start": 60,
                    "end": 68
                  },
                  "start": 54,
                  "end": 68
                },
                "nameType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 79
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 81
                        },
                        "typeArguments": null,
                        "start": 80,
                        "end": 81
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "length",
                          "raw": "\"length\"",
                          "start": 83,
                          "end": 91
                        },
                        "start": 83,
                        "end": 91
                      }
                    ],
                    "start": 79,
                    "end": 92
                  },
                  "start": 72,
                  "end": 92
                },
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 96,
                      "end": 102
                    },
                    "start": 96,
                    "end": 104
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "typeArguments": null,
                    "start": 106,
                    "end": 107
                  },
                  "start": 95,
                  "end": 108
                },
                "optional": false,
                "readonly": null,
                "start": 46,
                "end": 110
              },
              "start": 44,
              "end": 110
            },
            "start": 40,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 110
        }
      ],
      "declare": true,
      "start": 28,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "tgt2",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 116
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "src2",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 123
        },
        "start": 112,
        "end": 123
      },
      "directive": null,
      "start": 112,
      "end": 124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
