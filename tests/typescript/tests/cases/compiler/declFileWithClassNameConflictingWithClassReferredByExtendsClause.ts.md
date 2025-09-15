__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "start": 18,
          "end": 21
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 26
        },
        "start": 18,
        "end": 26
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 47
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 60
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 62,
                        "end": 68
                      },
                      "start": 60,
                      "end": 68
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 58,
                    "end": 69
                  }
                ],
                "start": 48,
                "end": 75
              },
              "abstract": false,
              "declare": false,
              "start": 40,
              "end": 75
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 33,
            "end": 75
          }
        ],
        "start": 27,
        "end": 77
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 77
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 91
          },
          "start": 88,
          "end": 91
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 96
        },
        "start": 88,
        "end": 96
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 128
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 130
                    },
                    "optional": false,
                    "computed": false,
                    "start": 127,
                    "end": 130
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 135
                  },
                  "optional": false,
                  "computed": false,
                  "start": 127,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "optional": false,
                "computed": false,
                "start": 127,
                "end": 137
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 152
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 154,
                        "end": 160
                      },
                      "start": 152,
                      "end": 160
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 148,
                    "end": 161
                  }
                ],
                "start": 138,
                "end": 167
              },
              "abstract": false,
              "declare": false,
              "start": 111,
              "end": 167
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 104,
            "end": 167
          }
        ],
        "start": 97,
        "end": 169
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 78,
      "end": 169
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
            },
            "start": 181,
            "end": 184
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 189
          },
          "start": 181,
          "end": 189
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 190,
          "end": 191
        },
        "start": 181,
        "end": 191
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 220
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 214,
                    "end": 220
                  }
                ],
                "start": 213,
                "end": 221
              },
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 231
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 233
                    },
                    "optional": false,
                    "computed": false,
                    "start": 230,
                    "end": 233
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 238
                  },
                  "optional": false,
                  "computed": false,
                  "start": 230,
                  "end": 238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "optional": false,
                "computed": false,
                "start": 230,
                "end": 240
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 256
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 258,
                        "end": 265
                      },
                      "start": 256,
                      "end": 265
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 251,
                    "end": 266
                  }
                ],
                "start": 241,
                "end": 272
              },
              "abstract": false,
              "declare": false,
              "start": 206,
              "end": 272
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 199,
            "end": 272
          }
        ],
        "start": 192,
        "end": 274
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 171,
      "end": 274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 274
}
```
