__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 83,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 82,
            "decorators": [],
            "name": "dec",
            "optional": false,
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
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 24,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 26,
                        "end": 29
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 31,
                    "end": 47,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
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
                          "decorators": [],
                          "name": "PropertyKey",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 49,
                    "end": 73,
                    "decorators": [],
                    "name": "desc",
                    "optional": false,
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
                          "decorators": [],
                          "name": "PropertyDescriptor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 165,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 165,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 100,
            "end": 125,
            "decorators": [
              {
                "type": "Decorator",
                "start": 100,
                "end": 104,
                "expression": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 104,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 131,
            "end": 163,
            "decorators": [
              {
                "type": "Decorator",
                "start": 131,
                "end": 135,
                "expression": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 135,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 249,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 175,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 249,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 182,
            "end": 208,
            "decorators": [
              {
                "type": "Decorator",
                "start": 182,
                "end": 186,
                "expression": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 186,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 200,
              "end": 202,
              "name": "a"
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 214,
            "end": 247,
            "decorators": [
              {
                "type": "Decorator",
                "start": 214,
                "end": 218,
                "expression": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 239,
              "end": 241,
              "name": "b"
            },
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
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
