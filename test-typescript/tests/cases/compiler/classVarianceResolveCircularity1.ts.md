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
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 79,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 59,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 62,
              "end": 78,
              "object": {
                "type": "CallExpression",
                "start": 62,
                "end": 74,
                "callee": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 68,
                  "name": "callme",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 69,
                    "end": 73
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 75,
                "end": 78,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 117,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 89,
              "name": "Field",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 100,
              "end": 116,
              "object": {
                "type": "CallExpression",
                "start": 100,
                "end": 112,
                "callee": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 106,
                  "name": "callme",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 107,
                    "end": 111
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 120,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 143,
        "name": "callme",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 144,
          "end": 155,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 155,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 155,
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 150,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 156,
        "end": 166,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 158,
          "end": 166,
          "typeName": {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 168,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 191,
        "name": "callme",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 192,
          "end": 201,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 193,
            "end": 201,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 195,
              "end": 201
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
