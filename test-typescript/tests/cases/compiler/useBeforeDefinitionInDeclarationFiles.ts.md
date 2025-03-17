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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 164,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 37,
          "name": "ClassWithSymbols",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 38,
          "end": 164,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 42,
              "end": 106,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 59,
                "end": 96,
                "object": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 68,
                  "name": "Namespace",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 96,
                  "name": "locallyExportedCustomSymbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
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
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 109,
              "end": 162,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 117,
                "end": 152,
                "object": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 126,
                  "name": "Namespace",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 152,
                  "name": "fullyExportedCustomSymbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 153,
                "end": 162,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 155,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 157,
                    "end": 161
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "Namespace",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 209,
                    "end": 251,
                    "id": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 251,
                      "name": "locallyExportedCustomSymbol",
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
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 255,
              "end": 309,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 262,
                "end": 309,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 268,
                    "end": 308,
                    "id": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 308,
                      "name": "fullyExportedCustomSymbol",
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
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
