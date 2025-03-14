declarationEmitTypeParamMergedWithPrivate.ts
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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 131,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 131,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 27,
              "end": 71,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 71,
                "async": false,
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
                        "raw": "\"\"",
                        "value": ""
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 77,
              "end": 129,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 88,
                "decorators": [],
                "name": "test",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 88,
                "end": 129,
                "async": false,
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
                          "raw": "null",
                          "value": null
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
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
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
          "end": 17,
          "decorators": [],
          "name": "Test",
          "optional": false
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 17,
          "end": 20,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 18,
              "end": 19,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
