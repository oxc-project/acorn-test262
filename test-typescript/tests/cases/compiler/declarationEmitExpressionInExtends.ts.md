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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "definite": false,
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
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 16,
                      "end": 19,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 17,
                          "end": 18,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 17,
                            "end": 18,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 65,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 49,
            "end": 59,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 100,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "x",
        "optional": false
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 110,
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 116,
      "expression": {
        "type": "MemberExpression",
        "start": 112,
        "end": 115,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 112,
          "end": 113,
          "decorators": [],
          "name": "q",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 114,
          "end": 115,
          "decorators": [],
          "name": "s",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
