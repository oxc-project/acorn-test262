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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
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
        "body": {
          "type": "ClassBody",
          "start": 50,
          "end": 174,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 60,
              "end": 168,
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
              "value": {
                "type": "FunctionExpression",
                "start": 72,
                "end": 168,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 95,
                            "decorators": [],
                            "name": "ILogger",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
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
                            "decorators": [],
                            "name": "_information",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                                "decorators": [],
                                "name": "logger",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 155,
                              "decorators": [],
                              "name": "information",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
