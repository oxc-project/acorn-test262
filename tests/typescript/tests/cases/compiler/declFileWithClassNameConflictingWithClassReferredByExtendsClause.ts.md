__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
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
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 19,
          "end": 23,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 45,
                "end": 72,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 55,
                    "end": 66,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 57,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 86,
          "end": 90,
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 129,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 132,
                "end": 161,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 142,
                    "end": 155,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 146,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 181,
          "end": 182,
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "TValue",
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
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 229,
                    "decorators": [],
                    "name": "base",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 232,
                "end": 263,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 242,
                    "end": 257,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 247,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
