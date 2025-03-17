__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 26,
            "name": "tgt2",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 110,
            "name": "src2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 110,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 46,
                "end": 110,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 49,
                  "end": 68,
                  "name": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 92,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 79,
                    "name": "Exclude",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
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
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "name": "tgt2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 119,
          "end": 123,
          "name": "src2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
