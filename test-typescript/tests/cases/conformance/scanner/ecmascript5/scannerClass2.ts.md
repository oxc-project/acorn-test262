__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 174,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 4,
      "end": 174,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 11,
        "end": 174,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 50,
          "end": 174,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 60,
              "end": 168,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 71,
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
                "start": 72,
                "end": 168,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 97,
                  "end": 168,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 112,
                      "end": 158,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 112,
                        "end": 157,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 112,
                          "end": 129,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 112,
                            "end": 116
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 117,
                            "end": 129,
                            "decorators": [],
                            "name": "_information",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 132,
                          "end": 157,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 132,
                            "end": 155,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 132,
                              "end": 143,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 132,
                                "end": 136
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 137,
                                "end": 143,
                                "decorators": [],
                                "name": "logger",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 155,
                              "decorators": [],
                              "name": "information",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 73,
                    "end": 95,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 95,
                      "decorators": [],
                      "name": "logger",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 86,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 88,
                          "end": 95,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 95,
                            "decorators": [],
                            "name": "ILogger",
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
          "start": 17,
          "end": 30,
          "decorators": [],
          "name": "LoggerAdapter",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 42,
            "end": 49,
            "expression": {
              "type": "Identifier",
              "start": 42,
              "end": 49,
              "decorators": [],
              "name": "ILogger",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
