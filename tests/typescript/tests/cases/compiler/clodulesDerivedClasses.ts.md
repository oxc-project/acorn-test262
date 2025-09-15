__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "start": 18,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
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
            "start": 18,
            "end": 29
          }
        ],
        "start": 12,
        "end": 31
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 48
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Utils",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 54
        },
        "start": 43,
        "end": 54
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "convert",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 84
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Shape",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 93
                  },
                  "typeArguments": null,
                  "start": 88,
                  "end": 93
                },
                "start": 86,
                "end": 93
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 103,
                      "end": 107
                    },
                    "start": 96,
                    "end": 108
                  }
                ],
                "start": 94,
                "end": 109
              },
              "expression": false,
              "start": 68,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 61,
            "end": 109
          }
        ],
        "start": 55,
        "end": 111
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 33,
      "end": 111
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Path",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
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
              "start": 144,
              "end": 148
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 150,
                "end": 156
              },
              "start": 148,
              "end": 156
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
            "start": 144,
            "end": 157
          }
        ],
        "start": 138,
        "end": 160
      },
      "abstract": false,
      "declare": false,
      "start": 113,
      "end": 160
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Path",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 176
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Utils",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 182
        },
        "start": 172,
        "end": 182
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "convert2",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 213
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Path",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 221
                  },
                  "typeArguments": null,
                  "start": 217,
                  "end": 221
                },
                "start": 215,
                "end": 221
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 239,
                      "end": 243
                    },
                    "start": 232,
                    "end": 244
                  }
                ],
                "start": 222,
                "end": 250
              },
              "expression": false,
              "start": 196,
              "end": 250
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 189,
            "end": 250
          }
        ],
        "start": 183,
        "end": 252
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 162,
      "end": 252
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 255
}
```
