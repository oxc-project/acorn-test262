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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 79,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 79,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 77,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 22,
                "end": 77,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "left": {
                          "type": "ThisExpression",
                          "start": 53,
                          "end": 57
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "start": 69,
                          "end": 70,
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 26,
                    "end": 35,
                    "parameterName": {
                      "type": "TSThisType",
                      "start": 26,
                      "end": 30
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 34,
                        "end": 35,
                        "typeName": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 35,
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
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
      "type": "ClassDeclaration",
      "start": 81,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 102,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
