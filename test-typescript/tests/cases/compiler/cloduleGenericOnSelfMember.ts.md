__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 17,
        "name": "ServiceBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "name": "field",
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
              "start": 32,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "T",
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
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 52,
        "name": "Service",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 61,
        "end": 72,
        "name": "ServiceBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 97,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 72,
        "end": 93,
        "params": [
          {
            "type": "TSTypeQuery",
            "start": 73,
            "end": 92,
            "exprName": {
              "type": "TSQualifiedName",
              "start": 80,
              "end": 92,
              "left": {
                "type": "Identifier",
                "start": 80,
                "end": 87,
                "name": "Service",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 88,
                "end": 92,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 98,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 115,
        "name": "Service",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 116,
        "end": 188,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 122,
            "end": 186,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 129,
              "end": 186,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 135,
                  "end": 185,
                  "id": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 139,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 142,
                    "end": 185,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 152,
                        "end": 161,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 156,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 158,
                          "end": 161,
                          "value": "1",
                          "raw": "\"1\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 171,
                        "end": 179,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 176,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 178,
                          "end": 179,
                          "value": 5,
                          "raw": "5"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
