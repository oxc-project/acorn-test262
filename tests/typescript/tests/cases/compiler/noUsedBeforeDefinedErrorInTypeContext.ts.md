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
        "name": "IThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 72
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
              "start": 73,
              "end": 74
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 73,
            "end": 74
          }
        ],
        "start": 72,
        "end": 75
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
              "name": "owner",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
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
                  "start": 89,
                  "end": 90
                },
                "typeArguments": null,
                "start": 89,
                "end": 90
              },
              "start": 87,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 91
          }
        ],
        "start": 76,
        "end": 93
      },
      "declare": false,
      "start": 56,
      "end": 93
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 102
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 114
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 116,
                    "end": 118
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 128
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 136,
                            "end": 139
                          },
                          "typeArguments": null,
                          "start": 129,
                          "end": 139
                        }
                      ],
                      "start": 128,
                      "end": 140
                    },
                    "start": 122,
                    "end": 140
                  },
                  "start": 116,
                  "end": 140
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 111,
                "end": 140
              }
            ],
            "start": 105,
            "end": 143
          },
          "definite": false,
          "start": 99,
          "end": 143
        }
      ],
      "declare": false,
      "start": 95,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 152
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "two",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 164
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 166,
                    "end": 168
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 178
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 186,
                            "end": 189
                          },
                          "typeArguments": null,
                          "start": 179,
                          "end": 189
                        }
                      ],
                      "start": 178,
                      "end": 190
                    },
                    "start": 172,
                    "end": 190
                  },
                  "start": 166,
                  "end": 190
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 161,
                "end": 190
              }
            ],
            "start": 155,
            "end": 193
          },
          "definite": false,
          "start": 149,
          "end": 193
        }
      ],
      "declare": false,
      "start": 145,
      "end": 193
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 202
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 216
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 218,
                    "end": 220
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 230
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 238,
                            "end": 241
                          },
                          "typeArguments": null,
                          "start": 231,
                          "end": 241
                        }
                      ],
                      "start": 230,
                      "end": 242
                    },
                    "start": 224,
                    "end": 242
                  },
                  "start": 218,
                  "end": 242
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 211,
                "end": 242
              }
            ],
            "start": 205,
            "end": 245
          },
          "definite": false,
          "start": 199,
          "end": 245
        }
      ],
      "declare": false,
      "start": 195,
      "end": 245
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "qwe",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 256
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "four",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 269
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 271,
                    "end": 273
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 283
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "qwe",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 291,
                            "end": 294
                          },
                          "typeArguments": null,
                          "start": 284,
                          "end": 294
                        }
                      ],
                      "start": 283,
                      "end": 295
                    },
                    "start": 277,
                    "end": 295
                  },
                  "start": 271,
                  "end": 295
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 265,
                "end": 295
              }
            ],
            "start": 259,
            "end": 298
          },
          "definite": false,
          "start": 253,
          "end": 298
        }
      ],
      "declare": false,
      "start": 247,
      "end": 298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 298
}
```
