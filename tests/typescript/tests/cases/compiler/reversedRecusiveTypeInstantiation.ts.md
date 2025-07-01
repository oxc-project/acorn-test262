__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringArgPos1",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 25
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberArgPos2",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 40
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 40
          }
        ],
        "start": 11,
        "end": 41
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "xPos1",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringArgPos1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 68
                },
                "typeArguments": null,
                "start": 55,
                "end": 68
              },
              "start": 53,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 47,
            "end": 68
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "yPos2",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberArgPos2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 93
                },
                "typeArguments": null,
                "start": 80,
                "end": 93
              },
              "start": 78,
              "end": 93
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 93
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zPos2Pos1",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberArgPos2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 111,
                        "end": 124
                      },
                      "typeArguments": null,
                      "start": 111,
                      "end": 124
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringArgPos1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 139
                      },
                      "typeArguments": null,
                      "start": 126,
                      "end": 139
                    }
                  ],
                  "start": 110,
                  "end": 140
                },
                "start": 109,
                "end": 140
              },
              "start": 107,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 140
          }
        ],
        "start": 42,
        "end": 142
      },
      "declare": false,
      "start": 0,
      "end": 142
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 153
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 153,
                  "end": 169
                },
                "start": 152,
                "end": 169
              },
              "start": 150,
              "end": 169
            },
            "start": 148,
            "end": 169
          },
          "init": null,
          "definite": false,
          "start": 148,
          "end": 169
        }
      ],
      "declare": false,
      "start": 144,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 171
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "zPos2Pos1",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 181
            },
            "optional": false,
            "computed": false,
            "start": 170,
            "end": 181
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "xPos1",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 187
          },
          "optional": false,
          "computed": false,
          "start": 170,
          "end": 187
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 190,
          "end": 191
        },
        "start": 170,
        "end": 191
      },
      "directive": null,
      "start": 170,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
}
```
