__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 165,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 130,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 121,
          "end": 125,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 124,
              "end": 125,
              "typeName": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 129,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 128,
          "end": 129,
          "typeName": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 101,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 54,
              "end": 101,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 62,
                "end": 78,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 62,
                    "end": 69,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 69,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 72,
                    "end": 78
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "nameType": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 95,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 92,
                  "end": 95,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 93,
                      "end": 94,
                      "typeName": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 92,
                  "decorators": [],
                  "name": "Capitalize",
                  "optional": false
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "V",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 103,
            "end": 119,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 113,
              "end": 119
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 164,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 138,
        "end": 164,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 144,
            "end": 163,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 144,
              "end": 146,
              "decorators": [],
              "name": "r2",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 149,
              "end": 163,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 154,
                  "end": 162,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 155,
                      "end": 161,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 158,
                        "end": 161,
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 149,
                "end": 153,
                "decorators": [],
                "name": "foo2",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
