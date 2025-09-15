__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
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
                    "name": "decorator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 45
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 54,
                              "end": 60
                            },
                            "typeArguments": null,
                            "start": 54,
                            "end": 60
                          },
                          "start": 52,
                          "end": 60
                        },
                        "start": 46,
                        "end": 60
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 67,
                            "end": 73
                          },
                          "start": 65,
                          "end": 73
                        },
                        "start": 62,
                        "end": 73
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 76,
                        "end": 80
                      },
                      "start": 74,
                      "end": 80
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 81,
                      "end": 84
                    },
                    "expression": false,
                    "start": 45,
                    "end": 84
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 36,
                  "end": 84
                }
              ],
              "start": 26,
              "end": 90
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 90
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 125,
                          "end": 130
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "decorator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 125,
                        "end": 140
                      },
                      "start": 123,
                      "end": 141
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 156
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
                      "body": [],
                      "start": 159,
                      "end": 162
                    },
                    "expression": false,
                    "start": 156,
                    "end": 162
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 123,
                  "end": 162
                }
              ],
              "start": 113,
              "end": 168
            },
            "abstract": false,
            "declare": false,
            "start": 95,
            "end": 168
          }
        ],
        "start": 12,
        "end": 170
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
