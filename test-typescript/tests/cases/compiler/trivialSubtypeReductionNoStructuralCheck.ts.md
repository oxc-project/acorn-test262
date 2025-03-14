trivialSubtypeReductionNoStructuralCheck.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 36,
                  "decorators": [],
                  "name": "WizardStepProps",
                  "optional": false
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
      "end": 156,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 45,
        "end": 156,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 58,
          "end": 156,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 62,
              "end": 154,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 66,
                "end": 71,
                "decorators": [],
                "name": "steps",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 71,
                "end": 154,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 74,
                  "end": 154,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 80,
                      "end": 150,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 87,
                        "end": 149,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 87,
                          "end": 130,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 95,
                              "end": 107,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 95,
                                "end": 101,
                                "decorators": [],
                                "name": "wizard",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ThisExpression",
                                "start": 103,
                                "end": 107
                              }
                            },
                            {
                              "type": "SpreadElement",
                              "start": 115,
                              "end": 123,
                              "argument": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 123,
                                "decorators": [],
                                "name": "props",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 134,
                          "end": 149,
                          "typeName": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 149,
                            "decorators": [],
                            "name": "WizardStepProps",
                            "optional": false
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
                "params": []
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
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 158,
      "end": 213,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 165,
        "end": 213,
        "body": {
          "type": "TSInterfaceBody",
          "start": 191,
          "end": 213,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 195,
              "end": 211,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 195,
                "end": 201,
                "decorators": [],
                "name": "wizard",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 202,
                "end": 210,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 204,
                  "end": 210,
                  "typeName": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 210,
                    "decorators": [],
                    "name": "Wizard",
                    "optional": false
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
          "start": 175,
          "end": 190,
          "decorators": [],
          "name": "WizardStepProps",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
