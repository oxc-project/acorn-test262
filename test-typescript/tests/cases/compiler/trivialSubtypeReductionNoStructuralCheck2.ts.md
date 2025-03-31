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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 36,
            "name": "props",
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
                  "name": "WizardStepProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 57,
          "name": "Wizard",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 58,
          "end": 166,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 62,
              "end": 164,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 66,
                "end": 71,
                "name": "steps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 71,
                "end": 164,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 95,
                                "end": 101,
                                "name": "wizard",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                    "name": "Wizard",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "kind": "init",
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
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                            "name": "WizardStepProps",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
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
          "name": "WizardStepProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "wizard",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "Wizard",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
