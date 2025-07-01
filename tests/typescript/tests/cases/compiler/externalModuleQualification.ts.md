__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ID",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 13
            },
            "init": {
              "type": "Literal",
              "value": "test",
              "raw": "\"test\"",
              "start": 16,
              "end": 22
            },
            "definite": false,
            "start": 11,
            "end": 22
          }
        ],
        "declare": false,
        "start": 7,
        "end": 23
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 23
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DiffEditor",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 47
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 48,
              "end": 49
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 52
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 51,
              "end": 52
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 54,
              "end": 55
            }
          ],
          "start": 47,
          "end": 56
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "previousDiffAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 89
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NavigateAction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 105
                  },
                  "typeArguments": null,
                  "start": 91,
                  "end": 105
                },
                "start": 89,
                "end": 105
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 63,
              "end": 106
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 122
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 127,
                          "end": 133
                        },
                        "start": 125,
                        "end": 133
                      },
                      "start": 123,
                      "end": 133
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ID",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 138
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 138
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 140,
                  "end": 147
                },
                "expression": false,
                "start": 122,
                "end": 147
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 111,
              "end": 147
            }
          ],
          "start": 57,
          "end": 149
        },
        "abstract": false,
        "declare": false,
        "start": 31,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 149
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NavigateAction",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 170
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "editor",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DiffEditor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 197
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
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
                        ],
                        "start": 197,
                        "end": 212
                      },
                      "start": 187,
                      "end": 212
                    },
                    "start": 185,
                    "end": 212
                  },
                  "start": 179,
                  "end": 212
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 214,
                "end": 221
              },
              "expression": false,
              "start": 178,
              "end": 221
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 177,
            "end": 221
          }
        ],
        "start": 171,
        "end": 223
      },
      "abstract": false,
      "declare": false,
      "start": 150,
      "end": 223
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 223
}
```
