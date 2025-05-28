__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 298,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 72,
        "decorators": [],
        "name": "IThing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 72,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 74,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "T",
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
        "start": 76,
        "end": 93,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 87,
              "decorators": [],
              "name": "owner",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 95,
      "end": 143,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 143,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 102,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 105,
            "end": 143,
            "properties": [
              {
                "type": "Property",
                "start": 111,
                "end": 140,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 114,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 116,
                  "end": 140,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 116,
                    "end": 118,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 140,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 128,
                      "decorators": [],
                      "name": "IThing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 128,
                      "end": 140,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 129,
                          "end": 139,
                          "exprName": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 139,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 193,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 152,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 155,
            "end": 193,
            "properties": [
              {
                "type": "Property",
                "start": 161,
                "end": 190,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
                  "decorators": [],
                  "name": "two",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 166,
                  "end": 190,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 166,
                    "end": 168,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 190,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 178,
                      "decorators": [],
                      "name": "IThing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 178,
                      "end": 190,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 179,
                          "end": 189,
                          "exprName": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 189,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 245,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 202,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 205,
            "end": 245,
            "properties": [
              {
                "type": "Property",
                "start": 211,
                "end": 242,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 216,
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 218,
                  "end": 242,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 218,
                    "end": 220,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 224,
                    "end": 242,
                    "typeName": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 230,
                      "decorators": [],
                      "name": "IThing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 230,
                      "end": 242,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 231,
                          "end": 241,
                          "exprName": {
                            "type": "Identifier",
                            "start": 238,
                            "end": 241,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 298,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 256,
            "decorators": [],
            "name": "qwe",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 259,
            "end": 298,
            "properties": [
              {
                "type": "Property",
                "start": 265,
                "end": 295,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 269,
                  "decorators": [],
                  "name": "four",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 271,
                  "end": 295,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 271,
                    "end": 273,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 277,
                    "end": 295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 283,
                      "decorators": [],
                      "name": "IThing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 283,
                      "end": 295,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 284,
                          "end": 294,
                          "exprName": {
                            "type": "Identifier",
                            "start": 291,
                            "end": 294,
                            "decorators": [],
                            "name": "qwe",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
