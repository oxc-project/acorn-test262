__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 142,
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
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 25,
              "decorators": [],
              "name": "StringArgPos1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 40,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 40,
              "decorators": [],
              "name": "NumberArgPos2",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 42,
        "end": 142,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 68,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "decorators": [],
              "name": "xPos1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 68,
                  "decorators": [],
                  "name": "StringArgPos1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 93,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 77,
              "decorators": [],
              "name": "yPos2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 93,
                  "decorators": [],
                  "name": "NumberArgPos2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 140,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 106,
              "decorators": [],
              "name": "zPos2Pos1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 110,
                  "end": 140,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 111,
                      "end": 124,
                      "typeName": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 124,
                        "decorators": [],
                        "name": "NumberArgPos2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 126,
                      "end": 139,
                      "typeName": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 139,
                        "decorators": [],
                        "name": "StringArgPos1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 169,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
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
      "start": 170,
      "end": 191,
      "expression": {
        "type": "AssignmentExpression",
        "start": 170,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 170,
          "end": 187,
          "object": {
            "type": "MemberExpression",
            "start": 170,
            "end": 181,
            "object": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 172,
              "end": 181,
              "decorators": [],
              "name": "zPos2Pos1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 187,
            "decorators": [],
            "name": "xPos1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 190,
          "end": 191,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
