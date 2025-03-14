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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "decorators": [],
              "name": "ID",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 16,
              "end": 22,
              "raw": "\"test\"",
              "value": "test"
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 149,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 149,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 57,
          "end": 149,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 63,
              "end": 106,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 89,
                "decorators": [],
                "name": "previousDiffAction",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
                    "optional": false
                  }
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 111,
              "end": 147,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 122,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 122,
                "end": 147,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 140,
                  "end": 147,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 138,
                      "decorators": [],
                      "name": "ID",
                      "optional": false
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 47,
          "decorators": [],
          "name": "DiffEditor",
          "optional": false
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 47,
          "end": 56,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 48,
              "end": 49,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 51,
              "end": 52,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 54,
              "end": 55,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 223,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 171,
        "end": 223,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 177,
            "end": 221,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 221,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 214,
                "end": 221,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 197,
                        "decorators": [],
                        "name": "DiffEditor",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 170,
        "decorators": [],
        "name": "NavigateAction",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
