__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 70,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 97,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 116,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 119,
            "end": 164,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 120,
                "end": 133,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 130,
                  "end": 133,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 121,
                    "end": 125,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 122,
                      "end": 125,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 124,
                        "end": 125,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 125,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 135,
                "end": 148,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 145,
                  "end": 148,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 136,
                    "end": 140,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 137,
                      "end": 140,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 139,
                        "end": 140,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 150,
                "end": 163,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 160,
                  "end": 163,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 151,
                    "end": 155,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 152,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 154,
                        "end": 155,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 155,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
