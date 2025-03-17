__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 223,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "name": "List",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 80,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 53,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "name": "data",
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
              "start": 49,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 78,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "name": "next",
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
              "start": 62,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 68,
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 68,
                  "end": 77,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 69,
                      "end": 76,
                      "typeName": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 73,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 73,
                        "end": 76,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 74,
                            "end": 75,
                            "typeName": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 75,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
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
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 91,
            "name": "list1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 94,
            "end": 112,
            "callee": {
              "type": "Identifier",
              "start": 98,
              "end": 102,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 102,
              "end": 110,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 103,
                  "end": 109
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 123,
            "name": "list2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 126,
            "end": 144,
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 134,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 134,
              "end": 142,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 135,
                  "end": 141
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 155,
            "name": "list3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 158,
            "end": 176,
            "callee": {
              "type": "Identifier",
              "start": 162,
              "end": 166,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 166,
              "end": 174,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 167,
                  "end": 173
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 179,
          "end": 184,
          "name": "list1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 187,
          "end": 192,
          "name": "list2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 214,
      "expression": {
        "type": "AssignmentExpression",
        "start": 200,
        "end": 213,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 200,
          "end": 205,
          "name": "list1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 208,
          "end": 213,
          "name": "list3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
