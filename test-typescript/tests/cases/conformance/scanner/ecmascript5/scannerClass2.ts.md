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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 11,
        "end": 174,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 30,
          "name": "LoggerAdapter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 50,
          "end": 174,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 60,
              "end": 168,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 71,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 72,
                "end": 168,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "name": "logger",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 86,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 88,
                          "end": 95,
                          "typeName": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 95,
                            "name": "ILogger",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 97,
                  "end": 168,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 112,
                      "end": 158,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 112,
                        "end": 157,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 112,
                          "end": 129,
                          "object": {
                            "type": "ThisExpression",
                            "start": 112,
                            "end": 116
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 117,
                            "end": 129,
                            "name": "_information",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 132,
                          "end": 157,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 132,
                            "end": 155,
                            "object": {
                              "type": "MemberExpression",
                              "start": 132,
                              "end": 143,
                              "object": {
                                "type": "ThisExpression",
                                "start": 132,
                                "end": 136
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 137,
                                "end": 143,
                                "name": "logger",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 155,
                              "name": "information",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        }
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
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 42,
            "end": 49,
            "expression": {
              "type": "Identifier",
              "start": 42,
              "end": 49,
              "name": "ILogger",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
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
