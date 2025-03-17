__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 266,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "TSQualifiedName",
        "start": 15,
        "end": 23,
        "left": {
          "type": "TSQualifiedName",
          "start": 15,
          "end": 18,
          "left": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 19,
          "end": 23,
          "name": "Base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 74,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 30,
            "end": 72,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 37,
              "end": 72,
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "W",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 45,
                "end": 72,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 55,
                    "end": 66,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 57,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 57,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 59,
                        "end": 65
                      }
                    },
                    "accessibility": null
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 163,
      "id": {
        "type": "TSQualifiedName",
        "start": 82,
        "end": 90,
        "left": {
          "type": "TSQualifiedName",
          "start": 82,
          "end": 85,
          "left": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "Y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 86,
          "end": 90,
          "name": "base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 91,
        "end": 163,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 98,
            "end": 161,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 105,
              "end": 161,
              "id": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "name": "W",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 121,
                "end": 131,
                "object": {
                  "type": "MemberExpression",
                  "start": 121,
                  "end": 129,
                  "object": {
                    "type": "MemberExpression",
                    "start": 121,
                    "end": 124,
                    "object": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 129,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "name": "W",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 132,
                "end": 161,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 142,
                    "end": 155,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 146,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 148,
                        "end": 154
                      }
                    },
                    "accessibility": null
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 165,
      "end": 265,
      "id": {
        "type": "TSQualifiedName",
        "start": 172,
        "end": 182,
        "left": {
          "type": "TSQualifiedName",
          "start": 172,
          "end": 180,
          "left": {
            "type": "TSQualifiedName",
            "start": 172,
            "end": 175,
            "left": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "Y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "name": "base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 181,
          "end": 182,
          "name": "Z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 183,
        "end": 265,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 190,
            "end": 263,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 197,
              "end": 263,
              "id": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "name": "W",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 221,
                "end": 231,
                "object": {
                  "type": "MemberExpression",
                  "start": 221,
                  "end": 229,
                  "object": {
                    "type": "MemberExpression",
                    "start": 221,
                    "end": 224,
                    "object": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "name": "Y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 229,
                    "name": "base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "name": "W",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 232,
                "end": 263,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 242,
                    "end": 257,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 247,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 247,
                      "end": 256,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 249,
                        "end": 256
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 204,
                "end": 212,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 205,
                    "end": 211,
                    "name": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 211,
                      "name": "TValue",
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
