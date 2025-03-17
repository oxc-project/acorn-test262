__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 142,
      "body": {
        "type": "TSInterfaceBody",
        "start": 42,
        "end": 142,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 68,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "decorators": [],
              "name": "xPos1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 68,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 68,
                  "decorators": [],
                  "name": "StringArgPos1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 93,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 77,
              "decorators": [],
              "name": "yPos2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 93,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 93,
                  "decorators": [],
                  "name": "NumberArgPos2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 140,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 106,
              "decorators": [],
              "name": "zPos2Pos1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 140,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 110,
                  "end": 140,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 111,
                      "end": 124,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 124,
                        "decorators": [],
                        "name": "NumberArgPos2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 126,
                      "end": 139,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 139,
                        "decorators": [],
                        "name": "StringArgPos1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 41,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 25,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 25,
              "decorators": [],
              "name": "StringArgPos1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 40,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 40,
              "decorators": [],
              "name": "NumberArgPos2",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 169,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 169,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 169,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 153,
                  "end": 169,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 154,
                      "end": 160
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 162,
                      "end": 168
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 170,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 170,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 170,
          "end": 187,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 170,
            "end": 181,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 172,
              "end": 181,
              "decorators": [],
              "name": "zPos2Pos1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 187,
            "decorators": [],
            "name": "xPos1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 190,
          "end": 191,
          "raw": "1",
          "value": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
