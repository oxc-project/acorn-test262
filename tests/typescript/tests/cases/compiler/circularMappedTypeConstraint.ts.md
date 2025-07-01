__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 44,
              "end": 45
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 58
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 69
                      },
                      "typeArguments": null,
                      "start": 68,
                      "end": 69
                    },
                    "start": 62,
                    "end": 69
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 72,
                    "end": 78
                  }
                ],
                "start": 62,
                "end": 78
              },
              "nameType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Capitalize",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 92
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 94
                      },
                      "typeArguments": null,
                      "start": 93,
                      "end": 94
                    }
                  ],
                  "start": 92,
                  "end": 95
                },
                "start": 82,
                "end": 95
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 99
                },
                "typeArguments": null,
                "start": 98,
                "end": 99
              },
              "optional": false,
              "readonly": null,
              "start": 54,
              "end": 101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 101
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 113,
              "end": 119
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 103,
            "end": 119
          }
        ],
        "start": 43,
        "end": 120
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 124,
                "end": 125
              },
              "typeArguments": null,
              "start": 124,
              "end": 125
            },
            "start": 122,
            "end": 125
          },
          "start": 121,
          "end": 125
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "typeArguments": null,
          "start": 128,
          "end": 129
        },
        "start": 126,
        "end": 129
      },
      "body": null,
      "expression": false,
      "start": 22,
      "end": 130
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r2",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 146
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 153
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 155,
                        "end": 156
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 158,
                        "end": 161
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 155,
                      "end": 161
                    }
                  ],
                  "start": 154,
                  "end": 162
                }
              ],
              "optional": false,
              "start": 149,
              "end": 163
            },
            "definite": false,
            "start": 144,
            "end": 163
          }
        ],
        "declare": false,
        "start": 138,
        "end": 164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 131,
      "end": 164
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 164
}
```
