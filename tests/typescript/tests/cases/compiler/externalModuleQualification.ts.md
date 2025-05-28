__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "decorators": [],
              "name": "ID",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 16,
              "end": 22,
              "value": "test",
              "raw": "\"test\""
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 149,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 149,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 47,
          "decorators": [],
          "name": "DiffEditor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 47,
          "end": 56,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 48,
              "end": 49,
              "name": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 51,
              "end": 52,
              "name": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 54,
              "end": 55,
              "name": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "C",
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
          "start": 57,
          "end": 149,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 63,
              "end": 106,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 89,
                "decorators": [],
                "name": "previousDiffAction",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 89,
                "end": 105,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 91,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 105,
                    "decorators": [],
                    "name": "NavigateAction",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 111,
              "end": 147,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 122,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 122,
                "end": 147,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 123,
                    "end": 138,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 133,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 125,
                        "end": 133,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 127,
                          "end": 133
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 138,
                      "decorators": [],
                      "name": "ID",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 140,
                  "end": 147,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 223,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 170,
        "decorators": [],
        "name": "NavigateAction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 171,
        "end": 223,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 177,
            "end": 221,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 221,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 179,
                  "end": 212,
                  "decorators": [],
                  "name": "editor",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 185,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 187,
                      "end": 212,
                      "typeName": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 197,
                        "decorators": [],
                        "name": "DiffEditor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 197,
                        "end": 212,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 198,
                            "end": 201
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 203,
                            "end": 206
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 208,
                            "end": 211
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 214,
                "end": 221,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
