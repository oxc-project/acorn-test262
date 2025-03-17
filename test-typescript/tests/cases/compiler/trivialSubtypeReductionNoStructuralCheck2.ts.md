__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 36,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 21,
                "end": 36,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 36,
                  "decorators": [],
                  "name": "WizardStepProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 166,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 45,
        "end": 166,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 58,
          "end": 166,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 62,
              "end": 164,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 66,
                "end": 71,
                "decorators": [],
                "name": "steps",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 71,
                "end": 164,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 74,
                  "end": 164,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 80,
                      "end": 160,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 87,
                        "end": 159,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 87,
                          "end": 140,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 95,
                              "end": 117,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 95,
                                "end": 101,
                                "decorators": [],
                                "name": "wizard",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "TSAsExpression",
                                "start": 103,
                                "end": 117,
                                "expression": {
                                  "type": "ThisExpression",
                                  "start": 103,
                                  "end": 107
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 111,
                                  "end": 117,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 111,
                                    "end": 117,
                                    "decorators": [],
                                    "name": "Wizard",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "SpreadElement",
                              "start": 125,
                              "end": 133,
                              "argument": {
                                "type": "Identifier",
                                "start": 128,
                                "end": 133,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 144,
                          "end": 159,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 159,
                            "decorators": [],
                            "name": "WizardStepProps",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 57,
          "decorators": [],
          "name": "Wizard",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 168,
      "end": 223,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 175,
        "end": 223,
        "body": {
          "type": "TSInterfaceBody",
          "start": 201,
          "end": 223,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 205,
              "end": 221,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 205,
                "end": 211,
                "decorators": [],
                "name": "wizard",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 212,
                "end": 220,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 220,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 220,
                    "decorators": [],
                    "name": "Wizard",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 185,
          "end": 200,
          "decorators": [],
          "name": "WizardStepProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
