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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "StringArgPos1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "NumberArgPos2",
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
              "name": "xPos1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "StringArgPos1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "yPos2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "NumberArgPos2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "zPos2Pos1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "NumberArgPos2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "StringArgPos1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 169,
            "name": "a",
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 172,
              "end": 181,
              "name": "zPos2Pos1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 187,
            "name": "xPos1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
