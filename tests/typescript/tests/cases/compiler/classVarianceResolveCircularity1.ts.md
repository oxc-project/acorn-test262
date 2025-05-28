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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 49,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 79,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 59,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "callme",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 69,
                    "end": 73
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 75,
                "end": 78,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 117,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 89,
              "decorators": [],
              "name": "Field",
              "optional": false,
              "typeAnnotation": null
            },
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
              "object": {
                "type": "CallExpression",
                "start": 100,
                "end": 112,
                "callee": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 106,
                  "decorators": [],
                  "name": "callme",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 107,
                    "end": 111
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 120,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 143,
        "decorators": [],
        "name": "callme",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 150,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
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
          "typeName": {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 168,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 191,
        "decorators": [],
        "name": "callme",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
