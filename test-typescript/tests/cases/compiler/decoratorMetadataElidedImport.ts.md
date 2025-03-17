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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 37,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "name": "Observable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 37,
          "body": []
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 31,
          "end": 34,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 32,
              "end": 33,
              "name": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
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
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 233,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 41,
        "value": "./observable",
        "raw": "'./observable'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 61,
        "name": "whatever",
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
          "start": 62,
          "end": 68,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 68,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 65,
              "end": 68
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 70,
          "end": 76,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 76,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 73,
              "end": 76
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 78,
          "end": 84,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 84,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 81,
              "end": 84
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 88,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 90,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 100,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 232,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 230,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 230,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 130,
                  "end": 142,
                  "name": "arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 136,
                      "end": 142
                    }
                  },
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 120,
                      "end": 129,
                      "expression": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 129,
                        "name": "whatever",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 174,
                  "name": "arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    }
                  },
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 152,
                      "end": 161,
                      "expression": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 161,
                        "name": "whatever",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false
                }
              ],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 180,
                "end": 200,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 182,
                  "end": 200,
                  "typeName": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 192,
                    "name": "Observable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
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
  "sourceType": "module",
  "hashbang": null
}
```
