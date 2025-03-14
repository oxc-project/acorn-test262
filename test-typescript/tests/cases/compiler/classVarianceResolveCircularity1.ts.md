__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 211,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 119,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 49,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "decorators": [],
              "name": "num",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 79,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 59,
              "decorators": [],
              "name": "Value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 62,
              "end": 78,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 62,
                "end": 74,
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 69,
                    "end": 73
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 68,
                  "decorators": [],
                  "name": "callme",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 75,
                "end": 78,
                "decorators": [],
                "name": "num",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 117,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 89,
              "decorators": [],
              "name": "Field",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 97,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 91,
                "end": 97
              }
            },
            "value": {
              "type": "MemberExpression",
              "start": 100,
              "end": 116,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 100,
                "end": 112,
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 107,
                    "end": 111
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 106,
                  "decorators": [],
                  "name": "callme",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "decorators": [],
                "name": "num",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 120,
      "end": 167,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 143,
        "decorators": [],
        "name": "callme",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 144,
          "end": 155,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 155,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 155,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 150,
                "end": 155,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 151,
                    "end": 154
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 150,
                "decorators": [],
                "name": "Bar",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 156,
        "end": 166,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 158,
          "end": 166,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 161,
            "end": 166,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 162,
                "end": 165
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "decorators": [],
            "name": "Bar",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 168,
      "end": 211,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 191,
        "decorators": [],
        "name": "callme",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 192,
          "end": 201,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 193,
            "end": 201,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 195,
              "end": 201
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 202,
        "end": 210,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 204,
          "end": 210
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
