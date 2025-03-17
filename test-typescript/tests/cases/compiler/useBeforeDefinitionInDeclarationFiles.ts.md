__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 312,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 164,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 164,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 38,
          "end": 164,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 42,
              "end": 106,
              "accessibility": "public",
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "MemberExpression",
                "start": 59,
                "end": 96,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 68,
                  "decorators": [],
                  "name": "Namespace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 96,
                  "decorators": [],
                  "name": "locallyExportedCustomSymbol",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 97,
                "end": 105,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 99,
                  "end": 105
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 109,
              "end": 162,
              "accessibility": "public",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 117,
                "end": 152,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 126,
                  "decorators": [],
                  "name": "Namespace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 152,
                  "decorators": [],
                  "name": "fullyExportedCustomSymbol",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 153,
                "end": 162,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 155,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 157,
                    "end": 161
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 37,
          "decorators": [],
          "name": "ClassWithSymbols",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 165,
      "end": 311,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 172,
        "end": 311,
        "body": {
          "type": "TSModuleBlock",
          "start": 192,
          "end": 311,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 196,
              "end": 252,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 203,
                "end": 252,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 209,
                    "end": 251,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 251,
                      "decorators": [],
                      "name": "locallyExportedCustomSymbol",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 236,
                        "end": 251,
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "start": 238,
                          "end": 251,
                          "operator": "unique",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 245,
                            "end": 251
                          }
                        }
                      }
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 255,
              "end": 309,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 262,
                "end": 309,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 268,
                    "end": 308,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 308,
                      "decorators": [],
                      "name": "fullyExportedCustomSymbol",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 293,
                        "end": 308,
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "start": 295,
                          "end": 308,
                          "operator": "unique",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 302,
                            "end": 308
                          }
                        }
                      }
                    },
                    "init": null
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
          "start": 182,
          "end": 191,
          "decorators": [],
          "name": "Namespace",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
