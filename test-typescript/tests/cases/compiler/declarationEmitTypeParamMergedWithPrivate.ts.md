__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 131,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 131,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "name": "Test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 131,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 27,
              "end": 71,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 71,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 46,
                  "end": 71,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 56,
                      "end": 65,
                      "argument": {
                        "type": "Literal",
                        "start": 62,
                        "end": 64,
                        "value": "",
                        "raw": "\"\""
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 44,
                    "end": 45,
                    "typeName": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
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
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 77,
              "end": 129,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 88,
                "name": "test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 88,
                "end": 129,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 94,
                  "end": 129,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 104,
                      "end": 123,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 111,
                        "end": 122,
                        "expression": {
                          "type": "Literal",
                          "start": 111,
                          "end": 115,
                          "value": null,
                          "raw": "null"
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 119,
                          "end": 122
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 92,
                    "end": 93,
                    "typeName": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 93,
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
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 17,
          "end": 20,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 18,
              "end": 19,
              "name": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
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
