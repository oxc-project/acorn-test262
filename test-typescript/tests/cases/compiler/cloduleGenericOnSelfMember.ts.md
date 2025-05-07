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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 17,
        "decorators": [],
        "name": "ServiceBase",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 97,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 97,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 52,
        "decorators": [],
        "name": "Service",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 61,
        "end": 72,
        "decorators": [],
        "name": "ServiceBase",
        "optional": false,
        "typeAnnotation": null
      },
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
                "decorators": [],
                "name": "Service",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 88,
                "end": 92,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 98,
      "end": 188,
      "body": {
        "type": "TSModuleBlock",
        "start": 116,
        "end": 188,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 122,
            "end": 186,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 129,
              "end": 186,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 135,
                  "end": 185,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 139,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 156,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 158,
                          "end": 161,
                          "raw": "\"1\"",
                          "value": "1",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 171,
                        "end": 179,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 176,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 178,
                          "end": 179,
                          "raw": "5",
                          "value": 5,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 115,
        "decorators": [],
        "name": "Service",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
