__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
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
                  "type": "Identifier",
                  "start": 29,
                  "end": 43,
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 35,
                      "end": 43,
                      "params": [],
                      "returnType": {
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
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 148,
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
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 148,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 130,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 110,
                      "end": 129,
                      "arguments": [
                        {
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
