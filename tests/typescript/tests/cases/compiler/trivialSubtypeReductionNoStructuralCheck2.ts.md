__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WizardStepProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 36
                },
                "typeArguments": null,
                "start": 21,
                "end": 36
              },
              "start": 19,
              "end": 36
            },
            "start": 14,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 36
        }
      ],
      "declare": true,
      "start": 0,
      "end": 37
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Wizard",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 57
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "steps",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 71
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "wizard",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 95,
                                "end": 101
                              },
                              "value": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "ThisExpression",
                                  "start": 103,
                                  "end": 107
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Wizard",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 111,
                                    "end": 117
                                  },
                                  "typeArguments": null,
                                  "start": 111,
                                  "end": 117
                                },
                                "start": 103,
                                "end": 117
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 95,
                              "end": 117
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 128,
                                "end": 133
                              },
                              "start": 125,
                              "end": 133
                            }
                          ],
                          "start": 87,
                          "end": 140
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WizardStepProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 159
                          },
                          "typeArguments": null,
                          "start": 144,
                          "end": 159
                        },
                        "start": 87,
                        "end": 159
                      },
                      "start": 80,
                      "end": 160
                    }
                  ],
                  "start": 74,
                  "end": 164
                },
                "expression": false,
                "start": 71,
                "end": 164
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 62,
              "end": 164
            }
          ],
          "start": 58,
          "end": 166
        },
        "abstract": false,
        "declare": false,
        "start": 45,
        "end": 166
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 38,
      "end": 166
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WizardStepProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 200
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "wizard",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 211
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Wizard",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 220
                  },
                  "typeArguments": null,
                  "start": 214,
                  "end": 220
                },
                "start": 212,
                "end": 220
              },
              "accessibility": null,
              "static": false,
              "start": 205,
              "end": 221
            }
          ],
          "start": 201,
          "end": 223
        },
        "declare": false,
        "start": 175,
        "end": 223
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 168,
      "end": 223
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 223
}
```
