__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 34,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 26,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 26,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 22,
              "end": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 27,
        "end": 33,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 29,
          "end": 33
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 53,
            "decorators": [],
            "name": "gg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 53,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 43,
                "end": 53,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 49,
                    "end": 53
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 60,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 108,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 83,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 89,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 90,
                "end": 98,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 98,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 97,
                    "end": 98,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 105,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 101,
                "end": 105
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "T",
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
      "start": 110,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 136,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 136,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 130,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 131,
                      "end": 135
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 130,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 152,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 138,
        "end": 151,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 138,
          "end": 140,
          "decorators": [],
          "name": "gg",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 143,
          "end": 151,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 151,
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
