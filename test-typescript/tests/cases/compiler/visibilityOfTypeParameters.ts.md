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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 89,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "name": "MyClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 89,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 27,
              "end": 87,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 37,
                "end": 45,
                "name": "myMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 45,
                "end": 87,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 49,
                    "end": 55,
                    "name": "val",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 54,
                        "end": 55,
                        "typeName": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 55,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "name": "val",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 45,
                  "end": 48,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 46,
                      "end": 47,
                      "name": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 47,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 59,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 59,
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "protected"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
