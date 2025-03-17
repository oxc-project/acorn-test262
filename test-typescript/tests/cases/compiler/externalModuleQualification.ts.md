__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 224,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "name": "ID",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 149,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 149,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 47,
          "name": "DiffEditor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 57,
          "end": 149,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 63,
              "end": 106,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 89,
                "name": "previousDiffAction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
                    "name": "NavigateAction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 111,
              "end": 147,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 122,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 122,
                "end": 147,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 123,
                    "end": 138,
                    "left": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 133,
                      "name": "id",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 125,
                        "end": 133,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 127,
                          "end": 133
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 138,
                      "name": "ID",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 140,
                  "end": 147,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
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
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "C",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 170,
        "name": "NavigateAction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 171,
        "end": 223,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 177,
            "end": 221,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 221,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 179,
                  "end": 212,
                  "name": "editor",
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
                        "name": "DiffEditor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 214,
                "end": 221,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
