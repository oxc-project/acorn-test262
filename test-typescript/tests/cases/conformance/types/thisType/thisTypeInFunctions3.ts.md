__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 75,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 73,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "name": "check",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 30,
              "end": 73,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 62,
                  "name": "prop",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 57,
                      "end": 62,
                      "typeName": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 62,
                        "name": "TProp",
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
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 30,
                "end": 50,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 31,
                    "end": 49,
                    "name": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 36,
                      "name": "TProp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSThisType",
                      "start": 45,
                      "end": 49
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 65,
                  "end": 72
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 87,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 96,
        "end": 100,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 146,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 144,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 108,
              "end": 144,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 144,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 121,
                    "end": 138,
                    "expression": {
                      "type": "CallExpression",
                      "start": 121,
                      "end": 137,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 121,
                        "end": 131,
                        "object": {
                          "type": "ThisExpression",
                          "start": 121,
                          "end": 125
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 131,
                          "name": "check",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
