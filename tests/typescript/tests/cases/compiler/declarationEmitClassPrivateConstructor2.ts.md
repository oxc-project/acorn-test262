__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 210,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 26,
        "decorators": [],
        "name": "PrivateInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 27,
        "end": 30,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 122,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 39,
        "end": 122,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 59,
          "decorators": [],
          "name": "ExportedClass1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 60,
          "end": 122,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 66,
              "end": 120,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 74,
                "end": 85,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 85,
                "end": 120,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 86,
                    "end": 115,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 115,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 97,
                        "end": 115,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 99,
                          "end": 115,
                          "typeName": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 115,
                            "decorators": [],
                            "name": "PrivateInterface",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 117,
                  "end": 120,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
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
      "start": 125,
      "end": 210,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 132,
        "end": 210,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 138,
          "end": 152,
          "decorators": [],
          "name": "ExportedClass2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 153,
          "end": 210,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 159,
              "end": 208,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 169,
                "end": 180,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 180,
                "end": 208,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 181,
                    "end": 203,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 185,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 187,
                        "end": 203,
                        "typeName": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 203,
                          "decorators": [],
                          "name": "PrivateInterface",
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
                  "start": 205,
                  "end": 208,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "protected"
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
