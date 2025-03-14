objectTypeWithRecursiveWrappedProperty.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 80,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 53,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 78,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 77,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 68,
                  "end": 77,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 69,
                      "end": 76,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 73,
                        "decorators": [],
                        "name": "List",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 68,
                  "decorators": [],
                  "name": "List",
                  "optional": false
                }
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
        "start": 31,
        "end": 35,
        "decorators": [],
        "name": "List",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 91,
            "decorators": [],
            "name": "list1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 94,
            "end": 112,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 98,
              "end": 102,
              "decorators": [],
              "name": "List",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 123,
            "decorators": [],
            "name": "list2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 126,
            "end": 144,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 134,
              "decorators": [],
              "name": "List",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 155,
            "decorators": [],
            "name": "list3",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 158,
            "end": 176,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 162,
              "end": 166,
              "decorators": [],
              "name": "List",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "decorators": [],
          "name": "list1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 187,
          "end": 192,
          "decorators": [],
          "name": "list2",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "list1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 208,
          "end": 213,
          "decorators": [],
          "name": "list3",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
