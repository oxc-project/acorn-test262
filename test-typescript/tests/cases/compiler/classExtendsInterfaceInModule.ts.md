__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 224,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 65,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 65,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 35,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 20,
              "end": 35,
              "body": {
                "type": "TSInterfaceBody",
                "start": 33,
                "end": 35,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 38,
            "end": 63,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 45,
              "end": 63,
              "body": {
                "type": "TSInterfaceBody",
                "start": 61,
                "end": 63,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 55,
                "end": 57,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 57,
                "end": 60,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 58,
                    "end": 59,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
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
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 90,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 90,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 83,
        "end": 87,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 85,
          "end": 87,
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 121,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 121,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 99,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 111,
        "end": 115,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 111,
          "end": 112,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 113,
          "end": 115,
          "decorators": [],
          "name": "I2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 115,
        "end": 118,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 116,
            "end": 117,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 99,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
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
      "type": "TSModuleDeclaration",
      "start": 123,
      "end": 191,
      "body": {
        "type": "TSModuleBlock",
        "start": 134,
        "end": 191,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 137,
            "end": 189,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 144,
              "end": 189,
              "body": {
                "type": "TSModuleBlock",
                "start": 161,
                "end": 189,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 165,
                    "end": 186,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 172,
                      "end": 186,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 184,
                        "end": 186,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 183,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 154,
                "end": 160,
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "namespace"
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
        "start": 130,
        "end": 133,
        "decorators": [],
        "name": "Mod",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 193,
      "end": 224,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 224,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 209,
        "end": 221,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 209,
          "end": 219,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 209,
            "end": 212,
            "decorators": [],
            "name": "Mod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 213,
            "end": 219,
            "decorators": [],
            "name": "Nested",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 220,
          "end": 221,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
