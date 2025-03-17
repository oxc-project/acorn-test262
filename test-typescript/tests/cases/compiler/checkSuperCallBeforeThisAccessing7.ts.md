__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 151,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 55,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 53,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 53,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 44,
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 36,
                      "end": 44,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 38,
                        "end": 44,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 40,
                          "end": 44,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 40,
                            "end": 44,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
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
        "start": 7,
        "end": 11,
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
      "start": 56,
      "end": 151,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 151,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
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
              "start": 98,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 149,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 111,
                    "end": 131,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 111,
                      "end": 130,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 118,
                          "end": 128,
                          "async": false,
                          "body": {
                            "type": "ThisExpression",
                            "start": 124,
                            "end": 128
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 111,
                        "end": 116
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
        "start": 62,
        "end": 67,
        "decorators": [],
        "name": "Super",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 76,
        "end": 80,
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
