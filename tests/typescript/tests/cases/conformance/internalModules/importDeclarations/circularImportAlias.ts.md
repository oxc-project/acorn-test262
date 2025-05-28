__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 242,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 22,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 31,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 37,
            "end": 57,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 44,
              "end": 57,
              "id": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 116,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 69,
              "end": 116,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "start": 85,
                "end": 88,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "C",
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
                "start": 89,
                "end": 116,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 99,
                    "end": 110,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 101,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 103,
                        "end": 109
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
      "start": 120,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 129,
        "end": 193,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 135,
            "end": 166,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 142,
              "end": 166,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 150,
                "end": 166,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 152,
                    "end": 164,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 156,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 164,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 158,
                        "end": 164
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 171,
            "end": 191,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 178,
              "end": 191,
              "id": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
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
      "type": "VariableDeclaration",
      "start": 195,
      "end": 219,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 218,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 218,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 202,
                "end": 218,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 204,
                    "end": 216,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 208,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 208,
                      "end": 216,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 210,
                        "end": 216
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 240,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 228,
            "end": 239,
            "callee": {
              "type": "MemberExpression",
              "start": 232,
              "end": 237,
              "object": {
                "type": "MemberExpression",
                "start": 232,
                "end": 235,
                "object": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 233,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
