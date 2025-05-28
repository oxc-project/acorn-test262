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
      "end": 156,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 45,
        "end": 156,
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
          "end": 156,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 62,
              "end": 154,
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
                "end": 154,
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
                                "type": "ThisExpression",
                                "start": 103,
                                "end": 107
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
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
                          "start": 134,
                          "end": 149,
                          "typeName": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 149,
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
          "decorators": [],
          "name": "WizardStepProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "wizard",
                "optional": false,
                "typeAnnotation": null
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
