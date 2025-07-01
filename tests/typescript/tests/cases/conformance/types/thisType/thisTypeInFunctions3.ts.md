__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "check",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TProp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 36
                    },
                    "constraint": {
                      "type": "TSThisType",
                      "start": 45,
                      "end": 49
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 31,
                    "end": 49
                  }
                ],
                "start": 30,
                "end": 50
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 57,
                        "end": 62
                      },
                      "typeArguments": null,
                      "start": 57,
                      "end": 62
                    },
                    "start": 55,
                    "end": 62
                  },
                  "start": 51,
                  "end": 62
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 65,
                  "end": 72
                },
                "start": 63,
                "end": 72
              },
              "body": null,
              "expression": false,
              "start": 30,
              "end": 73
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 73
          }
        ],
        "start": 19,
        "end": 75
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 87
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 100
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 121,
                          "end": 125
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "check",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 131
                        },
                        "optional": false,
                        "computed": false,
                        "start": 121,
                        "end": 131
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        }
                      ],
                      "optional": false,
                      "start": 121,
                      "end": 137
                    },
                    "directive": null,
                    "start": 121,
                    "end": 138
                  }
                ],
                "start": 111,
                "end": 144
              },
              "expression": false,
              "start": 108,
              "end": 144
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 107,
            "end": 144
          }
        ],
        "start": 101,
        "end": 146
      },
      "abstract": false,
      "declare": false,
      "start": 77,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
