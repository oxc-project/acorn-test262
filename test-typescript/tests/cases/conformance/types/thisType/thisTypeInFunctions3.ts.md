__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 75,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "decorators": [],
              "name": "check",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 30,
              "end": 73,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 62,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 57,
                      "end": 62,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 62,
                        "decorators": [],
                        "name": "TProp",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 65,
                  "end": 72
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 30,
                "end": 50,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 31,
                    "end": 49,
                    "const": false,
                    "constraint": {
                      "type": "TSThisType",
                      "start": 45,
                      "end": 49
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 36,
                      "decorators": [],
                      "name": "TProp",
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
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 146,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 144,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
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
              "start": 108,
              "end": 144,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 144,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 121,
                    "end": 138,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 121,
                      "end": 137,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 121,
                        "end": 131,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 121,
                          "end": 125
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 131,
                          "decorators": [],
                          "name": "check",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 87,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 96,
        "end": 100,
        "decorators": [],
        "name": "Base",
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
