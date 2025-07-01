__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 35
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 37
          }
        ],
        "start": 35,
        "end": 38
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 49
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "typeArguments": null,
                "start": 51,
                "end": 52
              },
              "start": 49,
              "end": 52
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 45,
            "end": 53
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 68
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 73
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 74,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 74,
                            "end": 75
                          }
                        ],
                        "start": 73,
                        "end": 76
                      },
                      "start": 69,
                      "end": 76
                    }
                  ],
                  "start": 68,
                  "end": 77
                },
                "start": 64,
                "end": 77
              },
              "start": 62,
              "end": 77
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 58,
            "end": 78
          }
        ],
        "start": 39,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 25,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "list1",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 91
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 102
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 103,
                  "end": 109
                }
              ],
              "start": 102,
              "end": 110
            },
            "arguments": [],
            "start": 94,
            "end": 112
          },
          "definite": false,
          "start": 86,
          "end": 112
        }
      ],
      "declare": false,
      "start": 82,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "list2",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 123
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 134
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 135,
                  "end": 141
                }
              ],
              "start": 134,
              "end": 142
            },
            "arguments": [],
            "start": 126,
            "end": 144
          },
          "definite": false,
          "start": 118,
          "end": 144
        }
      ],
      "declare": false,
      "start": 114,
      "end": 145
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "list3",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 155
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 166
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 167,
                  "end": 173
                }
              ],
              "start": 166,
              "end": 174
            },
            "arguments": [],
            "start": 158,
            "end": 176
          },
          "definite": false,
          "start": 150,
          "end": 176
        }
      ],
      "declare": false,
      "start": 146,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "list1",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 184
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "list2",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 192
        },
        "start": 179,
        "end": 192
      },
      "directive": null,
      "start": 179,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "list1",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 205
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "list3",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 213
        },
        "start": 200,
        "end": 213
      },
      "directive": null,
      "start": 200,
      "end": 214
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 25,
  "end": 223
}
```
