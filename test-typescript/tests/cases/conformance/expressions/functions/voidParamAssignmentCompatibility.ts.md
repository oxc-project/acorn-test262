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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 26,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 26,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 22,
              "end": 26
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 27,
        "end": 33,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 29,
          "end": 33
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 53,
            "name": "gg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 53,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 43,
                "end": 53,
                "typeParameters": null,
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 60,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
        "name": "Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 108,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 83,
            "end": 106,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 89,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 90,
                "end": 98,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 98,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 97,
                    "end": 98,
                    "typeName": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 136,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 130,
                  "name": "Obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 152,
      "expression": {
        "type": "AssignmentExpression",
        "start": 138,
        "end": 151,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 138,
          "end": 140,
          "name": "gg",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 143,
          "end": 151,
          "object": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 151,
            "name": "method",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
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
