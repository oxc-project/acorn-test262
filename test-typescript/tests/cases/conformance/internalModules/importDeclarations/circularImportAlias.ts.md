__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 243,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 22,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 116,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 69,
              "end": 116,
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 85,
                "end": 88,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 89,
                "end": 116,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 99,
                    "end": 110,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 101,
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
                      "start": 101,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 103,
                        "end": 109
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
      "start": 120,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 150,
                "end": 166,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 152,
                    "end": 164,
                    "static": false,
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
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
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
      "type": "VariableDeclaration",
      "start": 195,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 218,
            "name": "c",
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
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
