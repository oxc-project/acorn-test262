__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 82,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 82,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 17,
                "end": 82,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 18,
                    "end": 29,
                    "name": "target",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 24,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 26,
                        "end": 29
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 31,
                    "end": 47,
                    "name": "key",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 36,
                        "end": 47,
                        "typeName": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 47,
                          "name": "PropertyKey",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 49,
                    "end": 73,
                    "name": "desc",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 73,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 55,
                        "end": 73,
                        "typeName": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 73,
                          "name": "PropertyDescriptor",
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
                  "start": 75,
                  "end": 82,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 78,
                    "end": 82
                  }
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 165,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 100,
            "end": 125,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 100,
                "end": 104,
                "expression": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 104,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "definite": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 124,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 121,
                "end": 124
              }
            },
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 131,
            "end": 163,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 131,
                "end": 135,
                "expression": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 135,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "definite": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 162,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 159,
                "end": 162
              }
            },
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 175,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 249,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 182,
            "end": 208,
            "key": {
              "type": "PrivateIdentifier",
              "start": 200,
              "end": 202,
              "name": "a"
            },
            "value": null,
            "computed": false,
            "static": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 182,
                "end": 186,
                "expression": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 186,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "definite": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 207,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 204,
                "end": 207
              }
            },
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 214,
            "end": 247,
            "key": {
              "type": "PrivateIdentifier",
              "start": 239,
              "end": 241,
              "name": "b"
            },
            "value": null,
            "computed": false,
            "static": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 214,
                "end": 218,
                "expression": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "definite": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 246,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 243,
                "end": 246
              }
            },
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
