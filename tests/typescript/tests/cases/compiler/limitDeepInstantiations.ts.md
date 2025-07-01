__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 30
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
              "start": 31,
              "end": 32
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "true",
                "raw": "\"true\"",
                "start": 41,
                "end": 47
              },
              "start": 41,
              "end": 47
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 31,
            "end": 47
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 49,
            "end": 50
          }
        ],
        "start": 30,
        "end": 51
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "true",
                "raw": "\"true\"",
                "start": 56,
                "end": 62
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 67
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
                          "start": 68,
                          "end": 69
                        },
                        "typeArguments": null,
                        "start": 68,
                        "end": 69
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 74
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
                                "start": 75,
                                "end": 76
                              },
                              "typeArguments": null,
                              "start": 75,
                              "end": 76
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 78,
                                "end": 79
                              },
                              "typeArguments": null,
                              "start": 78,
                              "end": 79
                            }
                          ],
                          "start": 74,
                          "end": 80
                        },
                        "start": 71,
                        "end": 80
                      }
                    ],
                    "start": 67,
                    "end": 81
                  },
                  "start": 64,
                  "end": 81
                },
                "start": 62,
                "end": 81
              },
              "accessibility": null,
              "static": false,
              "start": 56,
              "end": 81
            }
          ],
          "start": 54,
          "end": 83
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "typeArguments": null,
          "start": 84,
          "end": 85
        },
        "start": 54,
        "end": 86
      },
      "declare": false,
      "start": 22,
      "end": 87
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 99
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "true",
                        "raw": "\"true\"",
                        "start": 100,
                        "end": 106
                      },
                      "start": 100,
                      "end": 106
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 108,
                      "end": 110
                    }
                  ],
                  "start": 99,
                  "end": 111
                },
                "start": 96,
                "end": 111
              },
              "start": 94,
              "end": 111
            },
            "start": 92,
            "end": 111
          },
          "init": null,
          "definite": false,
          "start": 92,
          "end": 111
        }
      ],
      "declare": false,
      "start": 88,
      "end": 112
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 124
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "false",
                        "raw": "\"false\"",
                        "start": 125,
                        "end": 132
                      },
                      "start": 125,
                      "end": 132
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 134,
                      "end": 136
                    }
                  ],
                  "start": 124,
                  "end": 137
                },
                "start": 121,
                "end": 137
              },
              "start": 119,
              "end": 137
            },
            "start": 117,
            "end": 137
          },
          "init": null,
          "definite": false,
          "start": 117,
          "end": 137
        }
      ],
      "declare": false,
      "start": 113,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 138
}
```
