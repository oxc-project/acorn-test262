__ESTREE_TEST__:PASS:
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
      "end": 156,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 45,
        "end": 156,
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
          "end": 156,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 62,
              "end": 154,
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
                "end": 154,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                                "type": "ThisExpression",
                                "start": 103,
                                "end": 107
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "SpreadElement",
                              "start": 115,
                              "end": 123,
                              "argument": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 123,
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
                          "start": 134,
                          "end": 149,
                          "typeName": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 149,
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
      "start": 158,
      "end": 213,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 165,
        "end": 213,
        "id": {
          "type": "Identifier",
          "start": 175,
          "end": 190,
          "name": "WizardStepProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 195,
                "end": 201,
                "name": "wizard",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
