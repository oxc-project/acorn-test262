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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 36,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 36,
                  "decorators": [],
                  "name": "WizardStepProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 166,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 45,
        "end": 166,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 58,
          "end": 166,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 62,
              "end": 164,
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
              "value": {
                "type": "FunctionExpression",
                "start": 71,
                "end": 164,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 95,
                                "end": 101,
                                "decorators": [],
                                "name": "wizard",
                                "optional": false,
                                "typeAnnotation": null
                              },
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 111,
                                    "end": 117,
                                    "decorators": [],
                                    "name": "Wizard",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 159,
                            "decorators": [],
                            "name": "WizardStepProps",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
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
      "start": 168,
      "end": 223,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 175,
        "end": 223,
        "id": {
          "type": "Identifier",
          "start": 185,
          "end": 200,
          "decorators": [],
          "name": "WizardStepProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 201,
          "end": 223,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 205,
              "end": 221,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 205,
                "end": 211,
                "decorators": [],
                "name": "wizard",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 212,
                "end": 220,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 220,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 220,
                    "decorators": [],
                    "name": "Wizard",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
