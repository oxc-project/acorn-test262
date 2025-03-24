__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 37,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 37,
          "body": []
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "decorators": [],
          "name": "Observable",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 31,
          "end": 34,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 32,
              "end": 33,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 41,
        "raw": "'./observable'",
        "value": "./observable"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 88,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 88,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 61,
        "decorators": [],
        "name": "whatever",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 68,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 68,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 65,
              "end": 68
            }
          }
        },
        {
          "type": "Identifier",
          "start": 70,
          "end": 76,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 76,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 73,
              "end": 76
            }
          }
        },
        {
          "type": "Identifier",
          "start": 78,
          "end": 84,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 84,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 81,
              "end": 84
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 90,
      "end": 232,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 232,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 230,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 230,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 201,
                "end": 230,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 211,
                    "end": 224,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 218,
                      "end": 223,
                      "expression": {
                        "type": "Literal",
                        "start": 218,
                        "end": 222,
                        "raw": "null",
                        "value": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 130,
                  "end": 142,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 120,
                      "end": 129,
                      "expression": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 129,
                        "decorators": [],
                        "name": "whatever",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 136,
                      "end": 142
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 174,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 152,
                      "end": 161,
                      "expression": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 161,
                        "decorators": [],
                        "name": "whatever",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": "arg2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 180,
                "end": 200,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 182,
                  "end": 200,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 192,
                    "end": 200,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 193,
                        "end": 199
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 192,
                    "decorators": [],
                    "name": "Observable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 100,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
