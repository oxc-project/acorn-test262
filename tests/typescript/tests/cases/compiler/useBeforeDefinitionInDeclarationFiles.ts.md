__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 311,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 164,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 164,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 38,
          "end": 164,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 42,
              "end": 106,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 59,
                "end": 96,
                "object": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 68,
                  "decorators": [],
                  "name": "Namespace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 96,
                  "decorators": [],
                  "name": "locallyExportedCustomSymbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
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
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 109,
              "end": 162,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 117,
                "end": 152,
                "object": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 126,
                  "decorators": [],
                  "name": "Namespace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 152,
                  "decorators": [],
                  "name": "fullyExportedCustomSymbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 153,
                "end": 162,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 165,
      "end": 311,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 172,
        "end": 311,
        "id": {
          "type": "Identifier",
          "start": 182,
          "end": 191,
          "decorators": [],
          "name": "Namespace",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 192,
          "end": 311,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 196,
              "end": 252,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 203,
                "end": 252,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 209,
                    "end": 251,
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
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 255,
              "end": 309,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 262,
                "end": 309,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 268,
                    "end": 308,
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
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
