__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 89,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 89,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 27,
              "end": 87,
              "accessibility": "protected",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 37,
                "end": 45,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 45,
                "end": 87,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 60,
                  "end": 87,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 70,
                      "end": 81,
                      "argument": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 80,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 49,
                    "end": 55,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 54,
                        "end": 55,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 55,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 59,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 59,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 45,
                  "end": 48,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 46,
                      "end": 47,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 47,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "decorators": [],
          "name": "MyClass",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
