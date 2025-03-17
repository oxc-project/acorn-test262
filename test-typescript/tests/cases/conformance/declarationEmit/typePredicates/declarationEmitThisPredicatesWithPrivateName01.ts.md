__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 79,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 79,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 79,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 77,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 22,
                "end": 77,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 36,
                  "end": 77,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 46,
                      "end": 71,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 53,
                        "end": 70,
                        "operator": "instanceof",
                        "left": {
                          "type": "ThisExpression",
                          "start": 53,
                          "end": 57
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 69,
                          "end": 70,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 26,
                    "end": 35,
                    "asserts": false,
                    "parameterName": {
                      "type": "TSThisType",
                      "start": 26,
                      "end": 30
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 34,
                        "end": 35,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 35,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
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
      "type": "ClassDeclaration",
      "start": 81,
      "end": 102,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 102,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
