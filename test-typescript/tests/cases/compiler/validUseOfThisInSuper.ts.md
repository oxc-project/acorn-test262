__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 298,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 52,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 52,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 29,
                  "end": 43,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 43,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 39,
                        "end": 43,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 43,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
        "start": 6,
        "end": 10,
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
      "start": 55,
      "end": 298,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 298,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 296,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 296,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 296,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 132,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 110,
                      "end": 131,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 116,
                          "end": 130,
                          "arguments": [],
                          "callee": {
                            "type": "ArrowFunctionExpression",
                            "start": 117,
                            "end": 127,
                            "async": false,
                            "body": {
                              "type": "ThisExpression",
                              "start": 123,
                              "end": 127
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 110,
                        "end": 115
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
        "start": 61,
        "end": 66,
        "decorators": [],
        "name": "Super",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 75,
        "end": 79,
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
