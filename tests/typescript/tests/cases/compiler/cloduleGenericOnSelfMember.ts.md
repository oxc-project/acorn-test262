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
        "name": "ServiceBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 17
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
              "start": 18,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 19
          }
        ],
        "start": 17,
        "end": 20
      },
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
              "name": "field",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
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
                  "start": 34,
                  "end": 35
                },
                "typeArguments": null,
                "start": 34,
                "end": 35
              },
              "start": 32,
              "end": 35
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
            "start": 27,
            "end": 36
          }
        ],
        "start": 21,
        "end": 38
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Service",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 52
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ServiceBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 72
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Service",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 87
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 92
              },
              "start": 80,
              "end": 92
            },
            "typeArguments": null,
            "start": 73,
            "end": 92
          }
        ],
        "start": 72,
        "end": 93
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 94,
        "end": 97
      },
      "abstract": false,
      "declare": false,
      "start": 39,
      "end": 97
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Service",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 115
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 139
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
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 156
                        },
                        "value": {
                          "type": "Literal",
                          "value": "1",
                          "raw": "\"1\"",
                          "start": 158,
                          "end": 161
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 152,
                        "end": 161
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 176
                        },
                        "value": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 178,
                          "end": 179
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 171,
                        "end": 179
                      }
                    ],
                    "start": 142,
                    "end": 185
                  },
                  "definite": false,
                  "start": 135,
                  "end": 185
                }
              ],
              "declare": false,
              "start": 129,
              "end": 186
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 122,
            "end": 186
          }
        ],
        "start": 116,
        "end": 188
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 98,
      "end": 188
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 188
}
```
