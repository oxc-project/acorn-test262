__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 57,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 57,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 42,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 42,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 37,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 31,
                      "end": 37
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 42,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 55,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 59,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 156,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 74,
            "end": 154,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 81,
              "end": 154,
              "id": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 103,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 95,
                      "end": 103,
                      "exprName": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 154,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 118,
                    "end": 143,
                    "argument": {
                      "type": "NewExpression",
                      "start": 125,
                      "end": 142,
                      "callee": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 130,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 130,
                        "end": 140,
                        "params": [
                          {
                            "type": "TSTypeQuery",
                            "start": 131,
                            "end": 139,
                            "exprName": {
                              "type": "Identifier",
                              "start": 138,
                              "end": 139,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      },
                      "arguments": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
