__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LoggerAdapter",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 30
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILogger",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 49
            },
            "typeArguments": null,
            "start": 42,
            "end": 49
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 71
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "logger",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ILogger",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 88,
                            "end": 95
                          },
                          "typeArguments": null,
                          "start": 88,
                          "end": 95
                        },
                        "start": 86,
                        "end": 95
                      },
                      "start": 80,
                      "end": 95
                    },
                    "readonly": false,
                    "static": false,
                    "start": 73,
                    "end": 95
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 112,
                            "end": 116
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_information",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 117,
                            "end": 129
                          },
                          "optional": false,
                          "computed": false,
                          "start": 112,
                          "end": 129
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 132,
                                "end": 136
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "logger",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 137,
                                "end": 143
                              },
                              "optional": false,
                              "computed": false,
                              "start": 132,
                              "end": 143
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "information",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 155
                            },
                            "optional": false,
                            "computed": false,
                            "start": 132,
                            "end": 155
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 132,
                          "end": 157
                        },
                        "start": 112,
                        "end": 157
                      },
                      "directive": null,
                      "start": 112,
                      "end": 158
                    }
                  ],
                  "start": 97,
                  "end": 168
                },
                "expression": false,
                "start": 72,
                "end": 168
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 60,
              "end": 168
            }
          ],
          "start": 50,
          "end": 174
        },
        "abstract": false,
        "declare": false,
        "start": 11,
        "end": 174
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 174
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 174
}
```
