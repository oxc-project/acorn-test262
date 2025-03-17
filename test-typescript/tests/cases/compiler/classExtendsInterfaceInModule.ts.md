__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 65,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 35,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 20,
              "end": 35,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "name": "I1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 33,
                "end": 35,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 38,
            "end": 63,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 45,
              "end": 63,
              "id": {
                "type": "Identifier",
                "start": 55,
                "end": 57,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 57,
                "end": 60,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 58,
                    "end": 59,
                    "name": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
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
              "body": {
                "type": "TSInterfaceBody",
                "start": 61,
                "end": 63,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 83,
        "end": 87,
        "object": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 85,
          "end": 87,
          "name": "I1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 90,
        "body": []
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
      "start": 91,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 99,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 111,
        "end": 115,
        "object": {
          "type": "Identifier",
          "start": 111,
          "end": 112,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 113,
          "end": 115,
          "name": "I2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 121,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 99,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 115,
        "end": 118,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 116,
            "end": 117,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 123,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 133,
        "name": "Mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 134,
        "end": 191,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 137,
            "end": 189,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 144,
              "end": 189,
              "id": {
                "type": "Identifier",
                "start": 154,
                "end": 160,
                "name": "Nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 161,
                "end": 189,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 165,
                    "end": 186,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 172,
                      "end": 186,
                      "id": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 183,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 184,
                        "end": 186,
                        "body": []
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
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
      "type": "ClassDeclaration",
      "start": 193,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 209,
        "end": 221,
        "object": {
          "type": "MemberExpression",
          "start": 209,
          "end": 219,
          "object": {
            "type": "Identifier",
            "start": 209,
            "end": 212,
            "name": "Mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 213,
            "end": 219,
            "name": "Nested",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 220,
          "end": 221,
          "name": "I",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 224,
        "body": []
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
