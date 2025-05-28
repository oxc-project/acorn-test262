__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 26,
            "decorators": [],
            "name": "tgt2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 26,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 18,
                "end": 26,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 18,
                  "end": 24
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 111,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 110,
            "decorators": [],
            "name": "src2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 110,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 46,
                "end": 110,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 54,
                  "end": 68,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 60,
                    "end": 68,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    }
                  }
                },
                "nameType": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 92,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 79,
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 79,
                    "end": 92,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 80,
                        "end": 81,
                        "typeName": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 81,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 83,
                        "end": 91,
                        "literal": {
                          "type": "Literal",
                          "start": 83,
                          "end": 91,
                          "value": "length",
                          "raw": "\"length\""
                        }
                      }
                    ]
                  }
                },
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 95,
                  "end": 108,
                  "objectType": {
                    "type": "TSArrayType",
                    "start": 96,
                    "end": 104,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 96,
                      "end": 102
                    }
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 106,
                    "end": 107,
                    "typeName": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "optional": false,
                "readonly": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 124,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 123,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 112,
          "end": 116,
          "decorators": [],
          "name": "tgt2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 119,
          "end": 123,
          "decorators": [],
          "name": "src2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
