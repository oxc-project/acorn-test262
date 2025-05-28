__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 33,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 33,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 13,
                    "end": 31,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 16,
                      "end": 19,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 17,
                          "end": 18,
                          "name": {
                            "type": "Identifier",
                            "start": 17,
                            "end": 18,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 20,
                        "end": 26,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 21,
                          "end": 26,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 23,
                            "end": 26
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 27,
                      "end": 30,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 29,
                        "end": 30,
                        "typeName": {
                          "type": "Identifier",
                          "start": 29,
                          "end": 30,
                          "decorators": [],
                          "name": "Q",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 65,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 49,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 52,
                "end": 58
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 100,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 84,
        "end": 92,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 85,
            "end": 91
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 100,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 111,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 110,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 116,
      "expression": {
        "type": "MemberExpression",
        "start": 112,
        "end": 115,
        "object": {
          "type": "Identifier",
          "start": 112,
          "end": 113,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 114,
          "end": 115,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
