__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 26,
                        "end": 29
                      },
                      "start": 24,
                      "end": 29
                    },
                    "start": 18,
                    "end": 29
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PropertyKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 36,
                          "end": 47
                        },
                        "typeArguments": null,
                        "start": 36,
                        "end": 47
                      },
                      "start": 34,
                      "end": 47
                    },
                    "start": 31,
                    "end": 47
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "desc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PropertyDescriptor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 73
                        },
                        "typeArguments": null,
                        "start": 55,
                        "end": 73
                      },
                      "start": 53,
                      "end": 73
                    },
                    "start": 49,
                    "end": 73
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 78,
                    "end": 82
                  },
                  "start": 75,
                  "end": 82
                },
                "start": 17,
                "end": 82
              },
              "start": 15,
              "end": 82
            },
            "start": 12,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 82
        }
      ],
      "declare": true,
      "start": 0,
      "end": 83
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 93
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 104
                },
                "start": 100,
                "end": 104
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 121,
                "end": 124
              },
              "start": 119,
              "end": 124
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 100,
            "end": 125
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 135
                },
                "start": 131,
                "end": 135
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 159,
                "end": 162
              },
              "start": 157,
              "end": 162
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 131,
            "end": 163
          }
        ],
        "start": 94,
        "end": 165
      },
      "abstract": false,
      "declare": false,
      "start": 85,
      "end": 165
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 175
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 186
                },
                "start": 182,
                "end": 186
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "a",
              "start": 200,
              "end": 202
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 204,
                "end": 207
              },
              "start": 202,
              "end": 207
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 182,
            "end": 208
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 218
                },
                "start": 214,
                "end": 218
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "b",
              "start": 239,
              "end": 241
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 243,
                "end": 246
              },
              "start": 241,
              "end": 246
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 214,
            "end": 247
          }
        ],
        "start": 176,
        "end": 249
      },
      "abstract": false,
      "declare": false,
      "start": 167,
      "end": 249
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 249
}
```
